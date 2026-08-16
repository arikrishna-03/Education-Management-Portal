import React, { useState } from 'react';
import { Download, Printer, ShieldCheck, AlertTriangle, Brain, Filter, CheckCircle2, Building } from 'lucide-react';

export const AdminPerformanceReportsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Course');
  const [selectedTerm, setSelectedTerm] = useState('Term 01 - 2026');

  const weakAreas = [
    { name: 'Statistics & Econometrics', score: 68, department: 'Mathematics & Data' },
    { name: 'Academic Writing & Literature Review', score: 74, department: 'Humanities' },
    { name: 'Research Methodology Synthesis', score: 77, department: 'Pedagogical Systems' }
  ];

  return (
    <div className="academia-page">
      {/* PAGE HEADER */}
      <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '2.5rem' }}>
        <div>
          <span className="micro-eyebrow" style={{ color: '#7C3AED' }}>INSTITUTIONAL GOVERNANCE & ANALYTICS</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Performance Reports & Summary
          </h1>
          <p className="meta-text" style={{ fontSize: '1rem', color: '#C7C4BC' }}>
            Institution-wide academic evaluation, department weak areas, risk monitoring, and executive AI insights.
          </p>
        </div>

        {/* 5. DOWNLOAD / PRINT REPORT CONTROLS */}
        <div className="flex-align gap-3">
          <button className="btn-editorial-primary-light text-xs flex-align gap-2" onClick={() => window.print()}>
            <Printer size={16} /> PRINT REPORT
          </button>
          <button className="btn-admin-purple text-xs flex-align gap-2" onClick={() => window.print()}>
            <Download size={16} /> DOWNLOAD REPORT →
          </button>
        </div>
      </div>

      {/* 1. ACADEMIC PERFORMANCE SUMMARY */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="micro-eyebrow" style={{ color: '#7C3AED' }}>MODULE 01</span>
        <h2 className="section-serif-heading" style={{ fontSize: '2rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
          Academic Performance Summary
        </h2>

        <div className="grid-4" style={{ gap: '1.5rem' }}>
          <div className="admin-card-purple" style={{ padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>INSTITUTION AVERAGE</span>
            <strong className="font-serif text-purple" style={{ fontSize: '2.6rem', color: '#F3E8FF', display: 'block', margin: '0.3rem 0' }}>86.4%</strong>
            <span className="text-xs text-emerald">↑ +2.1% Institution Benchmark</span>
          </div>

          <div className="admin-card-purple" style={{ padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>STUDENT ATTENDANCE</span>
            <strong className="font-serif text-purple" style={{ fontSize: '2.6rem', color: '#F3E8FF', display: 'block', margin: '0.3rem 0' }}>92.1%</strong>
            <span className="text-xs text-muted">Across 1,420 Enrolled Students</span>
          </div>

          <div className="admin-card-purple" style={{ padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>ASSIGNMENT COMPLETION</span>
            <strong className="font-serif text-purple" style={{ fontSize: '2.6rem', color: '#F3E8FF', display: 'block', margin: '0.3rem 0' }}>89.3%</strong>
            <span className="text-xs text-gold">4,120 Papers Submitted</span>
          </div>

          <div className="admin-card-purple" style={{ padding: '1.8rem' }}>
            <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>EXAM PERFORMANCE</span>
            <strong className="font-serif text-purple" style={{ fontSize: '2.6rem', color: '#F3E8FF', display: 'block', margin: '0.3rem 0' }}>84.7%</strong>
            <span className="text-xs text-emerald">89.2% Examination Pass Rate</span>
          </div>
        </div>
      </div>

      {/* 2 & 3. WEAK AREAS & RISK ANALYSIS (2-COLUMN GRID) */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
        
        {/* 2. INSTITUTIONAL WEAK AREAS (FILTER BY COURSE, CLASS, DEPARTMENT, ACADEMIC TERM) */}
        <div className="admin-card-purple" style={{ padding: '2.2rem' }}>
          <div className="flex-between flex-wrap gap-2" style={{ marginBottom: '1.2rem' }}>
            <div>
              <span className="micro-eyebrow" style={{ color: '#7C3AED' }}>MODULE 02</span>
              <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', margin: 0 }}>
                Weak Areas Identified
              </h3>
            </div>

            {/* FILTER BUTTONS */}
            <div className="flex-align gap-1 flex-wrap">
              {['Course', 'Class', 'Department', 'Academic Term'].map((flt) => (
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
                  <span>{area.name} ({area.department})</span>
                  <strong className={area.score < 70 ? 'text-crimson' : 'text-gold'}>{area.score}% Mastery</strong>
                </div>
                <div style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                  <div style={{ width: `${area.score}%`, height: '100%', background: area.score < 70 ? '#E05A5A' : '#7C3AED', borderRadius: '4px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ADMIN INSTITUTION RISK MONITORING */}
        <div className="admin-card-purple" style={{ padding: '2.2rem' }}>
          <span className="micro-eyebrow" style={{ color: '#7C3AED' }}>MODULE 03</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', marginBottom: '1.2rem' }}>
            Institutional Risk Analysis
          </h3>

          <div className="grid-3" style={{ gap: '1.2rem', marginBottom: '1.4rem' }}>
            <div style={{ background: '#0B192A', padding: '1.2rem 1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid #E05A5A' }}>
              <span className="text-xs text-crimson block font-bold">HIGH RISK</span>
              <strong className="font-serif text-crimson" style={{ fontSize: '2rem' }}>8</strong>
              <span className="text-xs text-muted block" style={{ fontSize: '0.65rem', marginTop: '0.2rem' }}>Students</span>
            </div>

            <div style={{ background: '#0B192A', padding: '1.2rem 1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid #1B3045' }}>
              <span className="text-xs text-gold block font-bold">MODERATE RISK</span>
              <strong className="font-serif text-gold" style={{ fontSize: '2rem' }}>15</strong>
              <span className="text-xs text-muted block" style={{ fontSize: '0.65rem', marginTop: '0.2rem' }}>Students</span>
            </div>

            <div style={{ background: '#0B192A', padding: '1.2rem 1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block font-bold">NEEDS ATTENTION</span>
              <strong className="font-serif text-primary" style={{ fontSize: '2rem', color: '#F5EFE3' }}>23</strong>
              <span className="text-xs text-muted block" style={{ fontSize: '0.65rem', marginTop: '0.2rem' }}>Students</span>
            </div>
          </div>

          <p className="text-xs text-muted" style={{ lineHeight: '1.5' }}>
            Institutional risk monitoring aggregates data across all 4 departments and active faculty terms.
          </p>
        </div>

      </div>

      {/* 4. ADMIN AI RECOMMENDATIONS */}
      <div 
        className="admin-card-purple" 
        style={{ 
          background: 'linear-gradient(135deg, #2A1647 0%, #0D1B2D 100%)', 
          border: '1px solid #7C3AED', 
          borderRadius: '16px', 
          padding: '2.5rem', 
          marginBottom: '2.5rem' 
        }}
      >
        <span className="micro-eyebrow" style={{ color: '#F3E8FF' }}>MODULE 04 · INSTITUTIONAL AI INSIGHT</span>
        <h2 className="hero-title-dark" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#F5EFE3', margin: '0.3rem 0 0.8rem' }}>
          Curriculum Intervention Recommendation
        </h2>
        <p className="hero-desc-dark" style={{ color: '#C7C4BC', fontSize: '1.05rem', maxWidth: '820px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Academic performance in <strong>Statistics</strong> has declined across <strong>3 classes</strong>. Recommended action: Review current curriculum, provide additional learning resources, and schedule targeted support sessions.
        </p>

        <button className="btn-admin-purple text-xs" style={{ padding: '0.85rem 1.6rem' }}>
          VIEW AI INSIGHT →
        </button>
      </div>

    </div>
  );
};
