import React from 'react';
import { getStoredUser } from '../../data/authState';
import { User, GraduationCap, Award } from 'lucide-react';

export const StudentProfilePage: React.FC = () => {
  const user = getStoredUser();

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">STUDENT IDENTITY</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Student Profile
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Personal student details, institutional program registration, and academic credentials.
        </p>
      </div>

      <div className="flow-card-panel" style={{ maxWidth: '640px' }}>
        <div className="flex-align gap-4" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1B3045' }}>
          <div className="hub-logo-badge flex-center" style={{ width: '64px', height: '64px', fontSize: '1.6rem', background: '#00382E', color: '#F1BA4B' }}>
            {user?.avatar || 'AR'}
          </div>
          <div>
            <h2 className="font-serif text-primary" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: 0 }}>{user?.name || 'Amina Rahman'}</h2>
            <span className="text-gold font-bold text-xs">{user?.studentId || 'STU-2026-9821'}</span>
          </div>
        </div>

        <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Email Address</span>
            <strong style={{ color: '#F5EFE3' }}>{user?.email || 'amina.rahman@academic.edu'}</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Registered Program</span>
            <strong style={{ color: '#F5EFE3' }}>{user?.program || 'B.Arch Spatial Design'}</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Academic Institution</span>
            <strong style={{ color: '#F5EFE3' }}>Academic Institute of London</strong>
          </div>
          <div className="spec-item flex-between text-sm">
            <span className="text-muted">Enrollment Status</span>
            <strong className="text-emerald">ACTIVE / FULL-TIME</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
