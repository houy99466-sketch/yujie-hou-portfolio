import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function RelatedLinks({ title, items, basePath }) {
  return (
    <section className="related-section" aria-labelledby="related-title">
      <p className="eyebrow">继续查看</p>
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

