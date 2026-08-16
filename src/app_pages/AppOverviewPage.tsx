import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Sparkles, 
  Users, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  FileCheck,
  ChevronRight,
  Lightbulb
} from 'lucide-react';
import { MOCK_APP_ASSIGNMENTS } from '../data/academicHubData';

export const AppOverviewPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="hub-page-container">
      {/* Date & Main Header */}
      <div className="overview-header-sec">
        <span className="hub-date-label">Monday · 19 August 2026</span>
        <h1 className="hub-page-title">Good morning, Amina.</h1>
        <span className="hub-intel-eyebrow text-indigo">Academic intelligence brief</span>
      </div>

      {/* Prominent Intelligence Card */}
      <div className="hub-intelligence-card" style={{ margin: '1.2rem 0 2rem' }}>
        <div className="flex-align gap-3" style={{ marginBottom: '0.8rem' }}>
          <div className="intel-sparkle-box flex-center">
            <Sparkles size={22} className="text-purple" />
          </div>
          <span className="intel-card-badge">COHORT INTELLIGENCE SIGNAL</span>
        </div>

        <h2 className="intel-card-heading">
          The learning network is moving in a good direction.
        </h2>
        <p className="intel-card-desc">
          Your cohort has improved 8.4% this term. Three students may benefit from an earlier mentoring touchpoint.
        </p>

        <button 
          className="btn-hub-primary"
          onClick={() => navigate('/app/insights')}
        >
          Review AI insights <ArrowRight size={16} />
        </button>
      </div>

      {/* OVERVIEW KPI SECTION */}
      <div className="kpi-cards-grid" style={{ marginBottom: '2.5rem' }}>
        {/* Card 1 */}
        <div className="hub-kpi-card">
          <span className="kpi-card-title">Active students</span>
          <h2 className="kpi-card-number">2,846</h2>
          <span className="kpi-card-trend text-emerald">+6.2% this term</span>
        </div>

        {/* Card 2 */}
        <div className="hub-kpi-card">
          <span className="kpi-card-title">Live courses</span>
          <h2 className="kpi-card-number">128</h2>
          <span className="kpi-card-subtext text-muted">14 need review</span>
        </div>

        {/* Card 3 */}
        <div className="hub-kpi-card">
          <span className="kpi-card-title">On-track rate</span>
          <h2 className="kpi-card-number">87.4%</h2>
          <span className="kpi-card-trend text-emerald">+4.1% vs last term</span>
        </div>

        {/* Card 4 */}
        <div className="hub-kpi-card">
          <span className="kpi-card-title">AI alerts</span>
          <h2 className="kpi-card-number">18</h2>
          <span className="kpi-card-subtext text-amber">5 high priority</span>
        </div>
      </div>

      {/* MAIN ACADEMIC FLOW & PULSE GRID */}
      <div className="grid-2-1" style={{ marginBottom: '2.5rem' }}>
        {/* LEFT: ACADEMIC FLOW - UPCOMING DEADLINES */}
        <div className="hub-sec-column">
          <span className="section-category-label">Academic flow</span>
          <div className="hub-content-panel" style={{ marginTop: '0.6rem' }}>
            <div className="panel-header-flex">
              <div>
                <h3 className="panel-title">Upcoming deadlines</h3>
                <span className="text-xs text-muted">Cross-course assessment commitments</span>
              </div>
              <Link to="/app/assignments" className="btn-link-sm">
                View all →
              </Link>
            </div>

            <div className="deadlines-list-stack" style={{ marginTop: '1rem' }}>
              {MOCK_APP_ASSIGNMENTS.map((asgn) => (
                <div key={asgn.id} className="deadline-item-row flex-between">
                  <div className="flex-align gap-3">
                    <span className="course-code-pill-sm">{asgn.courseCode}</span>
                    <div>
                      <h4 className="deadline-title">{asgn.title}</h4>
                      <span className="text-xs text-muted">{asgn.courseName} • Due: <strong>{asgn.dueDate} ({asgn.dueTime})</strong></span>
                    </div>
                  </div>

                  <div className="flex-align gap-3">
                    <span className={`status-pill ${
                      asgn.priority === 'High' ? 'status-amber' : 'status-indigo'
                    }`}>
                      {asgn.priority} Priority
                    </span>
                    <button className="btn-ghost-sm" onClick={() => navigate('/app/assignments')}>
                      Inspect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: INSTITUTION PULSE & RECENT ACTIVITY */}
        <div className="hub-sec-column">
          <span className="section-category-label">Institution pulse</span>
          <div className="hub-content-panel" style={{ marginTop: '0.6rem', marginBottom: '1.5rem' }}>
            <h3 className="panel-title">Performance snapshot</h3>
            
            <div className="pulse-metrics-stack" style={{ margin: '1rem 0' }}>
              <div className="pulse-metric-item">
                <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                  <span>Attendance consistency</span>
                  <strong className="text-indigo">91%</strong>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '91%', background: '#4f46e5' }} />
                </div>
              </div>

              <div className="pulse-metric-item">
                <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                  <span>Assignment completion</span>
                  <strong className="text-emerald">84%</strong>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '84%', background: '#10b981' }} />
                </div>
              </div>

              <div className="pulse-metric-item">
                <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem' }}>
                  <span>Student engagement</span>
                  <strong className="text-cyan">76%</strong>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '76%', background: '#0891b2' }} />
                </div>
              </div>
            </div>

            {/* AI Recommendation Widget */}
            <div className="ai-recommendation-box flex-align gap-3">
              <Lightbulb size={20} className="text-amber flex-shrink-0" />
              <div>
                <strong className="text-xs font-bold text-amber block">AI RECOMMENDATION</strong>
                <p className="text-xs text-primary" style={{ marginTop: '0.2rem' }}>
                  “Open a focused study studio for first-year research methods.”
                </p>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="hub-content-panel">
            <h3 className="panel-title">Recent activity</h3>
            <span className="text-xs text-muted block" style={{ marginBottom: '1rem' }}>Across the hub</span>

            <div className="activity-timeline-stack">
              <div className="activity-item-row flex-align gap-3">
                <span className="act-dot bg-emerald" />
                <div>
                  <strong className="act-title">Grade published</strong>
                  <p className="act-sub">EDU 204 · Reflection 02</p>
                  <span className="act-time">12 min ago</span>
                </div>
              </div>

              <div className="activity-item-row flex-align gap-3">
                <span className="act-dot bg-indigo" />
                <div>
                  <strong className="act-title">New course announcement</strong>
                  <p className="act-sub">ARC 118 · Prof. Leila Haddad</p>
                  <span className="act-time">1 hr ago</span>
                </div>
              </div>

              <div className="activity-item-row flex-align gap-3">
                <span className="act-dot bg-purple" />
                <div>
                  <strong className="act-title">Mentoring session confirmed</strong>
                  <p className="act-sub">Thursday · Learning commons</p>
                  <span className="act-time">3 hrs ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW FOOTER CTA */}
      <div className="overview-footer-cta-card">
        <div className="flex-between">
          <div>
            <h2 className="cta-heading">A clearer view of what students need next.</h2>
            <p className="cta-desc">
              Explore cohort-level signals, emerging learning gaps, and the interventions most likely to help.
            </p>
          </div>
          <button 
            className="btn-hub-primary" 
            onClick={() => navigate('/app/insights')}
          >
            Open insights center <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
