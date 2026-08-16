import React from 'react';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  School, 
  BookOpen, 
  FileCheck, 
  Award, 
  BarChart3, 
  Brain, 
  Settings, 
  User,
  LogOut,
  Bell,
  Search,
  ShieldCheck
} from 'lucide-react';
import { getStoredUser, setStoredUser } from '../data/authState';

interface AdminShellProps {
  children: React.ReactNode;
}

export const AdminShell: React.FC<AdminShellProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const user = getStoredUser();

  // ACCESS PROTECTION: If unauthenticated or role is not admin, redirect to /admin/login
  if (!user || user.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  const navItems = [
    { label: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Manage Students', path: '/admin/students', icon: Users },
    { label: 'Manage Teachers', path: '/admin/teachers', icon: School },
    { label: 'Manage Courses & Classes', path: '/admin/courses', icon: BookOpen },
    { label: 'Manage Assignments', path: '/admin/assignments', icon: FileCheck },
    { label: 'Manage Exams & Grades', path: '/admin/exams', icon: Award },
    { label: 'View Reports & Analytics', path: '/admin/reports', icon: BarChart3 },
    { label: 'AI Insights & Monitoring', path: '/admin/ai-insights', icon: Brain },
    { label: 'Performance Reports & Summary', path: '/admin/performance-reports', icon: BarChart3 }
  ];

  const handleLogout = () => {
    setStoredUser(null);
    navigate('/admin/login');
  };

  return (
    <div className="hub-app-shell">
      {/* AUTHENTICATED ADMIN SIDEBAR */}
      <aside className="hub-sidebar" style={{ borderRight: '1px solid #2A1647', width: '270px' }}>
        <div>
          {/* Logo Badge */}
          <Link to="/" className="flex-align gap-3" style={{ padding: '0.4rem 0.6rem' }}>
            <div className="hub-logo-badge flex-center" style={{ background: '#7C3AED', color: '#FFFFFF' }}>
              AH
            </div>
            <div className="flex-column">
              <span className="hub-brand-title">Academic Hub</span>
              <span className="hub-workspace-sub" style={{ color: '#F3E8FF' }}>ADMINISTRATION PORTAL</span>
            </div>
          </Link>

          {/* Admin Area Navigation Items */}
          <nav className="hub-nav-list">
            <span className="micro-eyebrow" style={{ padding: '0.4rem 0.85rem', fontSize: '0.65rem', color: '#7C3AED' }}>ADMINISTRATIVE GOVERNANCE</span>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = path === item.path || (item.path !== '/admin/dashboard' && path.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hub-nav-item admin-sidebar-item ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Account / Log Out */}
        <div style={{ borderTop: '1px solid #2A1647', paddingTop: '1rem' }}>
          <div className="flex-align gap-3" style={{ padding: '0.4rem 0.6rem', marginBottom: '0.6rem' }}>
            <div className="hub-logo-badge flex-center" style={{ width: '34px', height: '34px', fontSize: '0.85rem', background: '#2A1647', color: '#F3E8FF', border: '1px solid #7C3AED' }}>
              ADM
            </div>
            <div className="flex-column flex-1">
              <strong className="text-xs text-primary" style={{ color: '#F5EFE3' }}>{user.name}</strong>
              <span className="text-xs" style={{ fontSize: '0.7rem', color: '#F3E8FF' }}>ADMINISTRATOR ({user.studentId || 'ADMIN'})</span>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="hub-nav-item w-full text-crimson" 
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            <LogOut size={16} />
            <span>ADMIN LOGOUT</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="hub-main-wrapper" style={{ marginLeft: '270px', maxWidth: 'calc(100vw - 270px)' }}>
        {/* Admin Workspace Header */}
        <header className="hub-top-header flex-between" style={{ borderBottom: '1px solid #2A1647', background: '#05101E' }}>
          <div className="flex-align gap-3">
            <span className="micro-eyebrow" style={{ margin: 0, color: '#7C3AED' }}>ADMINISTRATIVE DESK</span>
            <span className="text-muted text-xs">/</span>
            <span className="text-xs text-primary font-mono" style={{ color: '#F3E8FF' }}>{path}</span>
          </div>

          <div className="flex-align gap-4">
            <div className="flex-align gap-2">
              <span className="text-xs text-muted">System Status:</span>
              <strong className="text-xs flex-align gap-1" style={{ color: '#2FA36B' }}>
                <ShieldCheck size={14} /> SECURE AUTHENTICATED
              </strong>
            </div>

            <div className="flex-align gap-2 cursor-pointer" onClick={() => navigate('/admin/profile')}>
              <div className="hub-logo-badge flex-center" style={{ width: '28px', height: '28px', fontSize: '0.75rem', background: '#2A1647', color: '#F3E8FF', border: '1px solid #7C3AED' }}>
                ADM
              </div>
              <span className="text-xs font-bold" style={{ color: '#F5EFE3' }}>{user.name}</span>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main style={{ padding: '2rem', flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
};
