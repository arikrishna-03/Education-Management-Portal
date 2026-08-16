import React, { useState } from 'react';
import { 
  FileCheck, 
  Search, 
  Plus, 
  Clock, 
  CheckCircle2, 
  Award, 
  ChevronRight, 
  FileText,
  Percent
} from 'lucide-react';
import { Assignment } from '../types';

interface AssignmentsViewProps {
  assignments: Assignment[];
  onCreateAssignment: () => void;
  onGradeAssignment: (assignment: Assignment) => void;
}

export const AssignmentsView: React.FC<AssignmentsViewProps> = ({
  assignments,
  onCreateAssignment,
  onGradeAssignment
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedRubric, setSelectedRubric] = useState('All');

  const filteredAssignments = assignments.filter((asgn) => {
    const matchesSearch = 
      asgn.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asgn.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asgn.courseTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'All' || asgn.gradingStatus === selectedStatus;
    const matchesRubric = selectedRubric === 'All' || asgn.rubricStatus === selectedRubric;

    return matchesSearch && matchesStatus && matchesRubric;
  });

  return (
    <div className="view-page-container">
      {/* Page Header */}
      <div className="view-page-header">
        <div>
          <h1 className="page-title">Assessment Studio & Assignment Engine</h1>
          <p className="page-subtitle">Design rubric-backed coursework, track submission progress, grade student solutions, and deliver instant academic feedback.</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary" onClick={onCreateAssignment}>
            <Plus size={18} /> Create Assignment Brief
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-search-input">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            placeholder="Search assignment title, code, or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls-group">
          <div className="filter-select-wrapper">
            <span className="filter-label">Grading Status:</span>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="In Review">In Review</option>
              <option value="Pending">Pending</option>
              <option value="Graded">Graded</option>
            </select>
          </div>

          <div className="filter-select-wrapper">
            <span className="filter-label">Rubric:</span>
            <select value={selectedRubric} onChange={(e) => setSelectedRubric(e.target.value)}>
              <option value="All">All Rubric States</option>
              <option value="Attached">Attached</option>
              <option value="Draft">Draft</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
      </div>

      {/* Assignment Cards List */}
      <div className="assignment-cards-list">
        {filteredAssignments.length === 0 ? (
          <div className="empty-state-card col-span-full">
            <FileCheck size={40} className="text-muted" />
            <h3>No assignments match your search filter</h3>
            <p>Try resetting filters or create a new assignment brief.</p>
          </div>
        ) : (
          filteredAssignments.map((asgn) => (
            <div key={asgn.id} className="asgn-card-row">
              <div className="asgn-card-main">
                <div className="asgn-card-header">
                  <span className="course-code-pill">{asgn.courseCode}</span>
                  <span className={`status-pill ${
                    asgn.gradingStatus === 'Graded' ? 'status-green' : 
                    asgn.gradingStatus === 'In Review' ? 'status-amber' : 'status-indigo'
                  }`}>
                    {asgn.gradingStatus}
                  </span>
                  <span className="rubric-badge">
                    <FileText size={12} /> Rubric {asgn.rubricStatus}
                  </span>
                </div>

                <h3 className="asgn-card-title">{asgn.title}</h3>
                <p className="asgn-card-desc">{asgn.description}</p>

                <div className="asgn-meta-row flex-align gap-4">
                  <span className="meta-item flex-align gap-1">
                    <Clock size={14} className="text-indigo" /> Due Date: <strong>{asgn.dueDate}</strong>
                  </span>
                  <span className="meta-item flex-align gap-1">
                    <Award size={14} className="text-emerald" /> Cohort Avg: <strong>{asgn.averageGrade > 0 ? `${asgn.averageGrade}%` : 'N/A'}</strong>
                  </span>
                </div>
              </div>

              {/* Progress & Actions Section */}
              <div className="asgn-card-side">
                <div className="asgn-progress-box">
                  <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                    <span className="text-muted">Submissions</span>
                    <strong>{asgn.submissionsCount} / {asgn.totalStudents} ({asgn.completionPercentage}%)</strong>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${asgn.completionPercentage}%` }} 
                    />
                  </div>
                </div>

                <button 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => onGradeAssignment(asgn)}
                >
                  Review & Grade Submissions <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
