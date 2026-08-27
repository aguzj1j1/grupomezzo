import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';

interface SpecRow {
  readonly label: string;
  readonly value: string;
}

interface FeatureCard {
  readonly title: string;
  readonly description: string;
}

interface ComparisonRow {
  readonly label: string;
  readonly traditional: string;
  readonly steel: string;
  readonly wood: string;
  readonly inbuild: string;
}

interface StatItem {
  readonly value: string;
  readonly label: string;
}

/**
 * Deep-dive de la tecnología Inbuild System —contenido técnico y comercial
 * extraído del Dossier Técnico IB-DT-001 (2026), páginas 3 a 8: ficha del
 * panel, instalaciones integradas, ingeniería de uniones y montaje,
 * comparativo de tecnologías, performance/status legal y capacidad
 * industrial. Amplía en profundidad el ítem "Innovación Constructiva" de
 * la Línea de acción 03 (Hábitat y Soluciones de Vivienda).
 */
@Component({
  selector: 'mezzo-inbuild-system',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inbuild-system.component.html',
  styleUrl: './inbuild-system.component.scss',
})
export class InbuildSystemComponent {
  // Página 3 — Ficha técnica del panel
  protected readonly specs: readonly SpecRow[] = [
    { label: 'Núcleo', value: 'Poliuretano proyectado de alta densidad · 140 mm (también 70 y 100 mm)' },
    { label: 'Resistencia térmica', value: 'R 6,41 m²·K/W · U 0,156 W/m²K' },
    { label: 'Estructura', value: 'Chapa galvanizada G18 plegada en perfil C' },
    { label: 'Placas', value: 'Placa estructural APA 9,5 mm ambas caras — borato de zinc (ignífuga · antiplagas)' },
    { label: 'Terminación interior', value: 'Placa de yeso 9 mm — el aislante final, en todos los paneles' },
    { label: 'Instalaciones', value: 'Sanitaria, eléctrica, cloacal, aire acondicionado y gas — integradas en el núcleo, de fábrica' },
    { label: 'Montaje', value: 'Tornillos autoperforantes sobre rieles guía · 100% en seco' },
    { label: 'Peso', value: '≈ 38 kg/m² de pared · panel completo ≈ 80 kg' },
  ];

  protected readonly performanceHighlights: readonly FeatureCard[] = [
    {
      title: 'Térmica',
      description:
        'Aislación superior a una pared de ladrillo de un metro de espesor. Ladrillo hueco revocado: R ≈ 0,55 m²·K/W —y varía con la ejecución. Panel Inbuild: R 6,41, inyectado en fábrica.',
    },
    {
      title: 'Acústica',
      description:
        'Sellado total — sin las filtraciones del muro tradicional. Juntas con perfilería de encastre y banda antivibratoria en todo el perímetro de contacto.',
    },
  ];

  // Página 4 — Instalaciones integradas
  protected readonly installationFeatures: readonly FeatureCard[] = [
    {
      title: 'Módulos sanitarios pre-resueltos',
      description:
        'Los núcleos húmedos del proyecto —baño, cocina, lavadero— se resuelven como paneles sanitarios con el equipamiento y sus salidas ya posicionados de fábrica.',
    },
    {
      title: 'Cañerías certificadas',
      description:
        'Distribuciones de agua y canalizaciones eléctricas con certificaciones IRAM e ISO 9000/14000, integradas en planta bajo control de proceso.',
    },
    {
      title: 'Sin rotura ni canaleteado',
      description:
        'La instalación no compite con la obra gruesa: no hay rotura de paredes, no hay canaleteado, no hay superposición de gremios.',
    },
    {
      title: 'Conexión en obra',
      description:
        'El montador certificado vincula las salidas del panel al sistema general —agua, cloaca, tablero— siguiendo el plano de panelizado del proyecto.',
    },
  ];

