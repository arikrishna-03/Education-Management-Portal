import React, { useState } from 'react';
import { 
  X, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Brain, 
  Plus, 
  FileText,
  Clock
} from 'lucide-react';
import { Student } from '../types';

interface StudentDetailModalProps {
  student: Student | null;
  onClose: () => void;
  onAddMentoringNote: (studentId: string, note: string) => void;
}

export const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  student,
  onClose,
  onAddMentoringNote
}) => {
  const [newNote, setNewNote] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'mentoring' | 'ai'>('overview');

  if (!student) return null;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    onAddMentoringNote(student.id, newNote);
    setNewNote('');
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box modal-lg" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-title-box">
            <img src={student.avatar} alt={student.name} className="user-avatar-lg" />
            <div>
              <div className="flex-align gap-2">
                <h2 className="modal-title">{student.name}</h2>
                <span className={`status-pill ${
                  student.status === 'On-Track' ? 'status-green' : 
                  student.status === 'Needs Attention' ? 'status-amber' : 'status-crimson'
                }`}>
                  {student.status}
                </span>
              </div>
              <p className="modal-subtitle">{student.id} • {student.program} ({student.year}) • {student.email}</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Key Metrics Bar */}
        <div className="course-metrics-bar">
          <div className="c-metric">
            <span className="c-metric-label">Cumulative GPA</span>
            <strong className="c-metric-val text-indigo">{student.gpa.toFixed(2)}</strong>
          </div>
          <div className="c-metric">
            <span className="c-metric-label">Attendance Rate</span>
            <strong className={`c-metric-val ${student.attendanceRate >= 85 ? 'text-emerald' : 'text-crimson'}`}>
              {student.attendanceRate}%
            </strong>
          </div>
          <div className="c-metric">
            <span className="c-metric-label">Assignment Completion</span>
            <strong className="c-metric-val text-cyan">{student.completionRate}%</strong>
          </div>
          <div className="c-metric">
            <span className="c-metric-label">Engagement Tier</span>
            <strong className="c-metric-val">{student.engagementLevel}</strong>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="modal-tabs">
          <button 
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Users size={16} /> Profile & Telemetry
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            <Award size={16} /> Course Grades ({student.enrolledCourses.length})
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'mentoring' ? 'active' : ''}`}
            onClick={() => setActiveTab('mentoring')}
          >
            <Calendar size={16} /> Mentoring History ({student.mentoringHistory.length})
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <Brain size={16} /> AI Insights ({student.aiInsights.length})
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="modal-tab-body">
            <div className="grid-2">
              <div className="card-panel-inner">
                <h4 className="detail-section-title">Academic Standing</h4>
                <ul className="profile-info-list">
                  <li><span>Program Major:</span> <strong>{student.program}</strong></li>
                  <li><span>Academic Year:</span> <strong>{student.year}</strong></li>
                  <li><span>Cumulative GPA:</span> <strong className="text-indigo">{student.gpa.toFixed(2)} / 4.00</strong></li>
                  <li><span>Overall Attendance:</span> <strong className="text-emerald">{student.attendanceRate}%</strong></li>
                  <li><span>Engagement Score:</span> <strong>{student.engagementLevel}</strong></li>
                </ul>
              </div>

              <div className="card-panel-inner">
                <h4 className="detail-section-title">Active AI Alerts & Flags</h4>
                {student.aiInsights.length === 0 ? (
                  <p className="text-muted text-sm">No active performance warnings generated.</p>
                ) : (
                  student.aiInsights.map((ins, idx) => (
                    <div key={idx} className="ai-alert-pill-box">
                      <AlertTriangle size={16} className="text-amber" />
                      <p>{ins}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Enrolled Courses & Grades */}
        {activeTab === 'courses' && (
          <div className="modal-tab-body">
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Course Code & Title</th>
                    <th>Score (%)</th>
                    <th>Letter Grade</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {student.enrolledCourses.map((c, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong>{c.code}</strong> - {c.title}
                      </td>
                      <td><strong>{c.score}%</strong></td>
                      <td><span className="course-code-pill">{c.grade}</span></td>
                      <td>
                        <span className={`status-pill ${c.score >= 80 ? 'status-green' : c.score >= 70 ? 'status-amber' : 'status-crimson'}`}>
                          {c.score >= 80 ? 'Passing High' : c.score >= 70 ? 'Satisfactory' : 'Needs Review'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Mentoring History */}
        {activeTab === 'mentoring' && (
          <div className="modal-tab-body">
            {/* Add Mentoring Note Form */}
            <form onSubmit={handleAddNote} className="card-panel-inner" style={{ marginBottom: '1.5rem' }}>
              <h4 className="detail-section-title">Log New Mentoring Touchpoint</h4>
              <div className="flex-align gap-2">
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter advising notes, action items, or intervention outcome..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  <Plus size={16} /> Log Note
                </button>
              </div>
            </form>

            <div className="mentoring-timeline">
              {student.mentoringHistory.length === 0 ? (
                <p className="text-muted text-sm">No previous mentoring sessions logged.</p>
              ) : (
                student.mentoringHistory.map((m) => (
                  <div key={m.id} className="mentoring-card">
                    <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                      <strong className="text-indigo">{m.mentor}</strong>
                      <span className="text-xs text-muted"><Clock size={12} /> {m.date}</span>
                    </div>
                    <p className="mentoring-notes">{m.notes}</p>
                    {m.actionItem && (
                      <div className="action-item-box flex-align gap-2">
                        <CheckCircle2 size={14} className="text-emerald" />
                        <span>Action Item: {m.actionItem}</span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 4: AI Insights */}
        {activeTab === 'ai' && (
          <div className="modal-tab-body">
            <div className="card-panel-inner">
              <h4 className="detail-section-title flex-align gap-2">
                <Brain size={18} className="text-indigo" /> AI Algorithmic Behavioral Diagnostics
              </h4>
              <p className="text-muted text-sm" style={{ marginBottom: '1rem' }}>
                Automated predictive analysis generated by combining weekly attendance logs, assignment submission timestamps, and gradebook trajectory.
              </p>
              {student.aiInsights.map((ins, idx) => (
                <div key={idx} className="ai-insight-detail-card">
                  <span className="badge-indigo-light">Diagnostic #{idx + 1}</span>
                  <p className="ai-insight-text">{ins}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
