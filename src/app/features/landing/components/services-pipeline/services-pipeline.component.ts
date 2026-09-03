import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { PipelineStep } from '../../landing.models';

@Component({
  selector: 'mezzo-services-pipeline',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-pipeline.component.html',
  styleUrl: './services-pipeline.component.scss',
})
export class ServicesPipelineComponent {
  protected readonly steps: readonly PipelineStep[] = [
    {
      num: '01',
      title: 'Desarrollo Industrial y Logístico',
      image: 'https://loremflickr.com/640/420/industry,warehouse?lock=101',
      imageAlt: 'Parque industrial en desarrollo, con accesos y naves en construcción',
      description:
        'Proyectamos parques industriales y logísticos de punta a punta: gestión integral desde la reconversión de suelo rural hasta polos de alto rendimiento operativo.',
      items: [
        {
          title: 'Proyección de Parques Industriales',
          description:
            'Gestión integral del desarrollo —de suelo rural a polo industrial de alto rendimiento, listo para operar.',
        },
        {
          title: 'Diseño de Masterplan',
          description:
            'Zonificación y distribución estratégica del predio, pensada para maximizar rendimiento y escalabilidad.',
        },
      ],
    },
    {
      num: '02',
      title: 'Infraestructura y Obra Civil',
      image: 'https://loremflickr.com/640/420/road,construction?lock=102',
      imageAlt: 'Obra vial y trazado de infraestructura de un desarrollo',
      description:
        'Ejecutamos la infraestructura que sostiene cada desarrollo: trazado, urbanización y las obras complementarias que conectan el proyecto con su entorno.',
      items: [
        {
          title: 'Trazado y Urbanización',
          description:
            'Apertura, nivelación y pavimentación de calles internas y accesos, con estándares de obra vial.',
        },
        {
          title: 'Obras Complementarias',
          description: 'Redes de servicios —agua, energía, gas— y conectividad vial integradas al proyecto.',
        },
      ],
    },
    {
      num: '03',
      title: 'Hábitat y Soluciones de Vivienda',
      image: 'assets/services/vivienda-inbuild-terminada.jpg',
      imageAlt: 'Vivienda real terminada con sistema constructivo Inbuild, con pérgola de acceso',
      description:
        'Resolvemos el hábitat en todas sus escalas: desde vivienda de interés social hasta barrios cerrados con amenities, con sistemas constructivos que garantizan calidad y plazo.',
      items: [
        {
          title: 'Viviendas de Interés Social',
          description: 'Soluciones habitacionales de bajo costo, sin comprometer calidad ni estándares constructivos.',
        },
        {
          title: 'Desarrollos Residenciales',
          description: 'Barrios cerrados con amenities, diseñados como producto inmobiliario integral.',
        },
        {
          title: 'Innovación Constructiva · Sistemas Inbuild',
          description:
            'Paneles autoportantes con aislación e instalaciones integradas de fábrica: hasta 300 m² de pared montada por piso cada dos semanas, 100% en seco. Aislación térmica superior a una pared de un metro de ladrillo (R 6,41 m²·K/W), con hasta 36% de ahorro en el costo total de obra y hasta 30% menos de plazo —garantizado por contrato.',
        },
      ],
    },
    {
      num: '04',
      title: 'Articulación Institucional (Público-Privada)',
      image: 'assets/proyectos/obra-escolar-articulacion-institucional.jpg',
      imageAlt: 'Vista aérea de una ampliación escolar real en obra, junto al edificio existente de la institución',
      description:
        'Somos el nexo entre el sector privado y el sector público: gestionamos la intermediación, la normativa y el financiamiento que un desarrollo de escala necesita para avanzar.',
      items: [
        {
          title: 'Capacidad de Gestión Grupo Mezzo',
          description: 'Intermediación activa entre el sector privado y el sector público en cada etapa del proyecto.',
        },
        {
          title: 'Mecanismos de Integración',
          description: 'Herramientas de gestión para normativas urbanas y esquemas de financiamiento del desarrollo.',
        },
        {
          title: 'Centros de Oportunidades',
          description: 'Programas de desarrollo comunitario que integran el proyecto a su entorno social y productivo.',
        },
      ],
    },
    {
      num: '05',
      title: 'Respaldo Constructivo',
      image: 'https://loremflickr.com/640/420/construction,steel?lock=105',
      imageAlt: 'Sistema constructivo industrializado montado en obra',
      description:
        'Cada proyecto se apoya en un portafolio sólido de obras ejecutadas y en sistemas constructivos de vanguardia, con la certeza de plazo y calidad de la industria.',
      items: [
        {
          title: 'Antecedentes y Trayectoria',
          description: 'Un portafolio sólido de desarrollos ejecutados respalda cada nuevo proyecto.',
        },
        {
          title: 'Sistemas de Vanguardia',
          description: 'Tecnología constructiva de punta, con procesos industrializados y control de calidad de fábrica.',
        },
      ],
    },
  ];
}
