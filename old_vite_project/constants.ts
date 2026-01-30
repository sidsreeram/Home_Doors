import { Project, Product, JobOpening, TeamMember, Customer, Solution } from './types';

export const HERO_IMAGE = "https://picsum.photos/1920/1080?grayscale&blur=2";

export const SEED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Skyline Penthouse Facade',
    category: 'Facades',
    location: 'New York, NY',
    description: 'A complete floor-to-ceiling glass and aluminium facade system for a luxury penthouse.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Modern Villa Sliding Systems',
    category: 'Windows',
    location: 'Beverly Hills, CA',
    description: 'Minimalist sliding door systems enabling seamless indoor-outdoor living.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Corporate HQ Partitions',
    category: 'Partitions',
    location: 'Chicago, IL',
    description: 'Acoustic aluminium partitions for a Fortune 500 company headquarters.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

export const SEED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SlimLine 38',
    category: 'Windows',
    description: 'Ultra-slim aluminium window profile for maximum daylight.',
    features: ['Thermal Break', 'High Insulation', 'Burglar Proof'],
    imageUrl: 'https://picsum.photos/400/400?random=4',
    published: true
  },
  {
    id: '2',
    name: 'MasterPatio',
    category: 'Doors',
    description: 'Lift-slide system for large glass dimensions.',
    features: ['Easy Operation', 'Zero Threshold', 'Passive House Certified'],
    imageUrl: 'https://picsum.photos/400/400?random=5',
    published: true
  }
];

export const SEED_SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'Residential',
    description: 'Transforming homes with light, space, and security through bespoke aluminium joinery.',
    points: ['Custom Fit', 'Energy Efficient', 'Modern Aesthetics'],
    imageUrl: 'https://picsum.photos/600/400?random=6'
  },
  {
    id: '2',
    title: 'Commercial',
    description: 'High-performance facades and entrances for retail and office buildings.',
    points: ['Heavy Duty', 'Brand Aligned', 'Rapid Installation'],
    imageUrl: 'https://picsum.photos/600/400?random=7'
  }
];

export const SEED_CUSTOMERS: Customer[] = [
  { id: '1', name: 'BuildCorp', type: 'Construction', logoUrl: 'https://picsum.photos/100/100?random=10', testimonial: "Precision and timeliness are why we choose Home Doors." },
  { id: '2', name: 'ArchStudio', type: 'Architecture', logoUrl: 'https://picsum.photos/100/100?random=11', testimonial: "They understand the architect's vision perfectly." },
  { id: '3', name: 'Urban Developers', type: 'Real Estate', logoUrl: 'https://picsum.photos/100/100?random=12' }
];

export const SEED_TEAM: TeamMember[] = [
  { id: '1', name: 'Robert Fox', role: 'Chief Engineer', bio: '20+ years in structural glazing.', imageUrl: 'https://picsum.photos/200/200?random=20' },
  { id: '2', name: 'Jane Doe', role: 'Design Lead', bio: 'Award-winning industrial designer.', imageUrl: 'https://picsum.photos/200/200?random=21' }
];

export const SEED_JOBS: JobOpening[] = [
  {
    id: '1',
    title: 'Fabrication Engineer',
    location: 'Main Workshop',
    type: 'Full-time',
    description: 'Oversee CNC machinery and assembly line quality.',
    requirements: ['BE in Mechanical Engineering', '3+ years experience', 'AutoCAD proficiency'],
    isOpen: true
  }
];
