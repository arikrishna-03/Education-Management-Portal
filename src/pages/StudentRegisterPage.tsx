import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { setStoredUser, DEFAULT_STUDENT_USER } from '../data/authState';
import { GraduationCap, ArrowLeft } from 'lucide-react';

export const StudentRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredUser({
      ...DEFAULT_STUDENT_USER,
      name: name || DEFAULT_STUDENT_USER.name,
      email: email || DEFAULT_STUDENT_USER.email,
      studentId: studentId || DEFAULT_STUDENT_USER.studentId
    });
    // Direct redirect to dedicated student dashboard route
    navigate('/student/dashboard');
  };

  return (
    <div className="academia-page">
      <section className="section-space">
        <div className="academia-container" style={{ maxWidth: '580px' }}>
          
          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '3rem 2.5rem' }}>
            <div className="flex-between" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #1B3045' }}>
              <Link to="/login" className="auth-role-pill-btn">
                <ArrowLeft size={14} /> Back to Login
              </Link>
              <span className="micro-eyebrow text-gold">STUDENT REGISTRATION</span>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
              <span className="micro-eyebrow">NEW STUDENT ENROLLMENT</span>
              <h2 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.8rem', marginBottom: '1.2rem' }}>CREATE STUDENT ACCOUNT</h2>

              <div className="form-group-editorial">
                <label className="editorial-label">Full Name *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="e.g. Amina Rahman"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Email *</label>
                <input 
                  type="email" 
                  className="editorial-input-thin" 
                  placeholder="student@academic.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Password *</label>
                <input type="password" className="editorial-input-thin" placeholder="••••••••" required />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Confirm Password *</label>
                <input type="password" className="editorial-input-thin" placeholder="••••••••" required />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Student ID (optional)</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="STU-2026-XXXX"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-editorial-primary w-full" style={{ padding: '0.95rem', marginTop: '1rem' }}>
                CREATE ACCOUNT →
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};
