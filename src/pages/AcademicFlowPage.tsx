import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  getStoredEnrolledCourses, 
  EnrolledCourseData, 
  INITIAL_ENROLLED_COURSES 
} from '../data/enrollmentState';
import { 
  CheckCircle2, 
  Calendar, 
  FileCheck, 
  Award, 
  Brain, 
  BarChart3, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  Sparkles,
  FileText,
  Upload,
  UserCheck
} from 'lucide-react';

export const AcademicFlowPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Find enrolled course data or fallback to Spatial Thinking
  const allEnrolled = getStoredEnrolledCourses();
  const currentCourse: EnrolledCourseData = allEnrolled.find(c => c.courseId === courseId) || {
    courseId: courseId || 'arc-118',
    title: courseId === 'edu-204' ? 'Learning Design & Pedagogical Frameworks' : 'Spatial Thinking & Environmental Architecture',
    category: courseId === 'edu-204' ? 'Pedagogical Design' : 'Architecture & Design',
    instructor: courseId === 'edu-204' ? 'Dr. Sarah Jenkins' : 'Dr. Leila Haddad',
    progress: 68,
    grade: 'A-',
    attendancePct: 92,
    assignmentsCompleted: 8,
    totalAssignments: 10,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  };

  // State controls for interactive tabs / modals inside Academic Flow
  const [activeFlowTab, setActiveFlowTab] = useState<'all' | 'attendance' | 'assignments' | 'exams' | 'ai-engine' | 'reports'>('all');
  const [markedAttendanceSuccess, setMarkedAttendanceSuccess] = useState(false);
  const [selectedAssignmentFile, setSelectedAssignmentFile] = useState<string | null>(null);
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  const handleMarkAttendance = () => {
    setMarkedAttendanceSuccess(true);
    setTimeout(() => setMarkedAttendanceSuccess(false), 3000);
  };

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAssignmentSubmitted(true);
  };

  return (
    <div className="academia-page">
      {/* 1. ACADEMIC FLOW HEADER */}
      <section className="courses-hero-header">
        <div className="academia-container">
          <div className="flex-between flex-wrap gap-4">
            <div>
              <span className="micro-eyebrow">STUDENT ACADEMIC FLOW</span>
              <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0' }}>
                {currentCourse.title}
              </h1>
              <p className="meta-text" style={{ fontSize: '0.95rem' }}>
                Instructor: <strong>{currentCourse.instructor}</strong> · Discipline: <strong>{currentCourse.category}</strong>
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flow-kpi-stack flex-align gap-4">
              <div className="flow-kpi-box">
                <span className="micro-eyebrow">PROGRESS</span>
                <strong className="kpi-serif-val">{currentCourse.progress}%</strong>
              </div>
              <div className="divider-vert" />
              <div className="flow-kpi-box">
                <span className="micro-eyebrow">ATTENDANCE</span>
                <strong className="kpi-serif-val text-emerald">{currentCourse.attendancePct}%</strong>
              </div>
              <div className="divider-vert" />
              <div className="flow-kpi-box">
                <span className="micro-eyebrow">CURRENT GRADE</span>
                <strong className="kpi-serif-val text-indigo">{currentCourse.grade}</strong>
              </div>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="category-filters-row" style={{ marginTop: '2.5rem' }}>
            <button className={`filter-text-btn ${activeFlowTab === 'all' ? 'active' : ''}`} onClick={() => setActiveFlowTab('all')}>OVERVIEW</button>
            <button className={`filter-text-btn ${activeFlowTab === 'attendance' ? 'active' : ''}`} onClick={() => setActiveFlowTab('attendance')}>ATTENDANCE</button>
            <button className={`filter-text-btn ${activeFlowTab === 'assignments' ? 'active' : ''}`} onClick={() => setActiveFlowTab('assignments')}>ASSIGNMENTS</button>
            <button className={`filter-text-btn ${activeFlowTab === 'exams' ? 'active' : ''}`} onClick={() => setActiveFlowTab('exams')}>EXAMS & GRADES</button>
            <button className={`filter-text-btn ${activeFlowTab === 'ai-engine' ? 'active' : ''}`} onClick={() => setActiveFlowTab('ai-engine')}>AI ENGINE</button>
            <button className={`filter-text-btn ${activeFlowTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveFlowTab('reports')}>REPORTS & INSIGHTS</button>
          </div>
        </div>
      </section>

      {/* 2. MAIN MODULES GRID CONTAINER */}
      <section className="section-space border-top-thin">
        <div className="academia-container">

          {/* --------------------------------------------------------------------------
             MODULE 1: ATTENDANCE
             -------------------------------------------------------------------------- */}
          {(activeFlowTab === 'all' || activeFlowTab === 'attendance') && (
            <div className="academic-flow-module-block" style={{ marginBottom: '3.5rem' }}>
              <div className="module-title-header flex-between">
                <div className="flex-align gap-3">
                  <span className="mod-num-badge">01</span>
                  <div>
                    <span className="micro-eyebrow">MODULE</span>
                    <h2 className="section-serif-heading" style={{ margin: 0, fontSize: '2rem' }}>Attendance</h2>
                  </div>
                </div>
                <span className="text-xs text-muted">Course Attendance Rate: <strong>92%</strong></span>
              </div>

              <div className="grid-3-flow" style={{ marginTop: '1.5rem' }}>
                {/* Mark Attendance */}
                <div className="flow-card-panel">
                  <span className="editorial-label">MARK ATTENDANCE</span>
                  <h4 className="sub-serif-title" style={{ fontSize: '1.2rem', marginTop: '0.4rem' }}>Lecture Session 14</h4>
                  <p className="text-xs text-muted" style={{ marginBottom: '1rem' }}>Spatial Geometry & Public Vector Corridors · Today, 18:00</p>
                  
                  {markedAttendanceSuccess ? (
                    <div className="status-pill status-green text-xs flex-align gap-2">
                      <UserCheck size={14} /> Attendance Marked Present
                    </div>
                  ) : (
                    <button className="btn-editorial-primary w-full text-xs" onClick={handleMarkAttendance}>
                      MARK PRESENT →
                    </button>
                  )}
                </div>

                {/* View Attendance */}
                <div className="flow-card-panel">
                  <span className="editorial-label">VIEW ATTENDANCE</span>
                  <div className="attendance-tally-grid" style={{ marginTop: '0.8rem' }}>
                    <div className="tally-box">
                      <span className="text-xs text-muted block">Present</span>
                      <strong className="font-serif text-emerald" style={{ fontSize: '1.8rem' }}>34</strong>
                    </div>
                    <div className="tally-box">
                      <span className="text-xs text-muted block">Absent</span>
                      <strong className="font-serif text-crimson" style={{ fontSize: '1.8rem' }}>3</strong>
                    </div>
                    <div className="tally-box">
                      <span className="text-xs text-muted block">Total Sessions</span>
                      <strong className="font-serif" style={{ fontSize: '1.8rem' }}>37</strong>
                    </div>
                  </div>
                </div>

                {/* Attendance Summary */}
                <div className="flow-card-panel">
                  <span className="editorial-label">ATTENDANCE SUMMARY</span>
                  <h4 className="sub-serif-title" style={{ fontSize: '1.2rem', marginTop: '0.4rem' }}>92% Overall Rate</h4>
                  <p className="text-xs text-muted" style={{ marginBottom: '0.8rem' }}>
                    Attendance consistency remains above the 75% institutional requirement threshold.
                  </p>
                  <span className="status-pill status-green text-xs">On-Track Attendance</span>
                </div>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------------------------
             MODULE 2: ASSIGNMENTS & AI FEEDBACK
             -------------------------------------------------------------------------- */}
          {(activeFlowTab === 'all' || activeFlowTab === 'assignments') && (
            <div className="academic-flow-module-block" style={{ marginBottom: '3.5rem' }}>
              <div className="module-title-header flex-between">
                <div className="flex-align gap-3">
                  <span className="mod-num-badge">02</span>
                  <div>
                    <span className="micro-eyebrow">MODULE</span>
                    <h2 className="section-serif-heading" style={{ margin: 0, fontSize: '2rem' }}>Assignments & AI Feedback</h2>
                  </div>
                </div>
                <span className="text-xs text-muted">Completed: <strong>8 / 10</strong></span>
              </div>

              <div className="grid-2-1" style={{ marginTop: '1.5rem', gap: '2rem' }}>
                {/* Assignments List & Submission */}
                <div className="flow-card-panel">
                  <span className="editorial-label">ASSIGNMENTS LIST</span>
                  
                  <div className="assignment-item-row flex-between" style={{ marginTop: '1rem', padding: '1rem 0', borderBottom: '1px solid #d9d5cc' }}>
                    <div>
                      <h4 className="ann-title" style={{ fontSize: '1.2rem' }}>Research Methods — Reflection 02</h4>
                      <span className="text-xs text-muted">Due: 18 September 2026 · Weight: 20%</span>
                    </div>

                    <div>
                      {assignmentSubmitted ? (
                        <span className="status-pill status-green text-xs">Submitted ✓</span>
                      ) : (
                        <button className="btn-secondary-sm" onClick={() => setAssignmentSubmitted(true)}>
                          Submit Assignment
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="assignment-item-row flex-between" style={{ padding: '1rem 0', borderBottom: '1px solid #d9d5cc' }}>
                    <div>
                      <h4 className="ann-title" style={{ fontSize: '1.2rem' }}>Studio Critique Preparation</h4>
                      <span className="text-xs text-muted">Due: 23 September 2026 · Weight: 30%</span>
                    </div>
                    <span className="status-pill status-indigo text-xs">In Progress</span>
                  </div>
                </div>

                {/* AI Feedback Module */}
                <div className="flow-card-panel border-academic-green">
                  <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
                    <Sparkles size={16} className="text-emerald" />
                    <span className="editorial-label">AI FEEDBACK ASSISTANT</span>
                  </div>

                  <h4 className="sub-serif-title" style={{ fontSize: '1.2rem' }}>Reflection 01 Evaluation</h4>
                  
                  <div className="ai-eval-stack" style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div className="flex-between text-xs">
                      <span>Structure:</span>
                      <strong className="text-emerald">Strong</strong>
                    </div>
                    <div className="flex-between text-xs">
                      <span>Clarity:</span>
                      <strong className="text-emerald">Good</strong>
                    </div>
                    <div className="flex-between text-xs">
                      <span>Academic Reasoning:</span>
                      <strong className="text-amber">Needs Development</strong>
                    </div>
                  </div>

                  <div className="ai-recommendation-box text-xs">
                    <strong className="block text-amber font-semibold">Suggested Improvement:</strong>
                    Strengthen the connection between your second argument and empirical research citations.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------------------------
             MODULE 3: EXAMS & GRADES
             -------------------------------------------------------------------------- */}
          {(activeFlowTab === 'all' || activeFlowTab === 'exams') && (
            <div className="academic-flow-module-block" style={{ marginBottom: '3.5rem' }}>
              <div className="module-title-header flex-between">
                <div className="flex-align gap-3">
                  <span className="mod-num-badge">03</span>
                  <div>
                    <span className="micro-eyebrow">MODULE</span>
                    <h2 className="section-serif-heading" style={{ margin: 0, fontSize: '2rem' }}>Exams & Grades</h2>
                  </div>
                </div>
                <span className="text-xs text-muted">Current Academic Grade: <strong className="text-indigo">A- (86%)</strong></span>
              </div>

              <div className="grid-3-flow" style={{ marginTop: '1.5rem' }}>
                {/* Take Exam */}
                <div className="flow-card-panel">
                  <span className="editorial-label">UPCOMING EXAMINATION</span>
                  <h4 className="sub-serif-title" style={{ fontSize: '1.2rem', marginTop: '0.4rem' }}>Spatial Geometry Final Assessment</h4>
                  <span className="text-xs text-muted block" style={{ marginBottom: '1rem' }}>24 September 2026 · 10:00 AM</span>
                  
                  {examStarted ? (
                    <span className="status-pill status-amber text-xs">Exam in Progress</span>
                  ) : (
                    <button className="btn-editorial-primary w-full text-xs" onClick={() => setExamStarted(true)}>
                      START EXAM →
                    </button>
                  )}
                </div>

                {/* View Grades */}
                <div className="flow-card-panel">
                  <span className="editorial-label">CURRENT GRADE PERFORMANCE</span>
                  <div className="flex-between align-items-end" style={{ marginTop: '0.8rem' }}>
                    <div>
                      <span className="text-xs text-muted block">Overall Score</span>
                      <strong className="font-serif text-indigo" style={{ fontSize: '3rem', lineHeight: '1' }}>A-</strong>
                    </div>
                    <span className="text-lg font-serif text-muted">86.0%</span>
                  </div>
                </div>

                {/* Exam Analysis */}
                <div className="flow-card-panel">
                  <span className="editorial-label">EXAM ANALYSIS</span>
                  <div className="flex-between text-xs" style={{ marginTop: '0.8rem', marginBottom: '0.4rem' }}>
                    <span>Midterm Benchmark:</span>
                    <strong>86% (Avg: 81%)</strong>
                  </div>
                  <div className="flex-between text-xs" style={{ marginBottom: '0.8rem' }}>
                    <span>Correct Questions:</span>
                    <strong className="text-emerald">43 / 50</strong>
                  </div>
                  <span className="text-xs text-muted block">Strongest topic: Spatial Geometry. Needs improvement: Inferential Statistics.</span>
                </div>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------------------------
             MODULE 4: AI ENGINE
             -------------------------------------------------------------------------- */}
          {(activeFlowTab === 'all' || activeFlowTab === 'ai-engine') && (
            <div className="academic-flow-module-block" style={{ marginBottom: '3.5rem' }}>
              <div className="module-title-header flex-between">
                <div className="flex-align gap-3">
                  <span className="mod-num-badge">04</span>
                  <div>
                    <span className="micro-eyebrow">INTELLIGENCE LAYER</span>
                    <h2 className="section-serif-heading" style={{ margin: 0, fontSize: '2rem' }}>AI Engine</h2>
                  </div>
                </div>
                <span className="badge-purple-light">ACTIVE INTELLIGENCE MONITOR</span>
              </div>

              <div className="grid-2" style={{ marginTop: '1.5rem', gap: '2rem' }}>
                {/* Performance Analysis & At-Risk Detection */}
                <div className="flow-card-panel">
                  <span className="editorial-label">PERFORMANCE ANALYSIS</span>
                  <p className="text-xs text-muted" style={{ margin: '0.4rem 0 1rem' }}>
                    Your academic performance is improving across coursework commitments.
                  </p>

                  <div className="pulse-metrics-stack">
                    <div className="pulse-metric-item">
                      <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                        <span>Assignment Performance</span>
                        <strong>89%</strong>
                      </div>
                      <div className="progress-bar-bg" style={{ height: '6px' }}>
                        <div className="progress-bar-fill" style={{ width: '89%', background: '#173c35' }} />
                      </div>
                    </div>

                    <div className="pulse-metric-item">
                      <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                        <span>Exam Performance</span>
                        <strong>82%</strong>
                      </div>
                      <div className="progress-bar-bg" style={{ height: '6px' }}>
                        <div className="progress-bar-fill" style={{ width: '82%', background: '#4f46e5' }} />
                      </div>
                    </div>

                    <div className="pulse-metric-item">
                      <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                        <span>Attendance Consistency</span>
                        <strong>94%</strong>
                      </div>
                      <div className="progress-bar-bg" style={{ height: '6px' }}>
                        <div className="progress-bar-fill" style={{ width: '94%', background: '#10b981' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #d9d5cc' }}>
                    <span className="editorial-label">STUDENT STATUS DETECTION</span>
                    <div className="flex-align gap-2" style={{ marginTop: '0.4rem' }}>
                      <span className="status-pill status-green text-xs">ON TRACK</span>
                      <span className="text-xs text-muted">No immediate academic concerns detected.</span>
                    </div>
                  </div>
                </div>

                {/* Weak Subject Identification & Study Recommendations */}
                <div className="flow-card-panel">
                  <span className="editorial-label">WEAK SUBJECT IDENTIFICATION</span>
                  <div className="subject-perf-list" style={{ margin: '0.8rem 0 1.2rem' }}>
                    <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                      <span>Spatial Thinking:</span>
                      <strong className="text-emerald">91%</strong>
                    </div>
                    <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                      <span>Academic Synthesis:</span>
                      <strong className="text-emerald">84%</strong>
                    </div>
                    <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                      <span>Inferential Statistics:</span>
                      <strong className="text-amber">68% (Needs Improvement)</strong>
                    </div>
                  </div>

                  <span className="editorial-label">RECOMMENDED STUDY PLAN</span>
                  <div className="study-plan-steps" style={{ margin: '0.6rem 0 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <span className="text-xs text-primary">01 Review probability fundamentals</span>
                    <span className="text-xs text-primary">02 Complete practice set 04</span>
                    <span className="text-xs text-primary">03 Watch regression analysis lesson</span>
                  </div>

                  <button className="btn-editorial-primary text-xs w-full">
                    START STUDY PLAN →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------------------------
             MODULE 5: REPORTS & INSIGHTS
             -------------------------------------------------------------------------- */}
          {(activeFlowTab === 'all' || activeFlowTab === 'reports') && (
            <div className="academic-flow-module-block">
              <div className="module-title-header flex-between">
                <div className="flex-align gap-3">
                  <span className="mod-num-badge">05</span>
                  <div>
                    <span className="micro-eyebrow">MODULE</span>
                    <h2 className="section-serif-heading" style={{ margin: 0, fontSize: '2rem' }}>Reports & Insights</h2>
                  </div>
                </div>
                <button className="btn-secondary-sm" onClick={() => window.print()}>
                  Download Audit PDF
                </button>
              </div>

              <div className="grid-2" style={{ marginTop: '1.5rem', gap: '2rem' }}>
                {/* Comparative Reports */}
                <div className="flow-card-panel">
                  <span className="editorial-label">COMPARATIVE TERM REPORT</span>
                  <div className="comparative-grid" style={{ margin: '1rem 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    <div className="tally-box">
                      <span className="text-xs text-muted block">Current Term</span>
                      <strong className="font-serif text-indigo" style={{ fontSize: '1.8rem' }}>86%</strong>
                    </div>
                    <div className="tally-box">
                      <span className="text-xs text-muted block">Previous Term</span>
                      <strong className="font-serif text-muted" style={{ fontSize: '1.8rem' }}>81%</strong>
                    </div>
                    <div className="tally-box">
                      <span className="text-xs text-muted block">Net Change</span>
                      <strong className="font-serif text-emerald" style={{ fontSize: '1.8rem' }}>+5%</strong>
                    </div>
                  </div>
                  <p className="text-xs text-muted">Coursework trajectories demonstrate positive term-over-term growth.</p>
                </div>

                {/* AI Recommendations */}
                <div className="flow-card-panel">
                  <span className="editorial-label">ACTIONABLE AI RECOMMENDATIONS</span>
                  
                  <div className="ai-rec-stack" style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div className="flex-between text-xs p-2" style={{ background: '#f7f5f0', borderRadius: '4px' }}>
                      <span>Improve Statistics Knowledge</span>
                      <strong className="text-emerald cursor-pointer">Complete Practice Set 04 →</strong>
                    </div>
                    <div className="flex-between text-xs p-2" style={{ background: '#f7f5f0', borderRadius: '4px' }}>
                      <span>Prepare for Final Assessment</span>
                      <strong className="text-emerald cursor-pointer">Begin Revision Plan →</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
