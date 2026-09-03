import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { LogoMarkComponent } from '../../../../shared/components/logo-mark/logo-mark.component';

interface NavLink {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'mezzo-site-header',
  standalone: true,
  imports: [LogoMarkComponent, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent implements OnInit, OnDestroy {
  protected readonly isMenuOpen = signal(false);
  protected readonly activeHref = signal<string>('');

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

  private sectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.setUpScrollSpy();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  /**
   * Resalta en la nav el link de la sección visible en pantalla, vía
   * IntersectionObserver sobre una franja angosta cerca del centro del
   * viewport — evita depender de scroll listeners manuales.
   */
  private setUpScrollSpy(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = this.navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (!sections.length) {
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          this.activeHref.set(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    for (const section of sections) {
      this.sectionObserver.observe(section);
    }
  }
}
