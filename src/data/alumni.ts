import ShaileshChaphekar from '../assets/ShaileshChaphekar.jpg';
import SachinSood from '../assets/SachinSood.jpg';
import LeenaWaghmare from '../assets/leenawaghmare.jpeg';

export interface Alumni {
  id: string;
  name: string;
  photo: string;
  Education: string;
  HigherEducation: string;
  currentRole: string;
  company: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  topskills: string[];
  experience: {
    role: string;
    company: string;
    duration: string;
  }[];
  featured: boolean;
}

export const alumniData: Alumni[] = [
  {
    id: '1',
    name: 'Shailesh Chaphekar',
    photo: ShaileshChaphekar,
    Education:'Bacheolar of Engineering - Fr. Conceicao Rodrigues College of Engineering',
    HigherEducation:'N/A',
    currentRole: 'Managing Director: Data AI',
    company: 'Accenture',
    location: 'Mumbai, Maharashtra',
    email: 'shailesh.chaphekar@gmail.com',
    phone: '+91 9821145849',
    linkedin: 'http://linkedin.com/in/shailesh-chaphekar',
    topskills: [
      'Data Products',
      'Data Architecture',
      'Obsevality',
      'Data Migration',
      'Global Delivery',
    ],
    experience: [
      {
        role: 'Managing Director: Data AI',
        company: 'Accenture',
        duration: '2015-Present'
      },
      {
        role: 'Service Delivery Lead',
        company: 'Quinnox Consultancy Services Limited',
        duration: '2007-2015'
      },
      {
        role: 'Service Delivery Lead',
        company: 'Quinnox Consultancy Services Limited',
        duration: '2007-2015'
      }
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Sachin Sood',
    photo: SachinSood,
    HigherEducation:'University of Missouri-Kansas City',
    Education:'Bacheolar of Engineering - Fr. Conceicao Rodrigues College of Engineering',
    currentRole: 'IT Manager',
    company: 'United Healthcare',
    location: 'Missouri, United States',
    email: 'vonsazkin@gmail.com',
    phone: '+18167991965',
    linkedin: 'http://linkedin.com/in/vonsazkin',
    topskills: [
      'C#',
      'Microsoft SQL Server',
      'Java',
      '.NET',
      'SQL',
      'AJAX',
      'JavaScript',
    ],
    experience: [
      {
        role: 'Software Consultant ',
        company: 'TEK Systems',
        duration: '2011-present'
      },
      {
        role: 'Software Developer',
        company: 'Awhere, Inc.',
        duration: '2003-2010'
      },
      {
        role: 'Intern',
        company: 'BARC',
        duration: '1999-1999'
      }
    ],
    featured: true
  },
  {
    id: '3',
    name: 'Leena Waghmare',
    photo: LeenaWaghmare,
    Education:'Bacheolar of Engineering - Fr. Conceicao Rodrigues College of Engineering',
    HigherEducation:'Lamar University',
    currentRole: 'IT Risk and Compliance',
    company: 'Gilead Sciences',
    location: 'Foster City, California, United States',
    email: 'leenalw@gmail.com',
    phone: '+1 6507768566',
    linkedin: 'https://www.linkedin.com/in/leenawaghmare/',
    topskills: [
      'IT Audit',
      'Management',
      'Information Technology',
      'Internal Controls',
      'Internal Audit',
    ],
    experience: [
      {
        role: 'IT Risk and Compliance',
        company: 'Gilead Sciences',
        duration: '2022-Present'
      },
      {
        role: 'Governance, Risk and Compliance',
        company: 'Okta, Inc.',
        duration: '2020-2022'
      },
      {
        role: 'Senior Manager, Risk and Financial Advisory',
        company: 'Deloitte',
        duration: '2017-2020'
      },
      {
        role: 'Manager',
        company: 'Ernst & Young',
        duration: '2012-2017'
      },
      {
        role: 'Senior Associate',
        company: 'KPMG LLP',
        duration: '2010-2012'
      }
    ],
    featured: true
  }
];