import { Navigate, useParams } from 'react-router-dom'

import { DetailLayout, DetailSection } from '../components/DetailLayout.jsx'
import { FlowDiagram } from '../components/FlowDiagram.jsx'
import { PublicLinksSection } from '../components/PublicLinksSection.jsx'
import { RelatedLinks } from '../components/RelatedLinks.jsx'
import { getWorkflow, workflows } from '../data/workflows.js'

export function WorkflowDetailPage() {
  const { slug } = useParams()
  const workflow = getWorkflow(slug)

  if (!workflow) return <Navigate to="/ai-workflows" replace />

  const related = workflows.filter((item) => item.slug !== workflow.slug)

  return (
    <DetailLayout parentHref="/ai-workflows" parentLabel="返回 AI 工具流" item={workflow}>
      <DetailSection id="workflow-problem" number="01" title="它解决什么问题">
        <p className="detail-lead">{workflow.summary}</p>
        <p>{workflow.problem}</p>
      </DetailSection>

      <DetailSection id="workflow-flow" number="02" title="核心工作流" tone="soft">
        <FlowDiagram steps={workflow.workflow} label={`${workflow.title}核心工作流`} />
        {workflow.alternateWorkflow.length ? (
          <>
            <h3 className="subsection-title">显式深度模式</h3>
            <FlowDiagram steps={workflow.alternateWorkflow} label={`${workflow.title}显式深度模式`} />
          </>
        ) : null}
      </DetailSection>

      <DetailSection id="workflow-implementation" number="03" title="关键实现">
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

      <DetailSection id="workflow-value" number="04" title="项目价值" tone="ink">
        <p className="detail-lead">{workflow.value}</p>
        <div className="output-list" aria-label="项目输出">
          {workflow.outputs.map((output) => (
            <span key={output}>{output}</span>
          ))}
        </div>
      </DetailSection>

      <RelatedLinks title="其他 AI 工具流" items={related} basePath="/ai-workflows" />
    </DetailLayout>
  )
}

