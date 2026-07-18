import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getSystem } from '../data/systems.js'
import { siteMeta } from '../data/site.js'
import { getWorkflow } from '../data/workflows.js'

const routeTitles = {
  '/': siteMeta.title,
  '/systems': `工程系统 | ${siteMeta.name}`,
  '/ai-workflows': `AI 工具流 | ${siteMeta.name}`,
  '/skills': `技能图谱 | ${siteMeta.name}`,
  '/profile': `经历与成果 | ${siteMeta.name}`,
}

function getPageTitle(pathname) {
  if (routeTitles[pathname]) return routeTitles[pathname]
  if (pathname.startsWith('/systems/')) {
    const system = getSystem(pathname.slice('/systems/'.length))
    return system ? `${system.title} | ${siteMeta.name}` : siteMeta.title
  }
  if (pathname.startsWith('/ai-workflows/')) {
    const workflow = getWorkflow(pathname.slice('/ai-workflows/'.length))
    return workflow ? `${workflow.title} | ${siteMeta.name}` : siteMeta.title
  }
  return siteMeta.title
}

export function ScrollManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.lang = 'zh-CN'
    document.title = getPageTitle(pathname)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

