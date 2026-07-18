import { PageIntro } from '../components/PageIntro.jsx'
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { systems } from '../data/systems.js'

export function SystemsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Systems"
        title="工程系统"
        description="四个项目横跨自主机器人、嵌入式控制、XR 数字孪生和 AI 机器人交互。每个详情页都区分系统结果、个人职责、证据与未完成边界。"
        aside="4 个项目 · 真实硬件 / 真机部署 / 公开仓库"
      />
      <section className="shell archive-section" aria-label="工程系统项目列表">
        <div className="project-preview-grid project-preview-grid-wide">
          {systems.map((system, index) => (
            <ProjectPreview system={system} priority={index < 2} key={system.slug} />
          ))}
        </div>
      </section>
    </>
  )
}

