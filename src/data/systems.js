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
  {
    slug: 'ifocus',
    index: '05',
    title: 'iFocus：面向专注状态管理的 Physical AI 系统',
    shortTitle: 'iFocus 专注助手',
    category: 'Physical AI / 人机交互',
    tagline: '把任务目标、电脑行为、屏幕内容、视觉状态和物理反馈连接成可运行的闭环。',
    summary:
      '在 Hong Kong Physical AI Hackathon 中搭建 PC 端注意力检测服务，综合前台进程、屏幕截图分析和摄像头视觉追踪判断用户专注状态，并为手机和 K3 机器人提供结构化 API。',
    outcome: '获 K3 智算先鋒獎，完成 PC–手机–K3 三端联调。',
    role: 'PC 端技术架构与注意力检测主链路开发',
    image: '/assets/ifocus-cover.webp',
    imageAlt: 'iFocus 团队在 Hong Kong Physical AI Hackathon 获奖合影',
    facts: ['Hackathon 获奖', '三端联调', '多模态检测'],
    stack: ['Python', 'Flask', 'MediaPipe', 'OpenCV', 'DeepSeek API', 'K3', 'PIPER X'],
    challenge:
      '不是简单计时，而是综合判断用户是否仍在任务状态：进程检测判断软件是否合理，屏幕分析判断内容是否相关，视觉追踪判断用户是否面向屏幕。',
    flow: ['手机创建任务', 'PC 任务理解(LLM)', '前台进程检测', '屏幕截图分析', '摄像头视觉追踪', 'K3 读取状态并反馈'],
    contributions: [
      '设计 PC、手机、K3 之间的 HTTP 拉取式通信协议，PC 作为唯一状态中心。',
      '实现 PC 后端服务，提供任务创建、暂停、继续、停止和状态读取接口。',
      '接入 LLM API 实现任务理解，将自然语言任务映射为允许软件范围。',
      '实现前台进程检测、主屏幕截图分析和摄像头视觉追踪三条检测链路。',
      '处理任务生命周期、视觉进程异常恢复和跨端联调问题。',
    ],
    evidence: [
      'Hong Kong Physical AI Hackathon 现场完成三端联调并获奖。',
      'PC 每 1 秒更新注意力缓存，输出结构化 focus_state 与持续时间。',
      '手机和 K3 均通过标准 HTTP GET 请求读取状态，不依赖 PC 主动推送。',
    ],
    limitations: [
      '屏幕分析依赖外部模型服务，模型可用性影响 scene_label 准确度。',
      '视觉追踪在复杂光照或多人场景下的稳定性有待提升。',
      '当前为 Hackathon 原型，尚未经过长期使用验证。',
    ],
    links: [{ label: '观看 iFocus 项目演示', href: publicLinks.ifocusDemo, kind: 'video' }],
  },
]

