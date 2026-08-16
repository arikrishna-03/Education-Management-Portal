import React from 'react';
import { UserCheck } from 'lucide-react';

export const AdminEnrollmentsPage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>ENROLLMENT MANAGEMENT</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Active Course Enrollments
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Audit student course registration logs, approve late additions, and review capacity quotas.
        </p>
      </div>

      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
        <span className="editorial-label">ENROLLMENT AUDIT LOG</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
          Total Active Enrollments: <strong className="text-gold">1,240</strong>
        </h3>
        <p style={{ color: '#C7C4BC', fontSize: '0.9rem' }}>
          All course capacity limits are operating within institutional safety boundaries.
        </p>
      </div>
    </div>
  );
};
