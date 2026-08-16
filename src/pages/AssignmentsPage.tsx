import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck, 
  Plus, 
  Clock, 
  Award, 
  Brain, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Send,
  FileText
} from 'lucide-react';
import { MOCK_ASSIGNMENTS, User, Assignment } from '../data/edutrData';
import confetti from 'canvas-confetti';

interface AssignmentsPageProps {
  currentUser: User;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const AssignmentsPage: React.FC<AssignmentsPageProps> = ({ currentUser, onTriggerToast }) => {
  const isTeacherOrAdmin = currentUser.role === 'teacher' || currentUser.role === 'admin';

  const [assignmentsList, setAssignmentsList] = useState<Assignment[]>(MOCK_ASSIGNMENTS);
  const [filterTab, setFilterTab] = useState<'all' | 'upcoming' | 'submitted' | 'graded'>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form states for creating assignment
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('CS-401');
  const [newDueDate, setNewDueDate] = useState('2026-08-30');
  const [newDesc, setNewDesc] = useState('');

  const filtered = assignmentsList.filter((a) => {
    if (filterTab === 'upcoming') return a.status === 'Pending';
    if (filterTab === 'submitted') return a.status === 'Submitted' || a.status === 'Graded';
    if (filterTab === 'graded') return a.status === 'Graded';
    return true;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const created: Assignment = {
      id: `asgn-${Date.now()}`,
      courseCode: newCourse,
      courseName: newCourse === 'CS-401' ? 'Advanced Machine Learning' : 'Cloud Architecture',
      title: newTitle,
      dueDate: newDueDate,
      status: 'Pending',
      submissionPercentage: 0,
      description: newDesc || 'Standard course assignment specification.'
    };

    setAssignmentsList([created, ...assignmentsList]);
    setShowCreateModal(false);
    onTriggerToast('success', 'Assignment Created', `"${newTitle}" published for ${newCourse}.`);
  };

  const handleSubmitAssignment = (asgnId: string) => {
    setAssignmentsList(prev => prev.map(a => a.id === asgnId ? { ...a, status: 'Submitted', submissionDate: '2026-08-16 11:40' } : a));
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
    onTriggerToast('success', 'Assignment Submitted!', 'Your solution has been submitted to the AI feedback pipeline.');
  };

  return (
    <div className="page-wrapper area-academic-orange">
      <div className="page-container section-padding">
        {/* Page Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-orange flex-align gap-1">
              <FileCheck size={16} /> ACADEMIC FLOW SECTOR
            </span>
            <h1 className="page-title-lg">Assessment Studio & Assignment Engine</h1>
            <p className="page-subtitle">Track coursework deadlines, submit solutions for automated AI evaluation, and deliver faculty grades.</p>
          </div>
          <div className="header-actions">
            {isTeacherOrAdmin && (
              <button className="btn-orange-primary" onClick={() => setShowCreateModal(true)}>
                <Plus size={16} /> Create Assignment Brief
              </button>
            )}
            <Link to="/ai" className="btn-secondary">
              <Brain size={16} /> AI Feedback Engine <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-bar" style={{ margin: '1.5rem 0', background: '#fff' }}>
          <div className="modal-tabs" style={{ border: 'none', margin: 0 }}>
            <button className={`modal-tab-btn ${filterTab === 'all' ? 'active' : ''}`} onClick={() => setFilterTab('all')}>
              All Assignments ({assignmentsList.length})
            </button>
            <button className={`modal-tab-btn ${filterTab === 'upcoming' ? 'active' : ''}`} onClick={() => setFilterTab('upcoming')}>
              Upcoming ({assignmentsList.filter(a => a.status === 'Pending').length})
            </button>
            <button className={`modal-tab-btn ${filterTab === 'submitted' ? 'active' : ''}`} onClick={() => setFilterTab('submitted')}>
              Submitted / Graded ({assignmentsList.filter(a => a.status === 'Graded' || a.status === 'Submitted').length})
            </button>
          </div>
        </div>

        {/* Assignment Cards List */}
        <div className="assignment-cards-list">
          {filtered.map((asgn) => (
            <div key={asgn.id} className="asgn-card-row">
              <div className="asgn-card-main">
                <div className="asgn-card-header">
                  <span className="course-code-pill">{asgn.courseCode}</span>
                  <span className={`status-pill ${
                    asgn.status === 'Graded' ? 'status-green' : 
                    asgn.status === 'Submitted' ? 'status-indigo' : 'status-amber'
                  }`}>
                    {asgn.status}
                  </span>
                </div>

                <h3 className="asgn-card-title">{asgn.title}</h3>
                <p className="asgn-card-desc">{asgn.description}</p>

                <div className="asgn-meta-row flex-align gap-4">
                  <span className="meta-item flex-align gap-1"><Clock size={14} /> Due Date: <strong>{asgn.dueDate}</strong></span>
                  {asgn.grade !== undefined && (
                    <span className="meta-item flex-align gap-1"><Award size={14} className="text-emerald" /> Grade: <strong>{asgn.grade}/100</strong></span>
                  )}
                </div>

                {/* AI Automated Feedback Display */}
                {asgn.feedback && (
                  <div className="ai-feedback-box flex-align gap-2">
                    <Brain size={16} className="text-indigo flex-shrink-0" />
                    <div>
                      <strong className="text-xs text-indigo">AI FACULTY FEEDBACK:</strong>
                      <p className="text-xs">{asgn.feedback}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Side */}
              <div className="asgn-card-side">
                <div className="asgn-progress-box">
                  <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                    <span>Class Submissions</span>
                    <strong>{asgn.submissionPercentage}%</strong>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${asgn.submissionPercentage}%`, background: '#ea580c' }} />
                  </div>
                </div>

                {!isTeacherOrAdmin && asgn.status === 'Pending' && (
                  <button className="btn-orange-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => handleSubmitAssignment(asgn.id)}>
                    <Send size={16} /> Submit Solution
                  </button>
                )}

                {isTeacherOrAdmin && (
                  <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => onTriggerToast('info', 'Grading Studio', 'Grading submission interface loaded.')}>
                    Review & Grade Submissions
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Create Assignment */}
        {showCreateModal && (
          <div className="modal-overlay active" onClick={() => setShowCreateModal(false)}>
            <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
              <h2 className="modal-title" style={{ marginBottom: '1rem' }}>Create Assignment Brief</h2>
              <form onSubmit={handleCreateSubmit} className="modal-body-form">
                <div className="form-group">
                  <label className="form-label">Course</label>
                  <select className="form-control" value={newCourse} onChange={(e) => setNewCourse(e.target.value)}>
                    <option value="CS-401">CS-401 Advanced Machine Learning</option>
                    <option value="SE-302">SE-302 Cloud Architecture</option>
                    <option value="AI-505">AI-505 Ethics in AI Systems</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Assignment Title *</label>
                  <input type="text" className="form-control" placeholder="e.g. Scaled Self-Attention Implementation" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Due Date *</label>
                  <input type="date" className="form-control" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Description / Brief</label>
                  <textarea className="form-control" rows={3} placeholder="Submission instructions..." value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn-secondary" onClick={() => setShowCreateModal(false)}>Cancel</button>
                  <button type="submit" className="btn-orange-primary">Publish Assignment Brief</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
