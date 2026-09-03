import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { ProjectItem } from '../../landing.models';

@Component({
  selector: 'mezzo-portfolio-gallery',
  standalone: true,
  imports: [CommonModule, SectionEyebrowComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-gallery.component.html',
  styleUrl: './portfolio-gallery.component.scss',
})
export class PortfolioGalleryComponent {
  protected readonly projects: readonly ProjectItem[] = [
    {
      image: 'https://loremflickr.com/800/600/warehouse,industrial?lock=301',
      title: 'Nave Industrial Norte',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Nave industrial',
      description: 'Nave de 4.200 m² con andenes de carga y patios de maniobra para logística pesada.',
    },
    {
      image: 'https://loremflickr.com/800/600/logistics,industrial?lock=302',
      title: 'Parque Logístico Ruta 40',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Parque logístico',
      description: 'Predio de 12 hectáreas subdividido en lotes con infraestructura vial y de servicios completa.',
    },
    {
      image: 'https://loremflickr.com/800/600/warehouse,logistics?lock=303',
      title: 'Centro de Distribución Sur',
      location: 'Provincia de Buenos Aires',
      category: 'Centro de distribución',
      description: 'Depósito clase A diseñado para operación cross-dock con acceso directo a rutas nacionales.',
    },
    {
      image: 'assets/proyectos/obra-escolar-montaje-paneles.jpg',
      title: 'Ampliación de Edificio Escolar',
      location: 'Provincia de Buenos Aires',
      category: 'Obra institucional · real',
      description: 'Ampliación de un establecimiento educativo con sistema constructivo Inbuild, en ejecución.',
    },
    {
      image: 'https://loremflickr.com/800/600/suburb,house?lock=1305',
      title: 'Barrio Cerrado Las Acacias',
      location: 'Provincia de Buenos Aires',
      category: 'Desarrollo residencial',
      description: 'Urbanización cerrada con sistemas constructivos industrializados y espacios verdes comunes.',
    },
    {
      image: 'https://loremflickr.com/800/600/factory,energy?lock=306',
      title: 'Planta Bioenergía La Corona',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Planta industrial',
      description: 'Instalación de eficiencia energética con sistemas de gestión de agua y energía térmica.',
    },
  ];

  protected trackByTitle(_: number, item: ProjectItem) {
    return item.title;
  }
}
