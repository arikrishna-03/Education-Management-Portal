import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

export const TeacherInsightsPage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">FACULTY AI ENGINE</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Instructional AI Insights
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          AI-driven recommendations for syllabus optimization, weak spot detection, and student engagement strategies.
        </p>
      </div>

      <div className="flow-card-panel border-academic-green">
        <span className="editorial-label">RECOMMENDED INSTRUCTIONAL ACTIONS</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
          Schedule Review Seminar on Regression Analysis
        </h3>
        <p style={{ color: '#C7C4BC', fontSize: '0.9rem', lineHeight: '1.6' }}>
          42% of students in ARC 118 struggled with statistical regression calculations in Assignment 02. Scheduling a 45-minute review session before the mid-term is recommended.
        </p>
      </div>
    </div>
  );
};
