import { ArrowRight, Download, ExternalLink, GitBranch, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageIntro } from '../components/PageIntro.jsx'
import { getProfileData } from '../data/profile.js'
import { publicLinks } from '../data/site.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function ProfilePage() {
  const { language, copy } = useLanguage()
  const { education, honors, profileSummary } = getProfileData(language)

  return (
    <>
      <PageIntro
        eyebrow={profileSummary.eyebrow}
        title={copy.profilePage.title}
        description={profileSummary.description}
        aside={copy.profilePage.aside}
      />

      <div className="shell profile-grid">
        <section className="profile-section" aria-labelledby="education-title">
          <div className="profile-section-heading">
            <span>01</span>
            <h2 id="education-title">{copy.profilePage.education}</h2>
          </div>
          <div className="timeline-list">
            {education.map((item) => (
              <article key={item.institution}>
                <h3>{item.institution}</h3>
                <p>{item.program}</p>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section" aria-labelledby="honors-title">
          <div className="profile-section-heading">
            <span>02</span>
            <h2 id="honors-title">{copy.profilePage.honors}</h2>
          </div>
          <ol className="honor-list">
            {honors.map((honor, index) => (
              <li key={honor.title}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{honor.title}</strong>
                  {honor.role ? <small>{honor.role}</small> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="profile-contact" aria-labelledby="profile-contact-title">
        <div className="shell profile-contact-layout">
          <div>
            <p className="eyebrow eyebrow-light">Contact & Materials</p>
            <h2 id="profile-contact-title">{copy.profilePage.contactTitle}</h2>
            <p>{copy.profilePage.contactDescription}</p>
          </div>
          <div className="profile-contact-actions">
            <Link className="contact-row" to="/contact" aria-label={copy.profilePage.sendEmail}>
              <Mail aria-hidden="true" />
              <span>
                <small>{copy.profilePage.email}</small>
                <strong>{copy.profilePage.sendEmail}</strong>
              </span>
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <a className="contact-row" href={publicLinks.github} target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" />
              <span>
                <small>{copy.profilePage.code}</small>
                <strong>{copy.profilePage.viewGithub}</strong>
              </span>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
            <a className="contact-row" href={publicLinks.portfolio} download>
              <Download aria-hidden="true" />
              <span>
                <small>{copy.profilePage.materials}</small>
                <strong>{copy.profilePage.download}</strong>
              </span>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
