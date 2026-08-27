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
  /**
   * Placeholder — reemplazar por el email real de contacto del cliente
   * antes de publicar.
   */
  protected readonly contactEmail = 'contacto@grupomezzo.com.ar';
  protected readonly instagramUrl = 'https://www.instagram.com/grupo.mezzo/';
}
