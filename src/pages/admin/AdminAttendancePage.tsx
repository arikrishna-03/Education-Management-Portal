import React from 'react';
import { Calendar } from 'lucide-react';

export const AdminAttendancePage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>INSTITUTIONAL ATTENDANCE</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Attendance System Overview
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Aggregate institutional attendance compliance rates and course-by-course attendance logs.
        </p>
      </div>

      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
        <span className="editorial-label">ATTENDANCE COMPLIANCE</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
          Overall System Attendance: <strong className="text-emerald">91.8%</strong>
        </h3>
      </div>
    </div>
  );
};
