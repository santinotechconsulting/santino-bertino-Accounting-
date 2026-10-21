export type OrganizationType = 'SME' | 'Startup' | 'NGO' | 'Other';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: string[];
  bestFor: string;
  iconName: string;
}

export interface QualificationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  year?: string;
  statusText?: string;
  description: string;
  badge?: string;
  type: 'academic' | 'professional';
}

export interface ExperienceCategory {
  id: string;
  sectorName: string;
  headline: string;
  description: string;
  responsibilities: string[];
  keyExposure: string[];
  impactStatement: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  category: string;
  image: string;
  challenge: string;
  approach: string;
  workDone: string[];
  outcome: string;
  isIllustrative: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: 'SME Accounting' | 'Startups' | 'NGO Accountability' | 'Internal Controls' | 'Financial Literacy';
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface ContactSubmission {
  fullName: string;
  email: string;
  telephone: string;
  organizationName: string;
  organizationType: OrganizationType;
  serviceRequired: string;
  engagementMode: 'Remote (Worldwide)' | 'On-Site' | 'Hybrid';
  message: string;
  consent: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  sector: 'SME' | 'Startup' | 'NGO' | 'Banking & Corporate';
  engagementType: string;
  location: string;
  verified: boolean;
  permissionToPublish: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Services & Scope' | 'Billing & Pricing' | 'Consultations & Location' | 'Data Security & Software';
}


