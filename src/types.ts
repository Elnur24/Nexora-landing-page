export interface Article {
  id: string;
  title: string;
  category: 'Strategy' | 'Design' | 'AI' | 'Craft';
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  description: string;
  color: string;
  metric: string;
  metricLabel: string;
}

export interface BrandBrief {
  brandName: string;
  industry: string;
  vibe: string;
  accentColor: string;
  palette: string[];
  tagline: string;
  fonts: {
    heading: string;
    body: string;
  };
}
