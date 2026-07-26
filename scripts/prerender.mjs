import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const clientHtmlPath = path.join(projectRoot, 'dist', 'index.html')
const serverOutputPath = path.join(projectRoot, 'dist-server')
const serverEntryPath = path.join(serverOutputPath, 'entry-server.js')

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntryPath).href),
  readFile(clientHtmlPath, 'utf8'),
])

const rootMarker = '<div id="root"></div>'
if (!template.includes(rootMarker)) {
  throw new Error(`Could not find ${rootMarker} in the production HTML`)
}

const html = template.replace(rootMarker, `<div id="root">${render()}</div>`)
await writeFile(clientHtmlPath, html)
await rm(serverOutputPath, { recursive: true, force: true })
