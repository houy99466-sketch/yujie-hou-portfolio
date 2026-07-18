import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function FlowDiagram({ steps, label }) {
  const { language } = useLanguage()
  const accessibleLabel = label ?? (language === 'en' ? 'System flow' : '系统流程')

  return (
    <ol className="flow-diagram" aria-label={accessibleLabel}>
      {steps.map((step, index) => (
        <li key={step}>
          <span>{step}</span>
          {index < steps.length - 1 ? <ArrowRight aria-hidden="true" size={18} /> : null}
        </li>
      ))}
    </ol>
  )
}
