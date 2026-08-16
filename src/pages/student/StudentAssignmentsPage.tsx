import React, { useState } from 'react';
import { FileText, CheckCircle2, Clock, UploadCloud, Sparkles } from 'lucide-react';

export const StudentAssignmentsPage: React.FC = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const assignments = [
    {
      id: 'ass-01',
      course: 'Spatial Thinking & Environmental Architecture',
      title: 'Pedestrian Flow Vector Matrix Analysis',
      dueDate: '24 August 2026',
      status: 'Pending',
      weight: '15%'
    },
    {
      id: 'ass-02',
      course: 'Spatial Thinking & Environmental Architecture',
      title: 'Cognitive Load Reduction Blueprint',
      dueDate: '10 August 2026',
      status: 'Graded',
      grade: '92%',
      weight: '20%'
    },
    {
      id: 'ass-03',
      course: 'Applied AI & Neural Learning Systems',
      title: 'Tensor Backpropagation Optimization Draft',
      dueDate: '02 September 2026',
      status: 'In Progress',
      weight: '25%'
    }
  ];

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">ACADEMIC EVALUATION</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          My Assignments
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          View pending tasks, submit research papers, and inspect restrained AI structural feedback.
        </p>
      </div>

      {submissionSuccess && (
        <div className="editorial-success-box" style={{ marginBottom: '1.5rem', background: '#0D1B2D', border: '1px solid #2FA36B', padding: '1rem 1.5rem', borderRadius: '10px' }}>
          <span className="text-xs text-emerald font-bold block">ASSIGNMENT SUBMITTED SUCCESSFULLY</span>
          <p className="text-xs text-muted">Your paper has been uploaded and queued for faculty review and AI syntax analysis.</p>
        </div>
      )}

      <div className="grid-2">
        {/* Assignments List */}
        <div className="flow-card-panel">
          <span className="editorial-label">CURRICULUM TASK QUEUE</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', margin: '0.4rem 0 1.2rem', color: '#F5EFE3' }}>
            Active Tasks ({assignments.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {assignments.map((ass) => (
              <div key={ass.id} className="tally-box" style={{ background: '#0B192A', padding: '1.2rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
                <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>{ass.course}</span>
                <h4 className="font-serif text-primary" style={{ fontSize: '1.2rem', color: '#F5EFE3', margin: '0.2rem 0' }}>{ass.title}</h4>
                <div className="flex-between text-xs" style={{ marginTop: '0.6rem', color: '#C7C4BC' }}>
                  <span>Due: <strong>{ass.dueDate}</strong></span>
                  <span className={ass.status === 'Graded' ? 'text-emerald font-bold' : 'text-gold font-bold'}>
                    {ass.status} {ass.grade ? `(${ass.grade})` : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload & Submission Form */}
        <div className="flow-card-panel border-academic-green">
          <div className="flex-align gap-2" style={{ marginBottom: '0.6rem' }}>
            <UploadCloud size={18} className="text-gold" />
            <span className="editorial-label">SUBMIT PAPER</span>
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', marginBottom: '1rem' }}>
            Pedestrian Flow Vector Matrix Analysis
          </h3>

          <div className="form-group-editorial" style={{ marginBottom: '1rem' }}>
            <label className="editorial-label">Attach Research Document (.pdf / .docx)</label>
            <input type="file" style={{ color: '#C7C4BC', padding: '0.6rem', background: '#0B192A', border: '1px solid #1B3045', borderRadius: '6px', width: '100%' }} />
          </div>

          <div className="form-group-editorial" style={{ marginBottom: '1.2rem' }}>
            <label className="editorial-label">Student Submission Notes</label>
            <textarea className="editorial-textarea-thin" rows={3} placeholder="Add optional structural commentary for Dr. Leila Haddad..." />
          </div>

          <button 
            className="btn-editorial-primary w-full"
            onClick={() => setSubmissionSuccess(true)}
          >
            SUBMIT FOR EVALUATION →
          </button>
        </div>
      </div>
    </div>
  );
};
