const profile = {
  name: 'RickSanchezC5163',
  role: '学习型开发者 / 论文记录者',
  status: '持续升级中',
  bio: '我把课程资料、论文阅读和项目实验统一整理在这里。目标不是简单收藏，而是把每一次输入都沉淀成下一次可以直接调用的知识模块。',
  mission: '当前重点关注大模型应用、工程实现和系统化学习方法，喜欢把抽象概念拆成能复现、能比较、能真正落地的实践。',
  focus: ['LLM 应用', 'NLP', '系统设计', '工程效率'],
  current: [
    '保持稳定的论文阅读节奏，并把重点结论写成可检索笔记',
    '把零散课程资料整理成带标签的长期资料库',
    '围绕小型项目验证想法，尽量让学习结果变成真实产出'
  ],
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/RickSanchezC5163'
    },
    {
      label: 'Repository',
      url: 'https://github.com/RickSanchezC5163/personalWebsite'
    }
  ]
};

const resources = [
  {
    title: 'CS224N 课程笔记',
    type: '课程',
    tags: ['NLP', 'Transformer', '基础'],
    summary: '系统梳理 NLP 经典模型到大模型时代演进，适合作为长期复习素材。',
    link: 'https://web.stanford.edu/class/cs224n/'
  },
  {
    title: '深入理解操作系统',
    type: '书籍',
    tags: ['系统', '基础'],
    summary: '按进程、内存、I/O 维度整理难点，重点记录原理 + 代码案例。',
    link: '#'
  },
  {
    title: 'PyTorch 实战模板',
    type: '项目',
    tags: ['工程', '深度学习'],
    summary: '包含训练脚手架、日志管理与实验复现清单，便于快速启动实验。',
    link: '#'
  },
  {
    title: '检索增强生成（RAG）资料清单',
    type: '专题',
    tags: ['LLM', 'RAG', '工程'],
    summary: '收集检索、重排、评测指标和部署策略，方便做技术选型。',
    link: '#'
  }
];

const blogs = [
  {
    title: '论文拆解：Attention Is All You Need',
    date: '2026-03-20',
    tags: ['Transformer', 'NLP'],
    summary: '聚焦多头注意力设计动机与位置编码局限，补充了对现代变体的对比。'
  },
  {
    title: '论文复盘：LoRA 参数高效微调',
    date: '2026-03-22',
    tags: ['LLM', '微调'],
    summary: '分析低秩分解为何能显著减少训练参数，并给出项目落地建议。'
  },
  {
    title: '论文阅读：Segment Anything Model',
    date: '2026-03-23',
    tags: ['CV', '基础模型'],
    summary: '总结提示驱动分割的交互范式，以及通用视觉系统的产品化价值。'
  }
];
