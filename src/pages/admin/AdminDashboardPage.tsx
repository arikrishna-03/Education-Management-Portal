import React from 'react';
import { Users, School, BookOpen, FileCheck, Award, BarChart3, Brain, AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="academia-page">
      {/* ADMIN HEADER */}
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>SYSTEM CONTROL CENTER</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.5rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          ADMIN DASHBOARD
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC', fontSize: '1rem' }}>
          Academic Administration — Monitor and manage the entire academic ecosystem.
        </p>
      </div>

      {/* ROW 1: 3 PRIMARY MODULE CARDS (STUDENTS, TEACHERS, COURSES) */}
      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        
        {/* 1. MANAGE STUDENTS CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>MANAGE STUDENTS</span>
            <Users size={20} className="text-gold" />
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#F5EFE3', margin: '0.2rem 0' }}>2,846</h2>
          <span className="text-xs text-muted block" style={{ marginBottom: '1.2rem' }}>Active Registered Students</span>
          
          <div style={{ background: '#0B192A', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #1B3045', marginBottom: '1.4rem' }}>
            <div className="flex-between text-xs" style={{ marginBottom: '0.3rem' }}>
              <span className="text-muted">Active Students</span>
              <strong className="text-emerald">2,710</strong>
            </div>
            <div className="flex-between text-xs">
              <span className="text-muted">Inactive Students</span>
              <strong className="text-crimson">136</strong>
            </div>
          </div>

          <button 
            className="btn-editorial-primary w-full text-xs"
            onClick={() => navigate('/admin/students')}
          >
            MANAGE STUDENTS →
          </button>
        </div>

        {/* 2. MANAGE TEACHERS CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>MANAGE TEACHERS</span>
            <School size={20} style={{ color: '#7C3AED' }} />
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#F5EFE3', margin: '0.2rem 0' }}>128</h2>
          <span className="text-xs text-muted block" style={{ marginBottom: '1.2rem' }}>Active Faculty Members</span>

          <div style={{ background: '#0B192A', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #1B3045', marginBottom: '1.4rem' }}>
            <div className="flex-between text-xs" style={{ marginBottom: '0.3rem' }}>
              <span className="text-muted">Active Teachers</span>
              <strong className="text-emerald">116</strong>
            </div>
            <div className="flex-between text-xs">
              <span className="text-muted">Pending Review</span>
              <strong className="text-gold">12</strong>
            </div>
          </div>

          <button 
            className="btn-admin-purple w-full text-xs"
            onClick={() => navigate('/admin/teachers')}
          >
            MANAGE TEACHERS →
          </button>
        </div>

        {/* 3. MANAGE COURSES & CLASSES CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>COURSES & CLASSES</span>
            <BookOpen size={20} className="text-emerald" />
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#F5EFE3', margin: '0.2rem 0' }}>128</h2>
          <span className="text-xs text-muted block" style={{ marginBottom: '1.2rem' }}>Active Courses · 64 Classes</span>

          <div style={{ background: '#0B192A', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #1B3045', marginBottom: '1.4rem' }}>
            <div className="flex-between text-xs" style={{ marginBottom: '0.3rem' }}>
              <span className="text-muted">Active Courses</span>
              <strong className="text-gold">128</strong>
            </div>
            <div className="flex-between text-xs">
              <span className="text-muted">Active Classes</span>
              <strong className="text-indigo">64</strong>
            </div>
          </div>

          <button 
            className="btn-dark-green w-full text-xs"
            onClick={() => navigate('/admin/courses')}
          >
            MANAGE COURSES →
          </button>
        </div>

      </div>

      {/* ROW 2: 3 SECONDARY MODULE CARDS (ASSIGNMENTS, EXAMS & GRADES, REPORTS & ANALYTICS) */}
      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        
        {/* 4. MANAGE ASSIGNMENTS CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>MANAGE ASSIGNMENTS</span>
            <FileCheck size={20} className="text-gold" />
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#F5EFE3', margin: '0.2rem 0' }}>342</h2>
          <span className="text-xs text-muted block" style={{ marginBottom: '1.2rem' }}>Active Curriculum Assignments</span>

          <div style={{ background: '#0B192A', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #1B3045', marginBottom: '1.4rem' }}>
            <div className="flex-between text-xs" style={{ marginBottom: '0.3rem' }}>
              <span className="text-muted">Pending Submissions</span>
              <strong className="text-gold">1,284</strong>
            </div>
            <div className="flex-between text-xs">
              <span className="text-muted">Overdue</span>
              <strong className="text-crimson">86</strong>
            </div>
          </div>

          <button 
            className="btn-editorial-primary-light w-full text-xs"
            style={{ justifyContent: 'center' }}
            onClick={() => navigate('/admin/assignments')}
          >
            VIEW ASSIGNMENTS →
          </button>
        </div>

        {/* 5. MANAGE EXAMS & GRADES CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>EXAMS & GRADES</span>
            <Award size={20} className="text-gold" />
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#F5EFE3', margin: '0.2rem 0' }}>18</h2>
          <span className="text-xs text-muted block" style={{ marginBottom: '1.2rem' }}>Upcoming Examinations</span>

          <div style={{ background: '#0B192A', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #1B3045', marginBottom: '1.4rem' }}>
            <div className="flex-between text-xs" style={{ marginBottom: '0.3rem' }}>
              <span className="text-muted">Completed Exams</span>
              <strong className="text-emerald">84</strong>
            </div>
            <div className="flex-between text-xs">
              <span className="text-muted">Grade Records</span>
              <strong className="text-gold">8,426</strong>
            </div>
          </div>

          <button 
            className="btn-editorial-primary-light w-full text-xs"
            style={{ justifyContent: 'center' }}
            onClick={() => navigate('/admin/exams')}
          >
            MANAGE EXAMS →
          </button>
        </div>

        {/* 6. VIEW REPORTS & ANALYTICS CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>REPORTS & ANALYTICS</span>
            <BarChart3 size={20} style={{ color: '#6E9FD1' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: '0.6rem 0 1.2rem' }}>
            <div>
              <div className="flex-between text-xs" style={{ marginBottom: '0.2rem' }}>
                <span className="text-muted">Student Performance</span>
                <strong className="text-gold">86%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '4px', background: '#1B3045' }}>
                <div style={{ width: '86%', height: '100%', background: '#F1BA4B' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs" style={{ marginBottom: '0.2rem' }}>
                <span className="text-muted">Attendance</span>
                <strong className="text-emerald">92%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '4px', background: '#1B3045' }}>
                <div style={{ width: '92%', height: '100%', background: '#2FA36B' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs" style={{ marginBottom: '0.2rem' }}>
                <span className="text-muted">Assignment Completion</span>
                <strong className="text-gold">89%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '4px', background: '#1B3045' }}>
                <div style={{ width: '89%', height: '100%', background: '#F1BA4B' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs" style={{ marginBottom: '0.2rem' }}>
                <span className="text-muted">Exam Performance</span>
                <strong className="text-indigo">84%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '4px', background: '#1B3045' }}>
                <div style={{ width: '84%', height: '100%', background: '#6E9FD1' }} />
              </div>
            </div>
          </div>

          <button 
            className="btn-editorial-primary-light w-full text-xs"
            style={{ justifyContent: 'center' }}
            onClick={() => navigate('/admin/reports')}
          >
            VIEW REPORTS →
          </button>
        </div>

      </div>

      {/* ROW 3: FULL-WIDTH AI INSIGHTS & MONITORING CARD */}
      <div className="flow-card-panel admin-card-purple" style={{ padding: '2.2rem' }}>
        <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
          <div className="flex-align gap-3">
            <Brain size={24} style={{ color: '#A78BFA' }} />
            <div>
              <span className="editorial-label" style={{ color: '#A78BFA' }}>AI INSIGHTS & MONITORING</span>
              <h2 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', margin: 0 }}>
                18 AI System Alerts <span className="text-xs text-crimson font-bold" style={{ marginLeft: '0.8rem' }}>(5 High Priority)</span>
              </h2>
            </div>
          </div>

          <button 
            className="btn-admin-purple text-xs"
            onClick={() => navigate('/admin/ai-insights')}
          >
            REVIEW AI INSIGHTS →
          </button>
        </div>

        <div className="grid-2" style={{ gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ background: '#2A1647', padding: '1.2rem', borderRadius: '10px', border: '1px solid #7C3AED' }}>
            <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
              <span className="text-xs font-bold text-gold flex-align gap-2">
                <AlertTriangle size={16} /> AT-RISK STUDENTS DETECTED
              </span>
              <button className="btn-link-editorial text-xs" style={{ color: '#A78BFA' }} onClick={() => navigate('/admin/students')}>VIEW STUDENTS →</button>
            </div>
            <p style={{ color: '#F3E8FF', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <strong>23 students</strong> may require academic intervention based on attendance decline and quiz scores.
            </p>
          </div>

          <div style={{ background: '#2A1647', padding: '1.2rem', borderRadius: '10px', border: '1px solid #7C3AED' }}>
            <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
              <span className="text-xs font-bold text-emerald flex-align gap-2">
                <BarChart3 size={16} /> PERFORMANCE TREND
              </span>
              <button className="btn-link-editorial text-xs" style={{ color: '#A78BFA' }} onClick={() => navigate('/admin/reports')}>VIEW AI ANALYSIS →</button>
            </div>
            <p style={{ color: '#F3E8FF', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Overall academic performance has improved <strong className="text-emerald">+8.4%</strong> this term following studio vector revisions.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
