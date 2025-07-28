import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeList from './components/Employees/EmployeeList';
import PayrollDashboard from './components/Payroll/PayrollDashboard';
import RecruitmentDashboard from './components/Recruitment/RecruitmentDashboard';
import toast, { Toaster } from 'react-hot-toast';
import PerformanceDashboard from './components/Perfomance/PerfomanceDashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user] = useState({ email: 'admin@zirahr.co.ke', role: 'administrator' });

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'employees':
        return <EmployeeList />;
      case 'payroll':
        return <PayrollDashboard />;
      case 'recruitment':
        return <RecruitmentDashboard/>
      case 'leaves':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">Leave Management</h1>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 text-center">
              <p className="text-gray-400">Leave management module coming soon...</p>
            </div>
          </div>
        );
      case 'performance':
        return <PerformanceDashboard/>
      case 'training':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">Training & Development</h1>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 text-center">
              <p className="text-gray-400">Training management module coming soon...</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">Reports & Analytics</h1>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 text-center">
              <p className="text-gray-400">Reports module coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">System Settings</h1>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 text-center">
              <p className="text-gray-400">Settings module coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100/30 via-transparent to-transparent"></div>
      
      <div className="relative flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex-1">
          <Header 
            user={user} 
            onLogout={() => toast.success('Logged out successfully')}
          />
          
          <main className="overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
      
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
}

export default App;