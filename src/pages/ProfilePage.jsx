import { Download, ExternalLink, GitBranch, Mail } from 'lucide-react'

import { PageIntro } from '../components/PageIntro.jsx'
import { education, honors, profileSummary } from '../data/profile.js'
import { publicLinks } from '../data/site.js'

export function ProfilePage() {
  return (
    <>
      <PageIntro
        eyebrow={profileSummary.eyebrow}
        title="经历与成果"
        description={profileSummary.description}
        aside="教育 · 荣誉 · 公开材料"
      />

      <div className="shell profile-grid">
        <section className="profile-section" aria-labelledby="education-title">
          <div className="profile-section-heading">
            <span>01</span>
            <h2 id="education-title">教育背景</h2>
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
            <h2 id="honors-title">荣誉奖项</h2>
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
            <h2 id="profile-contact-title">欢迎沟通交流。</h2>
            <p>公开页面仅保留邮件、GitHub 与作品集下载。</p>
          </div>
          <div className="profile-contact-actions">
            <a className="contact-row" href={publicLinks.email} aria-label="发送邮件">
              <Mail aria-hidden="true" />
              <span>
                <small>邮箱</small>
                <strong>发送邮件</strong>
              </span>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
            <a className="contact-row" href={publicLinks.github} target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" />
              <span>
                <small>代码与公开项目</small>
                <strong>查看 GitHub</strong>
              </span>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
            <a className="contact-row" href={publicLinks.portfolio} download>
              <Download aria-hidden="true" />
              <span>
                <small>精选项目材料</small>
                <strong>下载中文作品集 PDF</strong>
              </span>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
