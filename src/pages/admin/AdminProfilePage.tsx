import React from 'react';
import { getStoredUser } from '../../data/authState';
import { ShieldCheck, User } from 'lucide-react';

export const AdminProfilePage: React.FC = () => {
  const user = getStoredUser();

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>ADMINISTRATIVE IDENTITY</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Admin Credentials
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          System administrator profile details, security privilege clearances, and access tokens.
        </p>
      </div>

      <div className="flow-card-panel admin-card-purple" style={{ maxWidth: '640px', padding: '2.5rem' }}>
        <div className="flex-align gap-4" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #2A1647' }}>
          <div className="hub-logo-badge flex-center" style={{ width: '64px', height: '64px', fontSize: '1.6rem', background: '#2A1647', color: '#A78BFA', border: '1px solid #7C3AED' }}>
            <ShieldCheck size={32} />
          </div>
          <div>
            <h2 className="font-serif text-primary" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: 0 }}>{user?.name || 'System Administrator'}</h2>
            <span className="text-purple font-bold text-xs" style={{ color: '#A78BFA' }}>User ID: {user?.adminId || 'ADM-SEC-001'}</span>
          </div>
        </div>

        <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Administrator Email</span>
            <strong style={{ color: '#F5EFE3' }}>{user?.email || 'admin@academic.edu'}</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Access Clearance</span>
            <strong style={{ color: '#A78BFA' }}>SUPER ADMIN / SYSTEM OWNER</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Institutional Scope</span>
            <strong style={{ color: '#F5EFE3' }}>ALL DEPARTMENTS & CURRICULA</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Security Status</span>
            <strong className="text-emerald">SECURE SESSION ACTIVE</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
