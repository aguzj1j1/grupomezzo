import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type LogoMarkVariant = 'ink' | 'paper';

/**
 * Isotipo de Grupo Mezzo — tres barras diagonales.
 *
 * Los puntos del <polygon> fueron obtenidos vectorizando (trazado de
 * contornos) el archivo de logo original provisto por el cliente, no son
 * una reconstrucción a mano. Por eso conserva las proporciones reales y no
 * se deforma al escalar.
 *
 * El fill usa currentColor + variant, así el mismo SVG sirve para fondos
 * claros y oscuros sin depender de un PNG con fondo blanco (que es lo que
 * rompía el logo en la versión anterior).
 */
@Component({
  selector: 'mezzo-logo-mark',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size * 0.79"
      viewBox="0 0 100 79"
      role="img"
      aria-label="Grupo Mezzo"
    >
      <polygon
        points="20.72,0.22 1.42,0.11 0.44,0.76 0.11,37.95 0.87,39.26 2.84,39.59 3.71,38.93 21.59,2.40 21.59,1.09"
      />
      <polygon
        points="60.41,0.33 40.13,0.00 36.64,1.96 0.87,74.92 0.76,78.63 20.17,78.95 24.43,76.88 60.20,4.03"
      />
      <polygon
        points="99.13,0.22 79.06,0.00 75.68,1.74 38.93,76.66 39.59,78.63 59.00,78.95 63.47,76.66 99.67,2.84"
      />
      <polygon
        points="98.91,39.48 97.06,39.37 96.18,40.24 78.52,76.34 78.41,77.54 79.17,78.52 98.47,78.74 99.67,77.86 99.78,40.57"
      />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    svg polygon {
      fill: currentColor;
    }

    :host([variant='paper']) {
      color: var(--mezzo-paper);
    }
  `,
  host: {
    '[style.color]':
      "variant === 'paper' ? 'var(--mezzo-paper)' : 'var(--mezzo-graphite)'",
  },
})
export class LogoMarkComponent {
  /** Tamaño del ícono en píxeles (alto real = size * 0.79 por el aspect ratio real del isotipo). */
  @Input() size = 26;

  /** 'ink' para fondos claros, 'paper' para fondos oscuros (footer, panel de sostenibilidad). */
  @Input() variant: LogoMarkVariant = 'ink';
}