const systemTranslationsEn = {
  'uav-usv': {
    title: 'UAV-USV Cooperative Autonomous System',
    shortTitle: 'UAV-USV Cooperative System',
    category: 'Autonomous Robotics / Real Hardware',
    tagline: 'Integrating an unmanned surface vehicle into a physical UAV-USV cooperative system.',
    summary: 'Built, assembled, debugged, and tuned the unmanned surface vehicle platform, connecting vehicle communication, QGC-based ground control, and ROS2 autonomous modules.',
    outcome: 'The physical USV performs motion control, mode switching, following, and circling behaviors.',
    role: 'Core developer for the USV and system integration; UAV-side implementation was outside my scope.',
    imageAlt: 'Physical unmanned surface vehicle test on a campus lake',
    architectureAlt: 'UAV-USV cooperative system architecture',
    facts: ['Real hardware', 'Public demo', 'System integration'],
    challenge: 'This was not a desktop simulation. The USV hardware, flight controller, communications, ground station, and autonomous modules had to work together on a real lake.',
    flow: ['Custom ground station', '4G / MAVLink', 'Jetson / ROS2', 'MAVROS', 'Pixhawk', 'Dual-motor propulsion'],
    contributions: [
      'Built the USV subsystem and completed hardware assembly, wiring, debugging, and parameter tuning.',
      'Developed USV-side code and integrated ROS2, MAVLink, MAVROS, and ArduPilot workflows.',
      'Connected the QGC-derived ground station to the USV communication and control chain.',
    ],
    evidence: [
      'The public demo records physical USV motion control, mode switching, following, and circling behaviors.',
      'The complete configuration includes Jetson Orin Nano, LiDAR, YOLOv8 perception, and DWA obstacle avoidance.',
      'Technical documentation and the architecture diagram further verify the communication, control, and propulsion chain.',
    ],
    limitations: [
      'The current public demo does not show YOLOv8 or DWA functionality.',
      'My responsibilities focused on the USV and system integration; UAV-side implementation is not presented as my contribution.',
    ],
    links: [{ label: 'Watch the public UAV-USV demo', href: publicLinks.uavDemo, kind: 'video' }],
  },
  'thermal-control': {
    title: 'Multi-Channel Thermal Measurement & Control Instrument',
    shortTitle: 'Multi-Channel Thermal Controller',
    category: 'Embedded Control / Measurement System',
    tagline: 'A complete thermal-control prototype from sensor measurement to control algorithms and host software.',
    summary: 'Developed a working STM32H743-based prototype with C/C++ firmware and a Python host interface.',
    outcome: 'Representative PT100 tests covered setpoints from 100 to 300 degrees Celsius.',
    role: 'Project lead and embedded-control developer; I wrote all lower-level firmware.',
    imageAlt: 'Python temperature-control interface at a 150-degree Celsius setpoint',
    facts: ['Undergraduate innovation project completed', 'Complete firmware', 'Representative tests'],
    challenge: 'Multi-channel temperature measurement required coordinating sensor readings, control stability, parameter tuning, serial communication, and host-side visualization.',
    flow: ['PT100 / bridge', 'ADC sampling', 'STM32H743', 'PID / filtering', 'PWM output', 'Python host application'],
    contributions: [
      'Independently wrote all lower-level C/C++ firmware and completed hardware integration.',
      'Implemented auto-tuning PID, Lambda tuning, integral anti-windup, and Kalman filtering.',
      'Replaced the originally planned LabVIEW interface with Python for more flexible integration.',
    ],
    evidence: [
      'The undergraduate innovation project was formally completed.',
      'Across 100-300 degree Celsius setpoints, overshoot remained within 2 degrees Celsius.',
      'After stabilization, fluctuation remained within 0.2 degrees Celsius.',
    ],
    limitations: ['The public page presents representative PT100 tests and does not generalize a single operating point to every condition.'],
    links: [],
  },
  'vr-digital-twin': {
    title: 'Fusion Tokamak VR Digital Twin',
    shortTitle: 'Fusion VR Digital Twin',
    category: 'Digital Twin / XR Interaction',
    tagline: 'Deploying diagnostic data, scientific computing, and immersive interaction to a physical Quest 3 headset.',
    summary: 'Built a fusion tokamak digital twin in Unity, connected dynamic diagnostic data and related computation scripts to an XR scene, and deployed it to Meta Quest 3.',
    outcome: 'Completed a VR digital-twin demo running on a physical Quest 3 headset.',
    role: 'Project lead and XR interaction developer; contributed to PINN-related implementation.',
    imageAlt: 'Fusion tokamak digital twin running in VR',
    architectureAlt: 'Fusion tokamak VR digital-twin architecture',
    facts: ['Physical Quest 3', 'Dynamic diagnostic data', 'Public demo'],
    challenge: 'Scientific data, computation scripts, and 3D models needed clear correspondence inside an interactive XR scene while remaining deployable on physical hardware.',
    flow: ['Diagnostic data', 'Data / computation scripts', 'Unity scene', 'XR interaction', 'Physical Quest 3'],
    contributions: [
      'Organized dynamic diagnostic tables and corresponding data and computation scripts, then connected them to the Unity scene.',
      'Implemented XR interactions and PINN-related computing.',
      'Completed physical Meta Quest 3 deployment and a public demonstration.',
    ],
    evidence: [
      'A public Bilibili video shows the VR system running.',
      'The APK can be shared privately to verify the Quest 3 deployment.',
      'Dynamic tables, data integration, and user interaction form a complete demonstration chain.',
    ],
    limitations: ['Engineering drawings and non-public laboratory assets are not released.'],
    links: [{ label: 'Watch the public VR demo', href: publicLinks.vrDemo, kind: 'video' }],
  },
  emotender: {
    title: 'EmoTender Emotion-Aware Bartending Robot',
    shortTitle: 'EmoTender',
    category: 'AI Agent / Robot Interaction',
    tagline: 'Turning natural conversation into explainable drink concepts and physical robot delivery.',
    summary: 'Built an emotional conversation, drink recommendation, structured robot control, and physical delivery pipeline during a 48-hour hackathon.',
    outcome: 'Completed reception, following, conversation, emotion analysis, drink co-creation, grasping, and delivery.',
    role: 'Software backend and robot-side development',
    imageAlt: 'EmoTender emotion-aware bartending robot project',
    facts: ['48-hour hackathon', 'Agent + Robot', 'Public repository'],
    challenge: 'The robot must convert natural descriptions of emotions and experiences into a validated drink concept, expression, dialogue, and deterministic actions rather than execute unconstrained natural language.',
    flow: ['Voice / text input', 'Agent reasoning', 'Structured control_json', 'WebSocket', 'Robot actions', 'Drink delivery'],
    contributions: [
      'Built the FastAPI Agent backend, short-term dialogue context, recommendation results, and local user-profile pipeline.',
      'Built robot-side real-time communication, visual following, expression states, grasping, and delivery flows.',
      'Separated language-model reasoning from deterministic execution through structured fields, with manual input and teleoperation fallbacks.',
    ],
    evidence: [
      'Voice or text input, multi-turn emotional dialogue, structured control, dynamic expressions, and personalized recommendations were operational.',
      'Visual following, grasping, and delivery completed the on-site handoff loop.',
      'The public repository includes the Agent backend, Android APK, frontend, and tests.',
    ],
    limitations: [
      'Stable, continuous liquid pouring by the robot arm is not complete.',
      'Open-table free grasping, recovery from liquid-handling failures, and preparation without staff involvement remain incomplete.',
    ],
    links: [
      { label: 'Open the EmoTender GitHub repository', href: publicLinks.emotender, kind: 'code' },
      { label: 'Read the EmoTender project retrospective', href: publicLinks.emotenderArticle, kind: 'article' },
    ],
  },
  ifocus: {
    title: 'iFocus: Physical AI System for Attention State Management',
    shortTitle: 'iFocus Attention Assistant',
    category: 'Physical AI / Human-Computer Interaction',
    tagline: 'Connecting task goals, computer behavior, screen content, visual state, and physical feedback into an operational closed loop.',
    summary: 'Built a PC-side attention detection service at the Hong Kong Physical AI Hackathon, combining foreground process detection, screen capture analysis, and camera-based visual tracking to determine user focus state, with structured APIs for a phone and K3 robot.',
    outcome: 'Won the K3 Smart Computing Pioneer Award and completed PC–phone–K3 integration.',
    role: 'PC-side technical architecture and attention detection pipeline development',
    imageAlt: 'iFocus team receiving the award at the Hong Kong Physical AI Hackathon',
    facts: ['Hackathon award', 'Three-device integration', 'Multi-modal detection'],
    challenge: 'Beyond simple timing: process detection checks if the software is reasonable, screen analysis checks if the content is task-relevant, and visual tracking checks if the user is facing the screen.',
    flow: ['Phone creates task', 'PC task understanding (LLM)', 'Foreground process detection', 'Screen capture analysis', 'Camera visual tracking', 'K3 reads state and responds'],
    contributions: [
      'Designed the HTTP pull-based communication protocol between PC, phone, and K3, with PC as the single state authority.',
      'Implemented the PC backend service with task creation, pause, resume, stop, and state query endpoints.',
      'Integrated LLM API for task understanding, mapping natural-language tasks to allowed software ranges.',
      'Implemented three detection pipelines: foreground process detection, screen capture analysis, and camera visual tracking.',
      'Handled task lifecycle management, visual process error recovery, and cross-device integration debugging.',
    ],
    evidence: [
      'Completed three-device integration and won an award at the Hong Kong Physical AI Hackathon.',
      'PC updates the attention cache every second, outputting structured focus_state and state duration.',
      'Both phone and K3 read state via standard HTTP GET requests without relying on PC push.',
    ],
    limitations: [
      'Screen analysis depends on external model service availability, which affects scene_label accuracy.',
      'Visual tracking stability under complex lighting or multi-person scenarios needs improvement.',
      'Current version is a hackathon prototype without long-term usage validation.',
    ],
    links: [{ label: 'Watch the iFocus project demo', href: publicLinks.ifocusDemo, kind: 'video' }],
  },
}

export const systemsEn = systems.map((system) => ({
  ...system,
  ...systemTranslationsEn[system.slug],
}))

export function getSystems(language = 'zh') {
  return language === 'en' ? systemsEn : systems
}

export function getSystem(slug, language = 'zh') {
  return getSystems(language).find((system) => system.slug === slug)
}
