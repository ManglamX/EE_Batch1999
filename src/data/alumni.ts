export interface Alumni {
    id: string;
    name: string;
    photo: string;
    currentRole: string;
    company: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    achievements: string[];
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
      photo: './src/assets/profile1.jpeg',
      currentRole: 'Chief Technology Officer',
      company: 'Tesla Motors',
      location: 'San Francisco, CA',
      email: 'shailesh.chaphekar@gmail.com',
      phone: '+91 9821145849',
      linkedin: 'http://linkedin.com/in/shailesh-chaphekar',
      achievements: [
        'IEEE Fellow 2020',
        'Patent holder for EV battery technology',
        'Forbes 40 under 40'
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
      name: 'Michael Rodriguez',
      photo: './src/assets/profile1.jpeg',
      currentRole: 'Senior Director',
      company: 'Apple',
      location: 'Cupertino, CA',
      email: 'michael.r@example.com',
      phone: '+1 (555) 234-5678',
      linkedin: 'linkedin.com/in/michaelr',
      achievements: [
        'Led iPhone chip development team',
        '25+ Patents in semiconductor design',
        'Distinguished Engineer Award 2018'
      ],
      experience: [
        {
          role: 'Senior Director',
          company: 'Apple',
          duration: '2018-Present'
        },
        {
          role: 'Principal Engineer',
          company: 'Intel',
          duration: '2010-2018'
        }
      ],
      featured: true
    },
    {
      id: '3',
      name: 'Priya Patel',
      photo: './src/assets/profile1.jpeg',
      currentRole: 'Founder & CEO',
      company: 'InnovateAI Solutions',
      location: 'Bangalore, India',
      email: 'priya.p@example.com',
      phone: '+91 98765 43210',
      linkedin: 'linkedin.com/in/priyap',
      achievements: [
        'Built $500M AI startup',
        'MIT Technology Review 35 under 35',
        'Women in Tech Leader 2022'
      ],
      experience: [
        {
          role: 'CEO',
          company: 'InnovateAI Solutions',
          duration: '2015-Present'
        },
        {
          role: 'ML Engineer',
          company: 'Google',
          duration: '2010-2015'
        }
      ],
      featured: true
    }
  ];