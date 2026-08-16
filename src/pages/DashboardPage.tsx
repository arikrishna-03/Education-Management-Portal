import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  Award, 
  CalendarCheck, 
  FileCheck, 
  Brain, 
  TrendingUp, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { User, MOCK_COURSES, MOCK_ASSIGNMENTS } from '../data/edutrData';

interface DashboardPageProps {
  currentUser: User;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ currentUser }) => {
  const isTeacher = currentUser.role === 'teacher';

  return (
    <div className="page-wrapper area-user-green">
      <div className="page-container section-padding">
        {/* Personalized Welcome Banner */}
        <div className="dashboard-welcome-banner flex-between">
          <div>
            <span className="section-eyebrow text-emerald flex-align gap-1">
              <Sparkles size={16} /> USER WORKSPACE SECTOR
            </span>
            <h1 className="page-title-lg">Good morning, {currentUser.name} 👋</h1>
            <p className="page-subtitle">
              Here is your real-time academic intelligence telemetry for <strong>Fall 2026 Term</strong>.
            </p>
          </div>
          <div className="header-actions">
            <Link to="/progress" className="btn-green-primary flex-align gap-2">
              <TrendingUp size={16} /> Inspect My Progress <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Role-Specific KPI Grid */}
        <div className="kpi-grid" style={{ margin: '1.5rem 0' }}>
          {!isTeacher ? (
            /* Student KPIs */
            <>
              <div className="kpi-card-green">
                <span className="kpi-label">Current Cumulative GPA</span>
                <h2 className="kpi-value text-emerald">3.92</h2>
                <span className="kpi-subtext">Top 2% of Cohort</span>
              </div>
              <div className="kpi-card-green">
                <span className="kpi-label">Attendance Consistency</span>
                <h2 className="kpi-value text-indigo">98.4%</h2>
                <span className="kpi-subtext">Required bar: 75.0%</span>
              </div>
              <div className="kpi-card-green">
                <span className="kpi-label">Enrolled Active Courses</span>
                <h2 className="kpi-value text-cyan">3 Courses</h2>
                <span className="kpi-subtext">10 Total Credits</span>
              </div>
              <div className="kpi-card-green">
                <span className="kpi-label">Pending Assignments</span>
                <h2 className="kpi-value text-amber">1 Pending</h2>
                <span className="kpi-subtext">Due Aug 25</span>
              </div>
            </>
          ) : (
            /* Teacher KPIs */
            <>
              <div className="kpi-card-green">
                <span className="kpi-label">Total Assigned Students</span>
                <h2 className="kpi-value text-indigo">1,820</h2>
                <span className="kpi-subtext">Across 4 Active Courses</span>
              </div>
              <div className="kpi-card-green">
                <span className="kpi-label">Active Teaching Modules</span>
                <h2 className="kpi-value text-cyan">4 Courses</h2>
                <span className="kpi-subtext">Fall 2026 Term</span>
              </div>
              <div className="kpi-card-green">
                <span className="kpi-label">Pending Submissions to Grade</span>
                <h2 className="kpi-value text-amber">2 Briefs</h2>
                <span className="kpi-subtext">42 student submissions</span>
              </div>
              <div className="kpi-card-green">
                <span className="kpi-label">Class Attendance Average</span>
                <h2 className="kpi-value text-emerald">91.2%</h2>
                <span className="kpi-subtext">+1.4% vs last week</span>
              </div>
            </>
          )}
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid-2">
          {/* Section 1: My Active Courses */}
          <div className="card-panel-green">
            <div className="card-header-flex">
              <h3 className="card-title text-emerald">My Active Courses</h3>
              <Link to="/courses" className="btn-ghost-sm">View Directory <ChevronRight size={14} /></Link>
            </div>
            <div className="dash-course-list">
              {MOCK_COURSES.slice(0, 3).map((c) => (
                <div key={c.id} className="dash-course-item flex-between">
                  <div className="flex-align gap-3">
                    <span className="course-code-pill">{c.code}</span>
                    <div>
                      <h4 className="dash-c-title">{c.name}</h4>
                      <span className="text-xs text-muted">{c.instructor} • {c.schedule}</span>
                    </div>
                  </div>
                  <Link to={`/courses/${c.id}`} className="btn-ghost-sm">Access</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Assignments & Deadlines */}
          <div className="card-panel-green">
            <div className="card-header-flex">
              <h3 className="card-title text-emerald">Coursework Assignments & Due Dates</h3>
              <Link to="/assignments" className="btn-ghost-sm">Studio <ChevronRight size={14} /></Link>
            </div>
            <div className="dash-asgn-list">
              {MOCK_ASSIGNMENTS.map((asgn) => (
                <div key={asgn.id} className="dash-asgn-item flex-between">
                  <div>
                    <span className="course-code-pill-xs">{asgn.courseCode}</span>
                    <h4 className="dash-a-title">{asgn.title}</h4>
                    <span className="text-xs text-muted"><Clock size={12} /> Due: {asgn.dueDate}</span>
                  </div>
                  <span className={`status-pill ${asgn.status === 'Graded' ? 'status-green' : 'status-amber'}`}>
                    {asgn.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: AI Recommendations & Navigation Bar */}
        <div className="card-panel-green" style={{ marginTop: '1.5rem' }}>
          <div className="flex-between">
            <div className="flex-align gap-2">
              <Brain size={20} className="text-emerald" />
              <div>
                <h3 className="card-title text-emerald">Personalized AI Academic Guidance</h3>
                <p className="card-subtitle">Recommended touchpoints based on your weekly study habits.</p>
              </div>
            </div>
            <Link to="/ai" className="btn-green-primary">
              Open AI Engine Center <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
