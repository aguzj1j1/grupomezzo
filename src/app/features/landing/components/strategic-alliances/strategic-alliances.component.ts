import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { AllianceItem } from '../../landing.models';

@Component({
  selector: 'mezzo-strategic-alliances',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './strategic-alliances.component.html',
  styleUrl: './strategic-alliances.component.scss',
})
export class StrategicAlliancesComponent {
  /**
   * Wordmarks tipográficos — el cliente no entregó los isotipos reales de sus
   * aliados. Reemplazar `name` por una imagen del logo real (`assets/alliances/`)
   * en cuanto el cliente los provea.
   */
  protected readonly alliances: readonly AllianceItem[] = [
    { name: 'Efi Group', description: 'Aliado estratégico' },
    { name: 'Mercado Casa', description: 'Aliado estratégico' },
  ];
}
