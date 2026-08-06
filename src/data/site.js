export const siteMeta = {
  name: '侯宇杰',
  mark: '侯',
  title: '侯宇杰 | 机器人、控制与 AI 系统',
  description: '中山大学本科生，关注机器人、控制、数字孪生与 AI 原生工具。',
  location: '中国广州',
  school: '中山大学',
  period: '2024 至今',
}

export const siteMetaEn = {
  name: 'Yujie Hou',
  mark: 'H',
  title: 'Yujie Hou | Robotics, Control & AI Systems',
  description: 'Undergraduate at Sun Yat-sen University focused on robotics, control, digital twins, and AI-native tools.',
  location: 'Guangzhou, China',
  school: 'Sun Yat-sen University',
  period: '2024 - Present',
}

export const navItems = [
  { label: '首页', href: '/', end: true },
  { label: '工程系统', href: '/systems' },
  { label: 'AI 工具流', href: '/ai-workflows' },
  { label: '技能图谱', href: '/skills' },
  { label: '经历与成果', href: '/profile' },
  { label: '欢迎联系', href: '/contact' },
]

export const navItemsEn = [
  { label: 'Home', href: '/', end: true },
  { label: 'Engineering Systems', href: '/systems' },
  { label: 'AI Workflows', href: '/ai-workflows' },
  { label: 'Capability Map', href: '/skills' },
  { label: 'Experience', href: '/profile' },
  { label: 'Contact', href: '/contact' },
]

export const contactInfo = {
  name: '侯宇杰',
  institution: '中山大学中法核工程与技术学院 & 管理学院',
  degree: '核工程与核技术 & 创业管理双学位',
  focus: '机器人、控制、数字孪生与 AI 系统',
  wechat: 'Hyj032979',
  email: '2110474083@qq.com',
}

export const contactInfoEn = {
  name: 'Yujie Hou',
  institution: 'Sun Yat-sen University Sino-French Institute of Nuclear Engineering and Technology & School of Business',
  degree: 'Dual Degrees in Nuclear Engineering and Technology & Entrepreneurship Management',
  focus: 'Robotics, control, digital twins, and AI systems',
  wechat: 'Hyj032979',
  email: '2110474083@qq.com',
}

export const publicLinks = {
  github: 'https://github.com/houy99466-sketch',
  portfolio: '/downloads/Yujie_Hou_Selected_Projects_Portfolio_ZH.pdf',
  uavDemo: 'https://www.bilibili.com/video/BV1NZJn6XEBW/',
  vrDemo: 'https://www.bilibili.com/video/BV1bgJp6YEde/',
  consulter: 'https://github.com/houy99466-sketch/consulter',
  visualArticle: 'https://github.com/houy99466-sketch/visual-article',
  smartSchedule: 'https://github.com/houy99466-sketch/smart-schedule',
  emotender: 'https://github.com/houy99466-sketch/emotender_release',
  workflowArticle: 'https://mp.weixin.qq.com/s/ZEpEVx00cJHjRRiILEhhig',
  scheduleArticle: 'https://mp.weixin.qq.com/s/Bp7Eo87HWZw29NhT_oQwyQ',
  emotenderArticle: 'https://mp.weixin.qq.com/s/eDVuXLq-3auV4C-GI5fKLg',
  ifocusDemo: 'https://www.bilibili.com/video/BV16qMC6LEnj/',
}

export const publicArticles = [
  {
    title: '从私人资料库构建到公开发布文章，如何用两个skill解决工作流始末过程中的非必要工作量',
    href: publicLinks.workflowArticle,
    topic: 'AI 工作流',
  },
  {
    title: '说一句话，日程自己排好——我做了个会听人话的日程助手',
    href: publicLinks.scheduleArticle,
    topic: '智能日程',
  },
  {
    title: '48小时，我们做了个能读懂你情绪的调酒机器人',
    href: publicLinks.emotenderArticle,
    topic: '机器人系统',
  },
]

export const publicArticlesEn = [
  {
    title: 'From a private knowledge base to a published article: reducing unnecessary work across an AI workflow',
    href: publicLinks.workflowArticle,
    topic: 'AI Workflow',
  },
  {
    title: 'Say it once and let the calendar arrange itself: building a schedule assistant that understands natural language',
    href: publicLinks.scheduleArticle,
    topic: 'Smart Scheduling',
  },
  {
    title: 'In 48 hours, we built a bartending robot that responds to your emotions',
    href: publicLinks.emotenderArticle,
    topic: 'Robotic System',
  },
]

export function getSiteMeta(language = 'zh') {
  return language === 'en' ? siteMetaEn : siteMeta
}

export function getNavItems(language = 'zh') {
  return language === 'en' ? navItemsEn : navItems
}

export function getContactInfo(language = 'zh') {
  return language === 'en' ? contactInfoEn : contactInfo
}

export function getPublicArticles(language = 'zh') {
  return language === 'en' ? publicArticlesEn : publicArticles
}