export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  university: string;
  degree: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Asad Farooq',
  title: 'Research Scientist & Full-Stack Developer',
  tagline: 'AI Research • Academic Support • Technical Solutions',
  bio: 'Published researcher specializing in AI/ML, medical imaging, and natural language processing. With 4 peer-reviewed publications in prestigious journals and expertise spanning from deep learning to full-stack development, we provide comprehensive academic, technical, and content services. Our work bridges cutting-edge research with practical applications, helping clients achieve excellence in their academic and technical endeavors.',
  location: 'Pakistan',
  email: 'asadkhosa330@gmail.com',
  phone: '+92 310 6723067',
  github: 'https://github.com/03-134202-096',
  university: 'Bahria University Islamabad',
  degree: 'Bachelor of Science in Computer Science (BSCS)'
};

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  // AI/ML Skills
  { name: 'Machine Learning', level: 95, category: 'AI & Data Science' },
  { name: 'Deep Learning', level: 95, category: 'AI & Data Science' },
  { name: 'Computer Vision', level: 90, category: 'AI & Data Science' },
  { name: 'Natural Language Processing', level: 90, category: 'AI & Data Science' },
  { name: 'Attention Mechanisms', level: 92, category: 'AI & Data Science' },
  { name: 'Graph Neural Networks', level: 88, category: 'AI & Data Science' },
  { name: 'Transformers', level: 90, category: 'AI & Data Science' },
  
  // Data Science
  { name: 'Data Analysis', level: 95, category: 'AI & Data Science' },
  { name: 'Data Visualization', level: 92, category: 'AI & Data Science' },
  { name: 'Python', level: 95, category: 'AI & Data Science' },
  { name: 'Statistical Analysis', level: 88, category: 'AI & Data Science' },
  
  // Web Development
  { name: 'Next.js', level: 92, category: 'Web Development' },
  { name: 'React', level: 92, category: 'Web Development' },
  { name: 'Nest.js', level: 88, category: 'Web Development' },
  { name: 'TypeScript', level: 90, category: 'Web Development' },
  { name: 'Node.js', level: 88, category: 'Web Development' },
  { name: 'Tailwind CSS', level: 95, category: 'Web Development' },
  
  // Cloud & DevOps
  { name: 'AWS', level: 85, category: 'Cloud & DevOps' },
  { name: 'Cloud Deployment', level: 85, category: 'Cloud & DevOps' },
  
  // Academic & Research
  { name: 'Research Writing', level: 95, category: 'Academic' },
  { name: 'Technical Writing', level: 95, category: 'Academic' },
  { name: 'LaTeX', level: 90, category: 'Academic' },
  { name: 'Literature Review', level: 95, category: 'Academic' },
  { name: 'Academic Publishing', level: 92, category: 'Academic' },
  { name: 'Citation Management', level: 95, category: 'Academic' }
];
