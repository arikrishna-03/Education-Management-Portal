import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar as CalendarIcon, 
  FileCheck, 
  Users, 
  Brain, 
  FileText, 
  ArrowLeft, 
  Bell, 
  ChevronDown, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/app', label: 'Overview', icon: <LayoutDashboard size={18} />, exact: true },
    { path: '/app/courses', label: 'Courses', icon: <BookOpen size={18} /> },
    { path: '/app/calendar', label: 'Academic calendar', icon: <CalendarIcon size={18} /> },
    { path: '/app/assignments', label: 'Assignments', icon: <FileCheck size={18} /> },
    { path: '/app/students', label: 'Students', icon: <Users size={18} /> },
    { path: '/app/insights', label: 'AI insights', icon: <Brain size={18} /> },
    { path: '/app/reports', label: 'Reports', icon: <FileText size={18} /> },
  ];

  const isNavActive = (item: typeof navItems[0]) => {
    if (item.exact) {
      return path === '/app' || path === '/app/';
    }
    return path.startsWith(item.path);
  };

  return (
    <div className="hub-app-shell">
      {/* --------------------------------------------------------------------------
         PERSISTENT LEFT SIDEBAR
         -------------------------------------------------------------------------- */}
      <aside className={`hub-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="hub-sidebar-top">
          {/* Logo */}
          <Link to="/app" className="hub-brand-logo flex-align gap-3">
            <div className="hub-logo-badge flex-center">
              <span>AH</span>
            </div>
            <div>
              <span className="hub-brand-title">Academic Hub</span>
              <span className="hub-workspace-sub">Workspace</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="hub-nav-list">
            {navItems.map((item) => {
              const active = isNavActive(item);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hub-nav-item ${active ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="hub-nav-icon">{item.icon}</span>
                  <span className="hub-nav-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom: Back to home */}
        <div className="hub-sidebar-bottom">
          <Link to="/" className="hub-back-home-link flex-align gap-2">
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>
        </div>
      </aside>

      {/* --------------------------------------------------------------------------
         MAIN WORKSPACE WRAPPER
         -------------------------------------------------------------------------- */}
      <div className="hub-main-wrapper">
        {/* TOP USER HEADER BAR */}
        <header className="hub-top-header flex-between">
          <div className="flex-align gap-3">
            <button 
              className="hub-mobile-hamburger hide-desktop"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex-align gap-2">
              <span className="hub-header-badge">ACADEMIC HUB v4.2</span>
              <span className="text-xs text-muted hide-mobile">Institutional Administration System</span>
            </div>
          </div>

          {/* User Profile & Notifications */}
          <div className="hub-user-area flex-align gap-4">
            <button className="hub-icon-btn" title="AI Alerts">
              <Bell size={18} />
              <span className="hub-bell-dot" />
            </button>

            {/* Profile Dropdown Container */}
            <div className="hub-profile-dropdown-wrapper">
              <div 
                className="hub-profile-pill flex-align gap-3 cursor-pointer"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                <div className="user-avatar-circle flex-center">
                  <span>U</span>
                </div>
                <div className="user-info-text hide-mobile">
                  <strong className="user-name">Amina Rahman</strong>
                  <span className="user-role">Academic administrator</span>
                </div>
                <ChevronDown size={14} className="text-muted hide-mobile" />
              </div>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="hub-profile-menu">
                  <div className="menu-header">
                    <strong className="text-sm block">Amina Rahman</strong>
                    <span className="text-xs text-muted">amina.r@academichub.edu</span>
                  </div>
                  <div className="menu-divider" />
                  <button className="menu-item flex-align gap-2" onClick={() => setProfileDropdownOpen(false)}>
                    <User size={14} /> Profile
                  </button>
                  <button className="menu-item flex-align gap-2" onClick={() => setProfileDropdownOpen(false)}>
                    <Settings size={14} /> Account settings
                  </button>
                  <button className="menu-item flex-align gap-2" onClick={() => setProfileDropdownOpen(false)}>
                    <Bell size={14} /> Notification preferences
                  </button>
                  <div className="menu-divider" />
                  <button className="menu-item text-crimson flex-align gap-2" onClick={() => navigate('/login')}>
                    <LogOut size={14} /> Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="hub-page-content">
          {children}
        </main>
      </div>
    </div>
  );
};
