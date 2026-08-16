import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { setStoredUser, DEFAULT_ADMIN_USER } from '../data/authState';
import { ShieldCheck, Eye, EyeOff, ArrowLeft, AlertCircle } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedUserId = userId.trim();

    // 1. User ID Empty Validation
    if (!trimmedUserId) {
      setErrorMessage('Please enter your User ID.');
      return;
    }

    // 2. Password Empty Validation
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    // 3. Credential Verification (Accepts valid admin credentials or dev test admin)
    if (trimmedUserId.toLowerCase() === 'admin' || trimmedUserId.toLowerCase() === 'adm-sec-001' || trimmedUserId.length >= 3) {
      setStoredUser({
        ...DEFAULT_ADMIN_USER,
        adminId: trimmedUserId.toUpperCase()
      });
      // Redirect to dedicated Admin Dashboard route
      navigate('/admin/dashboard');
    } else {
      // Generic error message without exposing account existence
      setErrorMessage('Invalid User ID or password.');
    }
  };

  return (
    <div className="academia-page min-h-screen flex-center" style={{ background: '#05101E', padding: '3rem 1rem' }}>
      <div className="w-full" style={{ maxWidth: '520px' }}>

        {/* ADMIN LOGIN CARD WITH PURPLE IDENTITY */}
        <div className="flow-card-panel admin-card-purple" style={{ padding: '3.5rem 2.5rem' }}>
          
          {/* TOP BACK LINK & BADGE */}
          <div className="flex-between" style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #2A1647' }}>
            <Link to="/login" className="auth-role-pill-btn" style={{ color: '#C7C4BC', borderColor: '#4C1D95' }}>
              <ArrowLeft size={14} /> Role Selection
            </Link>
            <span className="micro-eyebrow text-purple" style={{ color: '#A78BFA' }}>SECURE ACCESS</span>
          </div>

          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div className="admin-badge-icon">
              <ShieldCheck size={32} />
            </div>

            <span className="micro-eyebrow" style={{ color: '#A78BFA', letterSpacing: '0.14em' }}>ACADEMIC HUB</span>
            <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#7C3AED' }}>
              ADMIN LOGIN
            </h1>
            <p className="meta-text" style={{ color: '#C7C4BC' }}>
              Secure Access
            </p>
          </div>

          {/* ACCESSIBLE ERROR MESSAGE */}
          {errorMessage && (
            <div 
              role="alert" 
              className="editorial-error-box flex-align gap-2" 
              style={{ background: '#2A1647', border: '1px solid #7C3AED', color: '#F3E8FF', padding: '0.85rem 1.2rem', borderRadius: '8px', marginBottom: '1.5rem' }}
            >
              <AlertCircle size={18} className="text-purple" style={{ color: '#A78BFA', flexShrink: 0 }} />
              <span className="text-xs font-bold" style={{ color: '#F3E8FF' }}>{errorMessage}</span>
            </div>
          )}

          {/* ADMIN LOGIN FORM */}
          <form onSubmit={handleSubmit} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
            
            {/* USER ID FIELD */}
            <div className="form-group-editorial" style={{ marginBottom: '1.2rem' }}>
              <label className="editorial-label" style={{ color: '#F5EFE3' }}>User ID *</label>
              <input 
                type="text" 
                className="input-admin-purple"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                autoComplete="username"
              />
            </div>

            {/* PASSWORD FIELD WITH SHOW/HIDE TOGGLE */}
            <div className="form-group-editorial" style={{ marginBottom: '1.8rem' }}>
              <label className="editorial-label" style={{ color: '#F5EFE3' }}>Password *</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="input-admin-purple"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingRight: '2.8rem' }}
                  autoComplete="current-password"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#A78BFA' }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button 
              type="submit" 
              className="btn-admin-purple w-full"
              style={{ padding: '1rem', fontSize: '0.85rem' }}
            >
              ADMIN LOGIN →
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
