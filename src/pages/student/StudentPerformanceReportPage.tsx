import React from 'react';
import { Download, Printer, TrendingUp, AlertTriangle, Sparkles, CheckCircle2, Award } from 'lucide-react';

export const StudentPerformanceReportPage: React.FC = () => {
  return (
    <div className="academia-page">
      {/* PAGE HEADER */}
      <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '2.5rem' }}>
        <div>
          <span className="micro-eyebrow">STUDENT PERFORMANCE ANALYTICS</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            My Performance Report & Summary
          </h1>
          <p className="meta-text" style={{ fontSize: '1rem', color: '#C7C4BC' }}>
            Comprehensive personal academic progress, risk analysis, weak areas, and AI study interventions.
          </p>
        </div>

        {/* 5. DOWNLOAD / PRINT REPORT CONTROLS */}
        <div className="flex-align gap-3">
          <button className="btn-editorial-primary-light text-xs flex-align gap-2" onClick={() => window.print()}>
            <Printer size={16} /> PRINT REPORT
          </button>
          <button className="btn-editorial-primary text-xs flex-align gap-2" onClick={() => window.print()}>
            <Download size={16} /> DOWNLOAD REPORT →
          </button>
        </div>
      </div>

      {/* 1. ACADEMIC PERFORMANCE SUMMARY */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="micro-eyebrow">MODULE 01</span>
        <h2 className="section-serif-heading" style={{ fontSize: '2rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
          Academic Performance Summary
        </h2>

        <div className="grid-4" style={{ gap: '1.5rem' }}>
          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>OVERALL GRADE AVERAGE</span>
            <strong className="font-serif text-gold" style={{ fontSize: '2.6rem', display: 'block', margin: '0.3rem 0' }}>86.4%</strong>
            <span className="text-xs text-emerald">★ Institutional GPA: 3.8 / 4.0</span>
          </div>

          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>STUDENT ATTENDANCE</span>
            <strong className="font-serif text-emerald" style={{ fontSize: '2.6rem', display: 'block', margin: '0.3rem 0' }}>92.1%</strong>
            <span className="text-xs text-muted">Compliant with 85% requirement</span>
          </div>

          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>ASSIGNMENT COMPLETION</span>
            <strong className="font-serif text-gold" style={{ fontSize: '2.6rem', display: 'block', margin: '0.3rem 0' }}>89.3%</strong>
            <span className="text-xs text-gold">8 / 10 Studio Papers Submitted</span>
          </div>

          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>EXAM PERFORMANCE</span>
            <strong className="font-serif text-primary" style={{ fontSize: '2.6rem', color: '#F5EFE3', display: 'block', margin: '0.3rem 0' }}>84.7%</strong>
            <span className="text-xs text-emerald">Mid-Term Rank: Top 15%</span>
          </div>
        </div>
      </div>

      {/* 2 & 3. WEAK AREAS & RISK ANALYSIS (2-COLUMN GRID) */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
        
        {/* 2. WEAK AREAS IDENTIFIED */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.2rem' }}>
          <span className="micro-eyebrow">MODULE 02</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Weak Areas Identified
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <div className="flex-between text-xs" style={{ marginBottom: '0.3rem', color: '#F5EFE3' }}>
                <span>Statistical Regression & Hypothesis Testing</span>
                <strong className="text-crimson">68% Score</strong>
              </div>
              <div style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                <div style={{ width: '68%', height: '100%', background: '#E05A5A', borderRadius: '4px' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs" style={{ marginBottom: '0.3rem', color: '#F5EFE3' }}>
                <span>Academic Citation & Literature Alignment</span>
                <strong className="text-gold">74% Score</strong>
              </div>
              <div style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                <div style={{ width: '74%', height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
              </div>
            </div>

            <div>
              <div className="flex-between text-xs" style={{ marginBottom: '0.3rem', color: '#F5EFE3' }}>
                <span>Vector Spatial Geometry Methods</span>
                <strong className="text-gold">77% Score</strong>
              </div>
              <div style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                <div style={{ width: '77%', height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 3. RISK ANALYSIS */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.2rem' }}>
          <span className="micro-eyebrow">MODULE 03</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Risk Analysis
          </h3>

          <div style={{ background: '#0B192A', padding: '1.4rem', borderRadius: '12px', border: '1px solid #1B3045', marginBottom: '1.2rem' }}>
            <div className="flex-align gap-3" style={{ marginBottom: '0.6rem' }}>
              <CheckCircle2 size={24} className="text-emerald" />
              <div>
                <strong className="text-emerald" style={{ fontSize: '1.1rem' }}>LOW ACADEMIC RISK STATUS</strong>
                <p className="text-xs text-muted">Academic trajectory is stable across all enrolled courses.</p>
              </div>
            </div>
          </div>

          <div className="grid-3" style={{ gap: '1rem' }}>
            <div style={{ background: '#0B192A', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <span className="text-xs text-muted block">High Risk</span>
              <strong className="font-serif text-emerald" style={{ fontSize: '1.6rem' }}>0</strong>
            </div>
            <div style={{ background: '#0B192A', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <span className="text-xs text-muted block">Moderate</span>
              <strong className="font-serif text-gold" style={{ fontSize: '1.6rem' }}>1</strong>
            </div>
            <div style={{ background: '#0B192A', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <span className="text-xs text-muted block">Attention</span>
              <strong className="font-serif text-gold" style={{ fontSize: '1.6rem' }}>2</strong>
            </div>
          </div>
        </div>

      </div>

      {/* 4. AI RECOMMENDATIONS */}
      <div className="signature-gold-panel" style={{ background: 'linear-gradient(135deg, #F1BA4B 0%, #E0AC44 100%)', color: '#05101E', borderRadius: '16px', padding: '2.5rem', marginBottom: '2.5rem' }}>
        <span className="micro-eyebrow" style={{ color: '#472D00' }}>MODULE 04 · AI RECOMMENDATIONS</span>
        <h2 className="hero-title-dark" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#05101E', margin: '0.3rem 0 0.8rem' }}>
          Personalized Learning Interventions
        </h2>
        <p className="hero-desc-dark" style={{ color: '#2A1A00', fontSize: '1.05rem', maxWidth: '720px', lineHeight: '1.6' }}>
          AI recommends prioritizing <strong>Statistical Linear Regression Practice Set 04</strong> prior to the mid-term assessment to raise weak area mastery from 68% to over 85%.
        </p>
      </div>

    </div>
  );
};
