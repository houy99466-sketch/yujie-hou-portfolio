import { ExternalLink, GitBranch, Newspaper, Play } from 'lucide-react'

const linkIcons = {
  article: Newspaper,
  code: GitBranch,
  video: Play,
}

export function PublicLinksSection({ links }) {
  if (!links?.length) return null

  return (
    <section className="public-links-section" aria-labelledby="public-links-title">
      <div className="public-links-heading">
        <span>公开证据</span>
        <h2 id="public-links-title">公开链接</h2>
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
