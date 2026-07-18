export const skillGroups = [
  {
    id: 'autonomous-systems',
    index: '01',
    title: '自主系统',
    description: '从环境感知、路径规划到飞控通信的自主机器人工作流。',
    skills: ['ROS2 导航工作流', '环境感知', 'A* 路径规划', 'DWA 避障', 'YOLO 目标检测', 'MAVLink', 'MAVROS', 'ArduPilot'],
    evidence: [
      { label: '无人机-无人船协同自主系统', href: '/systems/uav-usv' },
    ],
  },
  {
    id: 'control-estimation',
    index: '02',
    title: '控制与估计',
    description: '反馈控制、参数整定与状态估计在真实原型中的实现。',
    skills: ['反馈控制', 'PID', '自整定 PID', 'MPC', 'Lambda 整定', '卡尔曼滤波'],
    evidence: [
      { label: '多通道热测量与控温仪', href: '/systems/thermal-control' },
      { label: '无人机-无人船协同自主系统', href: '/systems/uav-usv' },
    ],
  },
  {
    id: 'embedded-integration',
    index: '03',
    title: '嵌入式与集成',
    description: '固件、传感器、执行器与上位机之间的完整调试链路。',
    skills: ['STM32H743', 'C/C++', 'Python', 'ADC/PWM', '传感器接口', '硬件接线', '系统调试'],
    evidence: [
      { label: '多通道热测量与控温仪', href: '/systems/thermal-control' },
      { label: '无人机-无人船协同自主系统', href: '/systems/uav-usv' },
    ],
  },
  {
    id: 'simulation-ai',
    index: '04',
    title: '仿真与 AI 工具',
    description: '科学计算、沉浸式交互与 AI 原生工作流的组合。',
    skills: ['Unity', 'Meta Quest 3', 'XR Interaction Toolkit', 'PINN 相关计算', 'Dify / Codex 工作流', 'GitHub 文档化'],
    evidence: [
      { label: '聚变托卡马克 VR 数字孪生', href: '/systems/vr-digital-twin' },
      { label: 'AI 工具流', href: '/ai-workflows' },
    ],
  },
]

