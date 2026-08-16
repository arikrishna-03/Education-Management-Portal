import React from 'react';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  CalendarCheck, 
  Award, 
  TrendingUp, 
  Sparkles, 
  User, 
  LogOut,
  Bell,
  Search,
  BarChart3
} from 'lucide-react';
import { getStoredUser, setStoredUser } from '../data/authState';

interface StudentShellProps {
  children: React.ReactNode;
}

export const StudentShell: React.FC<StudentShellProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const user = getStoredUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const navItems = [
    { label: 'User Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
    { label: 'My Courses', path: '/student/courses', icon: BookOpen },
    { label: 'My Assignments', path: '/student/assignments', icon: FileText },
    { label: 'Attendance', path: '/student/attendance', icon: CalendarCheck },
    { label: 'Grades', path: '/student/grades', icon: Award },
    { label: 'My Progress', path: '/student/progress', icon: TrendingUp },
    { label: 'AI Recommendations', path: '/student/ai-recommendations', icon: Sparkles },
    { label: 'Performance Report', path: '/student/performance-report', icon: BarChart3 },
    { label: 'Profile', path: '/student/profile', icon: User }
  ];

  const handleLogout = () => {
    setStoredUser(null);
    navigate('/login');
  };

  return (
    <div className="hub-app-shell">
      {/* AUTHENTICATED STUDENT SIDEBAR */}
      <aside className="hub-sidebar">
        <div>
          {/* Logo Badge */}
          <Link to="/" className="flex-align gap-3" style={{ padding: '0.4rem 0.6rem' }}>
            <div className="hub-logo-badge flex-center">
              AH
            </div>
            <div className="flex-column">
              <span className="hub-brand-title">Academic Hub</span>
              <span className="hub-workspace-sub">STUDENT WORKSPACE</span>
            </div>
          </Link>

          {/* Student Area Navigation Items */}
          <nav className="hub-nav-list">
            <span className="micro-eyebrow" style={{ padding: '0.4rem 0.85rem', fontSize: '0.65rem' }}>USER AREA</span>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = path === item.path || (item.path !== '/student/dashboard' && path.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hub-nav-item ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Account / Log Out */}
        <div style={{ borderTop: '1px solid #1B3045', paddingTop: '1rem' }}>
          <div className="flex-align gap-3" style={{ padding: '0.4rem 0.6rem', marginBottom: '0.6rem' }}>
            <div className="hub-logo-badge flex-center" style={{ width: '34px', height: '34px', fontSize: '0.85rem', background: '#00382E', color: '#F1BA4B' }}>
              {user.avatar || 'AR'}
            </div>
            <div className="flex-column flex-1">
              <strong className="text-xs text-primary" style={{ color: '#F5EFE3' }}>{user.name}</strong>
              <span className="text-xs text-muted" style={{ fontSize: '0.7rem' }}>{user.studentId || 'STUDENT'}</span>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="hub-nav-item w-full text-crimson" 
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            <LogOut size={16} />
            <span>LOG OUT</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="hub-main-wrapper">
        {/* Student Workspace Header */}
        <header className="hub-top-header flex-between">
          <div className="flex-align gap-3">
            <span className="micro-eyebrow" style={{ margin: 0 }}>STUDENT WORKSPACE</span>
            <span className="text-muted text-xs">/</span>
            <span className="text-xs text-primary font-mono" style={{ color: '#F5EFE3' }}>{path}</span>
          </div>

          <div className="flex-align gap-4">
            <div className="flex-align gap-2">
              <span className="text-xs text-muted">Term:</span>
              <strong className="text-xs text-gold">2026 Academic Term 01</strong>
            </div>

            <div className="flex-align gap-2 cursor-pointer" onClick={() => navigate('/student/profile')}>
              <div className="hub-logo-badge flex-center" style={{ width: '28px', height: '28px', fontSize: '0.75rem', background: '#00382E', color: '#F1BA4B' }}>
                {user.avatar || 'AR'}
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
