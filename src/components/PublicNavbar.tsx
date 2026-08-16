import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, ArrowRight, ShieldCheck, UserCheck, Sparkles } from 'lucide-react';
import { User } from '../data/edutrData';

interface PublicNavbarProps {
  currentUser: User;
  onSwitchUserRole: (role: 'public' | 'student' | 'teacher' | 'admin') => void;
}

export const PublicNavbar: React.FC<PublicNavbarProps> = ({ currentUser, onSwitchUserRole }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="public-navbar">
      <div className="public-nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand">
          <div className="nav-brand-icon">
            <GraduationCap size={22} />
          </div>
          <div className="nav-brand-text">
            <span className="brand-name">EduTR</span>
            <span className="brand-tag">AI ACADEMIC PLATFORM</span>
          </div>
        </Link>

        {/* Public Navigation Links */}
        <nav className="public-nav-links">
          <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/courses" className={`nav-link ${path.startsWith('/courses') ? 'active' : ''}`}>
            Courses
          </Link>
          <Link to="/contact" className={`nav-link ${path === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
          <Link to="/mentor" className={`nav-link ${path.startsWith('/mentor') ? 'active' : ''}`}>
            Mentor Portal
          </Link>
        </nav>

        {/* Role Switcher Pill & Actions */}
        <div className="public-nav-actions">
          {/* Quick Role Simulator Switcher */}
          <div className="role-switcher-pill">
            <span className="role-switcher-label">Demo Role:</span>
            <button 
              className={`role-btn ${currentUser.role === 'public' ? 'active' : ''}`}
              onClick={() => onSwitchUserRole('public')}
            >
              Guest
            </button>
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

          {currentUser.role !== 'public' ? (
            <Link to={currentUser.role === 'admin' ? '/admin' : '/dashboard'} className="btn-nav-portal">
              Go to Portal <ArrowRight size={16} />
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn-nav-login">
                Login
              </Link>
              <Link to="/courses" className="btn-nav-primary">
                Get Started <ArrowRight size={16} />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
