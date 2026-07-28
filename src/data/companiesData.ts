export interface Company {
  id: string;
  name: string;
  logoBg: string;
  logoText: string;
  industry: string;
  companyType: 'Fortune 500' | 'Tech Unicorn' | 'Enterprise' | 'High Growth Startup';
  headquarters: string;
  employeeCount: string;
  rating: number;
  reviewsCount: number;
  openRolesCount: number;
  isFeatured?: boolean;
  website: string;
  foundedYear: number;
  overview: string;
  cultureValues: string[];
  benefits: string[];
  techStack: string[];
  officeLocations: string[];
}

export const US_COMPANIES_DATA: Company[] = [
  {
    id: 'comp-1',
    name: 'CloudScale Systems USA',
    logoBg: 'bg-[#182956]',
    logoText: 'CS',
    industry: 'Cloud Infrastructure & Enterprise SaaS',
    companyType: 'Enterprise',
    headquarters: 'San Francisco, CA',
    employeeCount: '2,500 - 5,000 employees',
    rating: 4.8,
    reviewsCount: 342,
    openRolesCount: 24,
    isFeatured: true,
    website: 'https://cloudscalesystems.us',
    foundedYear: 2016,
    overview: 'CloudScale Systems USA powers multi-cloud deployment automation and security monitoring for over 800 Fortune 500 corporations across North America.',
    cultureValues: [
      'Customer-Centric Innovation',
      'Radical Transparency & Open Communication',
      'Continuous Technical Mastery',
      'Diversity, Equity & Inclusion in Tech'
    ],
    benefits: [
      '100% Paid Healthcare Premiums (Medical, Dental, Vision)',
      '6% 401(k) Employer Matching',
      '$2,500 Annual Learning & Conference Budget',
      'Unlimited Paid Time Off (PTO)',
      'Stock Equity Program (RSUs)'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Go', 'Kubernetes', 'AWS', 'PostgreSQL'],
    officeLocations: ['San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA']
  },
  {
    id: 'comp-2',
    name: 'Apex Intelligence Labs',
    logoBg: 'bg-[#F66E3B]',
    logoText: 'AI',
    industry: 'Artificial Intelligence & Machine Learning',
    companyType: 'Tech Unicorn',
    headquarters: 'New York, NY',
    employeeCount: '500 - 1,000 employees',
    rating: 4.9,
    reviewsCount: 512,
    openRolesCount: 18,
    isFeatured: true,
    website: 'https://apexintel.ai',
    foundedYear: 2020,
    overview: 'Apex Intelligence Labs builds foundational LLM enterprise platforms, real-time vector databases, and agentic workflows for major US financial and biomedical enterprises.',
    cultureValues: [
      'Frontier Research Driven',
      'Speed with Safety & Ethics',
      'Ownership Mentality',
      'Collaborative Excellence'
    ],
    benefits: [
      '7% 401(k) Employer Match',
      'Comprehensive Family Health Coverage',
      '$3,000 Annual Conference Stipend',
      'Remote-First Work Options',
      'Generous Equity Grant'
    ],
    techStack: ['Python', 'PyTorch', 'C++', 'CUDA', 'Pinecone', 'TypeScript', 'Docker'],
    officeLocations: ['New York, NY', 'San Francisco, CA', 'Boston, MA']
  },
  {
    id: 'comp-3',
    name: 'Vanguard FinTech Group',
    logoBg: 'bg-[#182956]',
    logoText: 'VF',
    industry: 'Financial Technology & Payments',
    companyType: 'Fortune 500',
    headquarters: 'Austin, TX',
    employeeCount: '10,000+ employees',
    rating: 4.7,
    reviewsCount: 189,
    openRolesCount: 32,
    isFeatured: false,
    website: 'https://vanguardfintech.com',
    foundedYear: 2008,
    overview: 'Vanguard FinTech Group provides secure payment processing, wealth management APIs, and consumer banking infrastructure trusted by millions of Americans every day.',
    cultureValues: [
      'Financial Integrity & Security',
      'Relentless User Experience Optimization',
      'Data-Driven Decision Making',
      'Community Philanthropy'
    ],
    benefits: [
      '5% 401(k) Instant Match',
      '16 Weeks Paid Parental Leave',
      'On-site Fitness Center & Gym Subsidies',
      'Commuter Benefits & Transit Passes',
      'Annual Performance Bonus'
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'Kafka', 'Oracle', 'AWS'],
    officeLocations: ['Austin, TX', 'Chicago, IL', 'Atlanta, GA', 'New York, NY']
  },
  {
    id: 'comp-4',
    name: 'CyberShield America',
    logoBg: 'bg-[#FCB2B1]',
    logoText: 'CS',
    industry: 'Cybersecurity & Defense Tech',
    companyType: 'Enterprise',
    headquarters: 'Washington, DC',
    employeeCount: '1,000 - 2,500 employees',
    rating: 4.9,
    reviewsCount: 275,
    openRolesCount: 15,
    isFeatured: true,
    website: 'https://cybershield.gov-tech.com',
    foundedYear: 2012,
    overview: 'CyberShield America delivers FedRAMP-certified zero-trust security architecture, threat detection engines, and compliance management tools for critical national infrastructure.',
    cultureValues: [
      'Mission-Critical Reliability',
      'Vigilance & Continuous Threat Assessment',
      'Integrity First',
      'Empowering Technical Leaders'
    ],
    benefits: [
      '8% TSP/401(k) Employer Contribution',
      'Top-Tier Federal Standard Health Benefits',
      'Relocation Assistance Grants',
      'Tuition Reimbursement Program',
      'Certification Support'
    ],
    techStack: ['Rust', 'Go', 'Python', 'Splunk', 'Kubernetes', 'AWS FedRAMP'],
    officeLocations: ['Washington, DC', 'Arlington, VA', 'Denver, CO']
  },
  {
    id: 'comp-5',
    name: 'NextGen Mobility Solutions',
    logoBg: 'bg-[#F66E3B]',
    logoText: 'NM',
    industry: 'CleanTech & Electric Mobility',
    companyType: 'High Growth Startup',
    headquarters: 'Seattle, WA',
    employeeCount: '250 - 500 employees',
    rating: 4.6,
    reviewsCount: 142,
    openRolesCount: 12,
    isFeatured: false,
    website: 'https://nextgenmobility.us',
    foundedYear: 2021,
    overview: 'NextGen Mobility builds smart charging telemetry, fleet automation, and commercial EV routing software accelerating America’s clean transportation transition.',
    cultureValues: [
      'Sustainable Future First',
      'Bold Product Architecture',
      'Inclusive Remote Culture',
      'Agile Execution'
    ],
    benefits: [
      '5% 401(k) Matching',
      '$1,500 Annual Home Office Grant',
      'Electric Vehicle Subsidy Discount',
      'Flex Work Schedule Across US Timezones',
      'Health & Wellness Reimbursement'
    ],
    techStack: ['Figma', 'React Native', 'GraphQL', 'Node.js', 'PostgreSQL', 'MQTT'],
    officeLocations: ['Seattle, WA', 'Portland, OR', 'San Jose, CA']
  },
  {
    id: 'comp-6',
    name: 'BioHealth America',
    logoBg: 'bg-[#FCB2B1]',
    logoText: 'BH',
    industry: 'Health Tech & Biotechnology',
    companyType: 'Enterprise',
    headquarters: 'Boston, MA',
    employeeCount: '5,000 - 10,000 employees',
    rating: 4.9,
    reviewsCount: 410,
    openRolesCount: 29,
    isFeatured: true,
    website: 'https://biohealthamerica.com',
    foundedYear: 2005,
    overview: 'BioHealth America pioneered predictive health informatics, genomic diagnostic platforms, and digital healthcare delivery for top medical systems across the US.',
    cultureValues: [
      'Patient-First Integrity',
      'Scientific Precision',
      'Cross-Disciplinary Synergy',
      'Lifelong Learning'
    ],
    benefits: [
      '7% 401(k) Employer Match',
      'Harvard Pilgrim Health Plans',
      '4-Week Paid Sabbatical Program',
      'Boston Biotech Transit Pass',
      'Childcare Assistance Support'
    ],
    techStack: ['Python', 'Snowflake', 'R', 'React', 'FHIR API', 'AWS HealthLake'],
    officeLocations: ['Boston, MA', 'Cambridge, MA', 'Raleigh, NC']
  }
];

export const COMPANY_TYPES = [
  'All Company Types',
  'Fortune 500',
  'Tech Unicorn',
  'Enterprise',
  'High Growth Startup'
];

export const COMPANY_INDUSTRIES = [
  'All Industries',
  'Cloud Infrastructure & Enterprise SaaS',
  'Artificial Intelligence & Machine Learning',
  'Financial Technology & Payments',
  'Cybersecurity & Defense Tech',
  'CleanTech & Electric Mobility',
  'Health Tech & Biotechnology'
];
