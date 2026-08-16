import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CalendarCheck, CheckCircle2, UserCheck } from 'lucide-react';

export const AcademicFlowAttendancePage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const currentId = courseId || 'arc-118';
  const [markedToday, setMarkedToday] = useState(false);

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to={`/student/courses/${currentId}`} className="btn-link-editorial text-xs flex-align gap-2" style={{ color: '#F1BA4B' }}>
          <ArrowLeft size={14} /> Back to Academic Flow
        </Link>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">ACADEMIC FLOW · MODULE 1</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Attendance & Seminar Log
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Mark physical attendance, view course attendance history, and review compliance stats.
        </p>
      </div>

      <div className="grid-2">
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <span className="editorial-label">COURSE ATTENDANCE SUMMARY</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', margin: '0.4rem 0 1rem', color: '#F5EFE3' }}>
            Overall Attendance: <strong className="text-emerald">92%</strong>
          </h3>

          <div className="attendance-tally-grid" style={{ marginBottom: '1.5rem' }}>
            <div className="tally-box text-center" style={{ background: '#0B192A', padding: '1rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Present</span>
              <strong className="font-serif text-emerald" style={{ fontSize: '1.8rem' }}>34</strong>
            </div>
            <div className="tally-box text-center" style={{ background: '#0B192A', padding: '1rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Absent</span>
              <strong className="font-serif text-crimson" style={{ fontSize: '1.8rem' }}>3</strong>
            </div>
          </div>
          <p className="text-xs text-muted">Minimum institutional requirement for thesis submission is 85%. Status: <strong className="text-emerald">COMPLIANT</strong>.</p>
        </div>

        <div className="flow-card-panel border-academic-green" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <span className="editorial-label">SEMINAR CHECK-IN</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Today's Studio Seminar
          </h3>

          {markedToday ? (
            <div className="editorial-success-box" style={{ background: '#0B192A', border: '1px solid #2FA36B', padding: '1.2rem', borderRadius: '10px' }}>
              <div className="flex-align gap-2">
                <CheckCircle2 size={20} className="text-emerald" />
                <strong className="text-emerald text-sm">ATTENDANCE RECORDED TODAY</strong>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ color: '#C7C4BC', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Verify your physical presence for Tuesday's Studio Seminar.
              </p>
              <button className="btn-editorial-primary w-full" onClick={() => setMarkedToday(true)}>
                MARK PRESENT TODAY →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
