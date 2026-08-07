import { cp, mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'

import { systems } from '../src/data/systems.js'
import { workflows } from '../src/data/workflows.js'

export const pageRoutes = [
  'systems',
  ...systems.map(({ slug }) => `systems/${slug}`),
  'ai-workflows',
  ...workflows.map(({ slug }) => `ai-workflows/${slug}`),
  'skills',
  'profile',
  'contact',
]

async function requireDirectory(directory, label) {
  const details = await stat(directory).catch(() => null)
  if (!details?.isDirectory()) {
    throw new Error(`${label} directory does not exist: ${directory}`)
  }
}

export async function exportPages(distDirectory, outputDirectory) {
  const dist = resolve(distDirectory)
  const output = resolve(outputDirectory)

  await requireDirectory(dist, 'Build')
  await mkdir(output, { recursive: true })
  await cp(dist, output, { recursive: true, force: true })

  const html = await readFile(join(dist, 'index.html'), 'utf8')
  await writeFile(join(output, '404.html'), html)
  await writeFile(join(output, '.nojekyll'), '')

  await Promise.all(
    pageRoutes.map(async (route) => {
      const routeFile = join(output, route, 'index.html')
      await mkdir(dirname(routeFile), { recursive: true })
      await writeFile(routeFile, html)
    }),
  )
}

const currentFile = fileURLToPath(import.meta.url)

if (process.argv[1] && resolve(process.argv[1]) === currentFile) {
  const [distDirectory, outputDirectory] = process.argv.slice(2)
  if (!distDirectory || !outputDirectory) {
    throw new Error('Usage: node scripts/export-pages.mjs <dist-directory> <output-directory>')
  }

  await exportPages(distDirectory, outputDirectory)
}
