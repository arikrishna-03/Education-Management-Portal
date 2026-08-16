import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  LayoutDashboard, 
  BookOpen, 
  CalendarCheck, 
  FileCheck, 
  Award, 
  Brain, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  LogOut,
  Bell,
  Menu,
  X
} from 'lucide-react';
import { User } from '../data/edutrData';

interface AuthenticatedNavbarProps {
  currentUser: User;
  onLogout: () => void;
  onSwitchUserRole: (role: 'public' | 'student' | 'teacher' | 'admin') => void;
}

export const AuthenticatedNavbar: React.FC<AuthenticatedNavbarProps> = ({
  currentUser,
  onLogout,
  onSwitchUserRole
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine current area theme indicator
  let areaThemeClass = 'area-user-green';
  if (path.startsWith('/attendance') || path.startsWith('/assignments') || path.startsWith('/exams')) {
    areaThemeClass = 'area-academic-orange';
  } else if (path.startsWith('/admin')) {
    areaThemeClass = 'area-admin-purple';
  } else if (path.startsWith('/ai')) {
    areaThemeClass = 'area-ai-cyan';
  } else if (path.startsWith('/reports') || path.startsWith('/performance-reports')) {
    areaThemeClass = 'area-reports-slate';
  }

  // Links per role
  const getNavLinks = () => {
    if (currentUser.role === 'admin') {
      return [
        { path: '/admin', label: 'Admin Dashboard', icon: <ShieldCheck size={18} /> },
        { path: '/courses', label: 'Manage Courses', icon: <BookOpen size={18} /> },
        { path: '/assignments', label: 'Manage Assignments', icon: <FileCheck size={18} /> },
        { path: '/exams-grades', label: 'Manage Exams', icon: <Award size={18} /> },
        { path: '/ai', label: 'AI Monitoring', icon: <Brain size={18} /> },
        { path: '/reports', label: 'Reports & Analytics', icon: <FileText size={18} /> },
        { path: '/performance-reports', label: 'Performance Summary', icon: <TrendingUp size={18} /> },
      ];
    } else if (currentUser.role === 'teacher') {
      return [
        { path: '/dashboard', label: 'Teacher Dashboard', icon: <LayoutDashboard size={18} /> },
        { path: '/courses', label: 'My Courses', icon: <BookOpen size={18} /> },
        { path: '/attendance', label: 'Attendance', icon: <CalendarCheck size={18} /> },
        { path: '/assignments', label: 'Assignments', icon: <FileCheck size={18} /> },
        { path: '/exams-grades', label: 'Exams & Grades', icon: <Award size={18} /> },
        { path: '/ai', label: 'AI Insights', icon: <Brain size={18} /> },
        { path: '/reports', label: 'Reports', icon: <FileText size={18} /> },
      ];
    } else {
      // Student
      return [
        { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
        { path: '/courses', label: 'My Courses', icon: <BookOpen size={18} /> },
        { path: '/attendance', label: 'Attendance', icon: <CalendarCheck size={18} /> },
        { path: '/assignments', label: 'Assignments', icon: <FileCheck size={18} /> },
        { path: '/exams-grades', label: 'Exams & Grades', icon: <Award size={18} /> },
        { path: '/progress', label: 'My Progress', icon: <TrendingUp size={18} /> },
        { path: '/ai', label: 'AI Insights', icon: <Brain size={18} /> },
        { path: '/reports', label: 'Reports', icon: <FileText size={18} /> },
      ];
    }
  };

  const navLinks = getNavLinks();

  return (
    <header className={`auth-navbar ${areaThemeClass}`}>
      <div className="auth-nav-container">
        {/* Brand & Area Badge */}
        <div className="auth-brand-box">
          <button 
            className="mobile-hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to={currentUser.role === 'admin' ? '/admin' : '/dashboard'} className="nav-brand">
            <div className="nav-brand-icon">
              <GraduationCap size={22} />
            </div>
            <div className="nav-brand-text">
              <span className="brand-name">EduTR</span>
              <span className="brand-tag">ACADEMIC OPERATING SYSTEM</span>
            </div>
          </Link>

          <span className="area-badge">
            {currentUser.role.toUpperCase()} WORKSPACE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="auth-nav-links desktop-only">
          {navLinks.map((link) => {
            const isActive = path === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`auth-link ${isActive ? 'active' : ''}`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Pill & Actions */}
        <div className="auth-user-actions">
          {/* Quick Role Switcher Pill for Testing */}
          <div className="role-switcher-pill hide-mobile">
            <button 
              className={`role-btn ${currentUser.role === 'student' ? 'active' : ''}`}
              onClick={() => onSwitchUserRole('student')}
            >
              Student
            </button>
            <button 
              className={`role-btn ${currentUser.role === 'teacher' ? 'active' : ''}`}
              onClick={() => onSwitchUserRole('teacher')}
            >
              Teacher
            </button>
            <button 
              className={`role-btn ${currentUser.role === 'admin' ? 'active' : ''}`}
              onClick={() => onSwitchUserRole('admin')}
            >
              Admin
            </button>
          </div>

          {/* User Profile Info */}
          <div className="user-profile-pill">
            <img src={currentUser.avatar} alt={currentUser.name} className="user-avatar-sm" />
            <div className="user-pill-text hide-mobile">
              <span className="user-pill-name">{currentUser.name}</span>
              <span className="user-pill-role">{currentUser.role}</span>
            </div>
          </div>

          <button className="btn-logout" onClick={onLogout} title="Sign Out">
            <LogOut size={16} />
            <span className="hide-mobile">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`mobile-nav-link ${path === link.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
            <div className="mobile-role-switcher">
              <span>Switch Demo Role:</span>
              <div className="flex-gap-2">
                <button onClick={() => { onSwitchUserRole('student'); setMobileMenuOpen(false); }}>Student</button>
                <button onClick={() => { onSwitchUserRole('teacher'); setMobileMenuOpen(false); }}>Teacher</button>
                <button onClick={() => { onSwitchUserRole('admin'); setMobileMenuOpen(false); }}>Admin</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
