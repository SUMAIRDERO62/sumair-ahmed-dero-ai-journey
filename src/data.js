// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file, not the UI.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sumair Ahmed Dero',
  shortName: 'Sumair Ahmed',
  initials: 'SD',
  role: 'AI / ML Engineer',
  headline: 'AI Engineer • ML Engineer • AI Researcher',
  tagline:
    'Building intelligent systems that move from research to real-world software.',
  email: 'sumairdero62@gmail.com',
  phone: '03423159267',
  phoneHref: 'tel:03423159267',
  whatsapp: 'https://wa.me/923423159267?text=Hi%20Sumair%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
  location: 'Hyderabad, Sindh, Pakistan',
  github: 'SUMAIRDERO62',
  githubUrl: 'https://github.com/SUMAIRDERO62',
  linkedinUrl: 'https://www.linkedin.com/in/sumair-ahmed-dero-70ba852a0',
  portfolioUrl: 'https://sumair-ahmed-dero-ai-journey.vercel.app/',
  // GitHub avatar — falls back to initials if it fails to load.
  // To use your own photo instead: put it in /public/Profileimage.jpeg and set avatar: '/Profileimage.jpeg'
  avatar: 'https://avatars.githubusercontent.com/u/189377018?v=4',
  cv: '/Sumair_Ahmed_Dero_CV.pdf',
};

export const about = {
  summary: [
    'I am a third-year BS Artificial Intelligence student at the University of Sindh who builds end-to-end AI/ML systems in Python — from NLP pipelines and CNN-based image classifiers to recommendation engines, dashboards and developer tooling.',
    'I combine applied machine learning (Scikit-learn, TensorFlow, PyTorch, YOLO) with software-engineering practice: REST APIs, automated testing, clean documentation and interactive interfaces. I have a particular interest in low-resource language NLP and AI-assisted developer tools.',
    'I am currently learning Microsoft Azure, MLOps and cloud deployment, and I am open to internships, research collaboration and meaningful technical projects.',
  ],
  focus: [
    {
      title: 'Machine Learning',
      icon: 'brain',
      desc: 'Scikit-learn, XGBoost, Random Forest and CNN/LSTM models with proper evaluation and testing.',
    },
    {
      title: 'Computer Vision',
      icon: 'cpu',
      desc: 'YOLOv8 detection and tracking, OpenCV pipelines, face recognition and CNN classifiers in PyTorch.',
    },
    {
      title: 'NLP & Generative AI',
      icon: 'sparkles',
      desc: 'Sindhi NLP tooling, conversational agents with memory, research agents that search, verify and cite.',
    },
    {
      title: 'Data & Backend',
      icon: 'server',
      desc: 'Flask / FastAPI services, SQLite & SQLAlchemy, Streamlit and Plotly dashboards.',
    },
  ],
  stats: [
    { value: '75+', label: 'GitHub repositories' },
    { value: '10+', label: 'Internships & trainings' },
    { value: '5', label: 'Google certificates' },
    { value: '3.32', label: 'Current CGPA' },
  ],
  currently: [
    'Building practical, tested and documented AI applications',
    'Improving model evaluation, explainability and deployment workflows',
    'Exploring Microsoft Azure for AI and cloud-based software',
  ],
};

export const research = {
  intro:
    'I am particularly interested in low-resource NLP — especially Sindhi — with the goal of contributing to language technologies for underrepresented languages. I also have research work related to data quality and drift remediation in production machine-learning systems.',
  interests: [
    'Low-resource NLP (Sindhi)',
    'NLP benchmarking',
    'ML system reliability',
    'Data quality & drift remediation',
    'MLOps',
    'Explainable & responsible AI',
  ],
};

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    group: 'AI / Machine Learning',
    items: [
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'CNN',
      'LSTM',
      'XGBoost',
      'Random Forest',
      'Logistic Regression',
      'Collaborative Filtering',
    ],
  },
  {
    group: 'Computer Vision & NLP',
    items: [
      'OpenCV',
      'YOLOv8',
      'Face Recognition',
      'TF-IDF',
      'Tokenization',
      'Unicode Normalization',
      'Sentiment Analysis',
    ],
  },
  {
    group: 'Data',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Jupyter'],
  },
  {
    group: 'Backend & Databases',
    items: ['Flask', 'FastAPI', 'REST APIs', 'WebSockets', 'SQLite', 'SQLAlchemy', 'PostgreSQL'],
  },
  {
    group: 'Tools & Cloud',
    items: ['Git', 'GitHub Actions', 'Pytest', 'Streamlit', 'Docker', 'VS Code', 'Microsoft Azure (learning)'],
  },
];

