import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { afterEach, describe, expect, test } from 'vitest'

import { systems } from '../src/data/systems.js'
import { workflows } from '../src/data/workflows.js'

const temporaryDirectories = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true })
  }
})

describe('GitHub Pages exporter', () => {
  test('creates one entry HTML for every application route', () => {
    const root = mkdtempSync(join(tmpdir(), 'yujie-hou-pages-'))
    temporaryDirectories.push(root)
    const distDirectory = join(root, 'dist')
    const outputDirectory = join(root, 'site')
    mkdirSync(join(distDirectory, 'assets'), { recursive: true })
    const html = '<!doctype html><html><body><div id="root"></div></body></html>'
    writeFileSync(join(distDirectory, 'index.html'), html)
    writeFileSync(join(distDirectory, 'assets', 'app.js'), 'console.log("ok")')

    const result = spawnSync(
      process.execPath,
      ['scripts/export-pages.mjs', distDirectory, outputDirectory],
      { encoding: 'utf8' },
    )

    expect(result.status).toBe(0)
    expect(readFileSync(join(outputDirectory, 'index.html'), 'utf8')).toBe(html)
    expect(readFileSync(join(outputDirectory, '404.html'), 'utf8')).toBe(html)
    expect(existsSync(join(outputDirectory, '.nojekyll'))).toBe(true)
    expect(existsSync(join(outputDirectory, 'assets', 'app.js'))).toBe(true)

    const expectedRoutes = [
      'systems',
      ...systems.map(({ slug }) => `systems/${slug}`),
      'ai-workflows',
      ...workflows.map(({ slug }) => `ai-workflows/${slug}`),
      'skills',
      'profile',
      'contact',
    ]

    for (const route of expectedRoutes) {
      expect(readFileSync(join(outputDirectory, route, 'index.html'), 'utf8')).toBe(html)
    }
  })

  test('accepts the pnpm argument separator before directory arguments', () => {
    const root = mkdtempSync(join(tmpdir(), 'yujie-hou-pages-'))
    temporaryDirectories.push(root)
    const distDirectory = join(root, 'dist')
    const outputDirectory = join(root, 'site')
    mkdirSync(distDirectory, { recursive: true })
    writeFileSync(join(distDirectory, 'index.html'), '<!doctype html>')

    const result = spawnSync(
      process.execPath,
      ['scripts/export-pages.mjs', '--', distDirectory, outputDirectory],
      { encoding: 'utf8' },
    )

    expect(result.status, result.stderr).toBe(0)
    expect(existsSync(join(outputDirectory, 'systems', 'ifocus', 'index.html'))).toBe(true)
  })
})
