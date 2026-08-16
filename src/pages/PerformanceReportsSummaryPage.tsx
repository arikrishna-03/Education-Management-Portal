import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Printer, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  ArrowLeft,
  Brain
} from 'lucide-react';
import { User, MOCK_AT_RISK_STUDENTS } from '../data/edutrData';

interface PerformanceReportsSummaryPageProps {
  currentUser: User;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const PerformanceReportsSummaryPage: React.FC<PerformanceReportsSummaryPageProps> = ({ currentUser, onTriggerToast }) => {
  const handleExportPDF = () => {
    onTriggerToast('success', 'PDF Ready', 'Performance report PDF prepared.');
    window.print();
  };

  return (
    <div className="page-wrapper area-reports-slate">
      <div className="page-container section-padding">
        {/* Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-slate flex-align gap-1">
              <FileText size={16} /> EXECUTIVE TELEMETRY SECTOR
            </span>
            <h1 className="page-title-lg">Academic Performance & Risk Analysis Brief</h1>
            <p className="page-subtitle">Comprehensive institutional summary detailing GPA distribution, identified weak areas, risk severity levels, and AI recommendations.</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary" onClick={handleExportPDF}>
              <Download size={16} /> Download PDF Brief
            </button>
            <button className="btn-secondary" onClick={() => window.print()}>
              <Printer size={16} /> Print Report
            </button>
          </div>
        </div>

        {/* Printable Report Document Card */}
        <div className="card-panel print-area" style={{ marginTop: '1.5rem' }}>
          {/* Header */}
          <div className="report-paper-header">
            <div className="flex-between">
              <div>
                <span className="badge-indigo-light">INSTITUTIONAL PERFORMANCE SUMMARY BRIEF</span>
                <h2 className="report-paper-title">EduTR Academic Excellence Report</h2>
                <p className="text-muted text-xs">Evaluated Period: Fall 2026 Term • Target Cohort: Computer Science & Data Science</p>
              </div>
              <div className="report-stamp">
                <ShieldCheck size={32} className="text-indigo" />
                <span>CONFIDENTIAL</span>
              </div>
            </div>
          </div>

          {/* Section 1: Academic Performance Summary KPIs */}
          <h3 className="section-title-sm" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>1. Academic Performance Summary</h3>
          <div className="kpi-grid" style={{ marginBottom: '2rem' }}>
            <div className="kpi-card-sm">
              <span className="kpi-label">Cumulative Institutional GPA</span>
              <h3 className="kpi-val text-indigo">3.52 / 4.0</h3>
            </div>
            <div className="kpi-card-sm">
              <span className="kpi-label">Average Cohort Score</span>
              <h3 className="kpi-val text-emerald">94.8%</h3>
            </div>
            <div className="kpi-card-sm">
              <span className="kpi-label">Overall Attendance Rate</span>
              <h3 className="kpi-val text-cyan">98.4%</h3>
            </div>
            <div className="kpi-card-sm">
              <span className="kpi-label">Course Completion Rate</span>
              <h3 className="kpi-val">88.0%</h3>
            </div>
          </div>

          {/* Section 2: Weak Areas Identified */}
          <h3 className="section-title-sm" style={{ marginBottom: '1rem' }}>2. Identified Weak Areas & Curriculum Gaps</h3>
          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            <div className="weak-subj-card border-crimson">
              <h4 className="subj-title text-crimson">Elliptic Curve Cryptography & Group Laws (CY-410)</h4>
              <p className="subj-rec">31.5% of enrolled students scored below 70% on scalar multiplication problem sets.</p>
            </div>
            <div className="weak-subj-card border-amber">
              <h4 className="subj-title text-amber">Kubernetes Ingress & TLS Certification Schemas (SE-302)</h4>
              <p className="subj-rec">22.0% of cohort experienced syntax validation errors during Helm chart deployment labs.</p>
            </div>
          </div>

          {/* Section 3: Risk Analysis Severity Matrix */}
          <h3 className="section-title-sm" style={{ marginBottom: '1rem' }}>3. Multi-Factor Risk Severity Analysis</h3>
          <div className="table-responsive" style={{ marginBottom: '2rem' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Risk Concern Category</th>
                  <th>Severity Level</th>
                  <th>Primary Indicator / Trigger</th>
                  <th>Impacted Roster</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Low Attendance (&lt;70%)</strong></td>
                  <td><span className="status-pill status-crimson">High Severity</span></td>
                  <td>Student missed 3 consecutive cryptography laboratory sessions</td>
                  <td>Liam Chen (STU-1082)</td>
                </tr>
                <tr>
                  <td><strong>Missing Assignments</strong></td>
                  <td><span className="status-pill status-amber">Medium Severity</span></td>
                  <td>Submitted 2 Kubernetes briefs past the grace period deadline</td>
                  <td>David Kim (STU-1168)</td>
                </tr>
                <tr>
                  <td><strong>Exam Score Concern</strong></td>
                  <td><span className="status-pill status-indigo">Low Severity</span></td>
                  <td>Quiz 2 score was 68%, though attendance remains 98%</td>
                  <td>Sophia Martinez (STU-1094)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4: AI Recommendations */}
          <h3 className="section-title-sm" style={{ marginBottom: '1rem' }}>4. AI Actionable Recommendations</h3>
          <div className="study-rec-list">
            <div className="rec-box-item flex-align gap-3">
              <Sparkles size={20} className="text-indigo flex-shrink-0" />
              <div>
                <h4 className="rec-title">Increase Weekly Study Hours</h4>
                <p className="rec-desc">Encourage flagged students to dedicate 2 extra structured study hours to weak subjects before midterms.</p>
              </div>
            </div>

            <div className="rec-box-item flex-align gap-3">
              <Sparkles size={20} className="text-indigo flex-shrink-0" />
              <div>
                <h4 className="rec-title">Schedule Teacher Consultation</h4>
                <p className="rec-desc">Mandate 15-minute academic advisor check-ins for students with attendance under 75%.</p>
              </div>
            </div>

            <div className="rec-box-item flex-align gap-3">
              <Sparkles size={20} className="text-indigo flex-shrink-0" />
              <div>
                <h4 className="rec-title">Complete Missing Remedial Assignments</h4>
                <p className="rec-desc">Unlock makeup submissions for students needing grade recovery in Cloud Architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
