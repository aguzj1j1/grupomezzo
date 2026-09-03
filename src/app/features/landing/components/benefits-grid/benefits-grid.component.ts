import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { Benefit } from '../../landing.models';

@Component({
  selector: 'mezzo-benefits-grid',
  standalone: true,
  imports: [SectionEyebrowComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './benefits-grid.component.html',
  styleUrl: './benefits-grid.component.scss',
})
export class BenefitsGridComponent {
  protected readonly benefits: readonly Benefit[] = [
    {
      title: 'Infraestructura adaptada',
      description:
        'Servicios de calidad —agua, electricidad, telecomunicaciones— diseñados para industrias modernas.',
    },
    {
      title: 'Acceso estratégico',
      description:
        'Ubicación cercana a rutas nacionales y provinciales para optimizar la logística y el transporte.',
    },
    {
      title: 'Costos competitivos',
      description: 'Ahorros significativos en servicios básicos y acceso a beneficios fiscales locales.',
    },
    {
      title: 'Seguridad operativa',
      description:
        'Espacios controlados con vigilancia permanente, garantizando tranquilidad para las operaciones.',
    },
    {
      title: 'Entornos colaborativos',
      description: 'Oportunidades para generar alianzas e innovar junto a otras empresas del sector.',
    },
    {
      title: 'Facilidad de expansión',
      description: 'Espacios modulares y flexibles que permiten el crecimiento de la empresa sin limitaciones.',
    },
  ];
}
