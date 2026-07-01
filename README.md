# Sitio web profesional — Juan Ingeniería

Sitio web one-page construido con **Astro 5 + Tailwind CSS 4**, optimizado para hosting estático gratuito en Cloudflare Pages o GitHub Pages.

---

## Requisitos previos

- **Node.js 20+** instalado ([descargar](https://nodejs.org/))
- Editor de texto (VS Code recomendado)
- Cuenta en GitHub (gratuita)
- Cuenta en Cloudflare (gratuita) — para hosting

---

## Setup local (5 minutos)

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm run dev
```

Abre http://localhost:4321 y verás el sitio. Cualquier cambio que hagas a los archivos se recarga automáticamente en el navegador.

```bash
# Para generar el sitio compilado (producción)
npm run build

# Para previsualizar el build localmente
npm run preview
```

El sitio compilado queda en la carpeta `dist/`.

---

## Estructura del proyecto

```
juan-ingenieria/
├── src/
│   ├── data/
│   │   └── content.ts        ← AQUÍ EDITAS TODO EL CONTENIDO
│   ├── components/           ← Componentes (no necesitas tocarlos)
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Expertise.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro      ← HTML base, metadatos SEO
│   ├── pages/
│   │   └── index.astro       ← Página principal (ensambla componentes)
│   └── styles/
│       └── global.css        ← Tokens de diseño (colores, fuentes)
├── public/                   ← Archivos estáticos (favicon, fotos)
└── package.json
```

---

## Cómo editar el contenido

**Todo el contenido editable está en `src/data/content.ts`**. Es un archivo TypeScript pero solo necesitas modificar strings entre comillas. Por ejemplo:

```ts
export const profile = {
  nombre: "Juan Apellido",          // ← cambia esto
  titulo: "Ingeniero Civil Mecánico",
  email: "contacto@tudominio.cl",   // ← y esto
  ...
};
```

Lo mismo aplica para `hero`, `servicios`, `normativas`, `proyectos`, etc. Agrega o quita elementos de las listas según necesites.

### Cambiar tu foto

1. Guarda tu foto en `public/foto.jpg` (formato 4:5, idealmente 800×1000 px).
2. Abre `src/components/About.astro`.
3. Reemplaza el bloque del avatar placeholder (líneas con `iniciales`) por:

```astro
<div class="relative aspect-[4/5] mb-8 max-w-sm overflow-hidden">
  <img src="/foto.jpg" alt="Foto de perfil" class="w-full h-full object-cover" />
</div>
```

### Cambiar colores de marca

Edita las variables CSS en `src/styles/global.css` (sección `@theme`).

Por ejemplo, para cambiar el acento ámbar a azul:

```css
--color-accent-500: #2563EB;  /* azul */
--color-accent-600: #1D4ED8;
```

---

## Deploy a Cloudflare Pages (gratis)

### Paso 1: Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio inicial"
git branch -M main
# Crea un repo nuevo en github.com y pega su URL aquí:
git remote add origin https://github.com/TU-USUARIO/juan-ingenieria.git
git push -u origin main
```

### Paso 2: Conectar Cloudflare Pages

1. Entra a https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Autoriza tu cuenta de GitHub y elige el repo `juan-ingenieria`.
3. Configura el build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click en **Save and Deploy**.

En ~2 minutos tendrás una URL tipo `juan-ingenieria.pages.dev`.

### Paso 3: Conectar tu dominio .cl

1. Compra el dominio en https://nic.cl (~$9.990 CLP/año).
2. En Cloudflare Pages → tu proyecto → **Custom domains** → **Set up a custom domain**.
3. Ingresa tu dominio (ej: `juaningenieria.cl`).
4. Cloudflare te dará dos nameservers (ej: `xxx.ns.cloudflare.com`).
5. En NIC.cl → administrar tu dominio → cambiar nameservers → pegar los de Cloudflare.
6. Espera 1–24 horas a que propague el DNS. El SSL se configura automáticamente.

A partir de allí, cada `git push` a la rama `main` redeployará automáticamente.

---

## Mejoras opcionales

- **Formulario de contacto real**: integra https://web3forms.com (gratuito) o https://formspree.io.
- **Analytics**: agrega https://plausible.io o Cloudflare Web Analytics (gratis, sin cookies).
- **Idioma inglés**: duplicar `src/pages/index.astro` como `src/pages/en/index.astro` con contenido traducido.
- **Blog técnico**: Astro tiene soporte nativo de Markdown — crear `src/pages/blog/post-1.md`.

---

## Stack técnico

- [Astro 5](https://astro.build) — generador de sitios estáticos
- [Tailwind CSS 4](https://tailwindcss.com) — utilidades CSS
- [IBM Plex](https://www.ibm.com/plex/) + [Newsreader](https://fonts.google.com/specimen/Newsreader) — tipografías
- Cloudflare Pages — hosting (gratis)
