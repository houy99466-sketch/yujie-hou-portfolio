export const education = [
  {
    institution: '中山大学',
    program: '中法核工程与技术学院，核工程与核技术专业本科',
    detail: '2024 至今 · GPA 3.2 · 专业排名 24/62 · 已通过英语四级、六级',
  },
  {
    institution: '创业管理辅修',
    program: '创业黄埔班 2.0',
    detail: '在工程学习之外接受产品与创业训练',
  },
]

export const honors = [
  {
    title: '2026 年第六届全国大学生高电压与等离子体科技创新竞赛二等奖',
    role: '团队负责人',
  },
  { title: 'MCM/ICM 美国大学生数学建模竞赛 Meritorious Winner' },
  { title: '亚太地区数学建模中文赛二等奖' },
  { title: '2024 年中法核校友奖学金' },
]

export const profileSummary = {
  eyebrow: '经历与成果',
  title: '仍在学习，也持续把想法做成可验证的系统。',
  description:
    '目前就读于中山大学中法核工程与技术学院。工程学习之外，我通过创业管理辅修、竞赛和侧项目补充产品表达与长期迭代能力。',
}

export const educationEn = [
  {
    institution: 'Sun Yat-sen University',
    program: 'Sino-French Institute of Nuclear Engineering and Technology, B.Eng. in Nuclear Engineering and Technology',
    detail: '2024 - Present · GPA 3.2 · Major rank 24/62 · CET-4 and CET-6 passed',
  },
  {
    institution: 'Minor in Entrepreneurship Management',
    program: 'Entrepreneurship Huangpu Program 2.0',
    detail: 'Product and entrepreneurship training alongside engineering studies',
  },
]

export const honorsEn = [
  {
    title: 'Second Prize, 6th National College Student High Voltage and Plasma Science & Technology Innovation Competition, 2026',
    role: 'Team lead',
  },
  { title: 'MCM/ICM Meritorious Winner' },
  { title: 'Second Prize, Asia-Pacific Chinese Mathematical Modeling Competition' },
  { title: 'Sino-French Nuclear Alumni Scholarship, 2024' },
]

export const profileSummaryEn = {
  eyebrow: 'Experience & Achievements',
  title: 'Still learning, while continuing to turn ideas into testable systems.',
  description: 'I study at the Sino-French Institute of Nuclear Engineering and Technology at Sun Yat-sen University. Alongside engineering, I develop product communication and long-term iteration skills through entrepreneurship management studies, competitions, and side projects.',
}

export function getProfileData(language = 'zh') {
  return language === 'en'
    ? { education: educationEn, honors: honorsEn, profileSummary: profileSummaryEn }
    : { education, honors, profileSummary }
}
