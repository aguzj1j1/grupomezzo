import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LogoMarkComponent } from '../../../../shared/components/logo-mark/logo-mark.component';

interface NavLink {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'mezzo-site-header',
  standalone: true,
  imports: [LogoMarkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks: readonly NavLink[] = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Capacidades', href: '#capacidades' },
    { label: 'Inbuild', href: '#sistema-inbuild' },
    { label: 'Sostenibilidad', href: '#sostenibilidad' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Articulación', href: '#articulacion' },
    { label: 'Alianzas', href: '#alianzas' },
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
