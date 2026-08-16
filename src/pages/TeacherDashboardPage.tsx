import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredUser } from '../data/authState';
import { Sparkles, BookOpen, Users, FileCheck, Award, Calendar, Plus, CheckCircle2, ArrowRight } from 'lucide-react';

export const TeacherDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getStoredUser();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseCode, setNewCourseCode] = useState('');

  const [teacherCourses, setTeacherCourses] = useState([
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
  ]);

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseTitle || !newCourseCode) return;

    const created = {
      id: `course-${Date.now()}`,
      title: newCourseTitle,
      code: newCourseCode.toUpperCase(),
      studentsCount: 0,
      avgGrade: 'N/A',
      pendingGrading: 0,
      attendanceRate: '100%'
    };

    setTeacherCourses([created, ...teacherCourses]);
    setNewCourseTitle('');
    setNewCourseCode('');
    setShowCreateModal(false);
  };

  return (
    <div className="academia-page">
      {/* 1. TEACHER HEADER HERO */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="flex-between flex-wrap gap-4" style={{ alignItems: 'flex-start' }}>
          <div>
            <span className="micro-eyebrow">FACULTY ACADEMIC WORKSPACE</span>
            <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
              TEACHER DASHBOARD
            </h1>
            <p className="meta-text" style={{ fontSize: '1rem', color: '#C7C4BC' }}>
              Faculty Instructor: <strong style={{ color: '#F5EFE3' }}>{user?.name || 'Dr. Leila Haddad'}</strong> · Department: <strong className="text-gold">{user?.department || 'Architecture & Spatial Design'}</strong>
            </p>
          </div>

          {/* Quick KPI Header Panel */}
          <div className="flow-kpi-stack flex-align gap-4" style={{ background: '#0D1B2D', border: '1px solid #1B3045', padding: '1rem 1.6rem', borderRadius: '12px' }}>
            <div>
              <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>ACTIVE COURSES</span>
              <strong className="kpi-serif-val text-primary" style={{ fontSize: '1.4rem', color: '#F5EFE3' }}>{teacherCourses.length} Courses</strong>
            </div>
            <div style={{ width: '1px', height: '24px', background: '#1B3045' }} />
            <div>
              <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>TOTAL STUDENTS</span>
              <strong className="kpi-serif-val text-gold" style={{ fontSize: '1.4rem' }}>142 Students</strong>
            </div>
            <div style={{ width: '1px', height: '24px', background: '#1B3045' }} />
            <div>
              <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>PENDING GRADING</span>
              <strong className="kpi-serif-val text-amber" style={{ fontSize: '1.4rem' }}>14 Papers</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 2. COURSE MANAGEMENT SECTION */}
      <div style={{ marginBottom: '3rem' }}>
        <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '1.5rem' }}>
          <div>
            <span className="micro-eyebrow">FACULTY CURRICULUM</span>
            <h2 className="section-serif-heading" style={{ fontSize: '2.2rem', color: '#F5EFE3', margin: 0 }}>Active Courses Management</h2>
          </div>
          <button 
            className="btn-editorial-primary text-xs flex-align gap-2"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus size={16} /> CREATE NEW COURSE
          </button>
        </div>

        {/* 3-COLUMN HORIZONTAL GRID */}
        <div className="grid-3-flow" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8rem' }}>
          {teacherCourses.map((c) => (
            <div 
              key={c.id} 
              className="flow-card-panel" 
              style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2rem' }}
            >
              <div className="flex-between" style={{ marginBottom: '0.6rem' }}>
                <span className="micro-category-label text-gold">{c.code}</span>
                <span className="text-xs font-bold text-emerald" style={{ background: '#0B192A', padding: '0.2rem 0.6rem', borderRadius: '12px', border: '1px solid #1B3045' }}>
                  ACTIVE
                </span>
              </div>

              <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', margin: '0.4rem 0 1rem', color: '#F5EFE3', minHeight: '56px' }}>
                {c.title}
              </h3>
              
              <div className="tuition-spec-list" style={{ marginBottom: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div className="spec-item flex-between text-xs" style={{ borderBottom: '1px solid #1B3045', paddingBottom: '0.4rem' }}>
                  <span style={{ color: '#C7C4BC' }}>Enrolled Students</span>
                  <strong style={{ color: '#F5EFE3' }}>{c.studentsCount} Students</strong>
                </div>
                <div className="spec-item flex-between text-xs" style={{ borderBottom: '1px solid #1B3045', paddingBottom: '0.4rem' }}>
                  <span style={{ color: '#C7C4BC' }}>Class Average</span>
                  <strong className="text-gold">{c.avgGrade}</strong>
                </div>
                <div className="spec-item flex-between text-xs">
                  <span style={{ color: '#C7C4BC' }}>Pending Grading</span>
                  <strong className="text-amber">{c.pendingGrading} Submissions</strong>
                </div>
              </div>

              <div className="flex-between gap-2">
                <button 
                  className="btn-editorial-primary-light flex-1 text-center text-xs" 
                  style={{ padding: '0.75rem', justifyContent: 'center' }}
                  onClick={() => navigate(`/student/courses/${c.id}`)}
                >
                  ACADEMIC FLOW →
                </button>
                <button 
                  className="btn-editorial-primary flex-1 text-center text-xs"
                  style={{ padding: '0.75rem', justifyContent: 'center' }}
                  onClick={() => navigate('/teacher/students')}
                >
                  STUDENTS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. AGGREGATED COHORT INTELLIGENCE */}
      <div>
        <span className="micro-eyebrow">AGGREGATED FACULTY INTELLIGENCE</span>
        <h2 className="section-serif-heading" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#F5EFE3' }}>Class Analytics & Reports</h2>

        <div className="grid-2" style={{ gap: '2rem' }}>
          {/* Class Performance Summary */}
          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.2rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>CLASS PERFORMANCE SUMMARY</span>
            <h4 className="sub-serif-title" style={{ fontSize: '1.5rem', margin: '0.4rem 0 1.2rem', color: '#F5EFE3' }}>
              Institutional Cohort Average: <strong className="text-gold">84.2%</strong>
            </h4>

            <div className="attendance-tally-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.2rem' }}>
              <div className="tally-box" style={{ background: '#0B192A', border: '1px solid #1B3045', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                <span className="text-xs text-muted block">Total Students</span>
                <strong className="font-serif text-gold" style={{ fontSize: '1.8rem' }}>142</strong>
              </div>
              <div className="tally-box" style={{ background: '#0B192A', border: '1px solid #1B3045', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                <span className="text-xs text-muted block">On Track</span>
                <strong className="font-serif text-emerald" style={{ fontSize: '1.8rem' }}>139</strong>
              </div>
              <div className="tally-box" style={{ background: '#0B192A', border: '1px solid #E05A5A', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                <span className="text-xs text-crimson block font-bold">At Risk</span>
                <strong className="font-serif text-crimson" style={{ fontSize: '1.8rem' }}>3</strong>
              </div>
            </div>

            <p className="text-xs text-muted" style={{ lineHeight: '1.6' }}>
              3 students have been flagged for attendance or assignment declines in ARC 118.
            </p>
          </div>

          {/* AI Teacher Recommendations */}
          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #00382E', borderRadius: '16px', padding: '2.2rem' }}>
            <div className="flex-align gap-2" style={{ marginBottom: '0.6rem' }}>
              <Sparkles size={16} className="text-gold" />
              <span className="editorial-label" style={{ color: '#F1BA4B' }}>FACULTY AI INSIGHTS</span>
            </div>

            <h4 className="sub-serif-title" style={{ fontSize: '1.5rem', color: '#F5EFE3', marginBottom: '1rem' }}>Recommended Instructional Actions</h4>
            
            <div className="ai-recommendation-box text-xs" style={{ marginBottom: '1.4rem', background: '#0B192A', padding: '1.2rem', border: '1px solid #1B3045', borderRadius: '10px', lineHeight: '1.6' }}>
              <strong className="block text-gold font-semibold" style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>Statistics Practice Set Review:</strong>
              <span style={{ color: '#C7C4BC' }}>42% of students struggled with regression questions in Assignment 02. Consider scheduling a review seminar.</span>
            </div>

            <button className="btn-dark-green text-xs w-full" style={{ padding: '0.9rem' }} onClick={() => navigate('/teacher/reports')}>
              VIEW PERFORMANCE REPORTS & SUMMARY →
            </button>
          </div>
        </div>
      </div>

      {/* CREATE NEW COURSE MODAL */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ background: '#0D1B2D', border: '1px solid #1B3045', padding: '2.5rem', borderRadius: '16px', maxWidth: '520px' }}>
            <span className="micro-eyebrow text-gold">FACULTY CURRICULUM</span>
            <h2 className="sub-serif-title" style={{ fontSize: '2rem', color: '#F5EFE3', margin: '0.3rem 0 1.5rem' }}>
              Create New Academic Course
            </h2>

            <form onSubmit={handleCreateCourse} className="flex-column gap-3">
              <div className="form-group-editorial">
                <label className="editorial-label" style={{ color: '#F5EFE3' }}>Course Title *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="e.g. Cognitive Load Theories in Learning"
                  value={newCourseTitle}
                  onChange={(e) => setNewCourseTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label" style={{ color: '#F5EFE3' }}>Course Code *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="e.g. EDU 310"
                  value={newCourseCode}
                  onChange={(e) => setNewCourseCode(e.target.value)}
                  required
                />
              </div>

              <div className="flex-end gap-3" style={{ marginTop: '1rem' }}>
                <button type="button" className="btn-editorial-primary-light text-xs" onClick={() => setShowCreateModal(false)}>
                  CANCEL
                </button>
                <button type="submit" className="btn-editorial-primary text-xs">
                  CONFIRM & CREATE →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
