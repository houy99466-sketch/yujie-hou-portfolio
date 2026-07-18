import { PageIntro } from '../components/PageIntro.jsx'
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { getSystems } from '../data/systems.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function SystemsPage() {
  const { language, copy } = useLanguage()
  const systems = getSystems(language)

  return (
    <>
      <PageIntro
        eyebrow="Systems"
        title={copy.systemsPage.title}
        description={copy.systemsPage.description}
        aside={copy.systemsPage.aside}
      />
      <section className="shell archive-section" aria-label={copy.systemsPage.listLabel}>
        <div className="project-preview-grid project-preview-grid-wide">
          {systems.map((system, index) => (
            <ProjectPreview system={system} priority={index < 2} key={system.slug} />
          ))}
        </div>
      </section>
    </>
  )
}
