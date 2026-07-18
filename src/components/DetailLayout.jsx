import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { EvidenceStrip } from './EvidenceStrip.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function DetailLayout({ parentHref, parentLabel, item, children }) {
  const { copy } = useLanguage()

  return (
    <>
      <header className="detail-hero">
        <div className="shell detail-breadcrumb">
          <Link to={parentHref}>
            <ArrowLeft aria-hidden="true" size={17} />
            {parentLabel}
          </Link>
          <span>{item.index}</span>
        </div>
        <div className="shell detail-hero-grid">
          <div className="detail-hero-copy">
            <p className="eyebrow">{item.category}</p>
            <h1>{item.title}</h1>
            <p className="detail-tagline">{item.tagline}</p>
            {item.role ? (
              <div className="role-callout">
                <span>{copy.shared.myRole}</span>
                <strong>{item.role}</strong>
              </div>
            ) : null}
          </div>
          {item.image ? (
            <figure className="detail-media">
              <img src={item.image} alt={item.imageAlt} loading="eager" />
            </figure>
          ) : (
            <div className="detail-monogram" aria-hidden="true">
              {item.index}
            </div>
          )}
        </div>
        {item.facts ? (
          <div className="shell">
            <EvidenceStrip items={item.facts} />
          </div>
        ) : null}
      </header>
      <div className="shell detail-body">{children}</div>
    </>
  )
}

export function DetailSection({ id, number, title, children, tone = 'default' }) {
  return (
    <section className={`detail-section detail-section-${tone}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="detail-section-label">
        <span>{number}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="detail-section-content">{children}</div>
    </section>
  )
}

