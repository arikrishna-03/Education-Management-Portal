import React, { useState } from 'react';
import { Download, Printer, Users, AlertTriangle, Brain, Filter, CheckCircle2 } from 'lucide-react';

export const TeacherReportsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Class');

  const weakAreas = [
    { name: 'Statistics & Regression', score: 68, count: 18 },
    { name: 'Academic Writing & Citations', score: 74, count: 12 },
    { name: 'Research Methodology', score: 77, count: 9 }
  ];

  return (
    <div className="academia-page">
      {/* PAGE HEADER */}
      <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '2.5rem' }}>
        <div>
          <span className="micro-eyebrow">FACULTY PERFORMANCE DESK</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Performance Reports & Summary
          </h1>
          <p className="meta-text" style={{ fontSize: '1rem', color: '#C7C4BC' }}>
            Faculty course performance metrics, risk analysis, weak areas, and AI class recommendations.
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
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>OVERALL CLASS PERFORMANCE</span>
            <strong className="font-serif text-gold" style={{ fontSize: '2.6rem', display: 'block', margin: '0.3rem 0' }}>86%</strong>
            <span className="text-xs text-emerald">↑ +3.2% vs previous term</span>
          </div>

          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>ATTENDANCE</span>
            <strong className="font-serif text-emerald" style={{ fontSize: '2.6rem', display: 'block', margin: '0.3rem 0' }}>92%</strong>
            <span className="text-xs text-muted">Compliant across 4 active classes</span>
          </div>

          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>ASSIGNMENT PERFORMANCE</span>
            <strong className="font-serif text-gold" style={{ fontSize: '2.6rem', display: 'block', margin: '0.3rem 0' }}>89%</strong>
            <span className="text-xs text-gold">142 Studio Papers Evaluated</span>
          </div>

          <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>EXAMINATION PERFORMANCE</span>
            <strong className="font-serif text-primary" style={{ fontSize: '2.6rem', color: '#F5EFE3', display: 'block', margin: '0.3rem 0' }}>84%</strong>
            <span className="text-xs text-emerald">88% Pass Rate</span>
          </div>
        </div>
      </div>

      {/* 2 & 3. WEAK AREAS & RISK ANALYSIS (2-COLUMN GRID) */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
        
        {/* 2. WEAK AREAS IDENTIFIED (WITH FILTERS BY STUDENT, CLASS, COURSE, SUBJECT, ASSIGNMENT, EXAM) */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.2rem' }}>
          <div className="flex-between flex-wrap gap-2" style={{ marginBottom: '1.2rem' }}>
            <div>
              <span className="micro-eyebrow">MODULE 02</span>
              <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', margin: 0 }}>
                Weak Areas Identified
              </h3>
            </div>

            {/* FILTER BUTTONS */}
            <div className="flex-align gap-1 flex-wrap">
              {['Class', 'Student', 'Course', 'Subject', 'Assignment', 'Exam'].map((flt) => (
                <button
                  key={flt}
                  className={`filter-text-btn ${selectedFilter === flt ? 'active' : ''}`}
                  style={{ padding: '0.3rem 0.6rem', fontSize: '0.65rem' }}
                  onClick={() => setSelectedFilter(flt)}
                >
                  {flt}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {weakAreas.map((area) => (
              <div key={area.name}>
                <div className="flex-between text-xs" style={{ marginBottom: '0.3rem', color: '#F5EFE3' }}>
                  <span>{area.name} ({area.count} Students)</span>
                  <strong className={area.score < 70 ? 'text-crimson' : 'text-gold'}>{area.score}% Mastery</strong>
                </div>
                <div style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                  <div style={{ width: `${area.score}%`, height: '100%', background: area.score < 70 ? '#E05A5A' : '#F1BA4B', borderRadius: '4px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. TEACHER RISK ANALYSIS */}
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.2rem' }}>
          <span className="micro-eyebrow">MODULE 03</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Risk Analysis
          </h3>

          <div className="grid-3" style={{ gap: '1.2rem', marginBottom: '1.4rem' }}>
            <div style={{ background: '#0B192A', padding: '1.2rem 1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Need Attention</span>
              <strong className="font-serif text-gold" style={{ fontSize: '2rem' }}>23</strong>
              <span className="text-xs text-muted block" style={{ fontSize: '0.65rem', marginTop: '0.2rem' }}>Students</span>
            </div>

            <div style={{ background: '#0B192A', padding: '1.2rem 1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid #E05A5A' }}>
              <span className="text-xs text-crimson block">High Risk</span>
              <strong className="font-serif text-crimson" style={{ fontSize: '2rem' }}>8</strong>
              <span className="text-xs text-muted block" style={{ fontSize: '0.65rem', marginTop: '0.2rem' }}>Students</span>
            </div>

            <div style={{ background: '#0B192A', padding: '1.2rem 1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Moderate Risk</span>
              <strong className="font-serif text-gold" style={{ fontSize: '2rem' }}>15</strong>
              <span className="text-xs text-muted block" style={{ fontSize: '0.65rem', marginTop: '0.2rem' }}>Students</span>
            </div>
          </div>

          <p className="text-xs text-muted" style={{ lineHeight: '1.5' }}>
            Risk metrics compiled automatically from student attendance, assignment scores, and mid-term exam performance.
          </p>
        </div>

      </div>

      {/* 4. TEACHER AI RECOMMENDATIONS */}
      <div 
        className="signature-gold-panel" 
        style={{ 
          background: 'linear-gradient(135deg, #F1BA4B 0%, #E0AC44 100%)', 
          color: '#05101E', 
          borderRadius: '16px', 
          padding: '2.5rem', 
          marginBottom: '2.5rem' 
        }}
      >
        <span className="micro-eyebrow" style={{ color: '#472D00' }}>MODULE 04 · AI RECOMMENDATIONS</span>
        <h2 className="hero-title-dark" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#05101E', margin: '0.3rem 0 0.8rem' }}>
          Recommended Academic Intervention
        </h2>
        <p className="hero-desc-dark" style={{ color: '#2A1A00', fontSize: '1.05rem', maxWidth: '780px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          <strong>12 students</strong> are currently struggling with <strong>Statistical Analysis</strong>. Recommended action: Create a targeted revision session covering probability distributions and regression fundamentals.
        </p>

        <button className="btn-dark-green text-xs" style={{ padding: '0.8rem 1.4rem' }}>
          VIEW AI RECOMMENDATION DETAILS →
        </button>
      </div>

    </div>
  );
};
