import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getSystem } from '../data/systems.js'
import { getSiteMeta } from '../data/site.js'
import { getWorkflow } from '../data/workflows.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function getPageTitle(pathname, language, copy) {
  const normalizedPathname = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const siteMeta = getSiteMeta(language)
  const routeTitles = {
    '/': siteMeta.title,
    '/systems': `${copy.routeTitles.systems} | ${siteMeta.name}`,
    '/ai-workflows': `${copy.routeTitles.workflows} | ${siteMeta.name}`,
    '/skills': `${copy.routeTitles.skills} | ${siteMeta.name}`,
    '/profile': `${copy.routeTitles.profile} | ${siteMeta.name}`,
    '/contact': `${copy.routeTitles.contact} | ${siteMeta.name}`,
  }
  if (routeTitles[normalizedPathname]) return routeTitles[normalizedPathname]
  if (normalizedPathname.startsWith('/systems/')) {
    const system = getSystem(normalizedPathname.slice('/systems/'.length), language)
    return system ? `${system.title} | ${siteMeta.name}` : siteMeta.title
  }
  if (normalizedPathname.startsWith('/ai-workflows/')) {
    const workflow = getWorkflow(normalizedPathname.slice('/ai-workflows/'.length), language)
    return workflow ? `${workflow.title} | ${siteMeta.name}` : siteMeta.title
  }
  return siteMeta.title
}

export function ScrollManager() {
  const { pathname } = useLocation()
  const { language, copy } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN'
    document.title = getPageTitle(pathname, language, copy)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [copy, language, pathname])

  return null
}

