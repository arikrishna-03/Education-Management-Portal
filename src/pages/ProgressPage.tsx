import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Brain, 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  Award, 
  BarChart2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
import { User, MOCK_WEAK_SUBJECTS } from '../data/edutrData';

interface ProgressPageProps {
  currentUser: User;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({ currentUser }) => {
  // Chart Data
  const gpaTrendData = {
    labels: ['Term 1 (Fall 25)', 'Term 2 (Spring 26)', 'Midterm (Fall 26)', 'Current (Aug 26)'],
    datasets: [
      {
        label: 'Cumulative GPA Trajectory',
        data: [3.65, 3.78, 3.85, 3.92],
        borderColor: '#059669',
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  const subjectComparisonData = {
    labels: ['Computer Science', 'Ethics & AI', 'Cloud Engineering', 'Cybersecurity'],
    datasets: [
      {
        label: 'My Score (%)',
        data: [98, 95, 85, 70],
        backgroundColor: ['#10b981', '#4f46e5', '#f59e0b', '#ef4444'],
        borderRadius: 6
      }
    ]
  };

  return (
    <div className="page-wrapper area-user-green">
      <div className="page-container section-padding">
        {/* Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-emerald flex-align gap-1">
              <TrendingUp size={16} /> MY PROGRESS SECTOR
            </span>
            <h1 className="page-title-lg">My Academic Growth & Mastery Telemetry</h1>
            <p className="page-subtitle">Track long-term GPA trajectory, analyze subject proficiency gaps, and review AI improvement briefs.</p>
          </div>
          <div className="header-actions">
            <Link to="/ai" className="btn-green-primary flex-align gap-2">
              <Brain size={16} /> AI Growth Diagnostic <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Section 1: Performance Overview KPIs */}
        <div className="kpi-grid" style={{ margin: '1.5rem 0' }}>
          <div className="kpi-card-green">
            <span className="kpi-label">Cumulative GPA</span>
            <h2 className="kpi-value text-emerald">3.92 / 4.0</h2>
            <span className="kpi-subtext">Dean's High Honors List</span>
          </div>
          <div className="kpi-card-green">
            <span className="kpi-label">Average Quiz & Exam Score</span>
            <h2 className="kpi-value text-indigo">94.8%</h2>
            <span className="kpi-subtext">Cohort Avg: 84.2%</span>
          </div>
          <div className="kpi-card-green">
            <span className="kpi-label">Course Completion Rate</span>
            <h2 className="kpi-value text-cyan">88.0%</h2>
            <span className="kpi-subtext">On track for graduation</span>
          </div>
          <div className="kpi-card-green">
            <span className="kpi-label">Assignment Completion</span>
            <h2 className="kpi-value text-emerald">96.0%</h2>
            <span className="kpi-subtext">24/25 submitted on time</span>
          </div>
        </div>

        {/* Section 2: Progress Charts */}
        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          <div className="card-panel-green">
            <h3 className="card-title text-emerald" style={{ marginBottom: '1rem' }}>GPA Progression Over Time</h3>
            <div className="chart-container-md">
              <Line data={gpaTrendData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="card-panel-green">
            <h3 className="card-title text-emerald" style={{ marginBottom: '1rem' }}>Subject Mastery Comparison</h3>
            <div className="chart-container-md">
              <Bar data={subjectComparisonData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Section 3: Weak Subjects List & Improvement Tips */}
        <div className="grid-2">
          <div className="card-panel-green">
            <h3 className="card-title text-emerald flex-align gap-2" style={{ marginBottom: '1rem' }}>
              <Target size={20} className="text-amber" /> Weak Subjects Requiring Attention
            </h3>

            <div className="weak-subjects-list">
              <div className="weak-subj-card border-crimson">
                <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                  <h4 className="subj-title">Mathematics & Cryptography Group Laws</h4>
                  <span className="status-pill status-crimson">62% Needs Improvement</span>
                </div>
                <p className="subj-rec">Review scalar multiplication vectors and finite field arithmetic before the midterm lab.</p>
              </div>

              <div className="weak-subj-card border-amber">
                <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                  <h4 className="subj-title">Physics & Network Signal Propagation</h4>
                  <span className="status-pill status-amber">71% Moderate</span>
                </div>
                <p className="subj-rec">Practice packet delay equations and electromagnetic waveguide calculations.</p>
              </div>

              <div className="weak-subj-card border-green">
                <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                  <h4 className="subj-title">Computer Science & Neural Architectures</h4>
                  <span className="status-pill status-green">89% Excellent</span>
                </div>
                <p className="subj-rec">Mastery confirmed. Candidate for honors laboratory assistant role.</p>
              </div>
            </div>
          </div>

          {/* Actionable Improvement Tips & AI Insights */}
          <div className="card-panel-green">
            <h3 className="card-title text-emerald flex-align gap-2" style={{ marginBottom: '1rem' }}>
              <Sparkles size={20} className="text-indigo" /> AI Actionable Improvement Tips
            </h3>
            
            <div className="study-rec-list">
              <div className="rec-box-item">
                <h4 className="rec-title flex-align gap-2"><CheckCircle2 size={16} className="text-emerald" /> Increase Weekly Cryptography Practice</h4>
                <p className="rec-desc">Allocate 2 additional hours every Tuesday specifically to elliptic curve group law problems.</p>
              </div>
              <div className="rec-box-item">
                <h4 className="rec-title flex-align gap-2"><CheckCircle2 size={16} className="text-emerald" /> Schedule Peer Tutoring Session</h4>
                <p className="rec-desc">Book a 30-minute review session with TA Marcus Brody for CY-410 Cryptography lab support.</p>
              </div>
              <div className="rec-box-item">
                <h4 className="rec-title flex-align gap-2"><CheckCircle2 size={16} className="text-emerald" /> Maintain Current Momentum in AI</h4>
                <p className="rec-desc">Your 98% score in CS-401 qualifies you for early research lab access.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
