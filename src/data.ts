import type { Portfolio } from './types';

export const PORTFOLIO: Portfolio = {
  name: 'Hang Nguyen',
  role: 'Software Developer',
  location: 'Vantaa, Uusimaa',
  tagline:
    'Detail-oriented software developer with 4+ years of professional experience across frontend, mobile, and full-stack development.',
  tagline_long:
    'Committed to continuous growth and building modern, user-facing solutions — with a particular interest in UX and UI design to create intuitive and effective user experiences.',
  years: '4+',
  specialties: ['Frontend', 'Full-stack', 'Mobile'],

  contact: {
    email: 'hangntt@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hang-nguyen-a619b1105/',
    github: 'https://github.com/hangnguyen81',
  },

  experience: [
    {
      company: 'RELEX Solutions Oy',
      title: 'Software Developer — Mobile Replenishment team',
      location: 'Helsinki, Uusimaa',
      period: 'Mar 2024 — Present',
      current: true,
      team: 'Mobile Replenishment — Frontend focus',
      bullets: [
        'Contributing to the development of a new mobile app — a top company priority — working with React Native (a new but familiar technology) while continuing to grow backend skills with .NET.',
        'Maintained and improved UI components such as Manual Orders and SCM Views through bug fixes, library upgrades, and general enhancements.',
        'Represented the team in a rotating on-call role, addressing critical customer issues and collaborating with cross-functional teams to resolve them.',
      ],
      stack: ['React Native', 'Expo', 'TypeScript', '.NET'],
    },
    {
      company: 'RELEX Solutions Oy',
      title: 'Full-stack Developer — System Team',
      location: 'Helsinki, Uusimaa',
      period: 'Mar 2022 — Feb 2024',
      team: 'System Team — RELEX Store Collaboration Application',
      bullets: [
        'Responsible for the implementation and maintenance of common UI components and backend microservices within the RELEX Store Collaboration Application.',
        'Contributed to the development, testing, and deployment of the RELEX Store Web Platform — focused on the Angular frontend monorepo and shared microservices such as version tenancy and privilege hierarchy.',
        'Played a key role in delivering high-quality UI transformations for the RELEX Store Web Platform in alignment with RELEX\'s in-house design system, collaborating closely with designers and cross-functional teams.',
        'Led the migration of large-scale production customer data from AWS to Azure as part of a critical database migration project.',
      ],
      stack: ['Angular', 'TypeScript', 'SASS', '.NET', 'Azure', 'AWS'],
    },
    {
      company: 'Somejam Tampere',
      title: 'Social Media Specialist',
      location: 'Tampere, Finland',
      period: 'Jun — Oct 2016',
      bullets: [
        'Content creation, photography, and video for the event\'s website and social channels.',
      ],
    },
    {
      company: 'MATOC2C, Demola Tampere',
      title: 'UI Designer',
      location: 'Tampere, Finland',
      period: 'Feb — May 2016',
      bullets: [
        'Prototyped an online learning platform connecting learners and instructors.',
      ],
    },
    {
      company: 'Hanoi College of Education',
      title: 'Teacher — Faculty of IT',
      location: 'Hanoi, Vietnam',
      period: 'Aug 2004 — Aug 2015',
      bullets: [
        'Taught database design, SQL, graphic design, and web development (HTML, CSS, PHP, MySQL).',
      ],
    },
    {
      company: 'TanDan Limited',
      title: 'Software Developer',
      location: 'Hanoi, Vietnam',
      period: 'Jun 2003 — Jul 2004',
      bullets: [
        'Analysed and built a store management system for clients in Vietnam and Germany.',
      ],
    },
  ],

  showcase: [
    {
      name: 'RELEX Mobile Replenishment',
      year: '2024 — Present',
      description:
        'Production mobile application deployed to customers across the US and Europe, enabling store teams to manage replenishment operations across multiple retail locations. Built with React Native + Expo, deeply integrated with .NET microservices via REST.',
      tags: ['React Native', 'Expo', 'TypeScript', 'REST'],
      role: 'Frontend Engineer',
      highlight: 'Strategic product',
    },
    {
      name: 'RELEX Store Collaboration Cloud App',
      year: '2022 — 2024',
      description:
        'Large-scale UI transformation of the Store Web Platform aligned with an in-house design system. Contributed across frontend and .NET microservice backends, plus deployment.',
      tags: ['React', 'TypeScript', 'SASS', '.NET', 'Design System'],
      role: 'Full-stack Engineer',
      highlight: 'UI transformation',
    },
  ],

  archive: [
    {
      category: 'Full-stack',
      items: [
        {
          name: 'Statistics of Farms',
          description:
            'A web service providing data from various farms; also offered a free open API so users could read and update farm data in the database.',
          tags: ['MongoDB', 'Express', 'React', 'Node.js'],
          link: 'https://github.com/hangnguyen81/statistics-of-farms'
        },
        {
          name: 'Phonebook',
          description:
            'Simple phonebook that lets users create, update, and delete their contacts.',
          tags: ['MongoDB', 'Express', 'React', 'Node.js'],
          link: 'https://github.com/hangnguyen81/awesome-phone-book'
        },
      ],
    },
    {
      category: 'ReactJs',
      items: [
        {
          name: 'Offering Tours',
          description:
            'A list of travel tours where users can remove the ones they\'re no longer interested in.',
          tags: ['React', 'Bootstrap 5'],
          link: 'https://tours-offered-by-hn.netlify.app/',
        },
        {
          name: 'Shopping Cart',
          description:
            'A simple shopping cart demo with persistent cart state across sessions.',
          tags: ['React', 'Hooks', 'Context', 'Router', 'SASS', 'LocalStorage'],
          link: 'https://food-ordering-hn.netlify.app/',
        },
        {
          name: 'User Generator',
          description:
            'An app that shows information about a random person. Data fetched from randomuser.me.',
          tags: ['React', 'Promise', 'async/await', 'CSS'],
          link: 'https://random-user-generator-hn.netlify.app/',
        },
        {
          name: 'Cocktail World',
          description:
            'An app that lets users search for information about cocktails. Data fetched from thecocktaildb.com.',
          tags: ['React', 'Hooks', 'Context', 'Router', 'SASS'],
          link: 'https://cocktail-world-hn.netlify.app/',
        },
      ],
    },
    {
      category: 'Responsive web design',
      items: [
        {
          name: 'Hanna Photography',
          description: 'A responsive website for a photography service.',
          tags: ['HTML', 'SASS', 'JS ES6+'],
          link: 'https://hangnguyen81.github.io/photography-sass/dist/',
        },
        {
          name: 'Photography Event',
          description:
            'A responsive landing and marketing page for a photography event.',
          tags: ['HTML5', 'Flexbox', 'Grid'],
          link: 'https://hangnguyen81.github.io/photography-event/',
        },
        {
          name: 'Hanna and Flowers',
          description: 'A responsive website for an online flower shop.',
          tags: ['HTML5', 'Flexbox', 'Grid'],
          link: 'https://hangnguyen81.github.io/hanna-kukka/',
        },
        {
          name: 'Finland via my lens',
          description:
            'A responsive personal blog capturing impressions of Finland through a camera lens.',
          tags: ['HTML5', 'CSS', 'JavaScript'],
          link: 'https://hangnguyen81.github.io/finland-through-my-lens/',
        },
      ],
    },
    {
      category: 'Data analysis',
      items: [
        {
          name: 'Housing Price',
          description:
            'A reference source for house buyers in Finland, built by collecting and analysing spatial data across the Capital Region.',
          tags: ['Python', 'Pandas', 'matplotlib', 'BeautifulSoup', 'pgeocode', 'folium'],
          link: 'https://www.linkedin.com/pulse/reference-source-house-buyers-capital-region-finland-hang-nguyen/',
        },
        {
          name: 'Required IT Skills',
          description:
            'A report on emerging tech-stack trends based on StackOverflow survey and GitHub Jobs data.',
          tags: ['Python', 'Pandas', 'matplotlib', 'IBM Cognos'],
        },
      ],
    },
  ],

  stack: {
    Mobile: ['React Native', 'Expo', 'TypeScript'],
    Frontend: ['JavaScript', 'TypeScript', 'React', 'Angular', 'HTML', 'CSS / SASS'],
    Backend: ['C#', '.NET', 'Node.js'],
    Databases: ['PostgreSQL', 'SQLite', 'Drizzle ORM'],
    APIs: ['REST'],
    'Version control & CI/CD': ['Git', 'GitHub', 'GitLab', 'GitHub Actions'],
    'AI coding tools': ['Claude Code', 'Claude AI', 'GitHub Copilot'],
  },

  education: [
    {
      school: 'University of Tampere',
      degree: 'Master of Arts in Media Education',
      location: 'Tampere, Finland',
      period: 'Sep 2015 — Dec 2018',
      grade: 'Very good',
    },
    {
      school: 'Vietnam National University, Hanoi',
      degree: 'Master of Science in Information Technology',
      location: 'Hanoi, Vietnam',
      period: '2006 — 2009',
      grade: 'Good',
    },
    {
      school: 'Vietnam National University, Hanoi',
      degree: 'Bachelor of Science in Information Technology',
      location: 'Hanoi, Vietnam',
      period: '1999 — 2003',
      grade: 'Very good',
    },
  ],

  beyond: {
    languages: [
      { name: 'English', level: 'Professional' },
      { name: 'Finnish', level: 'Elementary' },
      { name: 'Vietnamese', level: 'Native' },
    ],
    hobbies: 'Photography, mushroom picking & plant care',
    references: 'References available on request',
  },
};
