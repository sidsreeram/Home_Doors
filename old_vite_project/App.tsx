import React, { createContext, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Shared';
import { PublicHome } from './pages/Public';
import { AdminDashboard } from './pages/Admin';
import { DesignStudio } from './pages/DesignStudio';
import { AppContextType, Project, Product } from './types';
import { SEED_PROJECTS, SEED_PRODUCTS, SEED_JOBS, SEED_TEAM, SEED_CUSTOMERS, SEED_SOLUTIONS } from './constants';

// Create Context
export const AppContext = createContext<AppContextType>({
  projects: [],
  products: [],
  jobs: [],
  team: [],
  customers: [],
  solutions: [],
  addProject: () => {},
  deleteProject: () => {},
  addProduct: () => {},
  deleteProduct: () => {},
});

const App: React.FC = () => {
  // State initialization with seed data
  const [projects, setProjects] = useState(SEED_PROJECTS);
  const [products, setProducts] = useState(SEED_PRODUCTS);
  const [jobs, setJobs] = useState(SEED_JOBS);
  const [team, setTeam] = useState(SEED_TEAM);
  const [customers, setCustomers] = useState(SEED_CUSTOMERS);
  const [solutions, setSolutions] = useState(SEED_SOLUTIONS);

  // Simple CRUD handlers
  const addProject = (p: Project) => setProjects([...projects, p]);
  const deleteProject = (id: string) => setProjects(projects.filter(p => p.id !== id));
  
  const addProduct = (p: Product) => setProducts([...products, p]);
  const deleteProduct = (id: string) => setProducts(products.filter(p => p.id !== id));

  return (
    <AppContext.Provider value={{
      projects, products, jobs, team, customers, solutions,
      addProject, deleteProject, addProduct, deleteProduct
    }}>
      <Router>
        <Routes>
          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout><PublicHome /></Layout>} />
          <Route path="/design-studio" element={<Layout><DesignStudio /></Layout>} />
          
          {/* Admin Route (No Layout, handles its own sidebar) */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
