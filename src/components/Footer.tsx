import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="edutr-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="nav-brand" style={{ marginBottom: '1rem' }}>
              <div className="nav-brand-icon">
                <GraduationCap size={22} />
              </div>
              <div className="nav-brand-text">
                <span className="brand-name">EduTR</span>
                <span className="brand-tag">ACADEMIC OPERATING SYSTEM</span>
              </div>
            </div>
            <p className="footer-desc">
              AI-powered academic learning, intelligent performance analysis, and institutional administration platform.
            </p>
            <div className="footer-security-tag flex-align gap-2">
              <Shield size={14} className="text-emerald" />
              <span>ISO 27001 Accredited & EU AI Act Compliant</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="footer-col">
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links">
              <li><Link to="/courses">Courses Directory</Link></li>
              <li><Link to="/assignments">Assignments Studio</Link></li>
              <li><Link to="/exams-grades">Exams & Grades</Link></li>
              <li><Link to="/ai">AI Engine Insights</Link></li>
              <li><Link to="/reports">Analytics Reports</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/contact">FAQ Knowledgebase</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
              <li><Link to="/performance-reports">Institutional Performance</Link></li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div className="footer-col">
            <h4 className="footer-col-title">Account</h4>
            <ul className="footer-links">
              <li><Link to="/login">Student / Faculty Login</Link></li>
              <li><Link to="/login">Register Account</Link></li>
              <li><Link to="/dashboard">My Dashboard</Link></li>
              <li><Link to="/admin/login">Admin Secure Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 EduTR. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Security Audit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
