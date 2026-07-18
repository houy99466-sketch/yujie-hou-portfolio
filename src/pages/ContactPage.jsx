import { Mail, MessageCircle } from 'lucide-react'

import { CopyContactButton } from '../components/CopyContactButton.jsx'
import { PageIntro } from '../components/PageIntro.jsx'
import { getContactInfo } from '../data/site.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function ContactPage() {
  const { language, copy } = useLanguage()
  const contactInfo = getContactInfo(language)
  const identityRows = [
    { label: copy.contactPage.identityLabels[0], value: contactInfo.name },
    { label: copy.contactPage.identityLabels[1], value: contactInfo.institution },
    { label: copy.contactPage.identityLabels[2], value: contactInfo.degree },
    { label: copy.contactPage.identityLabels[3], value: contactInfo.focus },
  ]
  const contactRows = [
    { label: copy.contactPage.wechat, value: contactInfo.wechat, icon: MessageCircle },
    { label: copy.contactPage.email, value: contactInfo.email, icon: Mail },
  ]

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={copy.contactPage.title}
        description={copy.contactPage.description}
        aside={copy.contactPage.aside}
      />

      <div className="shell contact-layout">
        <section className="contact-section" aria-labelledby="contact-profile-title">
          <div className="contact-section-heading">
            <span>01</span>
            <h2 id="contact-profile-title">{copy.contactPage.basic}</h2>
          </div>
          <dl className="contact-details">
            {identityRows.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="contact-section" aria-labelledby="contact-methods-title">
          <div className="contact-section-heading">
            <span>02</span>
            <h2 id="contact-methods-title">{copy.contactPage.methods}</h2>
          </div>
          <div className="contact-methods">
            {contactRows.map((item) => {
              const Icon = item.icon
              return (
                <div className="contact-method" key={item.label}>
                  <Icon aria-hidden="true" size={22} />
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                  <CopyContactButton label={item.label} value={item.value} />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
