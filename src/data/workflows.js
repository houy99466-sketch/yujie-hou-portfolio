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

const workflowTranslationsEn = {
  consulter: {
    title: 'consulter',
    category: 'Private Context Management',
    tagline: 'Making long-term context reusable while keeping private journal entries explicit, read-only, and local.',
    summary: 'A Codex plugin for local private context: regular conversations read the profile, while diary access occurs only through an explicit /consulter request.',
    problem: 'Long-term background becomes scattered across conversations and cannot be reused reliably. Injecting all private material by default would create unnecessary privacy exposure.',
    workflow: ['Regular prompt', 'Read profile.md', 'Inject concise context', 'Generate a personalized response'],
    alternateWorkflow: ['/consulter prompt', 'Read profile.md + diary.md', 'Keep diary read-only', 'Deep consultation and reflection'],
    implementation: [
      'Maintains education, skills, projects, goals, and preferences in a local profile.md file.',
      'Reads diary.md only after an explicit /consulter trigger; regular conversations do not access it.',
      'Separates the private resource directory from public repositories so real private material is never uploaded to GitHub.',
    ],
    outputs: ['Long-term personal context injection', 'Explicit deep-consultation mode', 'Local resource initialization script', 'Documented privacy boundary'],
    value: 'Turns repeated personal-context pasting into a controlled local workflow while preserving a clear permission boundary between regular questions and deep consultation.',
    links: [
      { label: 'Open the consulter GitHub repository', href: publicLinks.consulter, kind: 'code' },
      { label: 'Read the related workflow article', href: publicLinks.workflowArticle, kind: 'article' },
    ],
  },
  'visual-article': {
    title: 'visual-article',
    category: 'Content Production Workflow',
    tagline: 'Turning completed project collaboration into a publishable article without reorganizing the same material again.',
    summary: 'A Codex skill that converts the visible conversation context into a WeChat Official Account article, browser preview, and separate cover image.',
    problem: 'After a project is complete, chat history, design tradeoffs, and implementation details remain scattered through the context. Writing an article from scratch repeats the work of extracting structure, visual design, and publishing format.',
    workflow: ['Current conversation', 'Extract article structure', 'WeChat-compatible visual blocks', 'HTML preview', 'Separate cover image'],
    alternateWorkflow: [],
    implementation: [
      'Generates wechat-article.html, article.html, and cover.png by default.',
      'Uses inline styles, short sections, tables, and text-first diagrams for WeChat compatibility without relying on global CSS or JavaScript.',
      'Creates a project-specific output directory, with real skill files and generated artifacts stored on the E drive.',
    ],
    outputs: ['WeChat article HTML', 'Browser preview HTML', 'Homepage hook cover image', 'Reusable article structure'],
    value: 'Makes the project process itself a source for public communication, reducing repeated organization while turning technical collaboration, design tradeoffs, and visual results into a complete article.',
    links: [
      { label: 'Open the visual-article GitHub repository', href: publicLinks.visualArticle, kind: 'code' },
      { label: 'Read the related workflow article', href: publicLinks.workflowArticle, kind: 'article' },
    ],
  },
  'smart-schedule': {
    title: 'Feishu Smart Calendar',
    category: 'Structured Scheduling System',
    tagline: 'Create, query, break down, and delete structured schedules with one natural-language instruction.',
    summary: 'Parses natural-language schedules into structured tasks and writes them to Feishu Bitable, with CLI, Web Chat, and Feishu Bot interfaces.',
    problem: 'Schedule input involves more than extracting a time. It must handle location, time zone, duration, priority, flexible windows, task decomposition, and existing commitments.',
    workflow: ['Natural-language schedule input', 'LLM structured parsing', 'Planning rules and field validation', 'Feishu Bitable', 'Calendar view / Bot feedback'],
    alternateWorkflow: [],
    implementation: [
      'A Python 3.12 project supporting DeepSeek or APIs with the same /chat/completions request structure.',
      'Provides three interfaces: CLI, Web Chat, and Feishu Bot.',
      'Wraps Feishu Bitable record queries, creation, and deletion while isolating real external interfaces during testing.',
    ],
    outputs: ['Single or multiple schedule entries', 'Exam and project-plan decomposition', 'Schedule query and deletion', 'Feishu Bitable calendar view'],
    value: 'Connects natural-language understanding, personal planning preferences, and the Feishu data model into an operational tool instead of a one-off prompt demonstration.',
    links: [
      { label: 'Open the Feishu Smart Calendar GitHub repository', href: publicLinks.smartSchedule, kind: 'code' },
      { label: 'Read the smart scheduling article', href: publicLinks.scheduleArticle, kind: 'article' },
    ],
  },
}

export const workflowsEn = workflows.map((workflow) => ({
  ...workflow,
  ...workflowTranslationsEn[workflow.slug],
}))

export function getWorkflows(language = 'zh') {
  return language === 'en' ? workflowsEn : workflows
}

export function getWorkflow(slug, language = 'zh') {
  return getWorkflows(language).find((workflow) => workflow.slug === slug)
}
