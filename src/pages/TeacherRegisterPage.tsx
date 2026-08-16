import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { setStoredUser, DEFAULT_TEACHER_USER } from '../data/authState';
import { School, ArrowLeft } from 'lucide-react';

export const TeacherRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [inst, setInst] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredUser({
      ...DEFAULT_TEACHER_USER,
      name: name || DEFAULT_TEACHER_USER.name,
      email: email || DEFAULT_TEACHER_USER.email,
      department: dept || DEFAULT_TEACHER_USER.department,
      institution: inst || DEFAULT_TEACHER_USER.institution
    });
    // Direct redirect to dedicated teacher dashboard route
    navigate('/teacher/dashboard');
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
              <span className="micro-eyebrow text-gold">FACULTY REGISTRATION</span>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
              <span className="micro-eyebrow">FACULTY CREDENTIALS</span>
              <h2 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.8rem', marginBottom: '1.2rem' }}>CREATE TEACHER ACCOUNT</h2>

              <div className="form-group-editorial">
                <label className="editorial-label">Full Name *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="e.g. Dr. Leila Haddad"
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
                  placeholder="faculty@academic.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Institution *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="Academic Institute of London"
                  value={inst}
                  onChange={(e) => setInst(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Department *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="Architecture & Spatial Design"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Password *</label>
                <input type="password" className="editorial-input-thin" placeholder="••••••••" required />
              </div>

              <button type="submit" className="btn-editorial-primary w-full" style={{ padding: '0.95rem', marginTop: '1rem' }}>
                CREATE FACULTY ACCOUNT →
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};
