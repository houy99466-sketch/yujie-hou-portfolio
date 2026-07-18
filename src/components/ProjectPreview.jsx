import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProjectPreview({ system, priority = false }) {
  return (
    <article className="project-preview">
      <Link className="project-preview-link" to={`/systems/${system.slug}`}>
        <figure>
          <img
            src={system.image}
            alt={system.imageAlt}
            loading={priority ? 'eager' : 'lazy'}
          />
          <figcaption>{system.category}</figcaption>
        </figure>
        <div className="project-preview-copy">
          <span className="project-number">{system.index}</span>
          <div>
            <h2>{system.title}</h2>
            <p>{system.tagline}</p>
          </div>
          <ArrowUpRight aria-hidden="true" size={22} />
        </div>
      </Link>
    </article>
  )
}

