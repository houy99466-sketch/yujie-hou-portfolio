import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getSystem } from '../data/systems.js'
import { getSiteMeta } from '../data/site.js'
import { getWorkflow } from '../data/workflows.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function getPageTitle(pathname, language, copy) {
  const siteMeta = getSiteMeta(language)
  const routeTitles = {
    '/': siteMeta.title,
    '/systems': `${copy.routeTitles.systems} | ${siteMeta.name}`,
    '/ai-workflows': `${copy.routeTitles.workflows} | ${siteMeta.name}`,
    '/skills': `${copy.routeTitles.skills} | ${siteMeta.name}`,
    '/profile': `${copy.routeTitles.profile} | ${siteMeta.name}`,
    '/contact': `${copy.routeTitles.contact} | ${siteMeta.name}`,
  }
  if (routeTitles[pathname]) return routeTitles[pathname]
  if (pathname.startsWith('/systems/')) {
    const system = getSystem(pathname.slice('/systems/'.length), language)
    return system ? `${system.title} | ${siteMeta.name}` : siteMeta.title
  }
  if (pathname.startsWith('/ai-workflows/')) {
    const workflow = getWorkflow(pathname.slice('/ai-workflows/'.length), language)
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

