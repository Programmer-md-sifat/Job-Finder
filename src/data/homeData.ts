export interface JobCategory {
  id: string;
  name: string;
  rolesCount: string;
  iconName: string;
  description: string;
  avgSalary: string;
  topCompanies: string[];
}

export const POPULAR_CATEGORIES: JobCategory[] = [
  {
    id: 'cat-1',
    name: 'Software Engineering',
    rolesCount: '28,400+ Active Jobs',
    iconName: 'Code',
    description: 'Frontend, Backend, Full Stack, Mobile, and Distributed Cloud Systems.',
    avgSalary: '$145,000 / yr',
    topCompanies: ['CloudScale', 'Microsoft', 'Google', 'Amazon']
  },
  {
    id: 'cat-2',
    name: 'AI & Data Science',
    rolesCount: '19,200+ Active Jobs',
    iconName: 'Brain',
    description: 'LLMs, Machine Learning, Computer Vision, and MLOps Infrastructure.',
    avgSalary: '$165,000 / yr',
    topCompanies: ['Apex AI', 'OpenAI', 'Anthropic', 'NVIDIA']
  },
  {
    id: 'cat-3',
    name: 'Product & Project Management',
    rolesCount: '14,100+ Active Jobs',
    iconName: 'Kanban',
    description: 'Technical Product Management, Agile Delivery, and Growth Strategy.',
    avgSalary: '$150,000 / yr',
    topCompanies: ['Vanguard FinTech', 'Salesforce', 'Meta', 'Stripe']
  },
  {
    id: 'cat-4',
    name: 'Cybersecurity & Infrastructure',
    rolesCount: '11,800+ Active Jobs',
    iconName: 'ShieldCheck',
    description: 'Zero Trust Architecture, Cloud Security, Incident Response, and DevSecOps.',
    avgSalary: '$155,000 / yr',
    topCompanies: ['CyberShield', 'CrowdStrike', 'Palo Alto Networks']
  },
  {
    id: 'cat-5',
    name: 'UX/UI & Product Design',
    rolesCount: '9,500+ Active Jobs',
    iconName: 'Palette',
    description: 'Design Systems, User Research, Interaction Design, and Motion UX.',
    avgSalary: '$135,000 / yr',
    topCompanies: ['Figma', 'Airbnb', 'Apple', 'NextGen Mobility']
  },
  {
    id: 'cat-6',
    name: 'Cloud & DevOps Engineering',
    rolesCount: '16,700+ Active Jobs',
    iconName: 'Cloud',
    description: 'Kubernetes, Terraform, AWS, Azure, GCP, and Observability Pipelines.',
    avgSalary: '$148,000 / yr',
    topCompanies: ['Datadog', 'HashiCorp', 'Quantum Logic', 'Snowflake']
  },
  {
    id: 'cat-7',
    name: 'Healthcare & HealthTech',
    rolesCount: '12,300+ Active Jobs',
    iconName: 'Activity',
    description: 'Health Informatics, FHIR Architecture, Bio-Data Analytics, Telehealth.',
    avgSalary: '$140,000 / yr',
    topCompanies: ['BioHealth America', 'Epic Systems', 'UnitedHealth']
  },
  {
    id: 'cat-8',
    name: 'FinTech & Quant Finance',
    rolesCount: '15,600+ Active Jobs',
    iconName: 'TrendingUp',
    description: 'Algorithmic Trading, Financial Data Engineering, Risk & Compliance APIs.',
    avgSalary: '$175,000 / yr',
    topCompanies: ['Citadel', 'Jane Street', 'Vanguard', 'Square']
  },
  {
    id: 'cat-9',
    name: 'Hardware & Systems',
    rolesCount: '8,200+ Active Jobs',
    iconName: 'Cpu',
    description: 'Silicon Design, Embedded Systems, Robotics, and IoT Hardware Infrastructure.',
    avgSalary: '$152,000 / yr',
    topCompanies: ['Apple', 'NVIDIA', 'Intel', 'Tesla']
  }
];

export const USA_TECH_HUBS = [
  { city: 'San Francisco, CA', jobs: '34,200+', growth: '+14% YoY', topSector: 'AI & Cloud SaaS' },
  { city: 'New York, NY', jobs: '29,800+', growth: '+18% YoY', topSector: 'FinTech & Media Tech' },
  { city: 'Austin, TX', jobs: '18,500+', growth: '+22% YoY', topSector: 'Enterprise & Chips' },
  { city: 'Seattle, WA', jobs: '22,100+', growth: '+12% YoY', topSector: 'Cloud & E-Commerce' },
  { city: 'Chicago, IL', jobs: '14,300+', growth: '+10% YoY', topSector: 'Prop Trading & Logistics' },
  { city: 'Remote - USA', jobs: '42,000+', growth: '+28% YoY', topSector: 'Full Stack & AI Ops' }
];

export const SALARY_BENCHMARKS = [
  { role: 'Staff / Principal AI Engineer', entry: '$160,000', mid: '$210,000', senior: '$280,000+' },
  { role: 'Senior React / Full Stack Engineer', entry: '$110,000', mid: '$150,000', senior: '$195,000+' },
  { role: 'Lead DevOps / SRE Specialist', entry: '$115,000', mid: '$155,000', senior: '$205,000+' },
  { role: 'Senior Technical Product Manager', entry: '$120,000', mid: '$160,000', senior: '$215,000+' },
  { role: 'Principal Cyber Security Architect', entry: '$130,000', mid: '$175,000', senior: '$230,000+' }
];

export const INTERVIEW_QUESTIONS = [
  {
    company: 'Google US',
    role: 'Senior Software Engineer',
    topic: 'System Design',
    question: 'How would you design a globally distributed real-time chat application with 100M active daily users in the US?',
    difficulty: 'Hard',
    keyTips: ['Focus on WebSocket connection pooling', 'Partition database by Chat ID', 'Use Redis Pub/Sub for cross-region messaging']
  },
  {
    company: 'Amazon US',
    role: 'Technical Product Manager',
    topic: 'Leadership Principles & Execution',
    question: 'Describe a time you used data to make a high-stakes decision when 80% of data was missing.',
    difficulty: 'Medium',
    keyTips: ['Use STAR method (Situation, Task, Action, Result)', 'Emphasize Bias for Action and Customer Obsession', 'Quantify outcome with USD revenue or time saved']
  },
  {
    company: 'Microsoft US',
    role: 'Full Stack Engineer',
    topic: 'React Performance Optimization',
    question: 'Explain how React 19 server components and concurrent rendering optimize bundle sizes for high-traffic web applications.',
    difficulty: 'Medium',
    keyTips: ['Discuss zero-bundle-size server rendering', 'Explain streaming SSR with Suspense', 'Highlight hydration performance gains']
  },
  {
    company: 'Meta US',
    role: 'Data Scientist',
    topic: 'Experimentation & A/B Testing',
    question: 'How do you detect and mitigate network effects or user contamination in social product experiments?',
    difficulty: 'Hard',
    keyTips: ['Cluster-based randomization', 'Ego-network graph partitioning', 'Difference-in-differences statistical modeling']
  }
];

export const HOME_STATS = [
  { number: '150,000+', label: 'Active US Jobs' },
  { number: '12,500+', label: 'Verified US Employers' },
  { number: '$142,000', label: 'Average Placed Salary' },
  { number: '98.4%', label: 'Placement Success Rate' }
];
