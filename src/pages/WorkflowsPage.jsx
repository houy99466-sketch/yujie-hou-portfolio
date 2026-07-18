import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageIntro } from '../components/PageIntro.jsx'
import { publicArticles } from '../data/site.js'
import { workflows } from '../data/workflows.js'

export function WorkflowsPage() {
  return (
    <>
      <PageIntro
        eyebrow="AI Native"
        title="AI 工具流"
        description="这部分不把工具写成简单链接，而是说明它们面对的问题、输入输出、实现边界和真实使用方式。"
        aside="3 个工具 · 输入管理 / 内容表达 / 日程执行"
      />

      <section className="shell workflow-archive" aria-label="AI 工具流项目列表">
        {workflows.map((workflow) => (
          <article className="workflow-preview" key={workflow.slug}>
            <div className="workflow-preview-index">{workflow.index}</div>
            <div className="workflow-preview-main">
              <p className="eyebrow">{workflow.category}</p>
              <h2>{workflow.title}</h2>
              <p>{workflow.summary}</p>
              <div className="mini-flow" aria-label={`${workflow.title}核心流程`}>
                {workflow.workflow.slice(0, 4).map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>
            <Link to={`/ai-workflows/${workflow.slug}`}>
              查看 {workflow.title} 详情
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </article>
        ))}
      </section>

      <section className="writing-band" aria-labelledby="writing-title">
        <div className="shell writing-layout">
          <div>
            <p className="eyebrow eyebrow-light">Writing</p>
            <h2 id="writing-title">相关文章与项目复盘</h2>
          </div>
          <div className="writing-list">
            {publicArticles.map((article, index) => (
              <a href={article.href} target="_blank" rel="noreferrer" key={article.href}>
                <span>0{index + 1} · {article.topic}</span>
                <strong>{article.title}</strong>
                <ExternalLink aria-hidden="true" size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

