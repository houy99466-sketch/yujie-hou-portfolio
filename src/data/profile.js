export const education = [
  {
    institution: '中山大学',
    program: '中法核工程与技术学院，核工程与核技术专业本科',
    detail: '2024 至今 · 大三 · GPA 3.3 · 专业排名 24/62 · 已通过英语四级、六级',
  },
  {
    institution: '创业管理辅修',
    program: '创业黄埔班第九期',
    detail: '在工程学习之外接受产品与创业训练',
  },
]

export const honors = [
  { title: '国创赛省赛银奖及以上（赛事进行中）', role: '鲸途智航项目技术负责人' },
  { title: '小米黑客松高校赛区 10 强', role: 'EmoTender 项目统筹 / 技术架构设计' },
  { title: '华数杯数学建模比赛国家三等奖' },
  {
    title: '2026 年第六届全国大学生高电压与等离子体科技创新竞赛二等奖',
    role: '团队负责人',
  },
  { title: 'MCM/ICM 美国大学生数学建模竞赛 Meritorious Winner' },
  { title: '亚太地区数学建模中文赛二等奖' },
  { title: '2024 年中法核校友奖学金' },
  { title: 'Hong Kong Physical AI Hackathon — K3 智算先鋒獎', role: 'PC 端技术负责人' },
]

export const profileSummary = {
  eyebrow: '经历与成果',
  title: '仍在学习，也持续把想法做成可验证的系统。',
  description:
    '目前就读于中山大学中法核工程与技术学院，关注机器人嵌入式软件、感知与控制算法。通过真实无人系统、Quest 3 遥操作与 PyTorch 建模积累工程经验，也关注强化学习与运动控制的结合。',
}

export const educationEn = [
  {
    institution: 'Sun Yat-sen University',
    program: 'Sino-French Institute of Nuclear Engineering and Technology, B.Eng. in Nuclear Engineering and Technology',
    detail: '2024 - Present · Third year · GPA 3.3 · Major rank 24/62 · CET-4 and CET-6 passed',
  },
  {
    institution: 'Minor in Entrepreneurship Management',
    program: 'Entrepreneurship Huangpu Program, Cohort 9',
    detail: 'Product and entrepreneurship training alongside engineering studies',
  },
]

export const honorsEn = [
  { title: 'Provincial Silver or above secured in the innovation competition (ongoing)', role: 'Jingtu Zhihang project technical lead' },
  { title: 'Xiaomi Hackathon University Division — Top 10', role: 'EmoTender project lead / technical architecture' },
  { title: 'Third Prize, Huashu Cup National Mathematical Modeling Competition' },
  {
    title: 'Second Prize, 6th National College Student High Voltage and Plasma Science & Technology Innovation Competition, 2026',
    role: 'Team lead',
  },
  { title: 'MCM/ICM Meritorious Winner' },
  { title: 'Second Prize, Asia-Pacific Chinese Mathematical Modeling Competition' },
  { title: 'Sino-French Nuclear Alumni Scholarship, 2024' },
  { title: 'Hong Kong Physical AI Hackathon — K3 Smart Computing Pioneer Award', role: 'PC-side technical lead' },
]

export const profileSummaryEn = {
  eyebrow: 'Experience & Achievements',
  title: 'Still learning, while continuing to turn ideas into testable systems.',
  description: 'I study at Sun Yat-sen University and focus on embedded robotics, perception, and control algorithms. My experience includes physical autonomous systems, Quest 3 teleoperation, and PyTorch modeling. I am also interested in reinforcement learning for motion control.',
}

export const publicExperience = {
  title: '公开展示与交流',
  name: '2026 进迭时空开发者大会',
  description: '参加大会并现场展示 iFocus，项目在“开发者优秀作品”展区呈现多模态专注状态检测与机械臂反馈。',
  linkLabel: '查看 iFocus 项目与现场照片',
}

export const publicExperienceEn = {
  title: 'Public Demonstrations',
  name: 'SpacemiT DevCon 2026',
  description: 'Attended the conference and exhibited iFocus in the developer showcase, presenting multi-modal attention detection and physical robot-arm feedback.',
  linkLabel: 'Explore iFocus and the event photos',
}

export function getProfileData(language = 'zh') {
  return language === 'en'
    ? { education: educationEn, honors: honorsEn, profileSummary: profileSummaryEn, publicExperience: publicExperienceEn }
    : { education, honors, profileSummary, publicExperience }
}
