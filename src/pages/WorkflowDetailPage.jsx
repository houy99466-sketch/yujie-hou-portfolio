import { Navigate, useParams } from 'react-router-dom'

import { DetailLayout, DetailSection } from '../components/DetailLayout.jsx'
import { FlowDiagram } from '../components/FlowDiagram.jsx'
import { PublicLinksSection } from '../components/PublicLinksSection.jsx'
import { RelatedLinks } from '../components/RelatedLinks.jsx'
import { getWorkflow, getWorkflows } from '../data/workflows.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function WorkflowDetailPage() {
  const { slug } = useParams()
  const { language, copy } = useLanguage()
  const workflow = getWorkflow(slug, language)

  if (!workflow) return <Navigate to="/ai-workflows" replace />

  const related = getWorkflows(language).filter((item) => item.slug !== workflow.slug)

  return (
    <DetailLayout parentHref="/ai-workflows" parentLabel={copy.workflowDetail.back} item={workflow}>
      <DetailSection id="workflow-problem" number="01" title={copy.workflowDetail.problem}>
        <p className="detail-lead">{workflow.summary}</p>
        <p>{workflow.problem}</p>
      </DetailSection>

      <DetailSection id="workflow-flow" number="02" title={copy.workflowDetail.coreFlow} tone="soft">
        <FlowDiagram steps={workflow.workflow} label={`${workflow.title} ${copy.workflowDetail.coreFlow}`} />
        {workflow.alternateWorkflow.length ? (
          <>
            <h3 className="subsection-title">{copy.workflowDetail.deepMode}</h3>
            <FlowDiagram steps={workflow.alternateWorkflow} label={`${workflow.title} ${copy.workflowDetail.deepMode}`} />
          </>
        ) : null}
      </DetailSection>

      <DetailSection id="workflow-implementation" number="03" title={copy.workflowDetail.implementation}>
        <ol className="numbered-evidence">
          {workflow.implementation.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </DetailSection>

      <PublicLinksSection links={workflow.links} />

      <DetailSection id="workflow-value" number="04" title={copy.workflowDetail.value} tone="ink">
        <p className="detail-lead">{workflow.value}</p>
        <div className="output-list" aria-label={copy.workflowDetail.outputs}>
          {workflow.outputs.map((output) => (
            <span key={output}>{output}</span>
          ))}
        </div>
      </DetailSection>

      <RelatedLinks title={copy.workflowDetail.related} items={related} basePath="/ai-workflows" />
    </DetailLayout>
  )
}

