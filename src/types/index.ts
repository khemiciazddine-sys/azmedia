export type CategorySlug =
  | 'ai-tools'
  | 'saas-reviews'
  | 'email-marketing'
  | 'crm-software'
  | 'marketing-automation'
  | 'productivity-tools'
  | 'business-growth-guides';

export interface Category {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  billingPeriod: string;
  features: string[];
  isPopular?: boolean;
}

export interface ReviewPricing {
  startingPrice: string;
  billingCycle: string;
  freePlanAvailable: boolean;
  freeTrialAvailable: boolean;
  freeTrialDays?: number;
  officialPricingUrl: string;
  lastVerifiedDate: string;
  plans: PricingPlan[];
  pricingNote?: string;
}

export interface ReviewAlternative {
  name: string;
  slug?: string;
  differenceNote: string;
}

export interface Review {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  categorySlug: CategorySlug;
  badge: 'Best for Beginners' | 'Best for Small Teams' | 'Best for Automation' | 'Best for AI Writing' | 'Best Value' | 'Best for Solopreneurs';
  primaryUseCase: string;
  targetAudience: string;
  description: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  pricing: ReviewPricing;
  alternatives: ReviewAlternative[];
  whoWeRecommendFor: string[];
  whoWeDoNotRecommendFor: string[];
  summaryVerdict: string;
  officialWebsiteUrl: string;
  lastUpdated: string;
  methodologyNote: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string[];
  keyTakeaways?: string[];
  pros?: string[];
  cons?: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  sourceLinks?: { title: string; url: string }[];
}

export interface ArticleSource {
  name: string;
  url: string;
  note: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: CategorySlug;
  readTime: string;
  publishedDate: string;
  lastUpdatedDate: string;
  metaDescription: string;
  keywords: string[];
  problemSolved: string;
  sections: ArticleSection[];
  conclusion: string;
  verdictRecommendation: string;
  officialSources: ArticleSource[];
}
