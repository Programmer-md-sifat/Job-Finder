export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogoBg: string;
  companyLogoText: string;
  location: string;
  stateCode: string;
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: string;
  experienceLevel: 'Entry Level' | 'Mid Level' | 'Senior' | 'Lead' | 'Executive';
  department: 'Engineering' | 'Product' | 'Data & AI' | 'Design' | 'Marketing' | 'Finance' | 'Healthcare';
  jobType: 'Full-time' | 'Contract' | 'Part-time';
  postedDate: string;
  isFeatured?: boolean;
  isUrgent?: boolean;
  rating: number;
  reviewsCount: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  tags: string[];
}

export const US_JOBS_DATA: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Full Stack Engineer (React & Node.js)',
    company: 'CloudScale Systems USA',
    companyLogoBg: 'bg-[#182956]',
    companyLogoText: 'CS',
    location: 'San Francisco, CA',
    stateCode: 'CA',
    workMode: 'Hybrid',
    salaryMin: 155000,
    salaryMax: 195000,
    salaryPeriod: 'year',
    experienceLevel: 'Senior',
    department: 'Engineering',
    jobType: 'Full-time',
    postedDate: '2 hours ago',
    isFeatured: true,
    isUrgent: true,
    rating: 4.8,
    reviewsCount: 342,
    description: 'CloudScale Systems is looking for a Senior Full Stack Engineer to build high-throughput cloud infrastructure dashboards and developer portals serving enterprise Fortune 500 clients across North America.',
    responsibilities: [
      'Architect and deliver scalable frontend interfaces using React 19, TypeScript, and micro-frontend architectures.',
      'Build robust RESTful and GraphQL APIs on Node.js / Express deployed via AWS Elastic Kubernetes Service.',
      'Optimize web vitals, bundle footprints, and real-time WebSocket data feeds for mission-critical telemetry.',
      'Mentor junior engineers and collaborate directly with US product design and engineering leads.'
    ],
    requirements: [
      '5+ years of experience building modern web applications with React and Node.js in the US tech market.',
      'Strong expertise in TypeScript, state management, web performance, and Tailwind CSS.',
      'Experience with PostgreSQL, Redis, and distributed cloud microservices.',
      'Authorization to work in the United States (US Citizen / Green Card / Valid Work Visa).'
    ],
    benefits: [
      '401(k) matching up to 6% with immediate vesting',
      '100% employer-paid Health, Dental, and Vision insurance',
      '$2,500 annual home office & tech equipment stipend',
      'Unlimited Paid Time Off (PTO) with 3 weeks mandatory minimum',
      'Competitive Equity / Stock Options package'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL']
  },
  {
    id: 'job-2',
    title: 'Lead AI Infrastructure Engineer',
    company: 'Apex Intelligence Labs',
    companyLogoBg: 'bg-[#F66E3B]',
    companyLogoText: 'AI',
    location: 'New York, NY',
    stateCode: 'NY',
    workMode: 'Remote',
    salaryMin: 180000,
    salaryMax: 230000,
    salaryPeriod: 'year',
    experienceLevel: 'Lead',
    department: 'Data & AI',
    jobType: 'Full-time',
    postedDate: '1 day ago',
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 512,
    description: 'Join Apex Intelligence Labs in Wall Street, NYC or fully remote within the US. We are engineering Next-Gen Large Language Model orchestration pipelines for premier US financial institutions.',
    responsibilities: [
      'Design high-performance distributed AI inference servers with GPU cluster orchestration.',
      'Implement real-time vector embedding search indexing using Pinecone, Milvus, and Redis Enterprise.',
      'Collaborate with quantitative researchers and AI safety engineers to deploy compliant LLM agents.',
      'Lead infrastructure scalability reviews and maintain SOC2 Compliance standards.'
    ],
    requirements: [
      '6+ years in software engineering with a focus on machine learning infrastructure or distributed systems.',
      'Proficiency in Python, C++, or Go, alongside TypeScript web API proxies.',
      'Deep knowledge of PyTorch, CUDA, vLLM, and LLM fine-tuning pipelines.',
      'BS or MS in Computer Science or related quantitative field.'
    ],
    benefits: [
      '401(k) retirement plan with 7% match',
      'Comprehensive medical insurance (PPO/HSA options)',
      '$3,000 annual conference & continuous learning stipend',
      'Flexible remote work setup allowance',
      'Annual discretionary performance bonus (up to 25%)'
    ],
    tags: ['Python', 'LLMs', 'PyTorch', 'Vector DB', 'Go']
  },
  {
    id: 'job-3',
    title: 'Senior Product Manager - Consumer Fintech',
    company: 'Vanguard FinTech Group',
    companyLogoBg: 'bg-[#182956]',
    companyLogoText: 'VF',
    location: 'Austin, TX',
    stateCode: 'TX',
    workMode: 'Hybrid',
    salaryMin: 145000,
    salaryMax: 185000,
    salaryPeriod: 'year',
    experienceLevel: 'Senior',
    department: 'Product',
    jobType: 'Full-time',
    postedDate: '3 hours ago',
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 189,
    description: 'Vanguard FinTech Group is seeking a visionary Product Manager in Austin, TX to drive user acquisition, onboarding checkout friction reduction, and personal wealth management tools for 2M+ active US users.',
    responsibilities: [
      'Define product roadmap and growth metrics for mobile and web payment platforms.',
      'Conduct user interviews, A/B experiments, and conversion rate optimization (CRO).',
      'Work closely with UX designers, data analysts, and compliance officers.',
      'Present product vision and quarter-over-quarter milestones to executive stakeholders.'
    ],
    requirements: [
      '4+ years of product management experience in US fintech, banking, or SaaS.',
      'Strong quantitative analytical skills with Mixpanel, Amplitude, or SQL proficiency.',
      'Proven track record of launching consumer-facing digital financial products.',
      'Excellent verbal and written communication skills.'
    ],
    benefits: [
      '401(k) with immediate 5% employer match',
      'Health, Dental, and Vision (Aetna / Cigna network)',
      'Parental Leave: 16 weeks fully paid for all new parents',
      'On-site gym pass & monthly wellness allowance ($150/mo)',
      'Commuter benefit program for Austin office commuters'
    ],
    tags: ['Product Strategy', 'FinTech', 'A/B Testing', 'Agile', 'SQL']
  },
  {
    id: 'job-4',
    title: 'Staff Cyber Security Architect',
    company: 'CyberShield America',
    companyLogoBg: 'bg-[#FCB2B1]',
    companyLogoText: 'CS',
    location: 'Washington, DC',
    stateCode: 'DC',
    workMode: 'On-site',
    salaryMin: 170000,
    salaryMax: 215000,
    salaryPeriod: 'year',
    experienceLevel: 'Lead',
    department: 'Engineering',
    jobType: 'Full-time',
    postedDate: '2 days ago',
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 275,
    description: 'Protect vital US digital infrastructure. CyberShield America is hiring a Staff Security Architect in Washington DC to fortify zero-trust cloud perimeters for healthcare and federal government agencies.',
    responsibilities: [
      'Formulate Zero-Trust architecture standards across hybrid AWS, Azure, and multi-tenant environments.',
      'Conduct penetration testing, threat modeling, and incident response drills.',
      'Ensure compliance with NIST 800-53, FedRAMP High, and HIPAA regulations.',
      'Lead red team / blue team security audits and vulnerability mitigations.'
    ],
    requirements: [
      '8+ years in information security, threat analysis, or cloud security engineering.',
      'Active CISSP, CISM, or AWS Certified Security Specialty certifications highly preferred.',
      'Experience with SIEM tools (Splunk, Datadog Security) and automated threat detection.',
      'Must pass standard US background check & clearance verification.'
    ],
    benefits: [
      'Federal-standard healthcare options with comprehensive family coverage',
      'Thrift Savings Plan / 401(k) match up to 8%',
      'Relocation assistance package for Washington DC metro area',
      'Annual security certification renewal reimbursement',
      'Tuition reimbursement for advanced cyber security degrees'
    ],
    tags: ['Cybersecurity', 'Zero Trust', 'AWS', 'FedRAMP', 'NIST']
  },
  {
    id: 'job-5',
    title: 'Lead UI/UX Designer & Design System Specialist',
    company: 'NextGen Mobility Solutions',
    companyLogoBg: 'bg-[#F66E3B]',
    companyLogoText: 'NM',
    location: 'Seattle, WA',
    stateCode: 'WA',
    workMode: 'Remote',
    salaryMin: 135000,
    salaryMax: 175000,
    salaryPeriod: 'year',
    experienceLevel: 'Senior',
    department: 'Design',
    jobType: 'Full-time',
    postedDate: '5 hours ago',
    isFeatured: false,
    rating: 4.6,
    reviewsCount: 142,
    description: 'Craft beautiful, accessible electric vehicle fleet management software and rider apps. NextGen Mobility is looking for a Lead UI/UX Designer based remotely in the United States.',
    responsibilities: [
      'Evolve and maintain our multi-platform Figma design system utilized by 40+ product engineers.',
      'Create high-fidelity interactive prototypes, user journey flows, and component guidelines.',
      'Conduct usability testing sessions with commercial EV drivers and logistics dispatchers.',
      'Partner with accessibility engineers to guarantee WCAG 2.1 AA compliance across all platforms.'
    ],
    requirements: [
      '5+ years of digital product design experience with complex web and mobile apps.',
      'Expertise in Figma, Tokens Studio, interactive prototyping, and design tokens.',
      'Solid understanding of HTML/CSS capabilities and mobile design constraints.',
      'Strong portfolio demonstrating systemic design thinking and clean visual hierarchy.'
    ],
    benefits: [
      '401(k) matching up to 5%',
      'Medical, Dental, Vision insurance',
      '$1,500 annual home workstation upgrade grant',
      'Flexible working hours across US time zones',
      'Electric vehicle lease discount program'
    ],
    tags: ['Figma', 'Design Systems', 'UX Research', 'Prototyping', 'WCAG']
  },
  {
    id: 'job-6',
    title: 'Senior DevOps & Cloud Operations Engineer',
    company: 'Quantum Logic US',
    companyLogoBg: 'bg-[#182956]',
    companyLogoText: 'QL',
    location: 'Chicago, IL',
    stateCode: 'IL',
    workMode: 'Hybrid',
    salaryMin: 140000,
    salaryMax: 180000,
    salaryPeriod: 'year',
    experienceLevel: 'Senior',
    department: 'Engineering',
    jobType: 'Full-time',
    postedDate: '1 day ago',
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 220,
    description: 'Scale our cloud computing footprint across East & West Coast US datacenters. Quantum Logic is hiring a Senior DevOps Engineer in Chicago, IL.',
    responsibilities: [
      'Manage Infrastructure as Code (IaC) using Terraform, Ansible, and Helm charts.',
      'Maintain automated CI/CD deployment pipelines using GitHub Actions and ArgoCD.',
      'Ensure 99.99% uptime for high-availability enterprise Kubernetes clusters.',
      'Implement proactive observability dashboards using Prometheus, Grafana, and OpenTelemetry.'
    ],
    requirements: [
      '5+ years hands-on experience managing production AWS or GCP environments.',
      'Deep knowledge of Docker, Kubernetes administration, Linux systems, and Shell scripting.',
      'Strong background in security hardening, IAM policies, and VPC peering.',
      'BS in Computer Science or equivalent practical experience.'
    ],
    benefits: [
      '401(k) with 6% company match',
      'Full health, vision, and dental coverage',
      'Chicago office meal subsidies & parking allowance',
      '18 days PTO + 11 Federal Paid Holidays',
      'Life insurance & short/long-term disability'
    ],
    tags: ['Kubernetes', 'Terraform', 'AWS', 'Docker', 'CI/CD']
  },
  {
    id: 'job-7',
    title: 'Principal Data Scientist - Health Informatics',
    company: 'BioHealth America',
    companyLogoBg: 'bg-[#FCB2B1]',
    companyLogoText: 'BH',
    location: 'Boston, MA',
    stateCode: 'MA',
    workMode: 'Hybrid',
    salaryMin: 165000,
    salaryMax: 210000,
    salaryPeriod: 'year',
    experienceLevel: 'Executive',
    department: 'Healthcare',
    jobType: 'Full-time',
    postedDate: '4 days ago',
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 410,
    description: 'Transform US patient outcomes through predictive health telemetry analytics. BioHealth America is headquartered in Boston’s premier biotech hub.',
    responsibilities: [
      'Develop predictive ML algorithms for early diagnosis and clinical decision support systems.',
      'Analyze vast anonymized electronic health records (EHR) adhering to HIPAA standards.',
      'Publish research findings and patent innovative medical AI algorithms.',
      'Lead a team of 6 PhD data scientists and biostatisticians.'
    ],
    requirements: [
      'Master’s or PhD in Data Science, Biostatistics, Computer Science, or Biomedical Engineering.',
      'Proficiency in Python (Scikit-Learn, TensorFlow/PyTorch), R, and SQL on Snowflake.',
      'Prior experience with healthcare data standards (FHIR, HL7, ICD-10).',
      'Published research or industry patents are a strong plus.'
    ],
    benefits: [
      '401(k) match up to 7%',
      'Premium Harvard Pilgrim / Blue Cross Blue Shield medical plans',
      'Sabbatical program (4 weeks paid sabbatical every 4 years)',
      'Boston biotech transit allowance',
      'Generous employee wellness grants ($1,000/yr)'
    ],
    tags: ['Python', 'Machine Learning', 'Healthcare', 'FHIR', 'Snowflake']
  },
  {
    id: 'job-8',
    title: 'Senior Growth Marketing Manager',
    company: 'OmniRetail US',
    companyLogoBg: 'bg-[#F66E3B]',
    companyLogoText: 'OR',
    location: 'Atlanta, GA',
    stateCode: 'GA',
    workMode: 'Remote',
    salaryMin: 125000,
    salaryMax: 160000,
    salaryPeriod: 'year',
    experienceLevel: 'Mid Level',
    department: 'Marketing',
    jobType: 'Full-time',
    postedDate: '3 days ago',
    isFeatured: false,
    rating: 4.5,
    reviewsCount: 168,
    description: 'Drive multi-channel digital customer acquisition for one of America’s fastest-growing e-commerce marketplaces.',
    responsibilities: [
      'Manage $5M+ annual US performance marketing budget across Google Ads, Meta, LinkedIn, and TikTok.',
      'Optimize customer lifetime value (LTV) to customer acquisition cost (CAC) ratios.',
      'Oversee SEO content strategies, email marketing automation, and affiliate partnerships.',
      'Report weekly growth metrics directly to the Chief Marketing Officer.'
    ],
    requirements: [
      '4+ years managing digital performance marketing campaigns in the US e-commerce sector.',
      'Expertise in Google Analytics 4, Meta Business Manager, Search Console, and Hubspot.',
      'Strong analytical mindset with advanced Excel/Google Sheets modeling skills.',
      'Proven experience scaling D2C or B2B2C user acquisition campaigns.'
    ],
    benefits: [
      '401(k) with 4% match',
      'Comprehensive health, dental, and vision insurance',
      '$1,200 remote office perk stipend',
      'Annual company retreat in key US destinations',
      'Employee merchandise discounts (up to 40%)'
    ],
    tags: ['Growth Marketing', 'Google Ads', 'SEO', 'Analytics', 'Meta Ads']
  }
];

export const JOB_LOCATIONS_USA = [
  'All US Locations',
  'San Francisco, CA',
  'New York, NY',
  'Austin, TX',
  'Seattle, WA',
  'Chicago, IL',
  'Boston, MA',
  'Washington, DC',
  'Atlanta, GA',
  'Los Angeles, CA',
  'Denver, CO',
  'Remote - USA'
];

export const JOB_DEPARTMENTS = [
  'All Departments',
  'Engineering',
  'Product',
  'Data & AI',
  'Design',
  'Marketing',
  'Finance',
  'Healthcare'
];
