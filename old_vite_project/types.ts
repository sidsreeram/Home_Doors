export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  published: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
  isOpen: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Customer {
  id: string;
  name: string;
  type: string;
  logoUrl: string; // Using a placeholder for logos
  testimonial?: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  points: string[];
  imageUrl: string;
}

// Global Context Type
export interface AppContextType {
  projects: Project[];
  products: Product[];
  jobs: JobOpening[];
  team: TeamMember[];
  customers: Customer[];
  solutions: Solution[];
  // CRUD Actions (simplified for demo)
  addProject: (p: Project) => void;
  deleteProject: (id: string) => void;
  addProduct: (p: Product) => void;
  deleteProduct: (id: string) => void;
}
