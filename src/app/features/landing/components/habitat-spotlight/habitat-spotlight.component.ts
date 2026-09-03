import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';

interface SpotlightStat {
  readonly value: string;
  readonly label: string;
}

/**
 * Banner destacado, ubicado justo después del Hero, para darle a Hábitat +
 * Inbuild System el primer lugar de visibilidad en la página —el cliente
 * pidió resaltar más estas dos líneas sin tener que scrollear hasta la
 * sección "Sistema Inbuild". Los tres stats son los mismos números reales
 * ya usados ahí (impactStats de InbuildSystemComponent), no se inventan.
 */
@Component({
  selector: 'mezzo-habitat-spotlight',
  standalone: true,
  imports: [SectionEyebrowComponent, ScrollRevealDirective, CountUpDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './habitat-spotlight.component.html',
  styleUrl: './habitat-spotlight.component.scss',
})
export class HabitatSpotlightComponent {
  protected readonly stats: readonly SpotlightStat[] = [
    { value: '60%', label: 'de la obra, construido en planta' },
    { value: '- 36%', label: 'de ahorro en el costo total' },
    { value: '- 30%', label: 'menos plazo de obra' },
  ];
}
