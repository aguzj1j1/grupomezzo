# Grupo Mezzo — Landing page

Landing institucional de Grupo Mezzo (desarrollos industriales y logísticos),
construida en Angular 18 (standalone components) + TypeScript estricto.

## Estado del diseño

**No existe manual de marca provisto por el cliente.** La paleta de color, la
tipografía y el sistema visual fueron definidos con criterio de diseño propio,
a partir del isotipo real (tres barras diagonales) y del rubro de la empresa.
Están centralizados en un solo lugar para poder reemplazarlos fácilmente:

```
src/app/core/styles/_tokens.scss
```

Si en algún momento el cliente entrega una guía de marca real (colores,
tipografía, logo vectorial), ese es el único archivo que hace falta tocar —
el resto de los componentes consume los tokens vía CSS custom properties
(`var(--mezzo-*)`), no valores hardcodeados.

## El logo

El ícono (`LogoMarkComponent`, en `src/app/shared/components/logo-mark/`) usa
las coordenadas reales del isotipo, obtenidas vectorizando (trazado de
contornos) el archivo de logo original — no es una reconstrucción a mano.
Usa `fill: currentColor`, por eso el mismo componente sirve para fondos
claros (`variant="ink"`) y oscuros (`variant="paper"`) sin depender de un
PNG con fondo blanco.

## Estructura del proyecto

```
src/
  app/
    core/styles/            tokens, reset y utilidades globales (SCSS)
    shared/components/      componentes reutilizables (logo, eyebrow)
    features/landing/       la landing en sí
      components/           una sección = un componente
        site-header/
        hero/
        services-pipeline/
        sustainability-panel/
        benefits-grid/
        impact-section/
        site-footer/
      landing.component.*   compone las secciones
      landing.models.ts     interfaces de contenido (sin `any`)
    app.component.ts        shell raíz (<router-outlet />)
    app.config.ts           providers standalone
    app.routes.ts           ruteo (lazy-loaded)
  index.html
  main.ts
  styles.scss                punto de entrada de estilos globales
```

## Cómo correrlo

Este entorno no tuvo acceso a npm/red para instalar dependencias ni
verificar el build, así que antes de tocar nada corré:

```bash
npm install
npm start        # http://localhost:4200
npm run build    # build de producción en dist/
```

## Pendiente antes de publicar

- [ ] Reemplazar el email placeholder en `site-footer.component.ts`
      (`contacto@grupomezzo.com.ar`) por el real.
- [ ] Si aparece un manual de marca, actualizar `_tokens.scss`.
- [ ] `npm install` + `npm run build` para confirmar que compila limpio
      (no se pudo verificar en el entorno donde se generó este proyecto).
