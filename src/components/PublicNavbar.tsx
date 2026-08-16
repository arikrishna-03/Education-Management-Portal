import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const PublicNavbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="academia-navbar">
      <div className="academia-nav-container">
        {/* Typographic Logo */}
        <Link to="/" className="academia-brand flex-column">
          <span className="brand-mark">ACADEMIA</span>
          <span className="brand-sub">ACADEMIC INSTITUTE</span>
        </Link>

        {/* Minimal Nav Links */}
        <nav className="academia-nav-links desktop-only">
          <Link to="/" className={`academia-nav-link ${path === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/courses" className={`academia-nav-link ${path === '/courses' ? 'active' : ''}`}>
            Courses
          </Link>
          <Link to="/contact" className={`academia-nav-link ${path === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
          <Link to="/courses/arc-118" className={`academia-nav-link ${path.startsWith('/courses/') ? 'active' : ''}`}>
            Course Details
          </Link>
        </nav>

        {/* Action Button */}
        <div className="academia-nav-actions flex-align gap-3">
          <Link to="/courses" className="btn-academia-text flex-align gap-2 desktop-only">
            EXPLORE COURSES <span className="arrow-sym">→</span>
          </Link>

          <button 
            className="mobile-menu-btn hide-desktop"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="academia-mobile-drawer">
          <nav className="mobile-drawer-links">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/courses/arc-118" onClick={() => setMobileMenuOpen(false)}>Course Details</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
