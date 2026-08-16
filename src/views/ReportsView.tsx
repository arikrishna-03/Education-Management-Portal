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
import { Bar, Line } from 'react-chartjs-2';
import { Student, Course, Assignment } from '../types';

interface ReportsViewProps {
  students: Student[];
  courses: Course[];
  assignments: Assignment[];
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const ReportsView: React.FC<ReportsViewProps> = ({
  students,
  courses,
  assignments,
  onTriggerToast
}) => {
  const [reportType, setReportType] = useState<string>('student_performance');
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedTerm, setSelectedTerm] = useState<string>('Fall 2026');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onTriggerToast('success', 'Report Compiled', `${getReportTitle(reportType)} has been generated.`);
    }, 600);
  };

  const handleExportPDF = () => {
    onTriggerToast('success', 'Exporting PDF', 'Official Academic PDF Report compiled and saved.');
    window.print();
  };

  const handleExportCSV = () => {
    // Generate CSV content
    const csvRows = [
      ['Student ID', 'Name', 'Program', 'GPA', 'Attendance Rate (%)', 'Status'],
      ...students.map(s => [s.id, s.name, s.program, s.gpa.toString(), s.attendanceRate.toString(), s.status])
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Academic_Hub_${reportType}_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onTriggerToast('success', 'CSV Downloaded', 'Academic dataset exported as CSV.');
  };

  const getReportTitle = (type: string) => {
    switch (type) {
      case 'student_performance': return 'Student Performance & GPA Audit Report';
      case 'course_performance': return 'Course Curriculum & Attendance Benchmark Report';
      case 'attendance': return 'Institutional Attendance & Engagement Report';
      case 'assignment_completion': return 'Assessment Completion & Rubric Distribution Report';
      case 'department': return 'Departmental Academic Comparison Report';
      case 'term_comparison': return 'Term-over-Term Institutional Progress Report';
      default: return 'Academic Report';
    }
  };

  // Chart Data
  const reportBarData = {
    labels: courses.map(c => c.code),
    datasets: [
      {
        label: 'Average GPA Score',
        data: courses.map(c => c.avgGrade),
        backgroundColor: 'rgba(79, 70, 229, 0.85)',
        borderRadius: 6
      },
      {
        label: 'Attendance Rate (%)',
        data: courses.map(c => c.attendanceRate / 25), // scaled for dual bar visual
        backgroundColor: 'rgba(16, 185, 129, 0.75)',
        borderRadius: 6
      }
    ]
  };

  return (
    <div className="view-page-container">
      {/* Page Header */}
      <div className="view-page-header">
        <div>
          <h1 className="page-title">Academic Reporting & Executive Analytics</h1>
          <p className="page-subtitle">Compile institutional accreditation reports, department performance benchmarks, and student progress summaries.</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary" onClick={handleGenerateReport} disabled={isGenerating}>
            <RefreshCw size={16} className={isGenerating ? 'spin-icon' : ''} />
            {isGenerating ? 'Compiling Data...' : 'Generate Fresh Report'}
          </button>
          <button className="btn-secondary" onClick={handleExportPDF}>
            <Download size={16} /> Export PDF
          </button>
          <button className="btn-secondary" onClick={handleExportCSV}>
            <FileSpreadsheet size={16} /> Export CSV
          </button>
          <button className="btn-secondary" onClick={() => window.print()}>
            <Printer size={16} /> Print
          </button>
        </div>
      </div>

      {/* Report Configuration Controls */}
      <div className="filter-bar">
        <div className="filter-select-wrapper" style={{ flex: 1 }}>
          <span className="filter-label">Report Type:</span>
          <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="student_performance">Student Performance & GPA Audit Report</option>
            <option value="course_performance">Course Curriculum & Attendance Benchmark</option>
            <option value="attendance">Institutional Attendance & Engagement Report</option>
            <option value="assignment_completion">Assessment Completion & Rubric Distribution</option>
            <option value="department">Departmental Academic Comparison Report</option>
            <option value="term_comparison">Term-over-Term Progress Report</option>
          </select>
        </div>

        <div className="filter-controls-group">
          <div className="filter-select-wrapper">
            <span className="filter-label">Term:</span>
            <select value={selectedTerm} onChange={(e) => setSelectedTerm(e.target.value)}>
              <option value="Fall 2026">Fall 2026</option>
              <option value="Spring 2026">Spring 2026</option>
            </select>
          </div>

          <div className="filter-select-wrapper">
            <span className="filter-label">Department:</span>
            <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
              <option value="All">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
            </select>
          </div>
        </div>
      </div>

      {/* Generated Report View Container */}
      <div className="card-panel print-area">
        <div className="report-paper-header">
          <div className="flex-between">
            <div>
              <span className="badge-indigo-light">OFFICIAL INSTITUTIONAL REPORT</span>
              <h2 className="report-paper-title">{getReportTitle(reportType)}</h2>
              <p className="text-muted text-xs">Generated by Academic Hub Intelligence Platform • {selectedTerm} • Date: 2026-08-16</p>
            </div>
            <div className="report-stamp">
              <CheckCircle2 size={32} className="text-emerald" />
              <span>ACCREDITED</span>
            </div>
          </div>
        </div>

        {/* Report Key Indicators Bar */}
        <div className="kpi-grid" style={{ marginBottom: '2rem' }}>
          <div className="kpi-card-sm">
            <span className="kpi-label">Active Cohort Students</span>
            <h3 className="kpi-val">{students.length * 560}</h3>
          </div>
          <div className="kpi-card-sm">
            <span className="kpi-label">Institutional Avg GPA</span>
            <h3 className="kpi-val text-indigo">3.52</h3>
          </div>
          <div className="kpi-card-sm">
            <span className="kpi-label">Attendance Consistency</span>
            <h3 className="kpi-val text-emerald">89.4%</h3>
          </div>
          <div className="kpi-card-sm">
            <span className="kpi-label">Course Pass Rate</span>
            <h3 className="kpi-val text-cyan">94.8%</h3>
          </div>
        </div>

        {/* Report Chart */}
        <div className="chart-container-lg" style={{ marginBottom: '2.5rem' }}>
          <h4 className="detail-section-title">Comparative Course Metrics & Attendance</h4>
          <Bar data={reportBarData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        {/* Detailed Data Table */}
        <h4 className="detail-section-title">Student Cohort Telemetry Summary</h4>
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Program Major</th>
                <th>GPA</th>
                <th>Attendance %</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu) => (
                <tr key={stu.id}>
                  <td><strong>{stu.id}</strong></td>
                  <td>{stu.name}</td>
                  <td>{stu.program}</td>
                  <td><strong className="text-indigo">{stu.gpa.toFixed(2)}</strong></td>
                  <td>{stu.attendanceRate}%</td>
                  <td>
                    <span className={`status-pill ${
                      stu.status === 'On-Track' ? 'status-green' : 
                      stu.status === 'Needs Attention' ? 'status-amber' : 'status-crimson'
                    }`}>
                      {stu.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
