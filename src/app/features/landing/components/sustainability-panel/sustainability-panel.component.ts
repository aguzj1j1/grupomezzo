import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'mezzo-sustainability-panel',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sustainability-panel.component.html',
  styleUrl: './sustainability-panel.component.scss',
})
export class SustainabilityPanelComponent {
  protected readonly points: readonly string[] = [
    'Diseño de infraestructura lista para sistemas de gestión de energía (SGEn) y autogeneración distribuida.',
    'Planes hídricos y de saneamiento pensados desde el proyecto maestro, no como corrección posterior.',
    'Predios concebidos con criterios de economía circular en el manejo de residuos.',
    'Compromiso ambiental documentado en cada estudio de impacto, calidad de aire y monitoreo de agua.',
  ];
}