export const education = [
  {
    title: 'BS Artificial Intelligence',
    place: 'University of Sindh, Jamshoro',
    date: '2024 – 2028 · 3rd year',
    desc: 'Current CGPA: 3.32',
  },
  {
    title: 'HSSC — Pre-Engineering',
    place: 'Government Boys Degree College, Shahdadpur',
    date: '2021 – 2023',
    desc: '',
  },
];

export const experience = [
  {
    title: 'AI & ML Intern',
    place: 'Next Gen Software Hub Pvt. Ltd. (Remote)',
    date: 'Oct 2026 – Present',
    desc: 'Applying AI/ML concepts to practical tasks and projects in a structured, mentor-led environment; strengthening Python, analytical and problem-solving skills, documentation and deadline management.',
  },
  {
    title: 'Artificial Intelligence Intern',
    place: 'Syntecxhub (Remote)',
    date: 'Sep 2026 – Present',
    desc: 'Applying AI and ML concepts to real-world projects, building practical projects and following industry-oriented development practices.',
  },
  {
    title: 'Data Science & Analytics Intern',
    place: 'Zidio Development (Remote)',
    date: 'Sep 2026 – Present',
    desc: 'Three-month remote internship applying Python, data analysis, machine learning and AI to real-world data-driven tasks under a technical team.',
  },
  {
    title: 'Data Science Intern',
    place: 'Axlero Innovative Solutions',
    date: 'Sep 2026 – Present',
    desc: 'Collecting, cleaning and analysing datasets, assisting with predictive modelling, writing SQL queries, and building reports and visualisations.',
  },
  {
    title: 'Python Development Intern',
    place: 'Auspify Technologies (Remote)',
    date: 'Sep 2026 – Present',
    desc: 'Python development internship focused on building and shipping practical software.',
  },
  {
    title: 'Python Intern',
    place: 'The Developers Arena (Remote)',
    date: 'Jul 2026 – Jan 2027',
    desc: 'Six-month Python internship working on hands-on development tasks.',
  },
  {
    title: 'Research Assistant',
    place: 'ORIC / BBSHRRDB / PMU, University of Sindh',
    date: 'Apr 2026 – Present',
    desc: 'Supporting applied research under the Office of Research, Innovation & Commercialization; contributing AI-driven methodologies to institutional projects and assisting with data analysis and documentation.',
  },
  {
    title: 'Machine Learning Intern Developer',
    place: 'ARCH Technologies (SAP Consulting Partner)',
    date: 'Dec 2024 – Jan 2025',
    desc: 'Built end-to-end ML models from raw data collection to prediction using Python and Scikit-learn; automated data collection via web scraping and Google Forms, with data cleaning and feature engineering.',
  },
];

export const training = [
  { title: 'AI Intern', place: 'DecodeLabs', date: 'Apr – May 2026' },
  { title: 'Machine Learning Internship', place: 'CodeAlpha', date: 'May – Aug 2025' },
  { title: 'Python Programming Internship', place: 'CodeAlpha', date: 'Jan – Apr 2025' },
  { title: 'Artificial Intelligence Internship', place: 'CodeAlpha', date: 'Feb 2025' },
];

export const certifications = [
  { title: 'Elements of AI Agents', issuer: 'Certificate', date: '', code: '' },
  { title: 'Google AI Essentials', issuer: 'Google · Coursera', date: 'Aug 2025', code: '1IHOTLMC2PKG' },
  { title: 'Google Prompting Essentials', issuer: 'Google · Coursera', date: 'Aug 2025', code: '4J7KIYIYMG4I' },
  { title: 'Google IT Automation with Python', issuer: 'Google · Coursera', date: 'Sep 2025', code: '0500PAH8WNFU' },
  { title: 'Google Cybersecurity', issuer: 'Google · Coursera', date: 'Sep 2025', code: 'ABGETF1SRWI4' },
  { title: 'Google UX Design', issuer: 'Google · Coursera', date: 'Sep 2025', code: '62YTVQF1WZ1B' },
];

