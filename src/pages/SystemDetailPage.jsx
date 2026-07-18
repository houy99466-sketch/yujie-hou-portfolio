import { Navigate, useParams } from 'react-router-dom'

import { DetailLayout, DetailSection } from '../components/DetailLayout.jsx'
import { FlowDiagram } from '../components/FlowDiagram.jsx'
import { PublicLinksSection } from '../components/PublicLinksSection.jsx'
import { RelatedLinks } from '../components/RelatedLinks.jsx'
import { getSystem, getSystems } from '../data/systems.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function SystemDetailPage() {
  const { slug } = useParams()
  const { language, copy } = useLanguage()
  const system = getSystem(slug, language)

  if (!system) return <Navigate to="/systems" replace />

  const systems = getSystems(language)
  const related = systems.filter((item) => item.slug !== system.slug).slice(0, 2)

  return (
    <DetailLayout parentHref="/systems" parentLabel={copy.systemDetail.back} item={system}>
      <nav className="detail-toc" aria-label={copy.systemDetail.toc}>
        <a href="#challenge">{copy.systemDetail.tocItems[0]}</a>
        <a href="#architecture">{copy.systemDetail.tocItems[1]}</a>
        <a href="#contribution">{copy.systemDetail.tocItems[2]}</a>
        <a href="#evidence">{copy.systemDetail.tocItems[3]}</a>
      </nav>

      <DetailSection id="challenge" number="01" title={copy.systemDetail.challenge}>
        <p className="detail-lead">{system.challenge}</p>
        <div className="outcome-line">
          <span>{copy.systemDetail.outcome}</span>
          <strong>{system.outcome}</strong>
        </div>
      </DetailSection>

      <DetailSection id="architecture" number="02" title={copy.systemDetail.architecture} tone="soft">
        <FlowDiagram steps={system.flow} label={`${system.title}${copy.systemDetail.flowSuffix}`} />
        {system.architectureImage ? (
          <figure className="architecture-figure">
            <img src={system.architectureImage} alt={system.architectureAlt} loading="lazy" />
            <figcaption>{system.architectureAlt}</figcaption>
          </figure>
        ) : null}
        <div className="stack-line" aria-label={copy.systemDetail.stack}>
          {system.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="contribution" number="03" title={copy.systemDetail.contribution}>
        <ol className="numbered-evidence">
          {system.contributions.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </DetailSection>

      <PublicLinksSection links={system.links} />

      <DetailSection id="evidence" number="04" title={copy.systemDetail.boundary} tone="ink">
        <div className="evidence-columns">
          <div>
            <h3>{copy.systemDetail.verified}</h3>
            <ul>
              {system.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{copy.systemDetail.limitations}</h3>
            <ul>
              {system.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </DetailSection>

      <RelatedLinks title={copy.systemDetail.related} items={related} basePath="/systems" />
    </DetailLayout>
  )
}

