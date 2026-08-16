import React from 'react';
import { Settings, ShieldCheck } from 'lucide-react';

export const AdminSettingsPage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>SYSTEM CONFIGURATION</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Admin Settings & Security
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Manage security keys, authentication parameters, institutional roles, and system parameters.
        </p>
      </div>

      <div className="flow-card-panel admin-card-purple" style={{ padding: '2rem', maxWidth: '640px' }}>
        <div className="flex-align gap-3" style={{ marginBottom: '1.2rem' }}>
          <ShieldCheck size={24} style={{ color: '#7C3AED' }} />
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: 0 }}>
            Security Parameters
          </h3>
        </div>

        <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Authentication Layer</span>
            <strong style={{ color: '#F3E8FF' }}>ENCRYPTED SESSION TOKENS</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Password Masking</span>
            <strong className="text-emerald">ENABLED (STRICT)</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Audit Log Persistence</span>
            <strong style={{ color: '#F3E8FF' }}>ACTIVE (RETENTION 365 DAYS)</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
