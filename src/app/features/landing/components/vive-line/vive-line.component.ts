import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface ViveModel {
  readonly size: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly rooms: string;
  readonly bathrooms: string;
  readonly exteriorImage: string;
  readonly planImage: string;
  readonly render3dImage: string;
  /** Precio de lista Obra Gris habitable (+ IVA) — solo cargado para 28/38/48 por ahora. */
  readonly priceObraGris?: string;
}

interface CommonFeature {
  readonly title: string;
  readonly description: string;
}

interface PricingTier {
  readonly title: string;
  readonly description: string;
  readonly priceFrom: string;
}

interface FinancingFact {
  readonly value: string;
  readonly label: string;
}

/**
 * Línea Vive — vivienda social de InBuild System, en 6 tamaños progresivos
 * (28 a 61 m²). Contenido extraído tal cual de las 6 fichas comerciales
 * entregadas por el cliente ("Grupo Mezzo Vive 28/38/48/51/57/61.pdf"):
 * descripciones, ambientes, planos, renders 3D, las 3 modalidades de
 * contratación con sus precios por m² y la financiación en pesos vía
 * Banco Hipotecario. Es la misma lógica de "la casa crece con vos" que
 * ilustran las fichas: se empieza por el modelo más chico y se va
 * ampliando sin perder lo ya construido.
 */
@Component({
  selector: 'mezzo-vive-line',
  standalone: true,
  imports: [SectionEyebrowComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vive-line.component.html',
  styleUrl: './vive-line.component.scss',
})
export class ViveLineComponent {
  protected readonly ladder: readonly string[] = ['28', '38', '48', '51', '57', '61'];

  protected readonly models: readonly ViveModel[] = [
    {
      size: '28',
      title: 'Vive 28',
      tagline: 'Tu primer paso a la casa propia.',
      description:
        '28 m² pensados para dejar de alquilar y empezar a construir lo que es tuyo. Una casa de verdad, lista para mudarte, con el sistema constructivo InBuild.',
      rooms: 'Ambiente integrado — cocina, comedor y living',
      bathrooms: '1 baño completo',
      exteriorImage: 'assets/vive/vive-28-exterior.jpg',
      planImage: 'assets/vive/vive-28-plano.png',
      render3dImage: 'assets/vive/vive-28-3d.jpg',
      priceObraGris: '$ 30.184.000',
    },
    {
      size: '38',
      title: 'Vive 38',
      tagline: 'El primer paso, con lugar para crecer.',
      description:
        '38 m² con un dormitorio para dar el salto a tu primera casa propia. Lista para mudarte y empezar a construir patrimonio, con el sistema constructivo InBuild.',
      rooms: '1 dormitorio + living comedor y cocina',
      bathrooms: '1 baño completo',
      exteriorImage: 'assets/vive/vive-38-exterior.jpg',
      planImage: 'assets/vive/vive-38-plano.png',
      render3dImage: 'assets/vive/vive-38-3d.jpg',
      priceObraGris: '$ 40.964.000',
    },
    {
      size: '48',
      title: 'Vive 48',
      tagline: 'La casa de la familia que crece.',
      description:
        '48 m² con dos dormitorios, pensados para la familia que crece. Una casa de verdad, lista para mudarte, con la certeza de un precio cerrado y entrega rápida.',
      rooms: '2 dormitorios + living comedor y cocina',
      bathrooms: '1 baño completo',
      exteriorImage: 'assets/vive/vive-48-exterior.jpg',
      planImage: 'assets/vive/vive-48-plano.png',
      render3dImage: 'assets/vive/vive-48-3d.jpg',
      priceObraGris: '$ 51.744.000',
    },
    {
      size: '51',
      title: 'Vive 51',
      tagline: 'Espacio real para toda la familia.',
      description:
        '51 m² con tres dormitorios: lugar para toda la familia, con la certeza de un precio cerrado al firmar y entrega en tiempo récord. Tu casa propia, con el sistema InBuild.',
      rooms: '3 dormitorios + living comedor y cocina',
      bathrooms: '1 baño completo',
      exteriorImage: 'assets/vive/vive-51-exterior.jpg',
      planImage: 'assets/vive/vive-51-plano.png',
      render3dImage: 'assets/vive/vive-51-3d.jpg',
    },
    {
      size: '57',
      title: 'Vive 57',
      tagline: 'Para instalarte y quedarte.',
      description:
        '57 m² con tres dormitorios y un living comedor generoso. La casa para instalarte y quedarte, con un precio cerrado al firmar y el sistema constructivo InBuild.',
      rooms: '3 dormitorios + living comedor y cocina',
      bathrooms: '1 baño completo',
      exteriorImage: 'assets/vive/vive-57-exterior.jpg',
      planImage: 'assets/vive/vive-57-plano.png',
      render3dImage: 'assets/vive/vive-57-3d.jpg',
      priceObraGris: '$ 61.446.000',
    },
    {
      size: '61',
      title: 'Vive 61',
      tagline: 'La más completa de la Línea Vive.',
      description:
        '61 m² con tres dormitorios y dos baños: la casa más completa de la Línea Vive, lista para tu familia. Precio cerrado, entrega rápida y el sistema constructivo InBuild.',
      rooms: '3 dormitorios + living comedor y cocina',
      bathrooms: '2 baños completos',
      exteriorImage: 'assets/vive/vive-61-exterior.jpg',
      planImage: 'assets/vive/vive-61-plano.png',
      render3dImage: 'assets/vive/vive-61-3d.jpg',
      priceObraGris: '$ 65.758.000',
    },
  ];

  // Estas dos fotos de interior son las mismas en las 6 fichas del cliente
  // (cocina/living y baño tipo) — se muestran una sola vez para toda la línea.
  protected readonly interiorPhotos = {
    kitchen: 'assets/vive/vive-interior-cocina.jpg',
    bathroom: 'assets/vive/vive-interior-bano.jpg',
  };

  // "Datos del modelo" — idénticos en las 6 fichas, comunes a toda la línea.
  protected readonly commonFeatures: readonly CommonFeature[] = [
    {
      title: 'Entrega en menos de 3 meses',
      description: 'Desde la firma del contrato. Un plazo garantizado, no una estimación.',
    },
    {
      title: 'Aísla como pocas',
      description:
        'Más que una pared de ladrillo de un metro. Confort térmico y acústico todo el año.',
    },
    {
      title: 'Precio cerrado al firmar',
      description: 'Lo que firmás es lo que pagás. Sin ajustes sorpresa durante la obra.',
    },
  ];

  // Página "Cómo la hacés tuya" — 3 modalidades de contratación, con precio
  // desde por m², igual en las 6 fichas.
  protected readonly pricingTiers: readonly PricingTier[] = [
    {
      title: 'Kit de autoconstrucción',
      description:
        'Te entregamos los paneles y te capacitamos para armarla. Bajás el costo de mano de obra.',
      priceFrom: '457',
    },
    {
      title: 'Obra Gris',
      description:
        'La casa estructurada y revestida. Vos terminás los detalles finales a tu ritmo.',
      priceFrom: '669',
    },
    {
      title: 'Llave en mano',
      description: 'Lista para mudarte. Nos ocupamos de todo, de principio a fin.',
      priceFrom: '1200',
    },
  ];

  protected readonly financingFacts: readonly FinancingFact[] = [
    { value: '30%', label: 'Anticipo desde' },
    { value: '12 a 72', label: 'Cuotas fijas, en meses' },
    { value: 'Tu ingreso real', label: 'Cuota calculada sobre tu situación' },
  ];
}
