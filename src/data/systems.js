import { publicLinks } from './site.js'

export const systems = [
  {
    slug: 'uav-usv',
    index: '01',
    title: '无人机-无人船协同自主系统',
    shortTitle: 'UAV-USV 协同系统',
    category: '自主机器人 / 真实硬件',
    tagline: '把无人船子系统接入真实 UAV-USV 协同链路。',
    summary:
      '完成无人船平台的搭建、组装、调试与参数整定，并打通车辆通信、基于 QGC 的地面站控制和 ROS2 自主模块链路。',
    outcome: '真实无人船可完成运动与控制、模式切换、跟随和环绕行为。',
    role: '无人船与系统集成核心开发；不负责无人机侧具体实现。',
    image: '/assets/uav-usv-cover.webp',
    imageAlt: '校园湖面上的真实无人船测试',
    architectureImage: '/assets/uav-usv-architecture.webp',
    architectureAlt: '无人机无人船协同系统架构图',
    facts: ['真实硬件', '公开演示', '系统集成'],
    stack: ['ROS2', 'MAVROS', 'MAVLink', 'ArduPilot', 'Pixhawk 6C Mini', 'QGroundControl', 'PID'],
    challenge:
      '项目不是桌面仿真，而是需要让无人船硬件、飞控、通信、地面站与自主模块在真实湖面环境中协同工作。',
    flow: ['自研地面站', '4G / MAVLink', 'Jetson / ROS2', 'MAVROS', 'Pixhawk', '双电机推进'],
    contributions: [
      '搭建无人船子系统，完成硬件组装、接线、调试与参数整定。',
      '编写无人船侧代码，集成 ROS2、MAVLink、MAVROS 与 ArduPilot 相关工作流。',
      '打通基于 QGC 二次开发地面站与无人船的通信和控制链路。',
    ],
    evidence: [
      '公开演示记录了真实无人船运动与控制、模式切换、跟随和环绕行为。',
      '完整配置包含 Jetson Orin Nano、激光雷达、YOLOv8 感知与 DWA 避障。',
      '系统技术说明与架构图可进一步验证通信、控制和推进链路。',
    ],
    limitations: [
      '当前公开演示没有展示 YOLOv8 与 DWA 功能。',
      '个人职责集中在无人船和系统集成，不将无人机侧实现归入个人贡献。',
    ],
    links: [{ label: '观看 UAV-USV 公开演示', href: publicLinks.uavDemo, kind: 'video' }],
  },
  {
    slug: 'thermal-control',
    index: '02',
    title: '多通道热测量与控温仪',
    shortTitle: '多通道热控仪',
    category: '嵌入式控制 / 测量系统',
    tagline: '从传感器测量到控制算法和上位机的完整温控原型。',
    summary:
      '开发基于 STM32H743 的可工作原型，下位机使用 C/C++ 固件，上位机使用 Python 界面。',
    outcome: 'PT100 代表性测试覆盖 100-300 摄氏度设定范围。',
    role: '项目负责人、嵌入式控制开发；全部下位机固件由我编写。',
    image: '/assets/thermal-control-ui.webp',
    imageAlt: '150 摄氏度设定下的 Python 温度控制界面',
    facts: ['本科创新项目结题', '完整固件', '代表性测试'],
    stack: ['STM32H743', 'C/C++', 'Python', 'PT100', '惠斯登电桥', '自整定 PID', '卡尔曼滤波'],
    challenge:
      '多通道温度测量需要同时处理传感器读数、控制稳定性、参数整定、串口通信与上位机可视化。',
    flow: ['PT100 / 电桥', 'ADC 采样', 'STM32H743', 'PID / 滤波', 'PWM 输出', 'Python 上位机'],
    contributions: [
      '独立编写全部下位机 C/C++ 固件，并完成硬件联调。',
      '实现自整定 PID、Lambda 整定、积分抗饱和与卡尔曼滤波。',
      '将原计划的 LabVIEW 上位机改为 Python，以获得更灵活的集成能力。',
    ],
    evidence: [
      '项目已经完成本科生创新项目结题。',
      '在 100-300 摄氏度设定范围内，超调控制在 2 摄氏度以内。',
      '稳定后波动控制在 0.2 摄氏度以内。',
    ],
    limitations: ['当前公开页面展示代表性 PT100 测试，不将单点结果扩展为所有工况结论。'],
    links: [],
  },
  {
    slug: 'vr-digital-twin',
    index: '03',
    title: '聚变托卡马克 VR 数字孪生',
    shortTitle: '聚变 VR 数字孪生',
    category: '数字孪生 / XR 交互',
    tagline: '把诊断数据、科学计算与沉浸式交互部署到真实 Quest 3。',
    summary:
      '使用 Unity 构建聚变托卡马克数字孪生，将动态诊断数据与相关计算脚本接入 XR 场景并部署到 Meta Quest 3。',
    outcome: '完成可在 Quest 3 真机运行的 VR 数字孪生演示。',
    role: '项目负责人、XR 交互开发；参与 PINN 相关实现。',
    image: '/assets/vr-digital-twin.webp',
    imageAlt: '运行在 VR 环境中的聚变托卡马克数字孪生',
    facts: ['Quest 3 真机', '动态诊断数据', '公开演示'],
    stack: ['Unity', 'Meta Quest 3', 'XR Interaction Toolkit', '动态数据表', 'PINN'],
    challenge:
      '科学数据、计算脚本和三维模型需要在一个可交互的 XR 场景中保持清晰的数据对应关系和真机运行能力。',
    flow: ['诊断数据', '数据 / 计算脚本', 'Unity 场景', 'XR 交互', 'Quest 3 真机'],
    contributions: [
      '组织动态诊断数据表和对应的数据、计算脚本，并接入 Unity 场景。',
      '实现 XR 交互与 PINN 相关计算。',
      '完成 Meta Quest 3 真机部署和公开演示。',
    ],
    evidence: [
      '公开 Bilibili 视频展示真实 VR 运行效果。',
      'APK 可私下提供，用于验证 Quest 3 部署结果。',
      '动态表格、数据接入和用户交互构成完整演示链路。',
    ],
    limitations: ['工程图纸和非公开实验室资产不对外发布。'],
    links: [{ label: '观看 VR 公开演示', href: publicLinks.vrDemo, kind: 'video' }],
  },
  {
    slug: 'emotender',
    index: '04',
    title: 'EmoTender 情绪调酒机器人',
    shortTitle: 'EmoTender',
    category: 'AI Agent / 机器人交互',
    tagline: '把自然交流转成可解释的饮品方案和机器人实体交付。',
    summary:
      '在 48 小时黑客松中搭建情绪对话、饮品推荐、结构化机器人控制与实体交付链路。',
    outcome: '完成接待、跟随、对话、情绪分析、饮品共创、抓取和递送。',
    role: '负责软件后端和机器人侧的全部工作',
    image: '/assets/emotender-cover.webp',
    imageAlt: 'EmoTender 情绪调酒机器人项目展示',
    facts: ['48 小时黑客松', 'Agent + Robot', '公开仓库'],
    stack: ['FastAPI', 'LLM', 'WebSocket', 'Python', 'FunASR', '千问 TTS', 'OpenCV YuNet', 'Android'],
    challenge:
      '用户表达的是自然情绪和经历，机器人需要把它转成经过校验的饮品方案、表情、台词与确定性动作，而不能直接执行自然语言。',
    flow: ['语音 / 文字入口', 'Agent 理解', '结构化 control_json', 'WebSocket', '机器人动作', '饮品交付'],
    contributions: [
      '负责 FastAPI Agent 后端、短期对话上下文、推荐结果和本地用户档案链路。',
      '负责机器人侧实时通信、视觉跟随、表情状态、抓取与递送流程。',
      '通过结构化字段分离大模型理解与确定性程序执行，并保留手动输入和遥操回退。',
    ],
    evidence: [
      '语音或文字入口、多轮情绪对话、结构化控制、动态表情与个性化推荐已经跑通。',
      '视觉跟随、抓取与递送完成现场交付闭环。',
      '公开仓库包含 Agent 后端、Android APK、前端与测试。',
    ],
    limitations: [
      '机械臂稳定连续倒液仍未完成。',
      '开放桌面自由抓取、液体操作失败恢复和完全脱离工作人员的制作流程尚未完成。',
    ],
    links: [
      { label: '打开 EmoTender GitHub 仓库', href: publicLinks.emotender, kind: 'code' },
      { label: '阅读 EmoTender 项目复盘', href: publicLinks.emotenderArticle, kind: 'article' },
    ],
  },
]

export function getSystem(slug) {
  return systems.find((system) => system.slug === slug)
}

