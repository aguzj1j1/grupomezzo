import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { AllianceItem } from '../../landing.models';

@Component({
  selector: 'mezzo-strategic-alliances',
  standalone: true,
  imports: [SectionEyebrowComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './strategic-alliances.component.html',
  styleUrl: './strategic-alliances.component.scss',
})
export class StrategicAlliancesComponent {
  /**
   * Mercado Casa: isotipo real, tomado del favicon público de mercadocasa.com.ar
   * (SVG "M-casa", Verde Vivo #2A8B4E — pensado por su propio estudio de marca
   * para uso como watermark/aplicación con el wordmark visible al lado).
   * Efi Group: sin logo provisto todavía — wordmark tipográfico como placeholder,
   * reemplazar por `logo` en `assets/alliances/` en cuanto el cliente lo pase.
   */
  protected readonly alliances: readonly AllianceItem[] = [
    { name: 'Efi Group', description: 'Aliado estratégico' },
    {
      name: 'Mercado Casa',
      description: 'Aliado estratégico',
      logo: 'assets/alliances/mercado-casa-isotipo.svg',
      logoAlt: 'Isotipo de Mercado Casa',
    },
  ];
}
