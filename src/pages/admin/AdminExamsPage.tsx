import React, { useState } from 'react';
import { Award, Calendar, Plus, Edit2, BarChart2 } from 'lucide-react';

export const AdminExamsPage: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'exams' | 'grades'>('exams');

  const examsList = [
    { id: 'ex-01', code: 'ARC 118', title: 'Mid-Term Spatial Geometry Thesis Studio', date: '04 October 2026', room: 'Studio Lab 04', duration: '120 Mins', status: 'Upcoming' },
    { id: 'ex-02', code: 'EDU 204', title: 'Pedagogical Frameworks Final Assessment', date: '12 October 2026', room: 'Lecture Hall B', duration: '90 Mins', status: 'Upcoming' },
    { id: 'ex-03', code: 'COM 210', title: 'Academic Synthesis Mid-Term Written Exam', date: '01 August 2026', room: 'Hall 01', duration: '120 Mins', status: 'Completed (84 Grades Filed)' }
  ];

  const gradeRecords = [
    { studentId: 'STU-9821', studentName: 'Amina Rahman', course: 'ARC 118', grade: 'A-', score: '86.0%', status: 'Final' },
    { studentId: 'STU-9822', studentName: 'Julian Vance', course: 'ARC 118', grade: 'C+', score: '68.0%', status: 'Final' },
    { studentId: 'STU-9823', studentName: 'Claire Dupont', course: 'EDU 204', grade: 'A', score: '91.0%', status: 'Final' }
  ];

  return (
    <div className="academia-page">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>MODULE 5 · EXAMINATION & TRANSCRIPTS</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Manage Exams & Grades
          </h1>
          <p className="meta-text" style={{ color: '#C7C4BC' }}>
            Schedule term examinations, assign exam rooms to classes, record official transcript grades, and review distributions.
          </p>
        </div>

        <div className="flex-align gap-2">
          <button className="btn-admin-purple text-xs">
            + SCHEDULE EXAM
          </button>
        </div>
      </div>

      {/* OVERVIEW BANNER CARD */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', marginBottom: '2rem', padding: '1.5rem 2rem' }}>
        <div className="flex-between flex-wrap gap-4">
          <div>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>EXAMINATIONS & RECORD KEEPING</span>
            <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#F5EFE3', margin: 0 }}>18 Upcoming Exams · 8,426 Grade Records</h2>
          </div>

          <div className="flex-align gap-4">
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Upcoming Exams</span>
              <strong className="font-serif text-gold" style={{ fontSize: '1.4rem' }}>18</strong>
            </div>
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Completed Exams</span>
              <strong className="font-serif text-emerald" style={{ fontSize: '1.4rem' }}>84</strong>
            </div>
          </div>
        </div>
      </div>

      {/* SEGMENTED TAB SELECTOR: EXAMS VS GRADES */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
        <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #1B3045' }}>
          <div className="auth-segmented-tabs">
            <button 
              className={`auth-tab-btn ${activeSubTab === 'exams' ? 'active' : ''}`}
              onClick={() => setActiveSubTab('exams')}
            >
              MANAGE EXAMS (18 UPCOMING)
            </button>
            <button 
              className={`auth-tab-btn ${activeSubTab === 'grades' ? 'active' : ''}`}
              onClick={() => setActiveSubTab('grades')}
            >
              VIEW GRADE RECORDS (8,426)
            </button>
          </div>
        </div>

        {/* SUBTAB 1: EXAMS */}
        {activeSubTab === 'exams' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {examsList.map((e) => (
              <div key={e.id} className="flex-between flex-wrap gap-3" style={{ background: '#0B192A', padding: '1.2rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
                <div>
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem', color: '#A78BFA' }}>{e.code} · {e.duration}</span>
                  <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.1rem 0' }}>{e.title}</h4>
                  <span className="text-xs text-muted">Date: <strong>{e.date}</strong> · Location: {e.room}</span>
                </div>

                <div className="flex-align gap-4">
                  <span className={`text-xs font-bold ${e.status.includes('Completed') ? 'text-emerald' : 'text-gold'}`}>
                    ● {e.status}
                  </span>
                  <button className="btn-secondary-sm text-xs">EDIT SCHEDULE</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SUBTAB 2: GRADES */}
        {activeSubTab === 'grades' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {gradeRecords.map((g, idx) => (
              <div key={idx} className="flex-between flex-wrap gap-3" style={{ background: '#0B192A', padding: '1.2rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
                <div>
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem', color: '#A78BFA' }}>{g.studentId} · {g.course}</span>
                  <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.1rem 0' }}>{g.studentName}</h4>
                  <span className="text-xs text-muted">Official Grade Record: <strong className="text-gold">{g.grade} ({g.score})</strong></span>
                </div>

                <div className="flex-align gap-4">
                  <span className="text-xs text-emerald font-bold">● {g.status}</span>
                  <button className="btn-secondary-sm text-xs">EDIT GRADE</button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
