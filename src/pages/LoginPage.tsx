import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Lock, Mail, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { User } from '../data/edutrData';

interface LoginPageProps {
  onLoginSuccess: (role: 'student' | 'teacher' | 'admin') => void;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onTriggerToast }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'student' | 'teacher' | 'register'>('student');

  // Form states
  const [email, setEmail] = useState('sophia.m@edutr.edu');
  const [password, setPassword] = useState('password123');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regRole, setRegRole] = useState<'student' | 'teacher'>('student');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const roleToSet = activeTab === 'teacher' ? 'teacher' : 'student';
    onLoginSuccess(roleToSet);
    onTriggerToast('success', 'Welcome Back!', `Logged in successfully as ${roleToSet.toUpperCase()}.`);
    navigate('/dashboard');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(regRole);
    onTriggerToast('success', 'Account Registered!', `Welcome to EduTR, ${regName}! Role assigned: ${regRole.toUpperCase()}.`);
    navigate('/dashboard');
  };

  return (
    <div className="page-wrapper public-theme-blue flex-center" style={{ minHeight: '80vh', padding: '2rem 1rem' }}>
      <div className="auth-card-box">
        {/* Header Branding */}
        <div className="text-center" style={{ marginBottom: '1.5rem' }}>
          <div className="nav-brand-icon" style={{ margin: '0 auto 0.8rem', width: '48px', height: '48px' }}>
            <GraduationCap size={28} />
          </div>
          <h2 className="modal-title">Welcome to EduTR</h2>
          <p className="text-muted text-xs">AI-Powered Academic Management & Learning System</p>
        </div>

        {/* Auth Tabs */}
        <div className="modal-tabs" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <button 
            className={`modal-tab-btn ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('student');
              setEmail('sophia.m@edutr.edu');
            }}
          >
            Student Login
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'teacher' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('teacher');
              setEmail('sarah.j@edutr.edu');
            }}
          >
            Teacher Login
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {activeTab !== 'register' ? (
          <form onSubmit={handleLoginSubmit} className="modal-body-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex-between text-xs text-muted" style={{ margin: '0.4rem 0 1rem' }}>
              <label className="flex-align gap-1 cursor-pointer">
                <input type="checkbox" defaultChecked /> Remember me
              </label>
              <a href="#" onClick={(e) => { e.preventDefault(); onTriggerToast('info', 'Password Reset', 'Password reset instructions sent to email.'); }}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn-hero-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Login to {activeTab === 'teacher' ? 'Faculty Portal' : 'Student Dashboard'} <ArrowRight size={16} />
            </button>

            <div className="text-center" style={{ marginTop: '1.2rem' }}>
              <Link to="/admin/login" className="text-xs text-indigo font-bold flex-center gap-1">
                <ShieldCheck size={14} /> Administrator Access Portal
              </Link>
            </div>
          </form>
        ) : (
          /* Registration Form */
          <form onSubmit={handleRegisterSubmit} className="modal-body-form">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="e.g. Alex Taylor"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="alex.t@edutr.edu"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Password *</label>
                <input type="password" className="form-control" placeholder="••••••••" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Role Selection *</label>
                <select className="form-control" value={regRole} onChange={(e) => setRegRole(e.target.value as any)}>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher / Faculty</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-hero-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
              Create EduTR Account <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
