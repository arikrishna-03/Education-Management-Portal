import React from 'react';
import { Award } from 'lucide-react';

export const TeacherExamsPage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">FACULTY EXAM PORTAL</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Exams & Grade Postings
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Schedule mid-term examinations, analyze question statistics, and record official transcript grades.
        </p>
      </div>

      <div className="flow-card-panel">
        <span className="editorial-label">EXAM SCHEDULE</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
          Upcoming Mid-Term Studio Examination
        </h3>
        <p style={{ color: '#C7C4BC', fontSize: '0.9rem' }}>
          Date: <strong>04 October 2026</strong> · Duration: <strong>120 Mins</strong> · Location: <strong>Studio Lab 04</strong>
        </p>
      </div>
    </div>
  );
};
