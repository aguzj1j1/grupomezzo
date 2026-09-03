import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoMarkComponent } from '../../../../shared/components/logo-mark/logo-mark.component';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'mezzo-site-footer',
  standalone: true,
  imports: [LogoMarkComponent, SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  // Datos de contacto reales, tomados de la presentación institucional del cliente
  // (Grupo Mezzo.pdf).
  protected readonly contactEmail = 'contacto.grupomezzo@gmail.com';
  protected readonly contactPhone = '+54 9 11 3209-2020';
  protected readonly instagramUrl = 'https://www.instagram.com/grupo.mezzo/';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/grupo-mezzo';

  protected get contactPhoneHref(): string {
    return `tel:${this.contactPhone.replace(/[^+\d]/g, '')}`;
  }
}
