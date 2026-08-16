import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';

export const AcademicFlowExamsPage: React.FC = () => {
  const { courseId } = useParams();
  const currentId = courseId || 'arc-118';

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to={`/student/courses/${currentId}`} className="btn-link-editorial text-xs flex-align gap-2" style={{ color: '#F1BA4B' }}>
          <ArrowLeft size={14} /> Back to Academic Flow
        </Link>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">ACADEMIC FLOW · MODULE 3</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Exams & Transcript Grades
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Take studio examinations, view official grade transcripts, and review performance analysis.
        </p>
      </div>

      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
        <span className="editorial-label">COURSE EVALUATION RECORD</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', margin: '0.4rem 0' }}>
          Current Term Grade: <strong className="text-gold">A- (86.0%)</strong>
        </h3>
        <p style={{ color: '#C7C4BC', fontSize: '0.9rem' }}>
          Upcoming Exam: <strong>Mid-Term Studio Examination</strong> on 04 October 2026.
        </p>
      </div>
    </div>
  );
};
