import React, { useState } from 'react';
import { CalendarCheck, CheckCircle2, UserCheck } from 'lucide-react';

export const StudentAttendancePage: React.FC = () => {
  const [markedToday, setMarkedToday] = useState(false);

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">ATTENDANCE LOG</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Attendance & Participation
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Track institutional presence, mark seminar attendance, and view cohort compliance.
        </p>
      </div>

      <div className="grid-2">
        {/* Attendance Summary */}
        <div className="flow-card-panel">
          <span className="editorial-label">COHORT SUMMARY</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', margin: '0.4rem 0 1rem', color: '#F5EFE3' }}>
            Overall Attendance: <strong className="text-emerald">92%</strong>
          </h3>

          <div className="attendance-tally-grid" style={{ marginBottom: '1.5rem' }}>
            <div className="tally-box text-center">
              <span className="text-xs text-muted block">Present</span>
              <strong className="font-serif text-emerald" style={{ fontSize: '1.8rem' }}>34</strong>
            </div>
            <div className="tally-box text-center">
              <span className="text-xs text-muted block">Absent</span>
              <strong className="font-serif text-crimson" style={{ fontSize: '1.8rem' }}>3</strong>
            </div>
            <div className="tally-box text-center">
              <span className="text-xs text-muted block">Total Seminars</span>
              <strong className="font-serif text-gold" style={{ fontSize: '1.8rem' }}>37</strong>
            </div>
          </div>

          <p className="text-xs text-muted">
            Minimum institutional requirement for thesis submission is 85%. You are currently <strong className="text-emerald">ON TRACK</strong>.
          </p>
        </div>

        {/* Mark Attendance Trigger */}
        <div className="flow-card-panel border-academic-green">
          <span className="editorial-label">DAILY SEMINAR CHECK-IN</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Today's Seminar: Spatial Psychology
          </h3>

          {markedToday ? (
            <div className="editorial-success-box" style={{ background: '#0B192A', border: '1px solid #2FA36B', padding: '1.2rem', borderRadius: '10px' }}>
              <div className="flex-align gap-2">
                <CheckCircle2 size={20} className="text-emerald" />
                <strong className="text-emerald text-sm">ATTENDANCE CONFIRMED TODAY</strong>
              </div>
              <p className="text-xs text-muted" style={{ marginTop: '0.4rem' }}>Recorded at 14:02 GMT by Institutional Geo-Radius Check.</p>
            </div>
          ) : (
            <div>
              <p style={{ color: '#C7C4BC', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Click below to verify your physical presence for Tuesday's Spatial Psychology Seminar.
              </p>
              <button 
                className="btn-editorial-primary w-full"
                onClick={() => setMarkedToday(true)}
              >
                MARK PRESENT TODAY →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
