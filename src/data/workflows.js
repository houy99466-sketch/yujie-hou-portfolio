import { publicLinks } from './site.js'

export const workflows = [
  {
    slug: 'consulter',
    index: 'A01',
    title: 'consulter',
    category: '私人上下文管理',
    tagline: '让长期背景可复用，同时让私人日记保持显式、只读和本地。',
    summary:
      '一个管理本地私人上下文的 Codex 插件：普通对话读取 profile，只有显式使用 /consulter 时才读取 diary。',
    problem:
      '长期背景散落在不同对话中，模型无法稳定复用；如果把全部私人材料默认注入，又会扩大不必要的隐私暴露。',
    workflow: ['普通提示词', '读取 profile.md', '注入简短背景', '生成个性化回答'],
    alternateWorkflow: ['/consulter 提示词', '读取 profile.md + diary.md', '日记保持只读', '深度咨询与复盘'],
    implementation: [
      '使用本地 profile.md 维护教育、技能、项目、目标和偏好。',
      '通过显式 /consulter 触发 diary.md 读取，普通对话不访问日记。',
      '私人资料目录与公共仓库分离，真实资料不上传 GitHub。',
    ],
    outputs: ['长期个人背景注入', '显式深度咨询模式', '本地资料初始化脚本', '隐私边界说明'],
    value:
      '把“让 AI 了解我”从反复粘贴资料变成可控的本地工作流，同时保留普通问答和深度咨询之间的权限边界。',
    links: [
      { label: '打开 consulter GitHub 仓库', href: publicLinks.consulter, kind: 'code' },
      { label: '阅读相关工作流文章', href: publicLinks.workflowArticle, kind: 'article' },
    ],
  },
  {
    slug: 'visual-article',
    index: 'A02',
    title: 'visual-article',
    category: '内容生产工作流',
    tagline: '把已经发生的项目协作转成可发布文章，而不是重新整理一次材料。',
    summary:
      '一个 Codex skill，将当前可见对话上下文转换成微信公众号文章、浏览器预览与独立封面图。',
    problem:
      '项目完成后，聊天记录、设计取舍和实现细节分散在上下文里。重新写文章会重复提炼结构、视觉和发布格式。',
    workflow: ['当前对话', '文章结构提炼', '微信兼容视觉块', 'HTML 预览', '独立封面图'],
    alternateWorkflow: [],
    implementation: [
      '默认生成 wechat-article.html、article.html 和 cover.png。',
      '微信文章使用内联样式、短章节、表格和文本优先图示，避免依赖全局 CSS 与 JavaScript。',
      '按当前项目命名独立输出目录，真实技能文件与生成物放在 E 盘。',
    ],
    outputs: ['微信公众号文章 HTML', '浏览器预览 HTML', '首页钩子封面图', '可复用文章结构'],
    value:
      '让项目过程本身成为公开表达的素材来源，减少重复整理，并把技术协作、设计取舍和可视化结果组织成完整文章。',
    links: [
      { label: '打开 visual-article GitHub 仓库', href: publicLinks.visualArticle, kind: 'code' },
      { label: '阅读相关工作流文章', href: publicLinks.workflowArticle, kind: 'article' },
    ],
  },
  {
    slug: 'smart-schedule',
    index: 'A03',
    title: '飞书智能日历表',
    category: '日程结构化系统',
    tagline: '用一句自然语言创建、查询、拆分和删除结构化日程。',
    summary:
      '将自然语言日程解析为结构化任务并写入飞书多维表格，提供命令行、Web Chat 和飞书 Bot 三种入口。',
    problem:
      '日程输入不只是提取时间，还需要处理地点、时区、时长、优先级、弹性区间、拆解方案和已有安排。',
    workflow: ['自然语言输入', 'LLM 结构化解析', '规划规则与字段校验', '飞书多维表格', '日历视图 / Bot 反馈'],
    alternateWorkflow: [],
    implementation: [
      'Python 3.12 项目，支持 DeepSeek 或相同 /chat/completions 请求结构的接口。',
      '提供 CLI、Web Chat 与飞书 Bot 三个使用入口。',
      '封装飞书多维表格记录的读取、创建和删除，并提供测试隔离真实外部接口。',
    ],
    outputs: ['单条或多条日程', '考试与项目计划拆分', '日程查询与删除', '飞书多维表格日历视图'],
    value:
      '把自然语言理解、个人规划偏好和飞书数据结构连接成可运行工具，而不是停留在一次性的提示词演示。',
    links: [
      { label: '打开飞书智能日历表 GitHub 仓库', href: publicLinks.smartSchedule, kind: 'code' },
      { label: '阅读智能日程文章', href: publicLinks.scheduleArticle, kind: 'article' },
    ],
  },
]

export function getWorkflow(slug) {
  return workflows.find((workflow) => workflow.slug === slug)
}
