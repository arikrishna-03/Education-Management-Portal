import React from 'react';
import { getStoredUser } from '../../data/authState';
import { User, School } from 'lucide-react';

export const TeacherProfilePage: React.FC = () => {
  const user = getStoredUser();

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">FACULTY PROFILE</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Teacher Credentials
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Faculty profile details, department affiliation, and institutional academic credentials.
        </p>
      </div>

      <div className="flow-card-panel" style={{ maxWidth: '640px' }}>
        <div className="flex-align gap-4" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1B3045' }}>
          <div className="hub-logo-badge flex-center" style={{ width: '64px', height: '64px', fontSize: '1.6rem', background: '#00382E', color: '#F1BA4B' }}>
            {user?.avatar || 'LH'}
          </div>
          <div>
            <h2 className="font-serif text-primary" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: 0 }}>{user?.name || 'Dr. Leila Haddad'}</h2>
            <span className="text-gold font-bold text-xs">{user?.department || 'Architecture & Spatial Design'}</span>
          </div>
        </div>

        <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Email Address</span>
            <strong style={{ color: '#F5EFE3' }}>{user?.email || 'leila.haddad@academic.edu'}</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Institution</span>
            <strong style={{ color: '#F5EFE3' }}>{user?.institution || 'Academic Institute of London'}</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Specialization</span>
            <strong style={{ color: '#F5EFE3' }}>{user?.expertise || 'Spatial Geometry & Pedagogy'}</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Faculty Status</span>
            <strong className="text-emerald">ACTIVE SENIOR FELLOW</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
