import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredUser } from '../data/authState';
import { Sparkles } from 'lucide-react';

export const TeacherDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getStoredUser();

  const teacherCourses = [
    {
      id: 'arc-118',
      title: 'Spatial Thinking & Environmental Architecture',
      code: 'ARC 118',
      studentsCount: 48,
      avgGrade: 'A- (84%)',
      pendingGrading: 6,
      attendanceRate: '94%'
    },
    {
      id: 'edu-204',
      title: 'Learning Design & Pedagogical Frameworks',
      code: 'EDU 204',
      studentsCount: 52,
      avgGrade: 'B+ (81%)',
      pendingGrading: 8,
      attendanceRate: '91%'
    },
    {
      id: 'com-210',
      title: 'Academic Writing & Research Synthesis',
      code: 'COM 210',
      studentsCount: 42,
      avgGrade: 'A (88%)',
      pendingGrading: 0,
      attendanceRate: '96%'
    }
  ];

  return (
    <div className="academia-page">
      {/* 1. TEACHER HEADER HERO */}
      <section className="courses-hero-header" style={{ padding: '1rem 0 2rem' }}>
        <div className="academia-container">
          <div className="flex-between flex-wrap gap-4">
            <div>
              <span className="micro-eyebrow">FACULTY ACADEMIC WORKSPACE</span>
              <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
                TEACHER DASHBOARD
              </h1>
              <p className="meta-text" style={{ fontSize: '0.95rem', color: '#C7C4BC' }}>
                Faculty: <strong>{user?.name || 'Dr. Leila Haddad'}</strong> · Department: <strong className="text-gold">{user?.department || 'Architecture & Spatial Design'}</strong>
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flow-kpi-stack flex-align gap-4">
              <div>
                <span className="micro-eyebrow">ACTIVE COURSES</span>
                <strong className="kpi-serif-val">3 Courses</strong>
              </div>
              <div className="divider-vert" style={{ width: '1px', height: '24px', background: '#1B3045' }} />
              <div>
                <span className="micro-eyebrow">TOTAL STUDENTS</span>
                <strong className="kpi-serif-val text-gold">142 Students</strong>
              </div>
              <div className="divider-vert" style={{ width: '1px', height: '24px', background: '#1B3045' }} />
              <div>
                <span className="micro-eyebrow">PENDING GRADING</span>
                <strong className="kpi-serif-val text-amber">14 Papers</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DASHBOARD BODY */}
      <section className="section-space-sm border-top-thin">
        <div className="academia-container">

          {/* COURSE MANAGEMENT GRID */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <div>
                <span className="micro-eyebrow">FACULTY CURRICULUM</span>
                <h2 className="section-serif-heading" style={{ fontSize: '2rem', color: '#F5EFE3' }}>Active Courses Management</h2>
              </div>
              <button className="btn-editorial-primary text-xs" onClick={() => alert('Course creation modal opened')}>
                + CREATE NEW COURSE
              </button>
            </div>

            <div className="grid-3-flow">
              {teacherCourses.map((c) => (
                <div key={c.id} className="flow-card-panel">
                  <span className="editorial-label">{c.code}</span>
                  <h3 className="sub-serif-title" style={{ fontSize: '1.3rem', margin: '0.3rem 0 0.8rem', color: '#F5EFE3' }}>{c.title}</h3>
                  
                  <div className="tuition-spec-list" style={{ marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="spec-item flex-between text-xs">
                      <span>Enrolled Students</span>
                      <strong>{c.studentsCount} Students</strong>
                    </div>
                    <div className="spec-item flex-between text-xs">
                      <span>Class Average</span>
                      <strong className="text-gold">{c.avgGrade}</strong>
                    </div>
                    <div className="spec-item flex-between text-xs">
                      <span>Pending Grading</span>
                      <strong className="text-amber">{c.pendingGrading} Submissions</strong>
                    </div>
                  </div>

                  <div className="flex-between gap-2">
                    <button 
                      className="btn-secondary-sm flex-1 text-center" 
                      onClick={() => navigate(`/student/courses/${c.id}`)}
                    >
                      ACADEMIC FLOW
                    </button>
                    <button className="btn-editorial-primary flex-1 text-center text-xs">
                      MANAGE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CLASS PERFORMANCE & AI RECOMMENDATIONS FOR TEACHERS */}
          <div>
            <span className="micro-eyebrow">AGGREGATED FACULTY INTELLIGENCE</span>
            <h2 className="section-serif-heading" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#F5EFE3' }}>Class Analytics & Reports</h2>

            <div className="grid-2">
              {/* Class Performance */}
              <div className="flow-card-panel">
                <span className="editorial-label">CLASS PERFORMANCE SUMMARY</span>
                <h4 className="sub-serif-title" style={{ fontSize: '1.4rem', margin: '0.4rem 0 1rem', color: '#F5EFE3' }}>
                  Institutional Cohort Average: <strong className="text-gold">84.2%</strong>
                </h4>

                <div className="attendance-tally-grid" style={{ marginBottom: '1.2rem' }}>
                  <div className="tally-box">
                    <span className="text-xs text-muted block">Total Students</span>
                    <strong className="font-serif text-gold" style={{ fontSize: '1.8rem' }}>142</strong>
                  </div>
                  <div className="tally-box">
                    <span className="text-xs text-muted block">On Track</span>
                    <strong className="font-serif text-emerald" style={{ fontSize: '1.8rem' }}>139</strong>
                  </div>
                  <div className="tally-box">
                    <span className="text-xs text-muted block">At Risk</span>
                    <strong className="font-serif text-crimson" style={{ fontSize: '1.8rem' }}>3</strong>
                  </div>
                </div>

                <p className="text-xs text-muted">
                  3 students have been flagged for attendance or assignment declines in ARC 118.
                </p>
              </div>

              {/* AI Teacher Recommendations */}
              <div className="flow-card-panel border-academic-green">
                <div className="flex-align gap-2" style={{ marginBottom: '0.6rem' }}>
                  <Sparkles size={16} className="text-gold" />
                  <span className="editorial-label">FACULTY AI INSIGHTS</span>
                </div>

                <h4 className="sub-serif-title" style={{ fontSize: '1.3rem', color: '#F5EFE3' }}>Recommended Instructional Actions</h4>
                
                <div className="ai-recommendation-box text-xs" style={{ margin: '1rem 0', background: '#0B192A', padding: '1rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
                  <strong className="block text-gold font-semibold" style={{ marginBottom: '0.2rem' }}>Statistics Practice Set Review:</strong>
                  42% of students struggled with regression questions in Assignment 02. Consider scheduling a review seminar.
                </div>

                <button className="btn-dark-green text-xs w-full">
                  SCHEDULE REVIEW SEMINAR →
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
