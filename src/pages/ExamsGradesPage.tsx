import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Award, Clock, FileText, CheckCircle2, Play, Brain, ArrowRight, BarChart2 } from 'lucide-react';
import { MOCK_EXAMS, User } from '../data/edutrData';

interface ExamsGradesPageProps {
  currentUser: User;
}

export const ExamsGradesPage: React.FC<ExamsGradesPageProps> = ({ currentUser }) => {
  const navigate = useNavigate();

  const gradeHistory = [
    { courseCode: "CS-401", courseTitle: "Advanced Machine Learning", score: 96, grade: "A", status: "Passed" },
    { courseCode: "AI-505", courseTitle: "Ethics in AI Systems", score: 95, grade: "A", status: "Passed" },
    { courseCode: "SE-302", courseTitle: "Cloud Architecture", score: 85, grade: "B", status: "Passed" },
    { courseCode: "CY-410", courseTitle: "Cybersecurity Protocols", score: 70, grade: "C-", status: "Passed" }
  ];

  return (
    <div className="page-wrapper area-academic-orange">
      <div className="page-container section-padding">
        {/* Page Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-orange flex-align gap-1">
              <Award size={16} /> ACADEMIC FLOW SECTOR
            </span>
            <h1 className="page-title-lg">Exams, Assessment Timetables & Gradebook</h1>
            <p className="page-subtitle">Access online exam simulators, review historical gradebooks, and inspect performance diagnostics.</p>
          </div>
          <div className="header-actions">
            <Link to="/ai" className="btn-orange-primary flex-align gap-2">
              <Brain size={16} /> AI Exam Performance Analysis <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Available Exams for Simulation */}
        <div className="card-panel-orange" style={{ margin: '1.5rem 0' }}>
          <h3 className="card-title text-orange" style={{ marginBottom: '1rem' }}>Available Examination Simulators</h3>
          <div className="exams-grid">
            {MOCK_EXAMS.map((exam) => (
              <div key={exam.id} className="exam-card-pub">
                <div className="flex-between" style={{ marginBottom: '0.6rem' }}>
                  <span className="course-code-pill">{exam.courseCode}</span>
                  <span className="status-pill status-green">{exam.status}</span>
                </div>
                <h4 className="exam-card-title">{exam.title}</h4>
                <div className="exam-card-meta flex-align gap-3 text-xs text-muted" style={{ margin: '0.8rem 0' }}>
                  <span className="flex-align gap-1"><Clock size={14} /> {exam.durationMinutes} Mins</span>
                  <span className="flex-align gap-1"><FileText size={14} /> {exam.totalQuestions} Questions</span>
                </div>
                <button className="btn-orange-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate(`/exams/${exam.id}`)}>
                  <Play size={16} /> Take Online Exam Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Grade History & Analysis */}
        <div className="grid-2">
          <div className="card-panel-orange">
            <h3 className="card-title text-orange" style={{ marginBottom: '1rem' }}>Academic Grade History</h3>
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Score (%)</th>
                    <th>Grade</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeHistory.map((g, idx) => (
                    <tr key={idx}>
                      <td><strong>{g.courseCode}</strong> - {g.courseTitle}</td>
                      <td><strong>{g.score}%</strong></td>
                      <td><span className="course-code-pill">{g.grade}</span></td>
                      <td><span className="status-pill status-green">{g.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-panel-orange">
            <h3 className="card-title text-orange" style={{ marginBottom: '1rem' }}>Exam Performance Analysis</h3>
            <div className="perf-summary-box">
              <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
                <span className="text-sm font-bold">Cumulative Exam Average:</span>
                <strong className="text-orange text-lg">86.5%</strong>
              </div>
              <p className="text-xs text-muted" style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                High proficiency demonstrated in Transformer Self-Attention matrices and Ethics audits. Supplemental revision recommended in Cryptography ECC group laws.
              </p>
              <Link to="/progress" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <BarChart2 size={16} /> Inspect Weak Subjects in Progress
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
