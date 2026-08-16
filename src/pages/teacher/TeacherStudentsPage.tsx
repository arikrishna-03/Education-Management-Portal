import React from 'react';
import { Users, AlertTriangle } from 'lucide-react';

export const TeacherStudentsPage: React.FC = () => {
  const students = [
    { id: 'STU-9821', name: 'Amina Rahman', course: 'ARC 118', grade: 'A-', attendance: '92%', status: 'On Track' },
    { id: 'STU-9822', name: 'Julian Vance', course: 'ARC 118', grade: 'C+', attendance: '68%', status: 'At Risk' },
    { id: 'STU-9823', name: 'Claire Dupont', course: 'EDU 204', grade: 'A', attendance: '96%', status: 'On Track' },
    { id: 'STU-9824', name: 'Siddharth Patel', course: 'COM 210', grade: 'B', attendance: '88%', status: 'On Track' }
  ];

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">STUDENT DIRECTORY</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Enrolled Students Roster
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Monitor individual student performance, track attendance records, and review at-risk alerts.
        </p>
      </div>

      <div className="flow-card-panel">
        <span className="editorial-label">COHORT STUDENT LIST</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1.2rem' }}>
          Active Enrolled Students ({students.length})
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {students.map((stu) => (
            <div key={stu.id} className="flex-between" style={{ background: '#0B192A', padding: '1rem 1.4rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
              <div>
                <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>{stu.id} · {stu.course}</span>
                <h4 className="font-serif" style={{ fontSize: '1.2rem', color: '#F5EFE3', margin: 0 }}>{stu.name}</h4>
              </div>
              <div className="flex-align gap-4">
                <span className="text-xs text-muted">Grade: <strong className="text-gold">{stu.grade}</strong></span>
                <span className="text-xs text-muted">Attendance: <strong className="text-emerald">{stu.attendance}</strong></span>
                <span className={`text-xs font-bold ${stu.status === 'At Risk' ? 'text-crimson' : 'text-emerald'}`}>
                  {stu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
