import React from 'react';
import { Calendar } from 'lucide-react';

export const TeacherAttendancePage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">FACULTY ATTENDANCE MANAGER</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Class Attendance Records
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Verify daily seminar attendance logs, inspect cohort compliance, and flag absences.
        </p>
      </div>

      <div className="flow-card-panel">
        <span className="editorial-label">SEMINAR LOGS</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
          ARC 118 · Tuesday Seminar Attendance
        </h3>
        <p style={{ color: '#C7C4BC', fontSize: '0.9rem' }}>
          46 of 48 enrolled students marked present today. 2 absent students flagged for academic check-in.
        </p>
      </div>
    </div>
  );
};
