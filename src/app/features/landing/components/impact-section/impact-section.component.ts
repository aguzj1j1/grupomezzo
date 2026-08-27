import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ImpactItem } from '../../landing.models';

@Component({
  selector: 'mezzo-impact-section',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './impact-section.component.html',
  styleUrl: './impact-section.component.scss',
})
export class ImpactSectionComponent {
  protected readonly items: readonly ImpactItem[] = [
    {
      tag: 'Gestión Grupo Mezzo',
      title: 'Intermediación estratégica',
      description: 'Articulamos activamente entre el sector privado y el sector público en cada etapa del proyecto.',
    },
    {
      tag: 'Integración',
      title: 'Mecanismos de financiamiento',
      description: 'Herramientas de gestión para normativas urbanas y esquemas de financiamiento del desarrollo.',
    },
    {
      tag: 'Comunidad',
      title: 'Centros de oportunidades',
      description: 'Programas de desarrollo comunitario que integran cada proyecto a su entorno social y productivo.',
    },
    {
      tag: 'Territorio',
      title: 'Infraestructura pública',
      description: 'Mejoras en conectividad, servicios y equipamiento urbano que trascienden el perímetro del proyecto.',
    },
  ];
}
