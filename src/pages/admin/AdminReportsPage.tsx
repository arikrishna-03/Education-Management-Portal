import React, { useState } from 'react';
import { BarChart3, Download, Printer, Filter, Calendar } from 'lucide-react';

export const AdminReportsPage: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState('Term 01 (2026)');
  const [selectedCourse, setSelectedCourse] = useState('All');

  const handleDownload = () => {
    alert('Generating PDF Academic Institutional Report for download...');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="academia-page">
      {/* PAGE HEADER */}
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>MODULE 6 · INSTITUTIONAL ANALYTICS</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Reports & Analytics
          </h1>
          <p className="meta-text" style={{ color: '#C7C4BC' }}>
            Comprehensive institutional performance analysis, attendance rates, course metrics, and exportable reports.
          </p>
        </div>

        <div className="flex-align gap-3">
          <button 
            className="btn-editorial-primary text-xs flex-align gap-2"
            onClick={handleDownload}
          >
            <Download size={16} /> DOWNLOAD REPORT →
          </button>
          <button 
            className="btn-secondary-sm text-xs flex-align gap-2"
            style={{ padding: '0.7rem 1.2rem' }}
            onClick={handlePrint}
          >
            <Printer size={16} /> PRINT REPORT →
          </button>
        </div>
      </div>

      {/* FILTER CONTROLS BAR */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', marginBottom: '2rem', padding: '1.2rem 1.8rem' }}>
        <div className="flex-between flex-wrap gap-4">
          <div className="flex-align gap-3 flex-wrap">
            <span className="text-xs text-muted font-bold">REPORT FILTERS:</span>
            <select 
              className="editorial-select-thin"
              style={{ width: '200px', padding: '0.45rem 0.8rem', fontSize: '0.85rem' }}
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
            >
              <option value="Term 01 (2026)">Term 01 (2026)</option>
              <option value="Term 02 (2026)">Term 02 (2026)</option>
              <option value="Full Academic Year">Full Academic Year</option>
            </select>

            <select 
              className="editorial-select-thin"
              style={{ width: '220px', padding: '0.45rem 0.8rem', fontSize: '0.85rem' }}
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="All">All Courses & Departments</option>
              <option value="ARC 118">ARC 118 (Spatial Thinking)</option>
              <option value="EDU 204">EDU 204 (Learning Design)</option>
              <option value="CS 312">CS 312 (Applied AI)</option>
            </select>
          </div>

          <span className="text-xs text-muted">Showing data for: <strong>{selectedTerm}</strong></span>
        </div>
      </div>

      {/* PRIMARY PERFORMANCE ANALYTICS SPECIFICATION CARD */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', marginBottom: '2rem', padding: '2.5rem' }}>
        <span className="editorial-label" style={{ color: '#A78BFA' }}>INSTITUTIONAL METRICS SUMMARY</span>
        <h2 className="sub-serif-title" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: '0.4rem 0 1.8rem' }}>
          Key Performance Indicators
        </h2>

        {/* 4 PROGRESS BARS MATCHING USER SPECIFICATION EXACTLY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          
          {/* 1. Student Performance */}
          <div>
            <div className="flex-between text-sm font-bold" style={{ marginBottom: '0.4rem', color: '#F5EFE3' }}>
              <span>Student Performance</span>
              <strong className="text-gold" style={{ fontSize: '1.2rem' }}>86%</strong>
            </div>
            <div className="progress-bar-bg" style={{ height: '10px', background: '#1B3045', borderRadius: '6px' }}>
              <div style={{ width: '86%', height: '100%', background: '#F1BA4B', borderRadius: '6px' }} />
            </div>
          </div>

          {/* 2. Attendance */}
          <div>
            <div className="flex-between text-sm font-bold" style={{ marginBottom: '0.4rem', color: '#F5EFE3' }}>
              <span>Attendance Compliance</span>
              <strong className="text-emerald" style={{ fontSize: '1.2rem' }}>92%</strong>
            </div>
            <div className="progress-bar-bg" style={{ height: '10px', background: '#1B3045', borderRadius: '6px' }}>
              <div style={{ width: '92%', height: '100%', background: '#2FA36B', borderRadius: '6px' }} />
            </div>
          </div>

          {/* 3. Assignment Completion */}
          <div>
            <div className="flex-between text-sm font-bold" style={{ marginBottom: '0.4rem', color: '#F5EFE3' }}>
              <span>Assignment Completion Rate</span>
              <strong className="text-gold" style={{ fontSize: '1.2rem' }}>89%</strong>
            </div>
            <div className="progress-bar-bg" style={{ height: '10px', background: '#1B3045', borderRadius: '6px' }}>
              <div style={{ width: '89%', height: '100%', background: '#F1BA4B', borderRadius: '6px' }} />
            </div>
          </div>

          {/* 4. Exam Performance */}
          <div>
            <div className="flex-between text-sm font-bold" style={{ marginBottom: '0.4rem', color: '#F5EFE3' }}>
              <span>Exam Performance Average</span>
              <strong className="text-indigo" style={{ fontSize: '1.2rem' }}>84%</strong>
            </div>
            <div className="progress-bar-bg" style={{ height: '10px', background: '#1B3045', borderRadius: '6px' }}>
              <div style={{ width: '84%', height: '100%', background: '#6E9FD1', borderRadius: '6px' }} />
            </div>
          </div>

        </div>
      </div>

      {/* ADDITIONAL COMPARATIVE BREAKDOWN CARDS */}
      <div className="grid-2" style={{ gap: '2rem' }}>
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
          <span className="editorial-label" style={{ color: '#A78BFA' }}>COURSE COMPARATIVE ANALYSIS</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Course GPA Benchmarks
          </h3>
          <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div className="spec-item flex-between text-xs">
              <span>ARC 118 (Spatial Thinking)</span>
              <strong className="text-gold">3.78 GPA (A-)</strong>
            </div>
            <div className="spec-item flex-between text-xs">
              <span>EDU 204 (Learning Design)</span>
              <strong className="text-gold">3.45 GPA (B+)</strong>
            </div>
            <div className="spec-item flex-between text-xs">
              <span>CS 312 (Applied AI)</span>
              <strong className="text-emerald">3.88 GPA (A)</strong>
            </div>
          </div>
        </div>

        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
          <span className="editorial-label" style={{ color: '#A78BFA' }}>TEACHER PERFORMANCE REPORT</span>
          <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
            Faculty Evaluation Average
          </h3>
          <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div className="spec-item flex-between text-xs">
              <span>Dr. Leila Haddad</span>
              <strong className="text-emerald">96% Approval</strong>
            </div>
            <div className="spec-item flex-between text-xs">
              <span>Dr. Sarah Jenkins</span>
              <strong className="text-emerald">94% Approval</strong>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
