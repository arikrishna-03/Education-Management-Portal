import React from 'react';
import { 
  GraduationCap, 
  LayoutDashboard, 
  BookOpen, 
  Calendar as CalendarIcon, 
  FileCheck, 
  Users, 
  Sparkles, 
  FileText, 
  LogOut,
  ChevronRight,
  ShieldCheck,
  X
} from 'lucide-react';
import type { NavigationTab, UserProfile } from '../types';

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  user: UserProfile;
  aiAlertCount: number;
  onOpenProfile: () => void;
  onSignOut: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  user,
  aiAlertCount,
  onOpenProfile,
  onSignOut,
  isMobileOpen,
  setIsMobileOpen
}) => {
  const navItems: { id: NavigationTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen size={20} /> },
    { id: 'calendar', label: 'Academic Calendar', icon: <CalendarIcon size={20} /> },
    { id: 'assignments', label: 'Assignments', icon: <FileCheck size={20} /> },
    { id: 'students', label: 'Students', icon: <Users size={20} /> },
    { id: 'insights', label: 'AI Insights', icon: <Sparkles size={20} />, badge: aiAlertCount },
    { id: 'reports', label: 'Reports', icon: <FileText size={20} /> }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="sidebar-mobile-backdrop" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={`sidebar-container ${isMobileOpen ? 'mobile-open' : ''}`}>
        {/* Sidebar Brand Header */}
        <div className="sidebar-header">
          <div className="brand-logo-box">
            <div className="brand-icon-wrapper">
              <GraduationCap size={24} className="brand-icon" />
            </div>
            <div className="brand-text-box">
              <h1 className="brand-title">Academic Hub</h1>
              <span className="brand-subtitle">Learning Intelligence</span>
            </div>
          </div>
          <button 
            className="sidebar-close-btn mobile-only" 
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <span className="sidebar-section-label">MAIN MENU</span>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
              >
                <div className="nav-item-left">
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </div>
                {item.badge && item.badge > 0 ? (
                  <span className="nav-badge-pill">{item.badge}</span>
                ) : null}
                {isActive && <ChevronRight size={16} className="nav-active-indicator" />}
              </button>
            );
          })}
        </nav>

        {/* User Profile Card at Bottom */}
        <div className="sidebar-footer">
          <div className="user-profile-card" onClick={onOpenProfile}>
            <div className="user-avatar-wrapper">
              <img src={user.avatar} alt={user.name} className="user-avatar-img" />
              <span className="user-status-dot" title="Active Administrator" />
            </div>
            <div className="user-info-box">
              <h4 className="user-name">{user.name}</h4>
              <p className="user-role flex-align">
                <ShieldCheck size={12} className="role-icon" /> {user.role}
              </p>
            </div>
          </div>

          <div className="sidebar-footer-actions">
            <button className="user-action-btn" onClick={onOpenProfile} title="Profile & Preferences">
              Profile
            </button>
            <button className="user-action-btn logout" onClick={onSignOut} title="Sign Out">
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
