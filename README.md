# Grupo Mezzo — Landing page

Landing institucional de Grupo Mezzo (desarrollos industriales y logísticos,
hábitat con sistema constructivo Inbuild y la Línea Vive de vivienda social),
construida en Angular 18 (standalone components) + TypeScript estricto.

En producción en **https://grupomezzo.com.ar** (GitHub Pages + dominio propio
en NIC Argentina, DNS gestionado en Cloudflare).

## Estado del diseño

No hubo un manual de marca completo provisto por el cliente. La paleta de
color y la tipografía fueron definidas con criterio de diseño propio, a
partir del isotipo real (tres barras diagonales) y del rubro de la empresa.
Están centralizadas en un solo lugar para poder reemplazarlas fácilmente:

```
src/app/core/styles/_tokens.scss
```

Si en algún momento el cliente entrega una guía de marca más completa
(colores, tipografía), ese es el único archivo que hace falta tocar — el
resto de los componentes consume los tokens vía CSS custom properties
(`var(--mezzo-*)`), no valores hardcodeados.

## El logo

El header y el footer usan el logotipo real de Grupo Mezzo (`assets/brand/`),
recortado de las fichas comerciales del cliente: una versión oscura
(`grupo-mezzo-logo-dark.png`, para el header con fondo claro) y una clara
(`grupo-mezzo-logo-light.png`, para el footer con fondo oscuro), ambas con
fondo transparente. Reemplazó al `LogoMarkComponent` (isotipo SVG dibujado a
mano) que se usaba antes de tener acceso al logo real.

## Estructura del proyecto

```
src/
  app/
    core/styles/            tokens, reset y utilidades globales (SCSS)
    shared/
      components/           componentes reutilizables (section-eyebrow)
      directives/            count-up (animación de números), scroll-reveal
    features/landing/       la landing en sí
      components/           una sección = un componente
        site-header/
        hero/
        habitat-spotlight/   banner destacado de Vivienda + Inbuild System
        about-section/
        services-pipeline/
        capabilities-slider/
        inbuild-system/      deep-dive técnico del sistema constructivo
        vive-line/           Línea Vive — 6 modelos, precios y financiación
        sustainability-panel/
        benefits-grid/
        portfolio-gallery/
        impact-section/
        strategic-alliances/
        site-footer/
      landing.component.*   compone las secciones
      landing.models.ts     interfaces de contenido (sin `any`)
    app.component.ts        shell raíz (<router-outlet />)
    app.config.ts           providers standalone
    app.routes.ts           ruteo (una sola ruta — sin navegación interna,
                             todo es scroll a anclas dentro de landing)
  assets/
    brand/                  logo real (dark/light)
    inbuild/, proyectos/, services/, vive/   fotos y renders reales
  index.html
  main.ts
  styles.scss                punto de entrada de estilos globales
```

## Cómo correrlo

```bash
npm install
npm start        # http://localhost:4300 (ver angular.json / package.json)
npm run build    # build de desarrollo en dist/
```

## Deploy

El deploy a producción es automático: cada push a `master` dispara
`.github/workflows/deploy-pages.yml`, que:

1. Compila con `npm run build:github-pages` (`ng build --configuration
   production --base-href ./`). La base href es **relativa** a propósito —
   el sitio es de una sola página, así que los mismos archivos sirven tanto
   en `https://aguzj1j1.github.io/grupomezzo/` como en la raíz del dominio
   propio.
2. Copia `index.html` a `404.html` (fallback de SPA para GitHub Pages).
3. Genera el archivo `CNAME` con `grupomezzo.com.ar`.
4. Publica a GitHub Pages.

El dominio propio está delegado a Cloudflare (nameservers cargados en NIC
Argentina), con 4 registros A apuntando a la IPs de GitHub Pages
(`185.199.108/109/110/111.153`) y un CNAME de `www` a `aguzj1j1.github.io`.

## Pendiente

- [ ] Si aparece un manual de marca más completo, actualizar `_tokens.scss`.
- [ ] Reemplazar las fotos ilustrativas de la galería de proyectos y de 2 de
      las 5 líneas de acción (marcadas explícitamente como no reales en el
      propio sitio) a medida que haya fotos reales de esos proyectos.
