import React, { useState } from 'react';
import { 
  FileCheck, 
  Plus, 
  Search, 
  Filter, 
  Clock, 
  Award, 
  CheckCircle2, 
  X, 
  Brain, 
  Edit3, 
  Send,
  ChevronRight
} from 'lucide-react';
import { MOCK_APP_ASSIGNMENTS, AppAssignment } from '../data/academicHubData';

export const AppAssignmentsPage: React.FC = () => {
  const [assignments, setAssignments] = useState<AppAssignment[]>(MOCK_APP_ASSIGNMENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('All');
  const [selectedAssignmentDetail, setSelectedAssignmentDetail] = useState<AppAssignment | null>(null);

  // Form states for Create Assignment
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('EDU 204');
  const [newDueDate, setNewDueDate] = useState('25 Aug 2026');
  const [newBrief, setNewBrief] = useState('');

  const filtered = assignments.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.courseCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = selectedCourseFilter === 'All' || a.courseCode === selectedCourseFilter;
    const matchesStatus = selectedStatusFilter === 'All' || a.gradingStatus === selectedStatusFilter;
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const created: AppAssignment = {
      id: `asgn-${Date.now()}`,
      title: newTitle,
      courseCode: newCourse,
      courseName: newCourse === 'EDU 204' ? 'Learning Design' : 'Spatial Thinking',
      dueDate: newDueDate,
      dueTime: '23:59',
      submissionsCount: 0,
      totalStudents: 142,
      completionRate: 0,
      gradingStatus: 'Pending',
      priority: 'Medium',
      brief: newBrief || 'Standard assignment brief.',
      instructions: 'Upload submission before the due time.',
      rubric: [{ criteria: 'Content Rigor', weight: 100, points: 100 }]
    };

    setAssignments([created, ...assignments]);
    setShowCreateModal(false);
    setNewTitle('');
  };

  return (
    <div className="hub-page-container">
      {/* Category & Header */}
      <div className="hub-page-header flex-between flex-wrap gap-4">
        <div>
          <span className="section-category-label text-amber">Assessment studio</span>
          <h1 className="hub-page-title">Assignments</h1>
          <p className="hub-page-subtitle">
            Coordinate briefs, submissions, rubrics, feedback, and grading across every course.
          </p>
        </div>
        <button className="btn-hub-primary" onClick={() => setShowCreateModal(true)}>
          <Plus size={16} /> Create assignment
        </button>
      </div>

      {/* SEARCH & FILTERS TOOLBAR */}
      <div className="hub-toolbar-card flex-between flex-wrap gap-4" style={{ margin: '1.5rem 0' }}>
        <div className="hub-search-input-box flex-align gap-2">
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Search assignments..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="hub-filter-controls flex-align gap-3 flex-wrap">
          <div className="filter-select-group">
            <span className="filter-label-text">Course:</span>
            <select value={selectedCourseFilter} onChange={(e) => setSelectedCourseFilter(e.target.value)}>
              <option value="All">All Courses</option>
              <option value="EDU 204">EDU 204</option>
              <option value="ARC 118">ARC 118</option>
              <option value="COM 210">COM 210</option>
            </select>
          </div>

          <div className="filter-select-group">
            <span className="filter-label-text">Grading Status:</span>
            <select value={selectedStatusFilter} onChange={(e) => setSelectedStatusFilter(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="Graded">Graded</option>
              <option value="In Review">In Review</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* ASSIGNMENTS TABLE */}
      <div className="hub-content-panel">
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Assignment Brief</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Submissions</th>
                <th>Completion Rate</th>
                <th>Avg Grade</th>
                <th>Grading Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((asgn) => (
                <tr key={asgn.id} className="table-row-hover">
                  <td>
                    <strong>{asgn.title}</strong>
                    <span className="cell-subtext">{asgn.brief}</span>
                  </td>
                  <td><span className="course-code-pill-sm">{asgn.courseCode}</span></td>
                  <td><span className="text-xs text-muted flex-align gap-1"><Clock size={12} /> {asgn.dueDate} ({asgn.dueTime})</span></td>
                  <td><strong>{asgn.submissionsCount} / {asgn.totalStudents}</strong></td>
                  <td>
                    <div className="progress-cell-wrapper" style={{ width: '110px' }}>
                      <span className="text-xs font-bold">{asgn.completionRate}%</span>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${asgn.completionRate}%`, background: '#ea580c' }} />
                      </div>
                    </div>
                  </td>
                  <td>
                    {asgn.averageGrade ? (
                      <strong className="text-emerald">{asgn.averageGrade}%</strong>
                    ) : (
                      <span className="text-muted text-xs">N/A</span>
                    )}
                  </td>
                  <td>
                    <span className={`status-pill ${
                      asgn.gradingStatus === 'Graded' ? 'status-green' : 
                      asgn.gradingStatus === 'In Review' ? 'status-indigo' : 'status-amber'
                    }`}>
                      {asgn.gradingStatus}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="btn-ghost-sm text-indigo"
                      onClick={() => setSelectedAssignmentDetail(asgn)}
                    >
                      Review Brief <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ASSIGNMENT DETAIL MODAL */}
      {selectedAssignmentDetail && (
        <div className="modal-overlay active" onClick={() => setSelectedAssignmentDetail(null)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <div>
                <span className="course-code-pill-sm" style={{ marginBottom: '0.3rem', display: 'inline-block' }}>{selectedAssignmentDetail.courseCode}</span>
                <h2 className="modal-title">{selectedAssignmentDetail.title}</h2>
              </div>
              <button className="toast-close-btn" onClick={() => setSelectedAssignmentDetail(null)}><X size={18} /></button>
            </div>

            <div className="modal-body-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="rec-box-item">
                <strong className="text-xs text-indigo block">BRIEF SPECIFICATION</strong>
                <p className="text-xs text-primary" style={{ marginTop: '0.3rem' }}>{selectedAssignmentDetail.brief}</p>
                <p className="text-xs text-muted" style={{ marginTop: '0.3rem' }}>{selectedAssignmentDetail.instructions}</p>
              </div>

              {/* Rubric Breakdown */}
              <div>
                <h4 className="detail-section-title" style={{ marginBottom: '0.5rem' }}>Evaluation Rubric</h4>
                <div className="rubric-stack">
                  {selectedAssignmentDetail.rubric.map((r, idx) => (
                    <div key={idx} className="flex-between text-xs font-semibold p-2 border-subtle" style={{ background: '#f8fafc', borderRadius: '6px', marginBottom: '0.3rem' }}>
                      <span>{r.criteria}</span>
                      <strong className="text-indigo">Weight: {r.weight}% ({r.points} pts)</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex-between" style={{ marginTop: '1rem' }}>
                <div className="flex-align gap-2">
                  <button className="btn-secondary-sm flex-align gap-1"><Edit3 size={14} /> Edit</button>
                  <button className="btn-secondary-sm flex-align gap-1"><Send size={14} /> Provide feedback</button>
                </div>
                <button className="btn-hub-primary" onClick={() => setSelectedAssignmentDetail(null)}>
                  Review submissions ({selectedAssignmentDetail.submissionsCount})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CREATE ASSIGNMENT MODAL */}
      {showCreateModal && (
        <div className="modal-overlay active" onClick={() => setShowCreateModal(false)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title" style={{ marginBottom: '1rem' }}>Create Assignment Brief</h2>
            <form onSubmit={handleCreateSubmit} className="modal-body-form">
              <div className="form-group">
                <label className="form-label">Course</label>
                <select className="form-control" value={newCourse} onChange={(e) => setNewCourse(e.target.value)}>
                  <option value="EDU 204">EDU 204 — Learning Design</option>
                  <option value="ARC 118">ARC 118 — Spatial Thinking</option>
                  <option value="COM 210">COM 210 — Academic Writing</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Assignment Title *</label>
                <input type="text" className="form-control" placeholder="e.g. Research Methods Reflection 03" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Due Date</label>
                <input type="text" className="form-control" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Brief Description</label>
                <textarea className="form-control" rows={3} placeholder="Submission brief instructions..." value={newBrief} onChange={(e) => setNewBrief(e.target.value)} />
              </div>
              <div className="modal-footer flex-end gap-3" style={{ marginTop: '1.5rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button type="submit" className="btn-hub-primary">Publish Brief</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
