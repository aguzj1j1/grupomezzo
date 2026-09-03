import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Revela el elemento con un fade + desplazamiento sutil cuando entra en
 * viewport, vía IntersectionObserver. No depende de change detection —
 * manipula el DOM directo con Renderer2, así que funciona igual con
 * ChangeDetectionStrategy.OnPush en todos los componentes de la landing.
 *
 * Uso: `<div mezzoReveal>` o, para escalonar una lista, `<div mezzoReveal
 * [revealDelay]="i * 70">` dentro de un @for.
 *
 * Respeta `prefers-reduced-motion`: si el usuario lo pide, el elemento
 * queda visible de entrada, sin animar.
 */
@Directive({
  selector: '[mezzoReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(el, 'reveal-visible');
      return;
    }

    this.renderer.addClass(el, 'reveal');
    this.renderer.setStyle(el, 'transition-delay', `${this.revealDelay}ms`);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'reveal-visible');
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
