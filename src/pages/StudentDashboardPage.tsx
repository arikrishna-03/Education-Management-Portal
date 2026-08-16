import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getStoredUser } from '../data/authState';
import { getStoredEnrolledCourses } from '../data/enrollmentState';
import { Sparkles } from 'lucide-react';

export const StudentDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getStoredUser();
  const enrolledCourses = getStoredEnrolledCourses();

  return (
    <div className="academia-page">
      {/* 1. STUDENT HEADER HERO */}
      <section className="courses-hero-header" style={{ padding: '1rem 0 2rem' }}>
        <div className="academia-container">
          <div className="flex-between flex-wrap gap-4">
            <div>
              <span className="micro-eyebrow">STUDENT PORTAL WORKSPACE</span>
              <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
                USER DASHBOARD
              </h1>
              <p className="meta-text" style={{ fontSize: '0.95rem', color: '#C7C4BC' }}>
                Welcome back, <strong>{user?.name || 'Amina Rahman'}</strong> · Student ID: <strong className="text-gold">{user?.studentId || 'STU-2026-9821'}</strong>
              </p>
            </div>

            {/* Quick Actions / Status KPI Stack */}
            <div className="flow-kpi-stack flex-align gap-4">
              <div>
                <span className="micro-eyebrow">ENROLLED COURSES</span>
                <strong className="kpi-serif-val">{enrolledCourses.length} Active</strong>
              </div>
              <div className="divider-vert" style={{ width: '1px', height: '24px', background: '#1B3045' }} />
              <div>
                <span className="micro-eyebrow">OVERALL GPA</span>
                <strong className="kpi-serif-val text-gold">A- (86%)</strong>
              </div>
              <div className="divider-vert" style={{ width: '1px', height: '24px', background: '#1B3045' }} />
              <div>
                <span className="micro-eyebrow">ATTENDANCE</span>
                <strong className="kpi-serif-val text-emerald">92%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DASHBOARD BODY */}
      <section className="section-space-sm border-top-thin">
        <div className="academia-container">

          {/* MY COURSES SUMMARY GRID */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <div>
                <span className="micro-eyebrow">ACTIVE CURRICULUM</span>
                <h2 className="section-serif-heading" style={{ fontSize: '2rem', color: '#F5EFE3' }}>My Courses</h2>
              </div>
              <Link to="/student/courses" className="btn-link-editorial">
                VIEW ALL COURSES ({enrolledCourses.length}) →
              </Link>
            </div>

            <div className="featured-courses-grid">
              {enrolledCourses.map((c) => (
                <div 
                  key={c.courseId} 
                  className="course-editorial-card"
                  onClick={() => navigate(`/student/courses/${c.courseId}`)}
                >
                  <div className="course-img-box">
                    <img src={c.image} alt={c.title} className="editorial-img" />
                  </div>
                  <span className="micro-category-label">{c.category}</span>
                  <h3 className="course-serif-title">{c.title}</h3>
                  
                  <div className="progress-section-enrolled" style={{ margin: '0.8rem 0 1.2rem' }}>
                    <div className="flex-between text-xs font-semibold" style={{ marginBottom: '0.3rem' }}>
                      <span className="editorial-label" style={{ fontSize: '0.65rem' }}>COURSE PROGRESS</span>
                      <strong className="text-gold">{c.progress}%</strong>
                    </div>
                    <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                      <div className="progress-bar-fill" style={{ width: `${c.progress}%`, height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
                    </div>
                  </div>

                  <div className="course-meta-bottom flex-between">
                    <span className="meta-text">{c.instructor}</span>
                    <button className="btn-editorial-primary text-xs">
                      CONTINUE LEARNING →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MY PROGRESS MODULE */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
              <div>
                <span className="micro-eyebrow">ACADEMIC INTELLIGENCE</span>
                <h2 className="section-serif-heading" style={{ fontSize: '2rem', color: '#F5EFE3' }}>My Progress</h2>
              </div>
              <Link to="/student/progress" className="btn-link-editorial">
                FULL PROGRESS REPORT →
              </Link>
            </div>

            <div className="grid-2">
              {/* Performance Overview */}
              <div className="flow-card-panel">
                <span className="editorial-label">PERFORMANCE OVERVIEW</span>
                <h4 className="sub-serif-title" style={{ fontSize: '1.4rem', margin: '0.4rem 0 1rem', color: '#F5EFE3' }}>
                  Overall Academic Score: <strong className="text-gold">86%</strong>
                </h4>

                <div className="pulse-metrics-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                      <span>Attendance Rate</span>
                      <strong className="text-emerald">92%</strong>
                    </div>
                    <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                      <div className="progress-bar-fill" style={{ width: '92%', height: '100%', background: '#2FA36B', borderRadius: '4px' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                      <span>Assignments Completion</span>
                      <strong className="text-gold">89%</strong>
                    </div>
                    <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                      <div className="progress-bar-fill" style={{ width: '89%', height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                      <span>Exams Average</span>
                      <strong className="text-indigo">82%</strong>
                    </div>
                    <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                      <div className="progress-bar-fill" style={{ width: '82%', height: '100%', background: '#6E9FD1', borderRadius: '4px' }} />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #1B3045' }}>
                  <span className="editorial-label">WEAK SUBJECTS</span>
                  <p className="text-xs text-muted" style={{ marginTop: '0.3rem' }}>
                    <strong className="text-crimson">Statistics (68%)</strong> · <strong className="text-gold">Academic Writing (84%)</strong>
                  </p>
                </div>
              </div>

              {/* Improvement Tips & AI Insights */}
              <div className="flow-card-panel border-academic-green">
                <div className="flex-align gap-2" style={{ marginBottom: '0.6rem' }}>
                  <Sparkles size={16} className="text-gold" />
                  <span className="editorial-label">IMPROVEMENT TIPS & AI INSIGHTS</span>
                </div>

                <h4 className="sub-serif-title" style={{ fontSize: '1.3rem', color: '#F5EFE3' }}>Recommended Strategy This Week</h4>
                
                <div className="ai-recommendation-box text-xs" style={{ margin: '1rem 0', background: '#0B192A', padding: '1rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
                  <strong className="block text-gold font-semibold" style={{ marginBottom: '0.2rem' }}>Focus on Statistics:</strong>
                  Complete Practice Set 04 before beginning the next research module on Thursday.
                </div>

                <div className="ai-eval-stack" style={{ paddingTop: '0.8rem', borderTop: '1px solid #1B3045' }}>
                  <span className="editorial-label">AI MONTHLY SUMMARY</span>
                  <p className="text-xs text-muted" style={{ marginTop: '0.3rem', lineHeight: '1.6' }}>
                    Your overall assignment performance has improved by <strong className="text-gold">8%</strong> this month. Continued revision in statistical hypothesis testing will raise your GPA to <strong>A</strong>.
                  </p>
                </div>

                <button 
                  className="btn-dark-green text-xs w-full"
                  style={{ marginTop: '1.2rem' }}
                  onClick={() => navigate('/student/courses/arc-118')}
                >
                  OPEN ACADEMIC FLOW WORKSPACE →
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
