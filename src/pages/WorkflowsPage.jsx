import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageIntro } from '../components/PageIntro.jsx'
import { getPublicArticles } from '../data/site.js'
import { getWorkflows } from '../data/workflows.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function WorkflowsPage() {
  const { language, copy } = useLanguage()
  const publicArticles = getPublicArticles(language)
  const workflows = getWorkflows(language)

  return (
    <>
      <PageIntro
        eyebrow="AI Native"
        title={copy.workflowsPage.title}
        description={copy.workflowsPage.description}
        aside={copy.workflowsPage.aside}
      />

      <section className="shell workflow-archive" aria-label={copy.workflowsPage.listLabel}>
        {workflows.map((workflow) => (
          <article className="workflow-preview" key={workflow.slug}>
            <div className="workflow-preview-index">{workflow.index}</div>
            <div className="workflow-preview-main">
              <p className="eyebrow">{workflow.category}</p>
              <h2>{workflow.title}</h2>
              <p>{workflow.summary}</p>
              <div className="mini-flow" aria-label={`${workflow.title}${copy.workflowsPage.flowSuffix}`}>
                {workflow.workflow.slice(0, 4).map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>
            <Link to={`/ai-workflows/${workflow.slug}`}>
              {copy.workflowsPage.detailPrefix} {workflow.title} {copy.workflowsPage.detailSuffix}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </article>
        ))}
      </section>

      <section className="writing-band" aria-labelledby="writing-title">
        <div className="shell writing-layout">
          <div>
            <p className="eyebrow eyebrow-light">Writing</p>
            <h2 id="writing-title">{copy.workflowsPage.writingTitle}</h2>
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
