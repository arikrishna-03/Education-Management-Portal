import React, { useState } from 'react';
import { Brain, Sparkles, AlertTriangle, CheckCircle2, Target, BookOpen, Lightbulb, TrendingUp, Calendar } from 'lucide-react';

export const TeacherInsightsPage: React.FC = () => {
  const [scheduled, setScheduled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleScheduleSeminar = () => {
    setScheduled(true);
    setTimeout(() => setScheduled(false), 4000);
  };

  const handleRefreshAnalysis = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  return (
    <div className="academia-page">
      {/* 1. PAGE HEADER */}
      <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '2.5rem' }}>
        <div>
          <span className="micro-eyebrow">FACULTY AI ENGINE & INSIGHTS</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Instructional AI Insights
          </h1>
          <p className="meta-text" style={{ fontSize: '1rem', color: '#C7C4BC' }}>
            AI-driven recommendations for syllabus optimization, weak spot detection, and student engagement strategies.
          </p>
        </div>

        <button 
          className="btn-editorial-primary text-xs flex-align gap-2"
          onClick={handleRefreshAnalysis}
        >
          <Sparkles size={16} /> {refreshing ? 'ANALYZING COHORT DATA...' : 'GENERATE FRESH AI ANALYSIS →'}
        </button>
      </div>

      {scheduled && (
        <div className="editorial-success-box" style={{ background: '#0B192A', border: '1px solid #2FA36B', padding: '1.2rem 1.6rem', borderRadius: '12px', marginBottom: '2rem' }}>
          <div className="flex-align gap-3">
            <CheckCircle2 size={24} className="text-emerald" />
            <div>
              <strong className="text-emerald text-sm block">REVIEW SEMINAR SCHEDULED SUCCESSFULLY</strong>
              <span className="text-xs text-muted">45-minute Regression Analysis Review Seminar added to ARC 118 calendar for Thursday 16:00 GMT.</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. SIGNATURE GOLD FACULTY ACTION BANNER */}
      <div 
        className="signature-gold-panel" 
        style={{ 
          background: 'linear-gradient(135deg, #F1BA4B 0%, #E0AC44 100%)', 
          color: '#05101E', 
          borderRadius: '16px', 
          padding: '3rem 2.5rem', 
          marginBottom: '2.5rem',
          boxShadow: '0 8px 30px rgba(241, 186, 75, 0.15)'
        }}
      >
        <div className="flex-align gap-2" style={{ marginBottom: '0.4rem' }}>
          <Sparkles size={18} style={{ color: '#472D00' }} />
          <span className="micro-eyebrow" style={{ color: '#472D00', letterSpacing: '0.14em', margin: 0 }}>FACULTY AI ACTION ITEM</span>
        </div>
        
        <h2 className="hero-title-dark" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#05101E', margin: '0.3rem 0 0.8rem', fontWeight: 600 }}>
          Schedule Review Seminar on Regression Analysis
        </h2>
        
        <p className="hero-desc-dark" style={{ color: '#2A1A00', fontSize: '1.1rem', maxWidth: '780px', lineHeight: '1.6', marginBottom: '1.8rem' }}>
          <strong>42% of students in ARC 118</strong> struggled with statistical regression calculations in Assignment 02. Scheduling a 45-minute review session before the mid-term is recommended.
        </p>

        <button 
          className="btn-dark-green text-xs flex-align gap-2"
          style={{ padding: '0.9rem 1.6rem' }}
          onClick={handleScheduleSeminar}
        >
          <Calendar size={16} /> SCHEDULE REVIEW SEMINAR (45 MINS) →
        </button>
      </div>

      {/* 3. 2-COLUMN AI INTELLIGENCE CARDS */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
        
        {/* CARD 1: WEAK SPOT DETECTION & DELTA MASTERY */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.2rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>COHORT WEAK SPOT DETECTION</span>
            <AlertTriangle size={20} className="text-amber" />
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Concepts Requiring Instructional Reinforcement
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ background: '#0B192A', padding: '1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                <strong style={{ color: '#F5EFE3' }}>Statistical Linear Regression</strong>
                <span className="text-crimson font-bold">42% Struggling</span>
              </div>
              <p className="text-xs text-muted" style={{ lineHeight: '1.5', margin: 0 }}>
                Delta identified in theoretical vs calculation exam questions. Re-examine Assignment 02 solution key.
              </p>
            </div>

            <div style={{ background: '#0B192A', padding: '1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                <strong style={{ color: '#F5EFE3' }}>Academic Citation & APA Alignment</strong>
                <span className="text-gold font-bold">28% Struggling</span>
              </div>
              <p className="text-xs text-muted" style={{ lineHeight: '1.5', margin: 0 }}>
                Inconsistent primary source attribution in Chapter 02 draft papers.
              </p>
            </div>

            <div style={{ background: '#0B192A', padding: '1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                <strong style={{ color: '#F5EFE3' }}>Spatial Geometry Vector Blueprints</strong>
                <span className="text-emerald font-bold">18% Struggling</span>
              </div>
              <p className="text-xs text-muted" style={{ lineHeight: '1.5', margin: 0 }}>
                High overall mastery with minor exceptions in high-density circulation modeling.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2: SYLLABUS OPTIMIZATION & ENGAGEMENT STRATEGIES */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.2rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B' }}>SYLLABUS OPTIMIZATION</span>
            <Lightbulb size={20} className="text-gold" />
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            AI Engagement & Curriculum Strategies
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ background: '#0B192A', padding: '1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <span className="micro-eyebrow text-gold" style={{ fontSize: '0.65rem', marginBottom: '0.2rem' }}>STRATEGY 01</span>
              <h4 style={{ color: '#F5EFE3', fontSize: '1.05rem', margin: '0.2rem 0 0.4rem' }}>Incorporate Interactive Vector Seminars</h4>
              <p className="text-xs text-muted" style={{ lineHeight: '1.5', margin: 0 }}>
                Adding 15-minute live vector simulation exercises increases student engagement by an estimated 24%.
              </p>
            </div>

            <div style={{ background: '#0B192A', padding: '1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <span className="micro-eyebrow text-gold" style={{ fontSize: '0.65rem', marginBottom: '0.2rem' }}>STRATEGY 02</span>
              <h4 style={{ color: '#F5EFE3', fontSize: '1.05rem', margin: '0.2rem 0 0.4rem' }}>Automated Pre-Exam Quizzes</h4>
              <p className="text-xs text-muted" style={{ lineHeight: '1.5', margin: 0 }}>
                Deploying short 5-question diagnostic quizzes before week 8 reduces mid-term exam failure rates.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
