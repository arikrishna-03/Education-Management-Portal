import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  FileSpreadsheet, 
  RefreshCw, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2,
  Calendar,
  Filter
} from 'lucide-react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { MOCK_COURSES, MOCK_AT_RISK_STUDENTS, User } from '../data/edutrData';

interface ReportsPageProps {
  currentUser: User;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const ReportsPage: React.FC<ReportsPageProps> = ({ currentUser, onTriggerToast }) => {
  const [reportType, setReportType] = useState<string>('student_performance');
  const [selectedSemester, setSelectedSemester] = useState<string>('Fall 2026');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onTriggerToast('success', 'Report Generated!', 'Analytics telemetry re-compiled successfully.');
    }, 500);
  };

  const handleExportPDF = () => {
    onTriggerToast('success', 'Exporting PDF', 'Compiled PDF document ready for download.');
    window.print();
  };

  const handleExportCSV = () => {
    const csvRows = [
      ['Course Code', 'Course Name', 'Category', 'Enrolled', 'Avg GPA', 'Attendance Rate (%)'],
      ...MOCK_COURSES.map(c => [c.code, c.name, c.category, c.studentsCount.toString(), c.rating.toString(), '92.5'])
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `EduTR_${reportType}_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onTriggerToast('success', 'CSV Downloaded', 'Dataset exported as CSV.');
  };

  // Chart Data
  const gradeDistributionData = {
    labels: ['Grade A (90-100)', 'Grade B (80-89)', 'Grade C (70-79)', 'Grade D/F (<70)'],
    datasets: [
      {
        label: 'Student Count',
        data: [1420, 890, 320, 114],
        backgroundColor: ['#10b981', '#4f46e5', '#f59e0b', '#ef4444'],
        borderRadius: 8
      }
    ]
  };

  return (
    <div className="page-wrapper area-reports-slate">
      <div className="page-container section-padding">
        {/* Page Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-slate flex-align gap-1">
              <FileText size={16} /> ANALYTICS & REPORTS SECTOR
            </span>
            <h1 className="page-title-lg">Institutional Reports & Insights Dashboard</h1>
            <p className="page-subtitle">Generate student performance audits, class attendance benchmarks, comparative course metrics, and official PDF briefs.</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary" onClick={handleGenerateReport} disabled={isGenerating}>
              <RefreshCw size={16} className={isGenerating ? 'spin-icon' : ''} /> Generate Report
            </button>
            <button className="btn-secondary" onClick={handleExportPDF}>
              <Download size={16} /> Export PDF
            </button>
            <button className="btn-secondary" onClick={handleExportCSV}>
              <FileSpreadsheet size={16} /> Export CSV
            </button>
            <button className="btn-secondary" onClick={() => window.print()}>
              <Printer size={16} /> Print Report
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="filter-bar" style={{ margin: '1.5rem 0', background: '#fff' }}>
          <div className="filter-select-wrapper" style={{ flex: 1 }}>
            <span className="filter-label">Report Category:</span>
            <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
              <option value="student_performance">Student Performance Audit</option>
              <option value="class_performance">Class & Department Performance</option>
              <option value="comparative">Comparative Course Reports</option>
              <option value="ai_recommendations">AI Strategic Recommendations</option>
            </select>
          </div>

          <div className="filter-controls-group">
            <div className="filter-select-wrapper">
              <span className="filter-label">Semester:</span>
              <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                <option value="Fall 2026">Fall 2026</option>
                <option value="Spring 2026">Spring 2026</option>
              </select>
            </div>

            <div className="filter-select-wrapper">
              <span className="filter-label">Course:</span>
              <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                <option value="All">All Courses</option>
                {MOCK_COURSES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Generated Report Document Paper View */}
        <div className="card-panel print-area">
          <div className="report-paper-header">
            <div className="flex-between">
              <div>
                <span className="badge-indigo-light">OFFICIAL EDUTR ANALYTICS DOCUMENT</span>
                <h2 className="report-paper-title">Institutional Student Performance Report</h2>
                <p className="text-muted text-xs">Compiled by EduTR System • Semester: {selectedSemester} • Date: 2026-08-16</p>
              </div>
              <div className="report-stamp">
                <CheckCircle2 size={32} className="text-emerald" />
                <span>ACCREDITED</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="kpi-grid" style={{ margin: '1.5rem 0' }}>
            <div className="kpi-card-sm">
              <span className="kpi-label">Total Cohort Size</span>
              <h3 className="kpi-val">2,846</h3>
            </div>
            <div className="kpi-card-sm">
              <span className="kpi-label">Institutional Avg GPA</span>
              <h3 className="kpi-val text-indigo">3.52</h3>
            </div>
            <div className="kpi-card-sm">
              <span className="kpi-label">Attendance Rate</span>
              <h3 className="kpi-val text-emerald">89.4%</h3>
            </div>
            <div className="kpi-card-sm">
              <span className="kpi-label">Pass Rate</span>
              <h3 className="kpi-val text-cyan">94.8%</h3>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            <div>
              <h4 className="detail-section-title">Grade Distribution Across Programs</h4>
              <div className="chart-container-md">
                <Bar data={gradeDistributionData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>

            <div>
              <h4 className="detail-section-title">AI Actionable Recommendations Summary</h4>
              <ul className="profile-info-list" style={{ marginTop: '1rem' }}>
                <li><CheckCircle2 size={16} className="text-emerald" /> <strong>Student Intervention:</strong> 3 students assigned peer mentors for Cryptography.</li>
                <li><CheckCircle2 size={16} className="text-emerald" /> <strong>Curriculum Adjustment:</strong> Added Helm YAML validation lab to SE-302.</li>
                <li><CheckCircle2 size={16} className="text-emerald" /> <strong>Attendance Policy:</strong> 94.8% of students maintain required &gt;75% threshold.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
