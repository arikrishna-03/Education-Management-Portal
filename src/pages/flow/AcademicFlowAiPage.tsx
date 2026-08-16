import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Brain, Sparkles, Target, FileText, CheckCircle2 } from 'lucide-react';

export const AcademicFlowAiPage: React.FC = () => {
  const { courseId } = useParams();
  const currentId = courseId || 'arc-118';

  return (
    <div className="academia-page">
      {/* 1. BREADCRUMB */}
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to={`/student/courses/${currentId}`} className="btn-link-editorial text-xs flex-align gap-2" style={{ color: '#F1BA4B' }}>
          <ArrowLeft size={14} /> Back to Academic Flow
        </Link>
      </div>

      {/* 2. HEADER */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="micro-eyebrow">ACADEMIC FLOW · MODULE 4</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          AI Recommendations Engine
        </h1>
        <p className="meta-text" style={{ fontSize: '1.05rem', color: '#C7C4BC' }}>
          Personalized study plans, structural feedback on draft papers, and automated learning suggestions.
        </p>
      </div>

      {/* 3. SIGNATURE GOLD BANNER */}
      <div 
        className="signature-gold-panel" 
        style={{ 
          background: 'linear-gradient(135deg, #F1BA4B 0%, #E0AC44 100%)', 
          color: '#05101E', 
          borderRadius: '16px', 
          padding: '3rem 2.5rem', 
          marginBottom: '2.5rem',
          boxShadow: '0 8px 30px rgba(241, 186, 75, 0.15)',
          position: 'relative'
        }}
      >
        <div className="flex-align gap-2" style={{ marginBottom: '0.4rem' }}>
          <Sparkles size={18} style={{ color: '#472D00' }} />
          <span className="micro-eyebrow" style={{ color: '#472D00', letterSpacing: '0.14em', margin: 0 }}>AI ACTION ITEM</span>
        </div>
        
        <h2 className="hero-title-dark" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#05101E', margin: '0.3rem 0 0.8rem', fontWeight: 600 }}>
          Weekly Focus: Statistical Hypothesis Testing
        </h2>
        
        <p className="hero-desc-dark" style={{ color: '#2A1A00', fontSize: '1.1rem', maxWidth: '720px', lineHeight: '1.6' }}>
          AI analysis identified a 14% performance delta between theoretical spatial vector questions and statistical regression calculations.
        </p>
      </div>

      {/* 4. 2-COLUMN CARDS GRID */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
        
        {/* RECOMMENDED STUDY PLAN */}
        <div 
          className="flow-card-panel" 
          style={{ 
            background: '#0D1B2D', 
            border: '1px solid #1B3045', 
            borderRadius: '16px', 
            padding: '2.2rem' 
          }}
        >
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B', fontSize: '0.7rem', letterSpacing: '0.1em' }}>RECOMMENDED STUDY PLAN</span>
            <Target size={20} className="text-gold" />
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Action Items for Term 01
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex-align gap-3" style={{ background: '#0B192A', padding: '1rem 1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
              <p style={{ color: '#C7C4BC', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                Complete <strong style={{ color: '#F5EFE3' }}>Practice Set 04 on Linear Regression</strong> by Thursday 18:00 GMT.
              </p>
            </div>

            <div className="flex-align gap-3" style={{ background: '#0B192A', padding: '1rem 1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
              <p style={{ color: '#C7C4BC', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                Review <strong style={{ color: '#F5EFE3' }}>Dr. Leila Haddad's feedback</strong> on Assignment 02 citations.
              </p>
            </div>

            <div className="flex-align gap-3" style={{ background: '#0B192A', padding: '1rem 1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
              <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
              <p style={{ color: '#C7C4BC', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                Schedule <strong style={{ color: '#F5EFE3' }}>1-on-1 review</strong> with Teaching Assistant for Vector Mathematics.
              </p>
            </div>
          </div>
        </div>

        {/* AI SYNTAX & WRITING EVALUATION */}
        <div 
          className="flow-card-panel" 
          style={{ 
            background: '#0D1B2D', 
            border: '1px solid #1B3045', 
            borderRadius: '16px', 
            padding: '2.2rem' 
          }}
        >
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span className="editorial-label" style={{ color: '#F1BA4B', fontSize: '0.7rem', letterSpacing: '0.1em' }}>AI SYNTAX & WRITING EVALUATION</span>
            <FileText size={20} className="text-emerald" />
          </div>

          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '0.4rem' }}>
            Writing Clarity Score
          </h3>
          <div className="flex-align gap-2" style={{ marginBottom: '1.4rem' }}>
            <span className="font-serif text-emerald" style={{ fontSize: '2.6rem', fontWeight: 700, lineHeight: 1 }}>91</span>
            <span className="text-muted text-xs">/ 100 ACCURACY</span>
          </div>

          <div style={{ background: '#0B192A', padding: '1.2rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
            <span className="micro-eyebrow text-gold" style={{ fontSize: '0.65rem', marginBottom: '0.3rem' }}>SYNTAX AUDIT</span>
            <p style={{ color: '#C7C4BC', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
              Your research thesis draft exhibits strong logical coherence. Recommended revision: <strong style={{ color: '#F5EFE3' }}>shorten multi-clause sentences in Chapter 03</strong>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
