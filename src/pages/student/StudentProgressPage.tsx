import React from 'react';
import { TrendingUp, AlertTriangle, Sparkles, CheckCircle2, Lightbulb, Target, BarChart2 } from 'lucide-react';

export const StudentProgressPage: React.FC = () => {
  return (
    <div className="academia-page">
      {/* PAGE HEADER */}
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">ACADEMIC INTELLIGENCE ANALYTICS</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.5rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          MY PROGRESS
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Comprehensive evaluation of performance metrics, weak subjects, study improvement tips, and AI insights.
        </p>
      </div>

      {/* 4-CARD SPECIFICATION GRID MATCHING DIAGRAM */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
        
        {/* 1. PERFORMANCE OVERVIEW CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <BarChart2 size={18} className="text-gold" />
            <span className="editorial-label">PERFORMANCE OVERVIEW</span>
          </div>
          
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Overall Performance: <strong className="text-gold">86%</strong>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem', color: '#C7C4BC' }}>
                <span>Overall Performance Score</span>
                <strong className="text-gold">86%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                <div className="progress-bar-fill" style={{ width: '86%', height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem', color: '#C7C4BC' }}>
                <span>Attendance Rate</span>
                <strong className="text-emerald">92%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                <div className="progress-bar-fill" style={{ width: '92%', height: '100%', background: '#2FA36B', borderRadius: '4px' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem', color: '#C7C4BC' }}>
                <span>Assignments Score</span>
                <strong className="text-gold">89%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                <div className="progress-bar-fill" style={{ width: '89%', height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.3rem', color: '#C7C4BC' }}>
                <span>Exams Average</span>
                <strong className="text-indigo">82%</strong>
              </div>
              <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                <div className="progress-bar-fill" style={{ width: '82%', height: '100%', background: '#6E9FD1', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 2. WEAK SUBJECTS CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <Target size={18} className="text-crimson" />
            <span className="editorial-label">WEAK SUBJECTS</span>
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Identified Revision Areas
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: '#0B192A', padding: '1rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
              <div className="flex-between">
                <strong className="text-crimson font-serif" style={{ fontSize: '1.1rem' }}>1. Statistics & Regression</strong>
                <span className="text-xs text-crimson font-bold">68% Score</span>
              </div>
              <p className="text-xs text-muted" style={{ marginTop: '0.3rem' }}>
                Critical revision required in hypothesis testing and scatter matrices.
              </p>
            </div>

            <div style={{ background: '#0B192A', padding: '1rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
              <div className="flex-between">
                <strong className="text-gold font-serif" style={{ fontSize: '1.1rem' }}>2. Academic Writing</strong>
                <span className="text-xs text-gold font-bold">84% Score</span>
              </div>
              <p className="text-xs text-muted" style={{ marginTop: '0.3rem' }}>
                Refine thesis citation structure and chapter transition coherence.
              </p>
            </div>
          </div>
        </div>

        {/* 3. IMPROVEMENT TIPS CARD */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <Lightbulb size={18} className="text-gold" />
            <span className="editorial-label">IMPROVEMENT TIPS</span>
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Actionable Study Strategy
          </h3>

          <ul style={{ color: '#C7C4BC', fontSize: '0.9rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.2rem' }}>
            <li>
              <strong>Focus on Statistics this week:</strong> Complete <strong>Practice Set 04</strong> before beginning the next research module on Thursday.
            </li>
            <li>
              <strong>Review Assignment 02 Feedback:</strong> Address Dr. Leila Haddad's notes on pedestrian flow vector mapping.
            </li>
            <li>
              <strong>Peer Review Studio:</strong> Participate in Thursday's live architectural critique session to boost participation grade.
            </li>
          </ul>
        </div>

        {/* 4. AI INSIGHTS CARD */}
        <div className="flow-card-panel border-academic-green" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
          <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={18} className="text-gold" />
            <span className="editorial-label">AI INSIGHTS</span>
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Automated Growth Analysis
          </h3>

          <div style={{ background: '#0B192A', padding: '1.2rem', border: '1px solid #1B3045', borderRadius: '10px', marginBottom: '1rem' }}>
            <p style={{ color: '#C7C4BC', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Your overall assignment performance has improved by <strong className="text-gold">8%</strong> this month. Continued revision in statistical hypothesis testing will raise your GPA to <strong>A</strong>.
            </p>
          </div>

          <p className="text-xs text-muted">
            AI Engine recalculates metrics daily based on assignment grades, attendance logs, and quiz scores.
          </p>
        </div>

      </div>
    </div>
  );
};
