import { ArrowRight, GitBranch, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { publicLinks, siteMeta } from '../data/site.js'
import { systems } from '../data/systems.js'
import { workflows } from '../data/workflows.js'

export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-backdrop" aria-hidden="true" />
        <div className="shell home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-light">Portfolio · 2026</p>
            <h1 id="home-title">{siteMeta.name}</h1>
            <p className="home-role">机器人、控制、数字孪生与 AI 系统</p>
            <p className="home-statement">
              从真实硬件、嵌入式控制和 XR 部署，到可复用的 AI 原生工具，持续把想法推进成能够运行、验证和迭代的系统。
            </p>
            <div className="home-actions">
              <Link className="action action-primary" to="/systems">
                查看工程系统
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <a className="action action-ghost-light" href={publicLinks.email}>
                <Mail aria-hidden="true" size={18} />
                欢迎交流
              </a>
            </div>
          </div>
          <aside className="home-index" aria-label="个人概览">
            <div>
              <span>身份</span>
              <strong>中山大学本科生</strong>
            </div>
            <div>
              <span>关注方向</span>
              <strong>AI + Robotics</strong>
            </div>
            <div>
              <span>公开内容</span>
              <strong>4 个系统 · 3 个工具</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-proof-band" aria-label="能力路径">
        <div className="shell home-proof-grid">
          {['真实硬件集成', '嵌入式控制', 'XR 真机部署', 'AI 工作流产品化'].map(
            (item, index) => (
              <span key={item}>
                <b>0{index + 1}</b>
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="home-section shell" aria-labelledby="selected-systems-title">
        <div className="section-lead">
          <div>
            <p className="eyebrow">工程系统</p>
            <h2 id="selected-systems-title">四个可以继续深入的项目</h2>
          </div>
          <p>概览页只呈现结果与职责，系统架构、实现证据和完成边界放在独立详情页。</p>
        </div>
        <div className="project-preview-grid">
          {systems.map((system, index) => (
            <ProjectPreview system={system} priority={index < 2} key={system.slug} />
          ))}
        </div>
        <Link className="section-more" to="/systems">
          查看全部工程系统
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>

      <section className="workflow-band" aria-labelledby="workflow-band-title">
        <div className="shell">
          <div className="section-lead section-lead-dark">
            <div>
              <p className="eyebrow eyebrow-light">AI 工具流</p>
              <h2 id="workflow-band-title">把重复过程沉淀为可复用工具</h2>
            </div>
            <p>从私人上下文、文章发布到自然语言日程，三个项目分别处理输入、表达和执行。</p>
          </div>
          <div className="workflow-home-list">
            {workflows.map((workflow) => (
              <Link to={`/ai-workflows/${workflow.slug}`} key={workflow.slug}>
                <span>{workflow.index}</span>
                <div>
                  <h3>{workflow.title}</h3>
                  <p>{workflow.tagline}</p>
                </div>
                <ArrowRight aria-hidden="true" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="home-contact-title">
        <div className="shell home-contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="home-contact-title">欢迎沟通交流。</h2>
          </div>
          <div className="home-contact-actions">
            <a className="action action-primary" href={publicLinks.email}>
              <Mail aria-hidden="true" size={18} />
              发送邮件
            </a>
            <a className="action action-outline" href={publicLinks.github} target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" size={18} />
              查看 GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

