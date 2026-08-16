import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, UploadCloud, CheckCircle2 } from 'lucide-react';

export const AcademicFlowAssignmentsPage: React.FC = () => {
  const { courseId } = useParams();
  const currentId = courseId || 'arc-118';
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to={`/student/courses/${currentId}`} className="btn-link-editorial text-xs flex-align gap-2" style={{ color: '#F1BA4B' }}>
          <ArrowLeft size={14} /> Back to Academic Flow
        </Link>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">ACADEMIC FLOW · MODULE 2</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Course Assignments & Submissions
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Submit research papers, view due dates, and inspect AI structural feedback.
        </p>
      </div>

      <div className="grid-2">
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <span className="editorial-label">CURRICULUM TASK QUEUE</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', margin: '0.4rem 0 1rem', color: '#F5EFE3' }}>
            Pedestrian Flow Vector Matrix Analysis
          </h3>
          <p style={{ color: '#C7C4BC', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Due Date: <strong>24 August 2026</strong> · Weight: <strong>15%</strong>
          </p>
        </div>

        <div className="flow-card-panel border-academic-green" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <span className="editorial-label">SUBMIT PAPER</span>
          {submitted ? (
            <div className="editorial-success-box" style={{ background: '#0B192A', border: '1px solid #2FA36B', padding: '1rem', borderRadius: '8px' }}>
              <span className="text-xs text-emerald font-bold block">ASSIGNMENT SUBMITTED SUCCESSFULLY</span>
            </div>
          ) : (
            <div>
              <div className="form-group-editorial" style={{ marginBottom: '1rem' }}>
                <label className="editorial-label">Attach Research Document (.pdf)</label>
                <input type="file" style={{ color: '#C7C4BC', background: '#0B192A', padding: '0.6rem', borderRadius: '6px', width: '100%' }} />
              </div>
              <button className="btn-editorial-primary w-full" onClick={() => setSubmitted(true)}>
                SUBMIT FOR EVALUATION →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
