import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Anima un valor tipo "60%", "+15 años", "- 36%", "90.000 m²" contando
 * desde 0 hasta el número real cuando el elemento entra en viewport.
 * Detecta automáticamente el prefijo (signo, símbolo) y el sufijo
 * (unidad) alrededor del primer número que encuentra en el texto, así
 * que no hace falta separar el dato en partes en el componente — se le
 * pasa el string tal cual ya se muestra (`[mezzoCountUp]="stat.value"`).
 *
 * Si el texto no tiene ningún dígito (p. ej. "±0" es un caso límite que
 * sí matchea), no hace nada y deja el texto estático.
 * Respeta `prefers-reduced-motion`: muestra el valor final directo.
 */
@Directive({
  selector: '[mezzoCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('mezzoCountUp') value = '';

  private observer?: IntersectionObserver;
  private rafId?: number;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    const match = this.value.match(/^([^\d]*)([\d.,]+)([^\d]*)$/);

    if (!match) {
      this.renderer.setProperty(el, 'textContent', this.value);
      return;
    }

    const [, prefix, numberPart, suffix] = match;
    const target = Number(numberPart.replace(/\./g, '').replace(',', '.'));

    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !Number.isFinite(target) || typeof IntersectionObserver === 'undefined') {
      this.renderer.setProperty(el, 'textContent', this.value);
      return;
    }

    this.renderer.setProperty(el, 'textContent', `${prefix}0${suffix}`);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animate(prefix, target, suffix);
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(el);
  }

  private animate(prefix: string, target: number, suffix: string): void {
    const el = this.el.nativeElement;
    const duration = 1100;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(target * easeOutCubic(progress));
      this.renderer.setProperty(el, 'textContent', `${prefix}${current.toLocaleString('es-AR')}${suffix}`);

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      } else {
        // Frame final: el string original tal cual, sin reformatear —
        // evita cualquier diferencia de redondeo/formato con el dato real.
        this.renderer.setProperty(el, 'textContent', this.value);
      }
    };

    this.rafId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
