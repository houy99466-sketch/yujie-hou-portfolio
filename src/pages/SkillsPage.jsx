import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageIntro } from '../components/PageIntro.jsx'
import { skillGroups } from '../data/skills.js'

export function SkillsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capability Map"
        title="技能图谱"
        description="不使用百分比和星级。每组能力都来自中文简历，并通过真实项目说明它在哪里被使用。"
        aside="4 组能力 · 项目证据驱动"
      />

      <section className="shell skills-tree" aria-label="技能树">
        <div className="skills-trunk" aria-hidden="true">
          <span>Systems</span>
          <strong>从感知与控制到交互和表达</strong>
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
              <span>使用证据</span>
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

