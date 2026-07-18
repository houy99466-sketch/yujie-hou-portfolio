import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import App from '../src/App.jsx'

afterEach(() => {
  cleanup()
  window.history.replaceState({}, '', '/')
})

function renderAt(path) {
  window.history.pushState({}, '', path)
  return render(<App />)
}

describe('multi-page portfolio', () => {
  test('renders a compact homepage with the five-page navigation', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { level: 1, name: '侯宇杰' })).toBeInTheDocument()
    const navigation = screen.getByRole('navigation', { name: '主导航' })
    expect(within(navigation).getByRole('link', { name: '首页' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(navigation).getByRole('link', { name: '工程系统' })).toBeInTheDocument()
    expect(within(navigation).getByRole('link', { name: 'AI 工具流' })).toBeInTheDocument()
    expect(within(navigation).getByRole('link', { name: '技能图谱' })).toBeInTheDocument()
    expect(within(navigation).getByRole('link', { name: '经历与成果' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '跳到正文' })).toBeInTheDocument()
    expect(document.body).not.toHaveTextContent('18318032979')
  })

  test('lists all four engineering systems on the systems page', () => {
    renderAt('/systems')

    expect(screen.getByRole('heading', { level: 1, name: '工程系统' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /无人机-无人船协同自主系统/ })).toHaveAttribute(
      'href',
      '/systems/uav-usv',
    )
    expect(screen.getByRole('link', { name: /多通道热测量与控温仪/ })).toHaveAttribute(
      'href',
      '/systems/thermal-control',
    )
    expect(screen.getByRole('link', { name: /聚变托卡马克 VR 数字孪生/ })).toHaveAttribute(
      'href',
      '/systems/vr-digital-twin',
    )
    expect(screen.getByRole('link', { name: /EmoTender 情绪调酒机器人/ })).toHaveAttribute(
      'href',
      '/systems/emotender',
    )
    expect(
      screen.getByRole('navigation', { name: '主导航' }).querySelector('[aria-current="page"]'),
    ).toHaveTextContent('工程系统')
  })

  test('presents EmoTender as a full project with verified role and boundary', () => {
    renderAt('/systems/emotender')

    expect(
      screen.getByRole('heading', { level: 1, name: 'EmoTender 情绪调酒机器人' }),
    ).toBeInTheDocument()
    expect(screen.getByText('负责软件后端和机器人侧的全部工作')).toBeInTheDocument()
    expect(screen.getByText(/语音或文字入口、多轮情绪对话、结构化控制/)).toBeInTheDocument()
    expect(screen.getByText(/稳定连续倒液仍未完成/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '打开 EmoTender GitHub 仓库' })).toHaveAttribute(
      'href',
      'https://github.com/houy99466-sketch/emotender_release',
    )
  })

  test('lists the three AI workflow case studies', () => {
    renderAt('/ai-workflows')

    expect(screen.getByRole('heading', { level: 1, name: 'AI 工具流' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /consulter/ })).toHaveAttribute(
      'href',
      '/ai-workflows/consulter',
    )
    expect(screen.getByRole('link', { name: /visual-article/ })).toHaveAttribute(
      'href',
      '/ai-workflows/visual-article',
    )
    expect(screen.getByRole('link', { name: /飞书智能日历表/ })).toHaveAttribute(
      'href',
      '/ai-workflows/smart-schedule',
    )
  })

  test.each([
    ['/ai-workflows/consulter', 'consulter', '本地私人上下文'],
    ['/ai-workflows/visual-article', 'visual-article', '可见对话上下文'],
    ['/ai-workflows/smart-schedule', '飞书智能日历表', '自然语言日程'],
  ])('renders workflow detail %s', (path, title, proof) => {
    renderAt(path)

    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument()
    expect(screen.getByText(new RegExp(proof))).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '核心工作流' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '项目价值' })).toBeInTheDocument()
  })

  test('builds an evidence-linked skill tree from the Chinese resume', () => {
    renderAt('/skills')

    expect(screen.getByRole('heading', { level: 1, name: '技能图谱' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '自主系统' })).toBeInTheDocument()
    expect(screen.getByText('ROS2 导航工作流')).toBeInTheDocument()
    expect(screen.getByText('MAVROS')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '控制与估计' })).toBeInTheDocument()
    expect(screen.getByText('自整定 PID')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '嵌入式与集成' })).toBeInTheDocument()
    expect(screen.getByText('STM32H743')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '仿真与 AI 工具' })).toBeInTheDocument()
    expect(screen.getByText('XR Interaction Toolkit')).toBeInTheDocument()
  })

  test('keeps education, honors, public contact, and portfolio download on the profile page', () => {
    renderAt('/profile')

    expect(screen.getByRole('heading', { level: 1, name: '经历与成果' })).toBeInTheDocument()
    expect(screen.getByText('中山大学')).toBeInTheDocument()
    expect(screen.getByText('创业管理辅修')).toBeInTheDocument()
    expect(screen.getByText(/Meritorious Winner/)).toBeInTheDocument()
    expect(
      screen.getByText('2026 年第六届全国大学生高电压与等离子体科技创新竞赛二等奖'),
    ).toBeInTheDocument()
    expect(screen.getByText('团队负责人')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '发送邮件' })).toHaveAttribute(
      'href',
      'mailto:2110474083@qq.com',
    )
    expect(screen.getByRole('link', { name: '下载中文作品集 PDF' })).toHaveAttribute(
      'href',
      '/downloads/Yujie_Hou_Selected_Projects_Portfolio_ZH.pdf',
    )
    expect(document.body).not.toHaveTextContent('18318032979')
  })
})
