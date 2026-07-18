import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageIntro } from '../components/PageIntro.jsx'
import { getSkillGroups } from '../data/skills.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function SkillsPage() {
  const { language, copy } = useLanguage()
  const skillGroups = getSkillGroups(language)

  return (
    <>
      <PageIntro
        eyebrow="Capability Map"
        title={copy.skillsPage.title}
        description={copy.skillsPage.description}
        aside={copy.skillsPage.aside}
      />

      <section className="shell skills-tree" aria-label={copy.skillsPage.treeLabel}>
        <div className="skills-trunk" aria-hidden="true">
          <span>Systems</span>
          <strong>{copy.skillsPage.trunk}</strong>
        </div>
        {skillGroups.map((group) => (
          <section className="skill-branch" aria-labelledby={`${group.id}-title`} key={group.id}>
            <div className="skill-branch-heading">
              <span>{group.index}</span>
              <div>
                <h2 id={`${group.id}-title`}>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </div>
            <ul className="skill-nodes">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="skill-evidence">
              <span>{copy.skillsPage.evidence}</span>
              {group.evidence.map((item) => (
                <Link to={item.href} key={item.href}>
                  {item.label}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
