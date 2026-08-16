import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="academia-footer">
      <div className="academia-footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="flex-align gap-3" style={{ marginBottom: '1rem' }}>
              <div className="hub-logo-badge flex-center">AH</div>
              <span className="footer-brand-title" style={{ margin: 0 }}>Academic Hub</span>
            </div>
            <p className="footer-brand-desc">
              A carefully curated academic management portal for ambitious learners, researchers, and future thinkers.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <span className="footer-col-label">NAVIGATION</span>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses Catalog</Link></li>
              <li><Link to="/contact">Contact & Support</Link></li>
              <li><Link to="/login">User Login / Register</Link></li>
            </ul>
          </div>

          {/* User Areas */}
          <div className="footer-col">
            <span className="footer-col-label">USER WORKSPACE</span>
            <ul className="footer-link-list">
              <li><Link to="/login?role=student">Student Dashboard</Link></li>
              <li><Link to="/student/courses">Enrolled Courses</Link></li>
              <li><Link to="/login?role=teacher">Teacher Portal</Link></li>
              <li><Link to="/mentor">Mentor Workspace</Link></li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="footer-col">
            <span className="footer-col-label">INSTITUTION</span>
            <ul className="footer-link-list">
              <li><span className="legal-link">Academic Registry</span></li>
              <li><span className="legal-link">Privacy Policy</span></li>
              <li><span className="legal-link">Terms of Governance</span></li>
              <li><span className="legal-link">System Status</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Flex */}
        <div className="footer-bottom-flex">
          <span>© 2026 Academic Hub Institute. All rights reserved.</span>
          <div className="footer-legal-links">
            <span className="legal-link">Security</span>
            <span className="legal-link">Accessibility</span>
            <span className="legal-link">Ethics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
