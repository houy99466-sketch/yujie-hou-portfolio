import { ExternalLink, GitBranch, Newspaper, Play } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const linkIcons = {
  article: Newspaper,
  code: GitBranch,
  video: Play,
}

export function PublicLinksSection({ links }) {
  const { copy } = useLanguage()
  if (!links?.length) return null

  return (
    <section
      className="public-links-section"
      aria-labelledby="public-links-title"
      aria-label={copy.shared.publicLinks}
    >
      <div className="public-links-heading">
        <span>{copy.shared.publicEvidence}</span>
        <h2 id="public-links-title">{copy.shared.publicLinks}</h2>
      </div>
      <div className="public-links-list">
        {links.map((link) => {
          const Icon = linkIcons[link.kind] ?? ExternalLink
          return (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              <Icon aria-hidden="true" size={20} />
              <strong>{link.label}</strong>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
          )
        })}
      </div>
    </section>
  )
}
