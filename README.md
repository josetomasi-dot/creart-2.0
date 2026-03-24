# CreArt Landing

Homepage editorial de CreArt construida con `Vite` y `TypeScript`, preparada para deploy estatico en GitHub Pages.

## Requisitos

- `Node.js` 20 o superior
- `npm`

## Correr en local

1. Instala dependencias:

```bash
npm install
```

2. Inicia el entorno de desarrollo:

```bash
npm run dev
```

3. Abre la URL que muestra Vite, normalmente:

```text
http://localhost:5173/
```

## Build de produccion

Genera la version lista para publicar en `dist/`:

```bash
npm run build
```

Puedes revisar el build localmente con:

```bash
npm run preview
```

## GitHub Pages

El proyecto ya esta configurado para hosting estatico:

- `vite.config.ts` usa `base: './'`
- los assets quedan con rutas relativas
- hay un workflow en `.github/workflows/deploy.yml`

### Publicacion automatica

1. Sube el proyecto a un repositorio de GitHub.
2. Asegurate de usar la rama `main`.
3. En GitHub, ve a `Settings > Pages`.
4. En `Source`, selecciona `GitHub Actions`.
5. Haz push a `main`.

GitHub Actions va a:

- instalar dependencias
- ejecutar `npm run build`
- publicar `dist/` en GitHub Pages

### Publicacion manual

Si prefieres generar el build y publicarlo por tu cuenta:

1. Ejecuta:

```bash
npm run build
```

2. Publica el contenido de `dist/` en tu hosting estatico.

## Archivos que no debes subir manualmente

No subas estas carpetas o archivos:

- `node_modules/`
- `dist/`
- `vite-dev.log`
- `vite-dev.err.log`

`.gitignore` ya esta configurado para excluirlos.

## Notas de deploy

- La navegacion del sitio usa anclas (`#...`), asi que no depende de rutas SPA.
- No hay dependencias de backend ni configuraciones especiales de servidor.
- El proyecto esta preparado para hosts estaticos como GitHub Pages, Netlify o Vercel static.
