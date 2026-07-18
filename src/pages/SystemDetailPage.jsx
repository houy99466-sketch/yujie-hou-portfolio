import { Navigate, useParams } from 'react-router-dom'

import { DetailLayout, DetailSection } from '../components/DetailLayout.jsx'
import { FlowDiagram } from '../components/FlowDiagram.jsx'
import { PublicLinksSection } from '../components/PublicLinksSection.jsx'
import { RelatedLinks } from '../components/RelatedLinks.jsx'
import { getSystem, systems } from '../data/systems.js'

export function SystemDetailPage() {
  const { slug } = useParams()
  const system = getSystem(slug)

  if (!system) return <Navigate to="/systems" replace />

  const related = systems.filter((item) => item.slug !== system.slug).slice(0, 2)

  return (
    <DetailLayout parentHref="/systems" parentLabel="返回工程系统" item={system}>
      <nav className="detail-toc" aria-label="本页目录">
        <a href="#challenge">系统问题</a>
        <a href="#architecture">系统架构</a>
        <a href="#contribution">我的工作</a>
        <a href="#evidence">证据与边界</a>
      </nav>

      <DetailSection id="challenge" number="01" title="系统问题">
        <p className="detail-lead">{system.challenge}</p>
        <div className="outcome-line">
          <span>最终结果</span>
          <strong>{system.outcome}</strong>
        </div>
      </DetailSection>

      <DetailSection id="architecture" number="02" title="系统架构" tone="soft">
        <FlowDiagram steps={system.flow} label={`${system.title}系统流程`} />
        {system.architectureImage ? (
          <figure className="architecture-figure">
            <img src={system.architectureImage} alt={system.architectureAlt} loading="lazy" />
            <figcaption>{system.architectureAlt}</figcaption>
          </figure>
        ) : null}
        <div className="stack-line" aria-label="技术栈">
          {system.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="contribution" number="03" title="我的工作">
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

      <DetailSection id="evidence" number="04" title="证据与边界" tone="ink">
        <div className="evidence-columns">
          <div>
            <h3>已经验证</h3>
            <ul>
              {system.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>当前边界</h3>
            <ul>
              {system.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </DetailSection>

      <RelatedLinks title="其他工程系统" items={related} basePath="/systems" />
    </DetailLayout>
  )
}

