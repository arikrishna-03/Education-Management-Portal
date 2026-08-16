import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Sparkles, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  ChevronDown
} from 'lucide-react';
import { UserProfile, NotificationItem } from '../types';

interface HeaderProps {
  user: UserProfile;
  activeTerm: string;
  setActiveTerm: (term: string) => void;
  notifications: NotificationItem[];
  onMarkNotificationRead: (id: string) => void;
  onOpenMobileSidebar: () => void;
  onQuickAction: (action: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  activeTerm,
  setActiveTerm,
  notifications,
  onMarkNotificationRead,
  onOpenMobileSidebar,
  onQuickAction,
  searchQuery,
  setSearchQuery
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTermDropdown, setShowTermDropdown] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="header-container">
      <div className="header-left">
        <button 
          className="header-icon-btn mobile-only" 
          onClick={onOpenMobileSidebar}
          aria-label="Open Sidebar"
        >
          <Menu size={22} />
        </button>

        {/* Global Search Input */}
        <div className="global-search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            className="global-search-input"
            placeholder="Search courses, students, assignments, reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="search-clear-btn" 
              onClick={() => setSearchQuery('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="header-right">
        {/* Academic Term Selector */}
        <div className="header-dropdown-wrapper">
          <button 
            className="header-term-btn"
            onClick={() => setShowTermDropdown(!showTermDropdown)}
          >
            <CalendarIcon size={16} className="term-icon" />
            <span>{activeTerm}</span>
            <ChevronDown size={14} />
          </button>

          {showTermDropdown && (
            <div className="header-dropdown-menu">
              {['Fall 2026 Term', 'Spring 2026 Term', 'Summer 2026 Term', 'Academic Year 2025-26'].map((term) => (
                <button
                  key={term}
                  className={`header-dropdown-item ${activeTerm === term ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTerm(term);
                    setShowTermDropdown(false);
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Action Button */}
        <button 
          className="btn-accent-header"
          onClick={() => onQuickAction('add_event')}
        >
          <Sparkles size={16} />
          <span className="hide-mobile">Quick Event</span>
        </button>

        {/* Notifications Popover */}
        <div className="header-dropdown-wrapper">
          <button 
            className="header-icon-btn notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <Bell size={20} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>

          {showNotifications && (
            <div className="notifications-popover">
              <div className="popover-header">
                <h3>Live Academic Alerts</h3>
                <span className="popover-badge">{unreadCount} New</span>
              </div>
              <div className="popover-body">
                {notifications.length === 0 ? (
                  <p className="popover-empty">No active notifications.</p>
                ) : (
                  notifications.map((item) => (
                    <div 
                      key={item.id} 
                      className={`notification-item ${item.read ? 'read' : 'unread'}`}
                      onClick={() => onMarkNotificationRead(item.id)}
                    >
                      <div className="notification-item-icon">
                        {item.type === 'alert' && <AlertTriangle size={16} className="text-crimson" />}
                        {item.type === 'info' && <Info size={16} className="text-indigo" />}
                        {item.type === 'success' && <CheckCircle2 size={16} className="text-emerald" />}
                      </div>
                      <div className="notification-item-content">
                        <p className="notification-title">{item.title}</p>
                        <span className="notification-time">{item.time}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Avatar Quick Pill */}
        <div className="header-user-pill">
          <img src={user.avatar} alt={user.name} className="header-avatar-img" />
          <span className="header-user-name hide-mobile">{user.name.split(' ')[0]}</span>
        </div>
      </div>
    </header>
  );
};