const gh = (repo) => `https://github.com/SUMAIRDERO62/${repo}`;
// Repos not yet confirmed: open his own GitHub profile filtered by name, so the link always lands on his profile.
const ghFind = (q) => `https://github.com/SUMAIRDERO62?tab=repositories&q=${encodeURIComponent(q)}`;

// category: 'Computer Vision' | 'NLP & GenAI' | 'Machine Learning' | 'Data & Dashboards' | 'Full-Stack & Tools'
export const projects = [
  {
    name: 'Real-Time Vehicle Detection',
    category: 'Computer Vision',
    featured: true,
    desc: 'YOLOv8-based vehicle detection, tracking and unique counting, delivered through a Streamlit interface.',
    tags: ['YOLOv8', 'OpenCV', 'Streamlit', 'Python'],
    repo: 'real-time-vehicle-detection',
    url: gh('real-time-vehicle-detection'),
  },
  {
    name: 'Face Recognition Attendance System',
    category: 'Computer Vision',
    featured: true,
    desc: 'Face-recognition attendance with SQLite persistence, duplicate prevention and automated tests.',
    tags: ['Face Recognition', 'SQLite', 'Pytest', 'Python'],
    repo: 'face-recognition-attendance-system',
    url: gh('face-recognition-attendance-system'),
  },
  {
    name: 'Autonomous AI Research Agent',
    category: 'NLP & GenAI',
    featured: true,
    desc: 'Research workflow that searches, reads, verifies and cites its sources inside generated reports.',
    tags: ['LLM Agents', 'Web Search', 'Citations', 'Python'],
    repo: 'Autonomous-AI-Research-Agent',
    url: gh('Autonomous-AI-Research-Agent'),
  },
  {
    name: 'Memory Chat AI',
    category: 'NLP & GenAI',
    featured: true,
    desc: 'Conversational AI with long-term memory, personas, streaming responses and token-budget management.',
    tags: ['LLM', 'Streaming', 'Memory', 'Python'],
    repo: 'memory-chat-token-budgeted-ai',
    url: gh('memory-chat-token-budgeted-ai'),
  },
  {
    name: 'Speech Emotion Recognition',
    category: 'Machine Learning',
    featured: true,
    desc: 'CNN-LSTM deep-learning model that recognises emotion from audio.',
    tags: ['CNN', 'LSTM', 'Audio', 'Deep Learning'],
    repo: 'speech-emotion-recognition',
    url: gh('speech-emotion-recognition'),
  },
  {
    name: 'AI-Powered Code Review Bot',
    category: 'Full-Stack & Tools',
    featured: true,
    desc: 'AST-based static analysis that computes cyclomatic complexity, detects dead code and scores quality, with HTML reports and a Streamlit dashboard.',
    tags: ['AST', 'Pytest', 'Streamlit', 'Python'],
    repo: '-AI-Powered-Code-Review-Bot',
    url: gh('-AI-Powered-Code-Review-Bot'),
  },
  {
    name: 'Studyforge AI',
    category: 'Full-Stack & Tools',
    featured: true,
    desc: 'Full-stack learning platform with authentication, quizzes and AI assistance.',
    tags: ['Full-Stack', 'Auth', 'Quizzes', 'AI'],
    repo: 'Studyforge-AI',
    url: gh('Studyforge-AI'),
  },
  {
    name: 'AI-Powered Resume Builder',
    category: 'NLP & GenAI',
    featured: true,
    desc: 'Constraint-aware AI generation for creating structured, genuinely useful resumes.',
    tags: ['GenAI', 'Prompting', 'Python'],
    repo: 'AI-Powered-Resume-Builder',
    url: gh('AI-Powered-Resume-Builder'),
  },
  {
    name: 'HireLens AI',
    category: 'NLP & GenAI',
    desc: 'Evaluates CVs like a professional recruiter — structured scoring, ATS compatibility analysis, keyword optimisation and actionable feedback.',
    tags: ['NLP', 'ATS', 'Scoring', 'Python'],
    repo: 'HireLens-AI',
    url: gh('HireLens-AI'),
  },
  {
    name: 'Sindhi NLP Toolkit (Offline)',
    category: 'NLP & GenAI',
    desc: 'Offline NLP toolkit for Sindhi (Perso-Arabic script): Unicode normalisation, tokenisation, stopword removal, rule-based stemming and lexicon-based sentiment — for a language with minimal NLP tooling.',
    tags: ['Low-resource NLP', 'Sindhi', 'Unicode', 'Python'],
    repo: 'Sindhi-nlp-toolkit-offline',
    url: ghFind('sindhi'),
  },
  {
    name: 'Wikipedia Knowledge Graph Builder',
    category: 'NLP & GenAI',
    desc: 'Extracts entities from Wikipedia articles, builds semantic knowledge graphs and discovers relationships and degrees of separation between concepts.',
    tags: ['Knowledge Graph', 'Entities', 'NLP', 'Python'],
    repo: 'Wikipedia-Knowledge-Graph-Builder',
    url: gh('Wikipedia-Knowledge-Graph-Builder'),
  },
  {
    name: 'Crop Disease Detection (CNN)',
    category: 'Computer Vision',
    desc: 'PyTorch CNN classifier that detects disease in wheat and cotton crops, with a Streamlit upload-and-predict interface and automated tests.',
    tags: ['PyTorch', 'CNN', 'Streamlit', 'Agriculture'],
    repo: 'Crop-Disease-Detection-CNN',
    url: ghFind('crop'),
  },
  {
    name: 'Product Recommendation Engine',
    category: 'Machine Learning',
    desc: 'Recommender combining collaborative filtering and item-similarity, served through a Flask REST API with a popularity fallback for cold-start users.',
    tags: ['Scikit-learn', 'Flask', 'Collaborative Filtering'],
    repo: 'Product-Recommendation-Engine',
    url: ghFind('recommendation'),
  },
  {
    name: 'Real-Time Stock Price Tracker',
    category: 'Data & Dashboards',
    desc: 'Live stock dashboard with candlestick charts, RSI, moving averages and portfolio tracking using Yahoo Finance data.',
    tags: ['Streamlit', 'Plotly', 'Pandas', 'RSI'],
    repo: 'Real-Time-Stock-Price-Tracker',
    url: gh('Real-Time-Stock-Price-Tracker'),
  },
  {
    name: 'COVID-19 Data Explorer',
    category: 'Data & Dashboards',
    desc: 'Interactive analytics dashboard on the disease.sh API with live data, offline fallback, country comparisons, vaccination analysis and automated tests.',
    tags: ['Streamlit', 'Plotly', 'API', 'Pytest'],
    repo: 'Covid19-data-explorer',
    url: gh('Covid19-data-explorer'),
  },
  {
    name: 'Sales Analytics Dashboard',
    category: 'Data & Dashboards',
    desc: 'Business-intelligence dashboard for KPI tracking, revenue analysis and data visualisation.',
    tags: ['Streamlit', 'Pandas', 'Plotly', 'BI'],
    repo: 'Real-business-intelligence-application',
    url: gh('Real-business-intelligence-application'),
  },
  {
    name: 'SQL Query Optimizer',
    category: 'Full-Stack & Tools',
    desc: 'Analyses queries with EXPLAIN QUERY PLAN to detect anti-patterns and recommend indexes, benchmarking performance before and after.',
    tags: ['SQLite', 'Query Optimisation', 'Python'],
    repo: 'sql-query-optimizer',
    url: ghFind('sql'),
  },
  {
    name: 'Personal Finance Manager',
    category: 'Full-Stack & Tools',
    desc: 'Production-ready command-line app to track income, expenses, budgets and savings goals and generate financial reports.',
    tags: ['SQLAlchemy', 'Pandas', 'CLI', 'Python'],
    repo: 'Personal-Finance-Manager',
    url: gh('Personal-Finance-Manager'),
  },
];

