import { Mail, MessageCircle } from 'lucide-react'

import { CopyContactButton } from '../components/CopyContactButton.jsx'
import { PageIntro } from '../components/PageIntro.jsx'
import { contactInfo } from '../data/site.js'

const identityRows = [
  { label: '姓名', value: contactInfo.name },
  { label: '学校与学院', value: contactInfo.institution },
  { label: '学位', value: contactInfo.degree },
  { label: '关注方向', value: contactInfo.focus },
]

const contactRows = [
  { label: '微信', value: contactInfo.wechat, icon: MessageCircle },
  { label: '邮箱', value: contactInfo.email, icon: Mail },
]

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="欢迎联系"
        description="欢迎围绕项目、技术与学习经历沟通交流。联系方式可直接复制，不依赖外部邮件应用。"
        aside="基本信息 · 微信 · 邮箱"
      />

      <div className="shell contact-layout">
        <section className="contact-section" aria-labelledby="contact-profile-title">
          <div className="contact-section-heading">
            <span>01</span>
            <h2 id="contact-profile-title">基本信息</h2>
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
            <h2 id="contact-methods-title">联系方式</h2>
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
