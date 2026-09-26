import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { ProjectItem } from '../../landing.models';

// Placeholder local para los proyectos ilustrativos — antes se usaba
// loremflickr.com, que dejó de responder (401) y rompía las fotos en
// producción. Un SVG propio no depende de ningún servicio externo.
const ILLUSTRATIVE_PLACEHOLDER = 'assets/proyectos/placeholder-ilustrativo.svg';

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
      image: ILLUSTRATIVE_PLACEHOLDER,
      title: 'Nave Industrial Norte',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Nave industrial',
      description: 'Nave de 4.200 m² con andenes de carga y patios de maniobra para logística pesada.',
    },
    {
      image: ILLUSTRATIVE_PLACEHOLDER,
      title: 'Parque Logístico Ruta 40',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Parque logístico',
      description: 'Predio de 12 hectáreas subdividido en lotes con infraestructura vial y de servicios completa.',
    },
    {
      image: ILLUSTRATIVE_PLACEHOLDER,
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
      image: ILLUSTRATIVE_PLACEHOLDER,
      title: 'Barrio Cerrado Las Acacias',
      location: 'Provincia de Buenos Aires',
      category: 'Desarrollo residencial',
      description: 'Urbanización cerrada con sistemas constructivos industrializados y espacios verdes comunes.',
    },
    {
      image: ILLUSTRATIVE_PLACEHOLDER,
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
