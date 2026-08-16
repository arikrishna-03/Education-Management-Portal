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
  Search
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

  // Guard: if not authenticated or not student, allow seamless access for demo or redirect if user logs out
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
    { label: 'Profile', path: '/student/profile', icon: User }
  ];

  const handleLogout = () => {
    setStoredUser(null);
    navigate('/login');
  };

  return (
    <div className="hub-app-shell">
      {/* AUTHENTICATED STUDENT SIDEBAR (NO PUBLIC NAVBAR / FOOTER) */}
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
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* DEDICATED STUDENT MAIN CONTENT AREA */}
      <div className="hub-main-wrapper">
        {/* STUDENT TOP HEADER */}
        <header className="hub-top-header flex-between">
          <div>
            <span className="micro-eyebrow" style={{ color: '#F1BA4B', letterSpacing: '0.12em' }}>
              STUDENT PORTAL · ACADEMIC YEAR 2026
            </span>
            <h2 className="font-serif" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: 0 }}>
              Welcome back, {user.name.split(' ')[0]}.
            </h2>
          </div>

          <div className="flex-align gap-4">
            <div className="flex-align gap-2 search-field-minimal" style={{ width: '220px' }}>
              <Search size={16} style={{ color: '#8D918F' }} />
              <input 
                type="text" 
                placeholder="Search courses, grades..." 
                style={{ background: '#0B192A', border: '1px solid #1B3045', padding: '0.4rem 0.8rem', fontSize: '0.85rem', color: '#F5EFE3', borderRadius: '6px', width: '100%' }}
              />
            </div>

            <button className="flex-center" style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#0D1B2D', border: '1px solid #1B3045', color: '#F1BA4B' }}>
              <Bell size={18} />
            </button>
          </div>
        </header>

        {/* FULL PAGE PAGE CONTAINER */}
        <main className="flex-1" style={{ padding: '2rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
};
