export interface Publication {
  id: number;
  title: string;
  journal: string;
  year: number;
  doi: string;
  url: string;
  description: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    id: 1,
    title: 'Inner Speech Decoding: A Comprehensive Review',
    journal: 'WIREs Cognitive Science',
    year: 2025,
    doi: '10.1002/wcs.70016',
    url: 'https://doi.org/10.1002/wcs.70016',
    description: 'A comprehensive review of inner speech decoding techniques and methodologies in cognitive science.',
    tags: ['Neuroscience', 'Inner Speech', 'Brain-Computer Interface', 'Review']
  },
  {
    id: 2,
    title: 'Attention-Based Approach for Arabic Sign Language Recognition, Supporting Differently Abled Persons',
    journal: 'Journal of Disability Research',
    year: 2025,
    doi: '10.57197/JDR-2025-0586',
    url: 'http://doi.org/10.57197/JDR-2025-0586',
    description: 'Novel attention-based deep learning approach for recognizing Arabic sign language to support communication for differently abled individuals.',
    tags: ['Deep Learning', 'Sign Language', 'Attention Mechanism', 'Accessibility']
  },
  {
    id: 3,
    title: 'Graph Attention Networks for Skin Lesion Classification with CNN-Driven Node Features',
    journal: 'Computers, Materials & Continua',
    year: 2025,
    doi: '10.32604/cmc.2025.069162',
    url: 'https://doi.org/10.32604/cmc.2025.069162',
    description: 'Integration of Graph Attention Networks with CNN-based feature extraction for improved skin lesion classification.',
    tags: ['Medical AI', 'GAT', 'CNN', 'Skin Cancer Detection']
  },
  {
    id: 4,
    title: 'From Radiomics to Transformers in Pancreatic Cancer Detection and Prognosis',
    journal: 'Frontiers in Medicine',
    year: 2025,
    doi: '10.3389/fmed.2025.1731922',
    url: 'https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1731922/abstract',
    description: 'Comprehensive analysis of radiomics and transformer-based approaches for pancreatic cancer detection and prognosis prediction.',
    tags: ['Medical Imaging', 'Transformers', 'Radiomics', 'Cancer Detection']
  }
];