export const categories = [
  'All',
  'Computer Vision',
  'NLP & GenAI',
  'Machine Learning',
  'Data & Dashboards',
  'Full-Stack & Tools',
  'More Work',
];

// ─────────────────────────────────────────────────────────────
//  The journey: chapters in order. GitHub repos are placed into
//  each chapter automatically by their creation date (live).
//  range = [from, to] as YYYY-MM-DD (null = open-ended)
// ─────────────────────────────────────────────────────────────
export const journey = [
  {
    id: 'foundation',
    period: '2021 – 2024',
    title: 'Where it started',
    blurb: 'Pre-engineering first, then the decision to commit to Artificial Intelligence.',
    range: [null, '2024-11-30'],
    items: [
      { type: 'Education', date: '2021 – 2023', title: 'HSSC — Pre-Engineering', place: 'Government Boys Degree College, Shahdadpur' },
      { type: 'Milestone', date: '2024', title: 'Started BS Artificial Intelligence', place: 'University of Sindh, Jamshoro', desc: 'Began the AI degree and started learning Python, machine learning and building first projects.' },
    ],
  },
  {
    id: 'first-steps',
    period: 'Dec 2024 – Dec 2025',
    title: 'First steps in industry',
    blurb: 'Remote internships, hands-on ML and the first certifications.',
    range: ['2024-12-01', '2025-12-31'],
    items: [
      { type: 'Internship', date: 'Dec 2024 – Jan 2025', title: 'Machine Learning Intern Developer', place: 'ARCH Technologies (SAP Consulting Partner)', desc: 'Built end-to-end ML models from raw data to prediction with Python and Scikit-learn; automated data collection via web scraping and Google Forms.' },
      { type: 'Internship', date: 'Jan – Apr 2025', title: 'Python Programming Internship', place: 'CodeAlpha' },
      { type: 'Internship', date: 'Feb 2025', title: 'Artificial Intelligence Internship', place: 'CodeAlpha' },
      { type: 'Internship', date: 'May – Aug 2025', title: 'Machine Learning Internship', place: 'CodeAlpha' },
      { type: 'Certification', date: 'Aug – Sep 2025', title: 'Google Career Certificates', place: 'Google · Coursera', desc: 'AI Essentials, Prompting Essentials, IT Automation with Python, Cybersecurity and UX Design.' },
    ],
  },
  {
    id: 'research-applied',
    period: 'Jan – Aug 2026',
    title: 'Research & applied AI',
    blurb: 'Research work at the university and larger, tested, documented projects.',
    range: ['2026-01-01', '2026-08-31'],
    items: [
      { type: 'Research', date: 'Apr 2026 – Present', title: 'Research Assistant', place: 'ORIC / BBSHRRDB / PMU, University of Sindh', desc: 'Contributing AI-driven methodologies to institutional research projects; data analysis and documentation.' },
      { type: 'Internship', date: 'Apr – May 2026', title: 'AI Intern', place: 'DecodeLabs' },
      { type: 'Internship', date: 'Jul 2026 – Jan 2027', title: 'Python Intern', place: 'The Developers Arena (Remote)' },
    ],
  },
  {
    id: 'now',
    period: 'Sep 2026 – Now',
    title: 'Now — working across five teams',
    blurb: 'Parallel remote roles in AI, data science and Python development, while shipping on GitHub every week.',
    range: ['2026-09-01', null],
    current: true,
    items: [
      { type: 'Internship', date: 'Oct 2026 – Present', title: 'AI & ML Intern', place: 'Next Gen Software Hub Pvt. Ltd.', desc: 'Applying AI/ML concepts to practical tasks in a structured, mentor-led environment.' },
      { type: 'Internship', date: 'Sep 2026 – Present', title: 'Artificial Intelligence Intern', place: 'Syntecxhub', desc: 'Applying AI and ML to real-world projects and following industry-oriented development practices.' },
      { type: 'Internship', date: 'Sep 2026 – Present', title: 'Data Science & Analytics Intern', place: 'Zidio Development', desc: 'Python, data analysis, machine learning and AI on real-world data-driven tasks.' },
      { type: 'Internship', date: 'Sep 2026 – Present', title: 'Data Science Intern', place: 'Axlero Innovative Solutions', desc: 'Cleaning and analysing datasets, predictive modelling, SQL queries, reports and visualisations.' },
      { type: 'Internship', date: 'Sep 2026 – Present', title: 'Python Development Intern', place: 'Auspify Technologies', desc: 'Building and shipping practical Python software.' },
    ],
  },
];
