export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'academic',
    title: 'Academic & Research',
    description: 'Comprehensive support for academic writing and research',
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Journal Formatting',
      'Copyediting & Proofreading',
      'Citation Management (APA, MLA, Chicago)',
      'Plagiarism Screening',
      'Literature Search & Systematic Review',
      'Research Gap Analysis',
      'Grant Proposals & CV Editing',
      'LaTeX Formatting',
      'Academic Posters & Presentations',
      'Reviewer Response Assistance',
      'Journal Selection',
      'Annotated Bibliography'
    ]
  },
  {
    id: 'technical',
    title: 'AI / ML / Technical',
    description: 'Advanced solutions in AI, ML, and web development',
    color: 'from-purple-500 to-pink-500',
    services: [
      'Machine Learning & Deep Learning',
      'Data Collection & Cleaning',
      'Data Annotation & Labeling',
      'Data Visualization (Python)',
      'Full-Stack Development (Next.js/Nest.js)',
      'AWS Cloud Services',
      'Web Scraping & Dataset Curation',
      'Model Benchmarking',
      'Code Documentation',
      'Experiment Execution',
      'Meta Ads Management',
      'Dataset Research'
    ]
  },
  {
    id: 'writing',
    title: 'Writing & Content',
    description: 'Professional writing and content creation',
    color: 'from-orange-500 to-red-500',
    services: [
      'Blog & Article Writing',
      'Paraphrasing & Rewriting',
      'Abstract Writing',
      'SEO & Keyword Optimization',
      'Social Media Content',
      'Website Content Updates',
      'Professional Email Drafting',
      'Cover Letters & SOP',
      'Portfolio Development',
      'Book Research & Summaries',
      'Recruitment Materials',
      'Research Plan Writing'
    ]
  }
];
