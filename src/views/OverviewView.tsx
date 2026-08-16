import React from 'react';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  Sparkles, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ChevronRight,
  Brain,
  FileText
} from 'lucide-react';
import { KPIMetric, Course, Student, Assignment, AIInsight } from '../types';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface OverviewViewProps {
  kpis: KPIMetric[];
  courses: Course[];
  students: Student[];
  assignments: Assignment[];
  insights: AIInsight[];
  onNavigateTab: (tab: any) => void;
  onSelectStudent: (student: Student) => void;
  onSelectCourse: (course: Course) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  kpis,
  courses,
  students,
  assignments,
  insights,
  onNavigateTab,
  onSelectStudent,
  onSelectCourse
}) => {
  // Chart 1 Data: Academic Performance & Attendance Trend
  const performanceTrendData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4 (Current)', 'Week 5 (Est)', 'Week 6 (Est)'],
    datasets: [
      {
        label: 'Institutional Avg GPA',
        data: [3.42, 3.48, 3.52, 3.58, 3.60, 3.65],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.12)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Attendance Rate (%)',
        data: [89.5, 91.2, 88.4, 90.8, 92.0, 93.5],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        borderDash: [5, 5],
        tension: 0.3
      }
    ]
  };

  const performanceTrendOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' as const, labels: { color: '#64748b', font: { family: 'Inter', size: 12 } } },
      tooltip: { cornerRadius: 8 }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#64748b' } },
      y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b' } }
    }
  };

  // Chart 2 Data: Engagement Distribution by Department
  const deptEngagementData = {
    labels: ['Computer Sci', 'Software Eng', 'AI Ethics', 'Cybersecurity', 'Data Science'],
    datasets: [
      {
        label: 'Assignment Completion (%)',
        data: [91.5, 86.0, 95.0, 79.0, 89.5],
        backgroundColor: [
          'rgba(79, 70, 229, 0.8)',
          'rgba(14, 165, 233, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderRadius: 8
      }
    ]
  };

  // Chart 3 Data: On-Track Cohort Distribution
  const cohortDistributionData = {
    labels: ['On-Track (87.4%)', 'Needs Attention (8.6%)', 'At-Risk Alert (4.0%)'],
    datasets: [
      {
        data: [87.4, 8.6, 4.0],
        backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="view-page-container">
      {/* Executive Welcome Hero Header */}
      <div className="welcome-banner">
        <div className="welcome-banner-content">
          <span className="welcome-badge">
            <Sparkles size={14} /> AI Learning Intelligence Core • Fall 2026
          </span>
          <h1 className="welcome-title">Good morning, Amina.</h1>
          <p className="welcome-subtitle">
            The learning network is moving in a good direction. Overall cohort performance has improved <strong>+8.4%</strong> this term. 
            There are <strong>3 high-priority AI intervention touchpoints</strong> recommended for immediate administrative review.
          </p>
        </div>
        <div className="welcome-banner-actions">
          <button className="btn-primary" onClick={() => onNavigateTab('insights')}>
            <Brain size={18} /> Review AI Insights ({insights.filter(i => i.status === 'active').length})
          </button>
          <button className="btn-secondary" onClick={() => onNavigateTab('reports')}>
            <FileText size={18} /> Export Term Report
          </button>
        </div>
      </div>

      {/* Top 4 KPI Grid */}
      <div className="kpi-grid">
        {kpis.map((kpi) => {
          let icon = <Users className="text-indigo" size={24} />;
          if (kpi.id === 'live_courses') icon = <BookOpen className="text-cyan" size={24} />;
          if (kpi.id === 'on_track_rate') icon = <TrendingUp className="text-emerald" size={24} />;
          if (kpi.id === 'ai_alerts') icon = <AlertTriangle className="text-amber" size={24} />;

          return (
            <div key={kpi.id} className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon-box">{icon}</div>
                <span className={`kpi-change-pill ${kpi.isPositive ? 'positive' : 'negative'}`}>
                  {kpi.change}
                </span>
              </div>
              <div className="kpi-body">
                <span className="kpi-label">{kpi.label}</span>
                <h2 className="kpi-value">{kpi.value}</h2>
                <p className="kpi-subtext">{kpi.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Analytics & Snapshot Section */}
      <div className="grid-2-1">
        {/* Left Column: Academic Performance Trend Chart */}
        <div className="card-panel">
          <div className="card-header-flex">
            <div>
              <h3 className="card-title">Institutional Academic Performance & Attendance</h3>
              <p className="card-subtitle">Real-time GPA trajectory and student attendance rate across Fall 2026</p>
            </div>
            <button className="btn-ghost" onClick={() => onNavigateTab('reports')}>
              View Analytics <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="chart-container-lg">
            <Line data={performanceTrendData} options={performanceTrendOptions} />
          </div>
        </div>

        {/* Right Column: Cohort Distribution Doughnut */}
        <div className="card-panel">
          <div className="card-header-flex">
            <div>
              <h3 className="card-title">Student Cohort Status</h3>
              <p className="card-subtitle">Distribution across performance tiers</p>
            </div>
          </div>
          <div className="doughnut-chart-wrapper">
            <Doughnut 
              data={cohortDistributionData} 
              options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} 
            />
          </div>
          <div className="cohort-stats-summary">
            <div className="stat-pill text-emerald">
              <span>On-Track:</span> <strong>2,487</strong>
            </div>
            <div className="stat-pill text-amber">
              <span>Attention:</span> <strong>245</strong>
            </div>
            <div className="stat-pill text-crimson">
              <span>At-Risk:</span> <strong>114</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Department Engagement & Upcoming Assignments */}
      <div className="grid-2">
        {/* Department Completion Rates Bar Chart */}
        <div className="card-panel">
          <div className="card-header-flex">
            <div>
              <h3 className="card-title">Departmental Assignment Completion Rate</h3>
              <p className="card-subtitle">Average completion rate across active courses</p>
            </div>
            <button className="btn-ghost" onClick={() => onNavigateTab('courses')}>
              All Courses <ChevronRight size={16} />
            </button>
          </div>
          <div className="chart-container-md">
            <Bar 
              data={deptEngagementData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: { grid: { display: false } },
                  y: { min: 60, max: 100, ticks: { callback: (v) => `${v}%` } }
                }
              }} 
            />
          </div>
        </div>

        {/* Upcoming Deadlines & AI Recommendations */}
        <div className="card-panel">
          <div className="card-header-flex">
            <div>
              <h3 className="card-title">Upcoming Assessment Deadlines</h3>
              <p className="card-subtitle">Next 7 days across all programs</p>
            </div>
            <button className="btn-ghost" onClick={() => onNavigateTab('assignments')}>
              Studio <ChevronRight size={16} />
            </button>
          </div>

          <div className="deadline-list">
            {assignments.slice(0, 3).map((asgn) => (
              <div key={asgn.id} className="deadline-item">
                <div className="deadline-left">
                  <span className="course-badge-mini">{asgn.courseCode}</span>
                  <div>
                    <h4 className="deadline-title">{asgn.title}</h4>
                    <p className="deadline-meta flex-align gap-2">
                      <Clock size={12} /> Due: {asgn.dueDate} • {asgn.submissionsCount}/{asgn.totalStudents} Submitted ({asgn.completionPercentage}%)
                    </p>
                  </div>
                </div>
                <div className="deadline-status">
                  <span className={`status-pill ${asgn.completionPercentage > 85 ? 'status-green' : 'status-amber'}`}>
                    {asgn.completionPercentage}% Done
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Recommended Quick Action */}
          <div className="ai-recommendation-box">
            <div className="ai-rec-header flex-align gap-2">
              <Sparkles size={18} className="text-indigo" />
              <h4 className="ai-rec-title">AI Administrative Priority Recommendation</h4>
            </div>
            <p className="ai-rec-text">
              <strong>Liam Chen (STU-1082)</strong> has experienced a 14% attendance drop in <i>CY-410 Cryptography</i>. 
              Assigning a peer mentoring touchpoint this week can prevent risk escalation.
            </p>
            <button 
              className="btn-accent-sm"
              onClick={() => onNavigateTab('insights')}
            >
              Take Action in AI Center <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Active Courses Quick Roster Table */}
      <div className="card-panel">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Live Academic Courses Spotlight</h3>
            <p className="card-subtitle">Active courses with real-time student attendance and completion metrics</p>
          </div>
          <button className="btn-secondary" onClick={() => onNavigateTab('courses')}>
            View Course Directory ({courses.length})
          </button>
        </div>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Course Code & Title</th>
                <th>Instructor</th>
                <th>Department</th>
                <th>Enrollment</th>
                <th>Avg Grade</th>
                <th>Attendance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.slice(0, 4).map((course) => (
                <tr key={course.id}>
                  <td>
                    <div className="course-cell-box">
                      <span className="course-code-pill">{course.code}</span>
                      <div>
                        <h4 className="cell-main-title">{course.title}</h4>
                        <span className="cell-subtext">{course.semester}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="instructor-cell-box">
                      <img src={course.instructorAvatar} alt={course.instructor} className="avatar-xs" />
                      <span>{course.instructor}</span>
                    </div>
                  </td>
                  <td><span className="dept-tag">{course.department}</span></td>
                  <td>
                    <div className="progress-cell-box">
                      <span className="cell-main-title">{course.enrolledCount} / {course.maxCapacity}</span>
                      <div className="progress-bar-bg">
                        <div 
                          className="progress-bar-fill" 
                          style={{ width: `${(course.enrolledCount / course.maxCapacity) * 100}%` }} 
                        />
                      </div>
                    </div>
                  </td>
                  <td><strong className="text-indigo">{course.avgGrade.toFixed(2)}</strong></td>
                  <td>
                    <span className={`status-pill ${course.attendanceRate >= 90 ? 'status-green' : 'status-amber'}`}>
                      {course.attendanceRate}%
                    </span>
                  </td>
                  <td>
                    <button className="btn-ghost-sm" onClick={() => onSelectCourse(course)}>
                      Inspect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
