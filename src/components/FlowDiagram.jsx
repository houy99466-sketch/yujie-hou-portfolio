import { ArrowRight } from 'lucide-react'

export function FlowDiagram({ steps, label = '系统流程' }) {
  return (
    <ol className="flow-diagram" aria-label={label}>
      {steps.map((step, index) => (
        <li key={step}>
          <span>{step}</span>
          {index < steps.length - 1 ? <ArrowRight aria-hidden="true" size={18} /> : null}
        </li>
      ))}
    </ol>
  )
}

