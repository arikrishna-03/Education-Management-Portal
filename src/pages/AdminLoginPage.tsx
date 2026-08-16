import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, ShieldAlert } from 'lucide-react';
import { User } from '../data/edutrData';

interface AdminLoginPageProps {
  onLoginSuccess: (role: 'admin') => void;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLoginSuccess, onTriggerToast }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('amina.r@edutr.edu');
  const [password, setPassword] = useState('adminsecret123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess('admin');
    onTriggerToast('success', 'Admin Authenticated', 'Secure access granted to EduTR Administration Dashboard.');
    navigate('/admin');
  };

  return (
    <div className="page-wrapper area-admin-purple flex-center" style={{ minHeight: '82vh', padding: '2rem 1rem' }}>
      <div className="auth-card-box border-purple">
        <div className="text-center" style={{ marginBottom: '1.5rem' }}>
          <div className="admin-lock-icon" style={{ margin: '0 auto 0.8rem' }}>
            <ShieldCheck size={32} className="text-purple" />
          </div>
          <span className="badge-purple-light">SECURE INSTITUTIONAL PORTAL</span>
          <h2 className="modal-title text-purple" style={{ marginTop: '0.4rem' }}>Administrator Authentication</h2>
          <p className="text-muted text-xs">High-security quadrant governing institutional rosters & AI monitoring.</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-body-form">
          <div className="form-group">
            <label className="form-label">Administrator Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Security Access Password</label>
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
              <input type="checkbox" defaultChecked /> Remember admin session
            </label>
            <a href="#" onClick={(e) => { e.preventDefault(); onTriggerToast('info', 'Security Alert', '2FA token reset link dispatched to IT Director.'); }}>
              Forgot Credentials?
            </a>
          </div>

          <button type="submit" className="btn-purple-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Lock size={16} /> Secure Access <ArrowRight size={16} />
          </button>
        </form>

        <div className="security-notice-box flex-align gap-2" style={{ marginTop: '1.5rem' }}>
          <ShieldAlert size={18} className="text-amber flex-shrink-0" />
          <p className="text-xs text-muted">
            All administrative access attempts are logged and monitored under ISO 27001 institutional compliance protocols.
          </p>
        </div>
      </div>
    </div>
  );
};
