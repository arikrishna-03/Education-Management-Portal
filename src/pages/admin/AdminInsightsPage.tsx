import React from 'react';
import { Brain, AlertTriangle, TrendingUp, Users, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdminInsightsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="academia-page">
      {/* PAGE HEADER */}
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>MODULE 7 · ADMINISTRATIVE INTELLIGENCE</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          AI Insights & Monitoring
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          AI-powered administrative intelligence: real-time performance trends, at-risk student flags, weak subject alerts, and institutional monitoring.
        </p>
      </div>

      {/* ALERTS SUMMARY CARD */}
      <div className="flow-card-panel admin-card-purple" style={{ marginBottom: '2rem', padding: '2rem' }}>
        <div className="flex-between flex-wrap gap-4">
          <div className="flex-align gap-3">
            <Brain size={28} style={{ color: '#A78BFA' }} />
            <div>
              <span className="editorial-label" style={{ color: '#A78BFA' }}>AI MONITORING ENGINE</span>
              <h2 className="sub-serif-title" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: 0 }}>
                18 AI System Alerts <span className="text-xs text-crimson font-bold" style={{ marginLeft: '0.8rem' }}>(5 High Priority)</span>
              </h2>
            </div>
          </div>

          <span className="text-xs text-muted" style={{ color: '#F3E8FF' }}>Last system scan: <strong>Real-time</strong></span>
        </div>
      </div>

      {/* 2 PRIMARY SPECIFICATION SECTIONS MATCHING SPEC (AT-RISK & PERFORMANCE TREND) */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
        
        {/* AT-RISK STUDENTS CARD */}
        <div className="flow-card-panel admin-card-purple" style={{ padding: '2rem' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <AlertTriangle size={20} className="text-crimson" />
            <span className="editorial-label" style={{ color: '#A78BFA' }}>AT-RISK STUDENTS</span>
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.5rem', color: '#F5EFE3', marginBottom: '0.8rem' }}>
            23 students may require academic intervention.
          </h3>

          <p style={{ color: '#F3E8FF', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            AI pattern detection flagged attendance drops below 70% and multi-assignment delays in <strong>Julian Vance</strong> and 22 other enrolled students.
          </p>

          <button 
            className="btn-admin-purple w-full text-xs"
            onClick={() => navigate('/admin/students')}
          >
            VIEW STUDENTS →
          </button>
        </div>

        {/* PERFORMANCE TREND CARD */}
        <div className="flow-card-panel admin-card-purple" style={{ padding: '2rem' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <TrendingUp size={20} className="text-emerald" />
            <span className="editorial-label" style={{ color: '#A78BFA' }}>PERFORMANCE TREND</span>
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.5rem', color: '#F5EFE3', marginBottom: '0.8rem' }}>
            Overall academic performance has improved 8.4% this term.
          </h3>

          <p style={{ color: '#F3E8FF', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Curriculum revision in spatial vector reasoning resulted in a significant upward grade trajectory across ARC 118 studio modules.
          </p>

          <button 
            className="btn-editorial-primary w-full text-xs"
            onClick={() => navigate('/admin/reports')}
          >
            VIEW AI ANALYSIS →
          </button>
        </div>

      </div>

      {/* WEAK SUBJECTS & INSTITUTIONAL ALERTS GRID */}
      <div className="grid-2" style={{ gap: '2rem' }}>
        
        {/* WEAK SUBJECT IDENTIFICATION */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <Target size={18} className="text-gold" />
            <span className="editorial-label" style={{ color: '#A78BFA' }}>WEAK SUBJECT IDENTIFICATION</span>
          </div>

          <h4 className="sub-serif-title" style={{ fontSize: '1.3rem', color: '#F5EFE3', marginBottom: '0.8rem' }}>
            Curriculum Delta Analysis
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ background: '#0B192A', padding: '0.9rem 1.2rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
              <strong className="text-xs text-crimson block">Statistical Hypothesis Testing (68% Avg)</strong>
              <p className="text-xs text-muted" style={{ marginTop: '0.2rem' }}>42% of students struggling with regression calculations.</p>
            </div>

            <div style={{ background: '#0B192A', padding: '0.9rem 1.2rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
              <strong className="text-xs text-gold block">Thesis Citation Structure (84% Avg)</strong>
              <p className="text-xs text-muted" style={{ marginTop: '0.2rem' }}>Formatting errors flagged in 18 research papers.</p>
            </div>
          </div>
        </div>

        {/* INSTITUTIONAL AI RECOMMENDATIONS */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <Brain size={18} className="text-emerald" />
            <span className="editorial-label" style={{ color: '#A78BFA' }}>AI ACTIONABLE RECOMMENDATIONS</span>
          </div>

          <h4 className="sub-serif-title" style={{ fontSize: '1.3rem', color: '#F5EFE3', marginBottom: '0.8rem' }}>
            Recommended Interventions
          </h4>

          <ul style={{ color: '#C7C4BC', fontSize: '0.88rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1.2rem' }}>
            <li>Schedule 45-minute faculty review seminar on regression analysis in ARC 118.</li>
            <li>Send automated compliance reminders to 23 at-risk students before mid-term exams.</li>
            <li>Publish extra revision problem set for computational neural backpropagation in CS 312.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
