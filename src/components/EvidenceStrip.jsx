import { useLanguage } from '../i18n/LanguageContext.jsx'

export function EvidenceStrip({ items, label }) {
  const { copy } = useLanguage()

  return (
    <div className="evidence-strip" aria-label={label ?? copy.shared.projectEvidence}>
      {items.map((item, index) => (
        <span key={item}>
          <b>0{index + 1}</b>
          {item}
        </span>
      ))}
    </div>
  )
}
