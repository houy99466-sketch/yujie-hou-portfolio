import { ArrowRight, GitBranch, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { getSiteMeta, publicLinks } from '../data/site.js'
import { getSystems } from '../data/systems.js'
import { getWorkflows } from '../data/workflows.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function HomePage() {
  const { language, copy } = useLanguage()
  const siteMeta = getSiteMeta(language)
  const systems = getSystems(language)
  const workflows = getWorkflows(language)

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-backdrop" aria-hidden="true" />
        <div className="shell home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-light">Portfolio · 2026</p>
            <h1 id="home-title">{siteMeta.name}</h1>
            <p className="home-role">{copy.home.role}</p>
            <p className="home-statement">{copy.home.statement}</p>
            <div className="home-actions">
              <Link className="action action-primary" to="/systems">
                {copy.home.exploreSystems}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="action action-ghost-light" to="/contact">
                <Mail aria-hidden="true" size={18} />
                {copy.home.welcome}
              </Link>
            </div>
          </div>
          <aside className="home-index" aria-label={copy.home.overview}>
            <div>
              <span>{copy.home.identityLabel}</span>
              <strong>{copy.home.identity}</strong>
            </div>
            <div>
              <span>{copy.home.focusLabel}</span>
              <strong>{copy.home.focus}</strong>
            </div>
            <div>
              <span>{copy.home.publicLabel}</span>
              <strong>{copy.home.publicCount}</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-proof-band" aria-label={copy.home.capabilityPath}>
        <div className="shell home-proof-grid">
          {copy.home.capabilities.map(
            (item, index) => (
              <span key={item}>
                <b>0{index + 1}</b>
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="home-section shell" aria-labelledby="selected-systems-title">
        <div className="section-lead">
          <div>
            <p className="eyebrow">{copy.home.systemsEyebrow}</p>
            <h2 id="selected-systems-title">{copy.home.systemsTitle}</h2>
          </div>
          <p>{copy.home.systemsDescription}</p>
        </div>
        <div className="project-preview-grid">
          {systems.map((system, index) => (
            <ProjectPreview system={system} priority={index < 2} key={system.slug} />
          ))}
        </div>
        <Link className="section-more" to="/systems">
          {copy.home.allSystems}
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>

      <section className="workflow-band" aria-labelledby="workflow-band-title">
        <div className="shell">
          <div className="section-lead section-lead-dark">
            <div>
              <p className="eyebrow eyebrow-light">{copy.home.workflowsEyebrow}</p>
              <h2 id="workflow-band-title">{copy.home.workflowsTitle}</h2>
            </div>
            <p>{copy.home.workflowsDescription}</p>
          </div>
          <div className="workflow-home-list">
            {workflows.map((workflow) => (
              <Link to={`/ai-workflows/${workflow.slug}`} key={workflow.slug}>
                <span>{workflow.index}</span>
                <div>
                  <h3>{workflow.title}</h3>
                  <p>{workflow.tagline}</p>
                </div>
                <ArrowRight aria-hidden="true" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="home-contact-title">
        <div className="shell home-contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="home-contact-title">{copy.home.contactTitle}</h2>
          </div>
          <div className="home-contact-actions">
            <Link className="action action-primary" to="/contact">
              <Mail aria-hidden="true" size={18} />
              {copy.home.sendEmail}
            </Link>
            <a className="action action-outline" href={publicLinks.github} target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" size={18} />
              {copy.home.viewGithub}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

