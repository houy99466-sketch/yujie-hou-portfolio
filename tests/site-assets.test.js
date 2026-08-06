import { existsSync, readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'

describe('site shell assets', () => {
  test('declares a favicon that exists in the public directory', () => {
    const html = readFileSync('index.html', 'utf8')
    expect(html).toContain('href="/favicon.svg"')
    expect(existsSync('public/favicon.svg')).toBe(true)
  })

  test('declares Chinese as the document language', () => {
    const html = readFileSync('index.html', 'utf8')

    expect(html).toContain('<html lang="zh-CN">')
  })

  test('stores the EmoTender cover locally and references it from the system data', () => {
    const systems = readFileSync('src/data/systems.js', 'utf8')

    expect(existsSync('public/assets/emotender-cover.webp')).toBe(true)
    expect(systems).toContain("image: '/assets/emotender-cover.webp'")
  })

  test('stores the iFocus cover locally and references it from the system data', () => {
    const systems = readFileSync('src/data/systems.js', 'utf8')

    expect(existsSync('public/assets/ifocus-cover.webp')).toBe(true)
    expect(systems).toContain("image: '/assets/ifocus-cover.webp'")
  })

  test('provides a static-host fallback for direct route visits', () => {
    const redirects = readFileSync('public/_redirects', 'utf8')

    expect(redirects.trim()).toBe('/* /index.html 200')
  })

  test('styles the public links and contact page responsively', () => {
    const styles = readFileSync('src/styles.css', 'utf8')

    expect(styles).toContain('.public-links-section {')
    expect(styles).toContain('.contact-details {')
    expect(styles).toMatch(
      /@media \(max-width: 820px\)[\s\S]*?\.public-links-section\s*\{[\s\S]*?grid-template-columns:\s*1fr/,
    )
  })
})