  // Página 5 — Ingeniería de uniones y montaje
  protected readonly assemblyFeatures: readonly FeatureCard[] = [
    {
      title: 'Perfil de replanteo',
      description:
        'Fija el arranque de la panelería a la fundación, con cara interna y externa identificadas. También vincula el sistema a estructuras existentes de hormigón o mampostería.',
    },
    {
      title: 'Perfil de encastre',
      description:
        'Conforma el marco de unión entre paneles: asegura estanqueidad de juntas, corta la propagación de ruido y vibraciones, y permite nivelar con margen de 5 mm.',
    },
    {
      title: 'Fijación',
      description:
        'Tornillos autoperforantes hexagonales —mínimo 6 por panel— sobre rieles guía. Sin soldaduras, sin morteros, sin tiempos de fragüe.',
    },
  ];

  protected readonly assemblyStats: readonly StatItem[] = [
    { value: '2 semanas', label: 'por piso — ≈ 300 m² de pared montada, en un edificio de 7 pisos' },
    { value: '6 meses', label: 'faltan después del esqueleto, contra 18 de la vía tradicional' },
    { value: '±0', label: 'sin errores dimensionales: el despiece llega resuelto de fábrica' },
  ];

  // Página 6 — Comparativo de tecnologías
  protected readonly comparisonRows: readonly ComparisonRow[] = [
    {
      label: 'Aislación térmica',
      traditional: 'Ladrillo hueco revocado: R ≈ 0,55',
      steel: 'Se instala en obra',
      wood: 'Se instala en obra',
      inbuild: 'PUR inyectado en fábrica: R 6,41 · U 0,156',
    },
    {
      label: 'Instalaciones',
      traditional: 'Rotura y canaleteado en obra',
      steel: 'Tendido en obra',
      wood: 'Tendido en obra',
      inbuild: 'Integradas de fábrica: 5 rubros',
    },
    {
      label: 'Velocidad de montaje',
      traditional: 'Fraguados y tiempos muertos',
      steel: 'En seco — oficios sucesivos',
      wood: 'En seco — oficios sucesivos',
      inbuild: '≈ 300 m² de pared por piso, en 2 semanas',
    },
    {
      label: 'Plazo tras el esqueleto',
      traditional: '18 meses de gremios y terminaciones',
      steel: 'Variable según proveedor',
      wood: 'Variable según proveedor',
      inbuild: '6 meses — garantizado por contrato',
    },
    {
      label: 'Costo del m² de pared',
      traditional: '> USD 200',
      steel: 'USD 160',
      wood: 'Según proveedor',
      inbuild: '< USD 140 — aislación e instalaciones incluidas',
    },
    {
      label: 'Costo del m² de obra',
      traditional: '≈ USD 1.500 — desvíos +30% habituales',
      steel: 'Según proveedor',
      wood: 'Según proveedor',
      inbuild: '< USD 1.000* — precio cerrado al firmar',
    },
  ];

  // Página 7 — Performance y status legal
  protected readonly legalBadges: readonly FeatureCard[] = [
    { title: 'Bien inmueble', description: 'Clasifica como inmueble permanente, no como casa móvil.' },
    { title: 'Escriturable', description: 'Apto para escritura y registro, como cualquier obra tradicional.' },
    { title: 'Apta para crédito', description: 'La obra califica para crédito igual que la construcción tradicional.' },
    { title: 'No requiere CAT', description: 'El sistema no requiere Certificado de Aptitud Técnica.' },
    { title: 'Reventa', description: 'Mantiene y aumenta su valor igual que la obra tradicional.' },
    { title: 'Uso permanente', description: 'Apta para uso permanente — no campamento temporal.' },
  ];

  protected readonly impactStats: readonly StatItem[] = [
    { value: '> 40%', label: 'de la obra impactada' },
    { value: '- 36%', label: 'ahorro del costo total' },
    { value: '- 30%', label: 'menos tiempo de obra' },
  ];

  // Página 8 — Capacidad industrial
  protected readonly capacityStats: readonly StatItem[] = [
    { value: '+15 años', label: 'de construcción industrializada ejecutada' },
    { value: '90.000 m²', label: 'de pared ejecutada con el sistema' },
    { value: '1.500 m²/día', label: 'de pared producida — capacidad de planta actual' },
    { value: '3.450 m²', label: 'de planta industrial propia, Parque Industrial Zárate' },
  ];
}
