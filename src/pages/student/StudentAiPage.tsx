import React from 'react';
import { Sparkles, Brain, CheckCircle2 } from 'lucide-react';

export const StudentAiPage: React.FC = () => {
  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">INTELLIGENT RECOMMENDATIONS</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          AI Recommendations Engine
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Personalized study plans, structural feedback on draft papers, and automated learning suggestions.
        </p>
      </div>

      <div className="signature-gold-panel" style={{ marginBottom: '2rem' }}>
        <div className="circle-decor-1" />
        <div className="circle-decor-2" />
        <span className="micro-eyebrow" style={{ color: '#472D00' }}>AI ACTION ITEM</span>
        <h2 className="hero-title-dark">Weekly Focus: Statistical Hypothesis Testing</h2>
        <p className="hero-desc-dark">
          AI analysis identified a 14% performance delta between theoretical spatial vector questions and statistical regression calculations.
        </p>
      </div>

      <div className="grid-2">
        <div className="flow-card-panel">
          <span className="editorial-label">RECOMMENDED STUDY PLAN</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Action Items for Term 01
          </h3>
          <ul style={{ color: '#C7C4BC', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.2rem' }}>
            <li>Complete Practice Set 04 on Linear Regression by Thursday 18:00 GMT.</li>
            <li>Review Dr. Leila Haddad's feedback on Assignment 02 citations.</li>
            <li>Schedule 1-on-1 review with Teaching Assistant for Vector Mathematics.</li>
          </ul>
        </div>

        <div className="flow-card-panel border-academic-green">
          <span className="editorial-label">AI SYNTAX & WRITING EVALUATION</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Writing Clarity: 91/100
          </h3>
          <p style={{ color: '#C7C4BC', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Your research thesis draft exhibits strong logical coherence. Recommended revision: shorten multi-clause sentences in Chapter 03.
          </p>
        </div>
      </div>
    </div>
  );
};
