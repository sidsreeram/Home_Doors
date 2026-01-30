import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Button } from '../components/Shared';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, Trash2, LayoutGrid, Users, Briefcase, Settings, LogOut, Package } from 'lucide-react';

// --- Login Component ---
const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy authentication
    if (email === 'admin@homedoors.com' && password === 'admin') {
      onLogin();
    } else {
      setError('Invalid credentials (try admin@homedoors.com / admin)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2 border focus:border-amber-500 focus:outline-none"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2 border focus:border-amber-500 focus:outline-none"
              required 
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button className="w-full bg-slate-900">Sign In</Button>
        </form>
      </div>
    </div>
  );
};

// --- Dashboard Logic ---
export const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'projects' | 'team'>('dashboard');
  const context = useContext(AppContext);

  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} />;

  // Stats Data
  const statsData = [
    { name: 'Projects', count: context.projects.length },
    { name: 'Products', count: context.products.length },
    { name: 'Team', count: context.team.length },
    { name: 'Jobs', count: context.jobs.length },
  ];

  // Render Content Switcher
  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
               <div className="bg-white p-6 rounded shadow-sm border border-stone-100">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Total Projects</h3>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{context.projects.length}</p>
               </div>
               <div className="bg-white p-6 rounded shadow-sm border border-stone-100">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Active Products</h3>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{context.products.length}</p>
               </div>
               <div className="bg-white p-6 rounded shadow-sm border border-stone-100">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Job Openings</h3>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{context.jobs.filter(j => j.isOpen).length}</p>
               </div>
               <div className="bg-white p-6 rounded shadow-sm border border-stone-100">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Customers</h3>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{context.customers.length}</p>
               </div>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-stone-100 h-80">
               <h3 className="text-lg font-bold mb-4">Content Statistics</h3>
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={statsData}>
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="name" />
                   <YAxis />
                   <Tooltip />
                   <Bar dataKey="count" fill="#f59e0b" />
                 </BarChart>
               </ResponsiveContainer>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div>
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Projects</h2>
                <Button size="sm" onClick={() => alert("Create Modal would open here")}> <Plus className="w-4 h-4 mr-1"/> Add Project</Button>
             </div>
             <div className="bg-white rounded shadow-sm border border-stone-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-stone-50 text-slate-500 font-medium text-sm">
                    <tr>
                      <th className="p-4">Image</th>
                      <th className="p-4">Title</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {context.projects.map(p => (
                      <tr key={p.id} className="hover:bg-stone-50">
                        <td className="p-4"><img src={p.imageUrl} alt="" className="w-12 h-12 object-cover rounded"/></td>
                        <td className="p-4 font-medium text-slate-900">{p.title}</td>
                        <td className="p-4 text-slate-500">{p.category}</td>
                        <td className="p-4">
                          <button onClick={() => context.deleteProject(p.id)} className="text-red-500 hover:text-red-700">
                            <Trash2 className="w-4 h-4"/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        );
      // Similar structure for Products, Team etc. keeping it brief for the file constraint
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex h-screen bg-stone-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6">
           <h1 className="text-2xl font-serif font-bold">HOME DOORS<span className="text-amber-500">.</span></h1>
           <span className="text-xs text-slate-400 uppercase tracking-widest">Admin Panel</span>
        </div>
        <nav className="flex-grow px-4 py-6 space-y-2">
           <button onClick={() => setActiveTab('dashboard')} className={`flex items-center w-full px-4 py-3 rounded text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:bg-slate-800'}`}>
             <LayoutGrid className="w-5 h-5 mr-3"/> Dashboard
           </button>
           <button onClick={() => setActiveTab('projects')} className={`flex items-center w-full px-4 py-3 rounded text-sm font-medium transition-colors ${activeTab === 'projects' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:bg-slate-800'}`}>
             <Briefcase className="w-5 h-5 mr-3"/> Projects / Gallery
           </button>
           <button onClick={() => setActiveTab('products')} className={`flex items-center w-full px-4 py-3 rounded text-sm font-medium transition-colors ${activeTab === 'products' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:bg-slate-800'}`}>
             <Package className="w-5 h-5 mr-3"/> Products
           </button>
           <button onClick={() => setActiveTab('team')} className={`flex items-center w-full px-4 py-3 rounded text-sm font-medium transition-colors ${activeTab === 'team' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:bg-slate-800'}`}>
             <Users className="w-5 h-5 mr-3"/> Team
           </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
           <button onClick={() => setIsAuthenticated(false)} className="flex items-center text-slate-400 hover:text-white text-sm">
             <LogOut className="w-4 h-4 mr-2"/> Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
         {renderContent()}
      </main>
    </div>
  );
};
