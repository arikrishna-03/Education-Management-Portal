import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { getStoredUser, setStoredUser } from '../data/authState';

export const PublicNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentUser = getStoredUser();

  const handleLogout = () => {
    setStoredUser(null);
    navigate('/login');
  };

  return (
    <header className="academia-navbar">
      <div className="academia-nav-container">
        {/* Academic Hub Logo (Gold Badge + Cream Text) */}
        <Link to="/" className="academia-brand flex-align gap-3">
          <div className="hub-logo-badge flex-center">
            AH
          </div>
          <div className="flex-column">
            <span className="brand-mark">Academic Hub</span>
            <span className="brand-sub">INSTITUTIONAL PORTAL</span>
          </div>
        </Link>

        {/* Minimal Nav Links */}
        <nav className="academia-nav-links desktop-only">
          <Link to="/" className={`academia-nav-link ${path === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/courses" className={`academia-nav-link ${path === '/courses' ? 'active' : ''}`}>
            Courses
          </Link>
          <Link to="/courses/arc-118" className={`academia-nav-link ${path.startsWith('/courses/') ? 'active' : ''}`}>
            Course Details
          </Link>
          <Link to="/contact" className={`academia-nav-link ${path === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </nav>

        {/* Action Button: User Profile / Logout when logged in */}
        <div className="academia-nav-actions flex-align gap-3">
          {currentUser && (
            <div className="flex-align gap-3 desktop-only">
              <Link 
                to={currentUser.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'} 
                className="btn-academia-text flex-align gap-1"
                style={{ textTransform: 'none', letterSpacing: 'normal' }}
              >
                <User size={14} /> <strong>{currentUser.name}</strong>
              </Link>
              <button 
                onClick={handleLogout} 
                className="btn-link-editorial" 
                style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}
              >
                LOGOUT
              </button>
            </div>
          )}

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer" style={{ background: '#0D1B2D', padding: '1.5rem 2rem', borderBottom: '1px solid #1B3045' }}>
          <nav className="flex-column gap-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="academia-nav-link">Home</Link>
            <Link to="/courses" onClick={() => setMobileMenuOpen(false)} className="academia-nav-link">Courses</Link>
            <Link to="/courses/arc-118" onClick={() => setMobileMenuOpen(false)} className="academia-nav-link">Course Details</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="academia-nav-link">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
