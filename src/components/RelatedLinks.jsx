import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function RelatedLinks({ title, items, basePath }) {
  const { copy } = useLanguage()

  return (
    <section className="related-section" aria-labelledby="related-title">
      <p className="eyebrow">{copy.shared.continue}</p>
      <h2 id="related-title">{title}</h2>
      <div className="related-list">
        {items.map((item) => (
          <Link to={`${basePath}/${item.slug}`} key={item.slug}>
            <span>{item.index}</span>
            <strong>{item.title}</strong>
            <ArrowRight aria-hidden="true" size={19} />
          </Link>
        ))}
      </div>
    </section>
  )
}
