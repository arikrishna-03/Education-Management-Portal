import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, FileCheck, Award, Brain, BarChart3, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const AcademicFlowPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const currentId = courseId || 'arc-118';

  // Dynamic Course Lookup
  const coursesData: Record<string, { title: string; category: string; instructor: string; progress: number; grade: string; attendancePct: number }> = {
    'arc-118': {
      title: 'Spatial Thinking & Environmental Architecture',
      category: 'Architecture & Design',
      instructor: 'Dr. Leila Haddad',
      progress: 68,
      grade: 'A-',
      attendancePct: 92
    },
    'edu-204': {
      title: 'Learning Design & Pedagogical Frameworks',
      category: 'Pedagogical Design',
      instructor: 'Dr. Sarah Jenkins',
      progress: 82,
      grade: 'B+',
      attendancePct: 95
    },
    'com-210': {
      title: 'Academic Writing & Research Synthesis',
      category: 'Academic Research',
      instructor: 'Dr. Marcus Brody',
      progress: 90,
      grade: 'A',
      attendancePct: 96
    },
    'cs-312': {
      title: 'Applied AI & Neural Learning Systems',
      category: 'Computer Science',
      instructor: 'Prof. David Vance',
      progress: 54,
      grade: 'A-',
      attendancePct: 88
    }
  };

  const course = coursesData[currentId] || coursesData['arc-118'];

  return (
    <div className="academia-page">
      {/* 1. BREADCRUMB & BACK BUTTON */}
      <div style={{ marginBottom: '1.5rem' }}>
        <Link 
          to="/student/courses" 
          className="btn-link-editorial text-xs flex-align gap-2"
          style={{ color: '#F1BA4B' }}
        >
          <ArrowLeft size={14} /> Back to My Courses
        </Link>
      </div>

      {/* 2. DEDICATED ACADEMIC FLOW PAGE HEADER */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.5rem', marginBottom: '2.5rem' }}>
        <span className="micro-eyebrow text-gold">ACADEMIC FLOW WORKSPACE</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.3rem 0', color: '#F5EFE3' }}>
          {course.title}
        </h1>
        <p className="meta-text" style={{ fontSize: '1.05rem', color: '#C7C4BC', marginBottom: '1.5rem' }}>
          {course.category} · Instructor: <strong style={{ color: '#F5EFE3' }}>{course.instructor}</strong>
        </p>

        <div style={{ maxWidth: '600px' }}>
          <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.4rem', color: '#C7C4BC' }}>
            <span>Overall Course Progress</span>
            <strong className="text-gold" style={{ fontSize: '1.1rem' }}>{course.progress}%</strong>
          </div>
          <div className="progress-bar-bg" style={{ height: '8px', background: '#1B3045', borderRadius: '4px' }}>
            <div className="progress-bar-fill" style={{ width: `${course.progress}%`, height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
          </div>
        </div>
      </div>

      {/* 3. THE 5 MAJOR ACADEMIC FLOW MODULES GRID */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span className="micro-eyebrow">ACADEMIC FLOW MODULES</span>
        <h2 className="section-serif-heading" style={{ fontSize: '2rem', color: '#F5EFE3', marginBottom: '1.8rem' }}>
          Course Intelligence & Evaluation
        </h2>
      </div>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
        
        {/* MODULE 1: ATTENDANCE */}
        <div 
          className="flow-card-panel cursor-pointer hover-lift"
          style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}
          onClick={() => navigate(`/student/courses/${currentId}/attendance`)}
        >
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>1. ATTENDANCE</span>
            <Calendar size={20} className="text-emerald" />
          </div>
          
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '0.6rem' }}>
            Attendance & Seminar Log
          </h3>

          <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.4rem' }}>
            <span className="text-xs text-muted">• Mark Attendance</span>
            <span className="text-xs text-muted">• View Attendance Logs</span>
            <span className="text-xs text-muted">• Attendance Compliance Summary ({course.attendancePct}%)</span>
          </div>

          <button className="btn-editorial-primary w-full text-xs">
            OPEN ATTENDANCE →
          </button>
        </div>

        {/* MODULE 2: ASSIGNMENTS */}
        <div 
          className="flow-card-panel cursor-pointer hover-lift"
          style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}
          onClick={() => navigate(`/student/courses/${currentId}/assignments`)}
        >
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>2. ASSIGNMENTS</span>
            <FileCheck size={20} className="text-gold" />
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '0.6rem' }}>
            Assignments & Paper Submissions
          </h3>

          <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.4rem' }}>
            <span className="text-xs text-muted">• Create / View Tasks</span>
            <span className="text-xs text-muted">• Submit Research Papers</span>
            <span className="text-xs text-muted">• Due Dates & AI Feedback Analysis</span>
          </div>

          <button className="btn-editorial-primary w-full text-xs">
            OPEN ASSIGNMENTS →
          </button>
        </div>

        {/* MODULE 3: EXAMS & GRADES */}
        <div 
          className="flow-card-panel cursor-pointer hover-lift"
          style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}
          onClick={() => navigate(`/student/courses/${currentId}/exams`)}
        >
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>3. EXAMS & GRADES</span>
            <Award size={20} className="text-gold" />
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '0.6rem' }}>
            Exams & Grade Transcript
          </h3>

          <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.4rem' }}>
            <span className="text-xs text-muted">• Take Studio Exams</span>
            <span className="text-xs text-muted">• View Official Grades ({course.grade})</span>
            <span className="text-xs text-muted">• Grade History & Exam Analysis</span>
          </div>

          <button className="btn-editorial-primary w-full text-xs">
            OPEN EXAMS & GRADES →
          </button>
        </div>

        {/* MODULE 4: AI ENGINE */}
        <div 
          className="flow-card-panel cursor-pointer hover-lift border-academic-green"
          style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}
          onClick={() => navigate(`/student/courses/${currentId}/ai-engine`)}
        >
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>4. AI ENGINE</span>
            <Brain size={20} className="text-gold" />
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '0.6rem' }}>
            AI Engine & Recommendations
          </h3>

          <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.4rem' }}>
            <span className="text-xs text-muted">• Performance Analysis</span>
            <span className="text-xs text-muted">• At-Risk Detection & Weak Subject Alerts</span>
            <span className="text-xs text-muted">• Study Recommendations & AI Insights</span>
          </div>

          <button className="btn-editorial-primary w-full text-xs">
            OPEN AI ENGINE →
          </button>
        </div>

      </div>

      {/* MODULE 5: REPORTS & INSIGHTS (FULL-WIDTH CARD) */}
      <div 
        className="flow-card-panel cursor-pointer hover-lift"
        style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2.2rem' }}
        onClick={() => navigate(`/student/courses/${currentId}/reports`)}
      >
        <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '1rem' }}>
          <div>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>5. REPORTS & INSIGHTS</span>
            <h3 className="sub-serif-title" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: '0.2rem 0' }}>
              Course Performance Reports & Analytics
            </h3>
          </div>

          <button className="btn-editorial-primary text-xs">
            VIEW REPORTS →
          </button>
        </div>

        <div className="grid-2" style={{ gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ background: '#0B192A', padding: '1rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
            <span className="text-xs text-muted block">Student & Class Performance</span>
            <strong className="text-xs text-gold">Comparative Term Benchmarks</strong>
          </div>
          <div style={{ background: '#0B192A', padding: '1rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
            <span className="text-xs text-muted block">AI Recommendations Summary</span>
            <strong className="text-xs text-emerald">Empirical Knowledge Gap Interventions</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
