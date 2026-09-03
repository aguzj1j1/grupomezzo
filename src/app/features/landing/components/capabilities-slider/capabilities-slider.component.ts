import { ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { CapabilitySlide } from '../../landing.models';

@Component({
  selector: 'mezzo-capabilities-slider',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './capabilities-slider.component.html',
  styleUrl: './capabilities-slider.component.scss',
})
export class CapabilitiesSliderComponent {
  @ViewChild('track') protected track!: ElementRef<HTMLElement>;

  protected readonly activeIndex = signal(0);

  protected readonly slides: readonly CapabilitySlide[] = [
    {
      num: '01',
      title: 'Análisis de la oportunidad',
      description:
        'Relevamos el predio y su entorno: aptitud del suelo, accesos, servicios disponibles y potencial de desarrollo industrial.',
    },
    {
      num: '02',
      title: 'Análisis de la viabilidad legal',
      description:
        'Evaluamos si el predio elegido es susceptible de aprobación de cambio de zonificación ante el municipio y la Dirección Provincial de Ordenamiento Urbano Territorial (DPOUT).',
    },
    {
      num: '03',
      title: 'Diseño de solución técnica',
      description:
        'Elaboramos el masterplan y la zonificación del parque: lotes, trama circulatoria, cesiones y franjas de protección.',
    },
    {
      num: '04',
      title: 'Estructuración financiera',
      description:
        'Diseñamos la ingeniería financiera del proyecto: estructura de costos, capital propio y de terceros, y cronograma de inversión.',
    },
    {
      num: '05',
      title: 'Negociación con bancos y socios',
      description:
        'Gestionamos la relación con bancos, inversores y socios estratégicos para financiar cada etapa del desarrollo.',
    },
    {
      num: '06',
      title: 'Inversión de recursos',
      description: 'Ponemos en marcha los recursos —propios y de terceros— necesarios para ejecutar el proyecto.',
    },
    {
      num: '07',
      title: 'Tramitación de licencias',
      description:
        'Gestionamos el trámite de habilitación de punta a punta ante el municipio y la DPOUT, en cualquier municipio de la Provincia de Buenos Aires: proyecto de Ordenanza de creación de zona industrial, estudios territoriales y ambientales, y certificados de factibilidad de los servicios esenciales —agua, energía eléctrica, pavimento y desagües pluviales.',
    },
    {
      num: '08',
      title: 'Diseño y acompañamiento de proyectos',
      description: 'Acompañamos el desarrollo del proyecto ejecutivo y su implementación en obra, de punta a punta.',
    },
    {
      num: '09',
      title: 'Inversión especializada',
      description: 'Canalizamos inversión especializada hacia cada fase del proyecto, según su perfil de riesgo y retorno.',
    },
    {
      num: '10',
      title: 'Gestión de activos',
      description: 'Administramos el activo una vez en marcha, para sostener su rendimiento en el tiempo.',
    },
    {
      num: '11',
      title: 'Comercialización',
      description: 'Comercializamos lotes, naves y unidades del desarrollo, cerrando el ciclo de punta a punta.',
    },
  ];

  protected scrollToIndex(index: number): void {
    const clamped = Math.max(0, Math.min(index, this.slides.length - 1));
    const el = this.track.nativeElement;
    const slide = el.children.item(clamped) as HTMLElement | null;
    slide?.scrollIntoView({ behavior: this.scrollBehavior(), inline: 'start', block: 'nearest' });
    this.activeIndex.set(clamped);
  }

  protected scrollPrev(): void {
    this.scrollToIndex(this.activeIndex() - 1);
  }

  protected scrollNext(): void {
    this.scrollToIndex(this.activeIndex() + 1);
  }

  protected onTrackScroll(): void {
    const el = this.track.nativeElement;
    const slideWidth = (el.children.item(0) as HTMLElement | null)?.offsetWidth || 1;
    const gap = 20;
    const index = Math.round(el.scrollLeft / (slideWidth + gap));
    this.activeIndex.set(Math.max(0, Math.min(index, this.slides.length - 1)));
  }

  private scrollBehavior(): ScrollBehavior {
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return prefersReducedMotion ? 'auto' : 'smooth';
  }
}
