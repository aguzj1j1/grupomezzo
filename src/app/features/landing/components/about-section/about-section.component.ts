import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'mezzo-about-section',
  standalone: true,
  imports: [SectionEyebrowComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  protected readonly pillars: readonly string[] = [
    'Trayectoria consolidada: antecedentes concretos en desarrollo industrial, hábitat e infraestructura.',
    'Gestión Grupo Mezzo: intermediación real entre el sector privado y el sector público.',
    'Sistemas constructivos de vanguardia, con estándares de calidad garantizados por contrato.',
    'Un mismo equipo, un mismo interlocutor, en cada etapa del proyecto — B2B y B2C.',
  ];
}
