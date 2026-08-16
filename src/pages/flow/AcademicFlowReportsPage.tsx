import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Download, Printer } from 'lucide-react';

export const AcademicFlowReportsPage: React.FC = () => {
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
        <span className="micro-eyebrow">ACADEMIC FLOW · MODULE 5</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Reports & Performance Analytics
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Official academic reports, class comparative benchmarks, and downloadable transcripts.
        </p>
      </div>

      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
        <div className="flex-between" style={{ marginBottom: '1rem' }}>
          <span className="editorial-label">TERM REPORT</span>
          <div className="flex-align gap-2">
            <button className="btn-editorial-primary text-xs flex-align gap-1" onClick={() => window.print()}>
              <Printer size={14} /> PRINT REPORT
            </button>
          </div>
        </div>
        <h3 className="sub-serif-title" style={{ fontSize: '1.5rem', color: '#F5EFE3' }}>Official Performance Summary</h3>
        <p style={{ color: '#C7C4BC', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Course Progress: <strong>68%</strong> · Attendance: <strong>92%</strong> · Overall Grade: <strong>A-</strong>
        </p>
      </div>
    </div>
  );
};
