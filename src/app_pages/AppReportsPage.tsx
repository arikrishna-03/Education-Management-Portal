import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  RefreshCw, 
  CheckCircle2, 
  BarChart3, 
  TrendingUp, 
  Filter, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { MOCK_APP_COURSES } from '../data/academicHubData';

export const AppReportsPage: React.FC = () => {
  const [reportSemester, setReportSemester] = useState('Fall 2026');
  const [reportDept, setReportDept] = useState('All');
  const [reportOption, setReportOption] = useState('Executive summary');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 400);
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  // Chart Data
  const performanceTrendData = {
    labels: ['Sep 25', 'Nov 25', 'Jan 26', 'Mar 26', 'May 26', 'Aug 26'],
    datasets: [
      {
        label: 'Academic Performance Trajectory (%)',
        data: [78, 81, 84, 83, 85, 87.4],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  const courseComparisonData = {
    labels: ['EDU 204', 'ARC 118', 'COM 210', 'CS 312', 'MTH 201'],
    datasets: [
      {
        label: 'Average Score (%)',
        data: [92, 86, 88, 95, 74],
        backgroundColor: ['#10b981', '#4f46e5', '#0891b2', '#7c3aed', '#f59e0b'],
        borderRadius: 6
      }
    ]
  };

  return (
    <div className="hub-page-container">
      {/* Category & Header */}
      <div className="hub-page-header flex-between flex-wrap gap-4">
        <div>
          <span className="section-category-label text-slate">Reports & insights</span>
          <h1 className="hub-page-title">Performance reporting</h1>
          <p className="hub-page-subtitle">
            Compare cohorts, identify learning gaps, and prepare decision-ready narratives for academic leadership.
          </p>
        </div>
        <div className="flex-align gap-2">
          <button className="btn-hub-primary" onClick={handleGenerateReport} disabled={isGenerating}>
            <RefreshCw size={16} className={isGenerating ? 'spin-icon' : ''} /> Generate report
          </button>
          <button className="btn-secondary" onClick={handleDownloadPDF}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      {/* REPORT FILTERS TOOLBAR */}
      <div className="hub-toolbar-card flex-between flex-wrap gap-4" style={{ margin: '1.5rem 0' }}>
        <div className="filter-select-group" style={{ flex: 1 }}>
          <span className="filter-label-text">Report Type:</span>
          <select value={reportOption} onChange={(e) => setReportOption(e.target.value)}>
            <option value="Executive summary">Executive Summary Narrative</option>
            <option value="Student performance">Student Performance Audit</option>
            <option value="Course performance">Course Performance Analysis</option>
            <option value="Attendance">Attendance Consistency Report</option>
            <option value="Cohort comparison">Cohort Comparison Matrix</option>
          </select>
        </div>

        <div className="hub-filter-controls flex-align gap-3 flex-wrap">
          <div className="filter-select-group">
            <span className="filter-label-text">Semester:</span>
            <select value={reportSemester} onChange={(e) => setReportSemester(e.target.value)}>
              <option value="Fall 2026">Fall 2026</option>
              <option value="Spring 2026">Spring 2026</option>
            </select>
          </div>

          <div className="filter-select-group">
            <span className="filter-label-text">Department:</span>
            <select value={reportDept} onChange={(e) => setReportDept(e.target.value)}>
              <option value="All">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Education Systems">Education Systems</option>
              <option value="Architecture">Architecture</option>
            </select>
          </div>
        </div>
      </div>

      {/* PERFORMANCE SUMMARY KPIS */}
      <div className="kpi-grid" style={{ marginBottom: '2rem' }}>
        <div className="hub-kpi-card">
          <span className="kpi-card-title">Average performance</span>
          <h2 className="kpi-card-number text-indigo">87.4%</h2>
          <span className="kpi-card-trend text-emerald">+2.4% vs target</span>
        </div>
        <div className="hub-kpi-card">
          <span className="kpi-card-title">Attendance consistency</span>
          <h2 className="kpi-card-number text-emerald">91.0%</h2>
          <span className="kpi-card-subtext text-muted">Required bar: 75%</span>
        </div>
        <div className="hub-kpi-card">
          <span className="kpi-card-title">Assignment completion</span>
          <h2 className="kpi-card-number text-cyan">84.0%</h2>
          <span className="kpi-card-subtext text-muted">842 submitted</span>
        </div>
        <div className="hub-kpi-card">
          <span className="kpi-card-title">Student engagement</span>
          <h2 className="kpi-card-number">76.0%</h2>
          <span className="kpi-card-trend text-emerald">Active telemetry</span>
        </div>
      </div>

      {/* CHARTS SECTION */}
      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <div className="hub-content-panel">
          <h3 className="panel-title" style={{ marginBottom: '1rem' }}>Academic performance over time</h3>
          <div className="chart-container-md">
            <Line data={performanceTrendData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="hub-content-panel">
          <h3 className="panel-title" style={{ marginBottom: '1rem' }}>Course comparison score matrix</h3>
          <div className="chart-container-md">
            <Bar data={courseComparisonData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* LEARNING GAPS SECTION */}
      <div className="hub-content-panel" style={{ marginBottom: '2rem' }}>
        <h3 className="panel-title" style={{ marginBottom: '0.4rem' }}>Learning gaps identification</h3>
        <p className="text-xs text-muted" style={{ marginBottom: '1rem' }}>Cohort topics exhibiting high assessment variance.</p>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Subject Topic</th>
                <th>Average Score</th>
                <th>Quarterly Change</th>
                <th>Risk Classification</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ANOVA Statistical Inference (MTH 201)</strong></td>
                <td><strong className="text-crimson">74.0%</strong></td>
                <td><span className="text-crimson">-4.2%</span></td>
                <td><span className="status-pill status-amber">Medium Risk</span></td>
                <td>Open focused study studio for first-year research methods</td>
              </tr>
              <tr>
                <td><strong>Vector Blueprint Layout (ARC 118)</strong></td>
                <td><strong>86.0%</strong></td>
                <td><span className="text-emerald">+1.5%</span></td>
                <td><span className="status-pill status-green">Low Risk</span></td>
                <td>Maintain current studio critique schedule</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* AI RECOMMENDATIONS & GENERATED REPORT BRIEF */}
      <div className="hub-content-panel border-purple print-area">
        <div className="flex-between" style={{ marginBottom: '1rem' }}>
          <div className="flex-align gap-2">
            <Sparkles size={20} className="text-purple" />
            <h3 className="panel-title text-purple" style={{ margin: 0 }}>AI recommendations summary</h3>
          </div>
          <span className="badge-purple-light">EXECUTIVE BRIEF</span>
        </div>

        <div className="rec-box-item" style={{ marginBottom: '1rem' }}>
          <strong className="text-sm font-bold text-primary block">Create a focused study studio for first-year research methods.</strong>
          <p className="text-xs text-muted" style={{ marginTop: '0.2rem' }}>
            Reason: Low assessment performance in statistical inference combined with declining attendance engagement.
          </p>
        </div>

        <div className="flex-end">
          <button className="btn-hub-primary" onClick={() => window.print()}>
            Review & Print Executive Report Brief
          </button>
        </div>
      </div>
    </div>
  );
};
