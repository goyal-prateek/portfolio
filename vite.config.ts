import path from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const devReactEntry: Plugin = {
  name: 'dev-react-entry',
  apply: 'serve',
  transformIndexHtml(html) {
    return html.replace(
      '</body>',
      '    <script type="module" src="/src/main.tsx"></script>\n  </body>',
    )
  },
}

/**
 * The site has one small stylesheet and no route-level CSS. Inlining it avoids
 * a render-blocking network round trip while keeping the initial paint styled.
 */
const inlineCss: Plugin = {
  name: 'inline-css',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const htmlAsset = Object.values(bundle).find(
      (asset) => asset.type === 'asset' && asset.fileName === 'index.html',
    )
    const cssAssets = Object.values(bundle).filter(
      (asset) => asset.type === 'asset' && asset.fileName.endsWith('.css'),
    )

    if (!htmlAsset || htmlAsset.type !== 'asset') return

    let html = String(htmlAsset.source)

    for (const cssAsset of cssAssets) {
      if (cssAsset.type !== 'asset') continue

      const stylesheetTag = `<link rel="stylesheet" crossorigin href="/${cssAsset.fileName}">`
      if (!html.includes(stylesheetTag)) {
        throw new Error(`Could not find the stylesheet tag for ${cssAsset.fileName}`)
      }

      html = html.replace(stylesheetTag, `<style>${String(cssAsset.source)}</style>`)
      delete bundle[cssAsset.fileName]
    }

    htmlAsset.source = html
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), devReactEntry, inlineCss],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
