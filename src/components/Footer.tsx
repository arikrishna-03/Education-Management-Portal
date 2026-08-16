import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="academia-footer">
      <div className="academia-footer-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <span className="footer-brand-title">ACADEMIA</span>
            <p className="footer-brand-desc">
              A place for deeper learning. Dedicated to rigorous academic inquiry, architectural spatial thinking, and intellectual independence.
            </p>
          </div>

          {/* Nav Column 1 */}
          <div className="footer-nav-col">
            <span className="footer-col-label">NAVIGATION</span>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/app">Workspace Portal</Link></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="footer-nav-col">
            <span className="footer-col-label">DISCIPLINE</span>
            <ul className="footer-link-list">
              <li><Link to="/courses">Spatial & Architecture</Link></li>
              <li><Link to="/courses">Pedagogical Design</Link></li>
              <li><Link to="/courses">Academic Writing</Link></li>
              <li><Link to="/courses">Applied AI & Computing</Link></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div className="footer-nav-col">
            <span className="footer-col-label">INSTITUTE</span>
            <ul className="footer-link-list">
              <li><Link to="/contact">Admissions</Link></li>
              <li><Link to="/contact">Faculty Directory</Link></li>
              <li><Link to="/contact">Academic Support</Link></li>
              <li><Link to="/contact">Research Seminars</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-flex">
          <span className="footer-copy">© 2026 Academic Institute. All rights reserved.</span>
          <div className="footer-legal-links flex-align gap-4">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Study</span>
            <span className="legal-link">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
