import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Award, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Brain, 
  X, 
  BookOpen, 
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { MOCK_APP_STUDENTS, AppStudent } from '../data/academicHubData';

export const AppStudentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRiskFilter, setSelectedRiskFilter] = useState('All');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('All');
  const [selectedStudentModal, setSelectedStudentModal] = useState<AppStudent | null>(null);

  const filtered = MOCK_APP_STUDENTS.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.studentId.toLowerCase().includes(searchQuery.toLowerCase()) || s.program.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRisk = selectedRiskFilter === 'All' || s.riskStatus === selectedRiskFilter;
    const matchesDept = selectedDeptFilter === 'All' || s.department === selectedDeptFilter;
    return matchesSearch && matchesRisk && matchesDept;
  });

  return (
    <div className="hub-page-container">
      {/* Category & Header */}
      <div className="hub-page-header">
        <span className="section-category-label text-emerald">Student commons</span>
        <h1 className="hub-page-title">Student network</h1>
        <p className="hub-page-subtitle">
          Understand progress, mentoring touchpoints, attendance patterns, and the people behind the academic data.
        </p>
      </div>

      {/* SEARCH & FILTERS TOOLBAR */}
      <div className="hub-toolbar-card flex-between flex-wrap gap-4" style={{ margin: '1.5rem 0' }}>
        <div className="hub-search-input-box flex-align gap-2">
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Search students..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="hub-filter-controls flex-align gap-3 flex-wrap">
          <div className="filter-select-group">
            <span className="filter-label-text">Department:</span>
            <select value={selectedDeptFilter} onChange={(e) => setSelectedDeptFilter(e.target.value)}>
              <option value="All">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Education Systems">Education Systems</option>
              <option value="Architecture">Architecture</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>

          <div className="filter-select-group">
            <span className="filter-label-text">Risk Status:</span>
            <select value={selectedRiskFilter} onChange={(e) => setSelectedRiskFilter(e.target.value)}>
              <option value="All">All Risk Statuses</option>
              <option value="On-Track">On-Track</option>
              <option value="Needs Attention">Needs Attention</option>
              <option value="At-Risk">At-Risk</option>
            </select>
          </div>
        </div>
      </div>

      {/* STUDENT DIRECTORY TABLE */}
      <div className="hub-content-panel">
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Student ID</th>
                <th>Academic Program</th>
                <th>GPA</th>
                <th>Attendance</th>
                <th>Performance</th>
                <th>Engagement</th>
                <th>Risk Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr key={student.id} className="table-row-hover">
                  <td>
                    <div className="flex-align gap-2">
                      <img src={student.avatar} alt={student.name} className="avatar-xs" />
                      <div>
                        <strong className="text-sm font-semibold">{student.name}</strong>
                        <span className="cell-subtext">{student.year}</span>
                      </div>
                    </div>
                  </td>
                  <td><span className="course-code-pill-sm">{student.studentId}</span></td>
                  <td>{student.program}</td>
                  <td><strong className="text-indigo">{student.gpa.toFixed(2)}</strong></td>
                  <td>
                    <span className={`status-pill ${student.attendance >= 85 ? 'status-green' : 'status-crimson'}`}>
                      {student.attendance}%
                    </span>
                  </td>
                  <td><strong>{student.performance}%</strong></td>
                  <td>{student.engagement}%</td>
                  <td>
                    <span className={`status-pill ${
                      student.riskStatus === 'On-Track' ? 'status-green' : 
                      student.riskStatus === 'Needs Attention' ? 'status-amber' : 'status-crimson'
                    }`}>
                      {student.riskStatus}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="btn-ghost-sm text-indigo"
                      onClick={() => setSelectedStudentModal(student)}
                    >
                      Profile <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DETAILED STUDENT PROFILE MODAL */}
      {selectedStudentModal && (
        <div className="modal-overlay active" onClick={() => setSelectedStudentModal(null)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <div className="flex-align gap-3">
                <img src={selectedStudentModal.avatar} alt={selectedStudentModal.name} className="avatar-md" />
                <div>
                  <h2 className="modal-title">{selectedStudentModal.name}</h2>
                  <span className="text-xs text-muted">{selectedStudentModal.studentId} • {selectedStudentModal.program}</span>
                </div>
              </div>
              <button className="toast-close-btn" onClick={() => setSelectedStudentModal(null)}><X size={18} /></button>
            </div>

            <div className="modal-body-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Overview KPIs */}
              <div>
                <h4 className="detail-section-title" style={{ marginBottom: '0.6rem' }}>Overview Metrics</h4>
                <div className="kpi-grid">
                  <div className="kpi-card-sm">
                    <span className="kpi-label">GPA</span>
                    <strong className="kpi-val text-indigo">{selectedStudentModal.gpa.toFixed(2)}</strong>
                  </div>
                  <div className="kpi-card-sm">
                    <span className="kpi-label">Attendance</span>
                    <strong className="kpi-val text-emerald">{selectedStudentModal.attendance}%</strong>
                  </div>
                  <div className="kpi-card-sm">
                    <span className="kpi-label">Engagement</span>
                    <strong className="kpi-val text-cyan">{selectedStudentModal.engagement}%</strong>
                  </div>
                  <div className="kpi-card-sm">
                    <span className="kpi-label">Assignments</span>
                    <strong className="kpi-val">{selectedStudentModal.assignmentCompletion}%</strong>
                  </div>
                </div>
              </div>

              {/* Strong vs Weak Subjects */}
              <div className="grid-2">
                <div>
                  <h4 className="detail-section-title text-emerald" style={{ marginBottom: '0.4rem' }}>Strong Subjects</h4>
                  <div className="flex-wrap gap-1">
                    {selectedStudentModal.strongSubjects.map((s, idx) => (
                      <span key={idx} className="status-pill status-green" style={{ margin: '0.2rem' }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="detail-section-title text-crimson" style={{ marginBottom: '0.4rem' }}>Weak Subjects</h4>
                  <div className="flex-wrap gap-1">
                    {selectedStudentModal.weakSubjects.length === 0 ? (
                      <span className="text-xs text-muted">No weak subjects identified</span>
                    ) : (
                      selectedStudentModal.weakSubjects.map((w, idx) => (
                        <span key={idx} className="status-pill status-crimson" style={{ margin: '0.2rem' }}>{w}</span>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Mentoring Log */}
              {selectedStudentModal.mentorNotes.length > 0 && (
                <div>
                  <h4 className="detail-section-title" style={{ marginBottom: '0.4rem' }}>Mentoring History & Notes</h4>
                  {selectedStudentModal.mentorNotes.map((n, idx) => (
                    <div key={idx} className="rec-box-item">
                      <div className="flex-between text-xs text-muted" style={{ marginBottom: '0.2rem' }}>
                        <strong>{n.author}</strong>
                        <span>{n.date}</span>
                      </div>
                      <p className="text-xs text-primary">{n.note}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-footer flex-end" style={{ marginTop: '1.5rem' }}>
              <button className="btn-secondary" onClick={() => setSelectedStudentModal(null)}>Close Profile</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
