import React from 'react';
import { FileCheck } from 'lucide-react';

export const TeacherAssignmentsPage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">FACULTY EVALUATION</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Assignments & Grading Queue
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Review student submissions, create course assignments, and post final grades.
        </p>
      </div>

      <div className="grid-2">
        <div className="flow-card-panel">
          <span className="editorial-label">GRADING QUEUE (14 PENDING)</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Submitted Papers Awaiting Grading
          </h3>
          <div className="tally-box" style={{ background: '#0B192A', padding: '1rem', border: '1px solid #1B3045', borderRadius: '8px', marginBottom: '0.8rem' }}>
            <span className="micro-eyebrow">ARC 118 · Amina Rahman</span>
            <h4 className="font-serif" style={{ color: '#F5EFE3', margin: '0.2rem 0' }}>Pedestrian Flow Vector Matrix Analysis</h4>
            <span className="text-xs text-muted">Submitted 14 Aug 2026 · Word count: 3,420 words</span>
          </div>
        </div>

        <div className="flow-card-panel border-academic-green">
          <span className="editorial-label">CREATE ASSIGNMENT</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Post New Assignment Prompt
          </h3>
          <div className="form-group-editorial" style={{ marginBottom: '0.8rem' }}>
            <label className="editorial-label">Assignment Title</label>
            <input type="text" className="editorial-input-thin" placeholder="e.g. Spatial Geometry Thesis Draft" />
          </div>
          <button className="btn-editorial-primary w-full">
            PUBLISH ASSIGNMENT →
          </button>
        </div>
      </div>
    </div>
  );
};
