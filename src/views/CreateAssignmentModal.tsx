import React, { useState } from 'react';
import { X, FileCheck, Plus, Trash2 } from 'lucide-react';
import { Assignment, RubricCriteria } from '../types';

interface CreateAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveAssignment: (assignment: Omit<Assignment, 'id' | 'submissionsCount' | 'completionPercentage' | 'averageGrade' | 'submissions'>) => void;
}

export const CreateAssignmentModal: React.FC<CreateAssignmentModalProps> = ({
  isOpen,
  onClose,
  onSaveAssignment
}) => {
  const [courseCode, setCourseCode] = useState('CS-401');
  const [courseTitle, setCourseTitle] = useState('Advanced Machine Learning');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('2026-08-30');
  const [totalStudents, setTotalStudents] = useState(48);
  const [rubricItems, setRubricItems] = useState<RubricCriteria[]>([
    { id: 'r1', title: 'Technical Accuracy & Code Implementation', maxPoints: 50, description: 'Correct execution of algorithm.' },
    { id: 'r2', title: 'Unit Tests & Validation', maxPoints: 50, description: 'Passing all automated test suites.' }
  ]);

  if (!isOpen) return null;

  const handleAddRubricItem = () => {
    setRubricItems([
      ...rubricItems,
      { id: `r-${Date.now()}`, title: 'New Evaluation Criterion', maxPoints: 20, description: 'Details...' }
    ]);
  };

  const handleRemoveRubricItem = (id: string) => {
    setRubricItems(rubricItems.filter(r => r.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSaveAssignment({
      courseCode,
      courseTitle,
      title,
      description,
      dueDate,
      totalStudents,
      gradingStatus: 'Pending',
      rubricStatus: rubricItems.length > 0 ? 'Attached' : 'None',
      rubric: rubricItems
    });

    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title-box">
            <FileCheck className="text-indigo" size={24} />
            <div>
              <h2 className="modal-title">Create New Assessment & Rubric Brief</h2>
              <p className="modal-subtitle">Configure assignment guidelines, due date, submission total, and rubric criteria.</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body-form">
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Course Code</label>
              <input 
                type="text" 
                className="form-control"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Course Title</label>
              <input 
                type="text" 
                className="form-control"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Assignment Title *</label>
            <input 
              type="text" 
              className="form-control"
              placeholder="e.g. Distributed Consensus Protocol Implementation"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input 
                type="date" 
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Target Cohort Student Count</label>
              <input 
                type="number" 
                className="form-control"
                value={totalStudents}
                onChange={(e) => setTotalStudents(Number(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Assignment Brief & Instructions</label>
            <textarea 
              className="form-control"
              rows={3}
              placeholder="Detailed instructions for students..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Rubric Studio */}
          <div className="rubric-studio-box">
            <div className="flex-between" style={{ marginBottom: '0.8rem' }}>
              <h4 className="detail-section-title" style={{ margin: 0 }}>Assessment Rubric Criteria</h4>
              <button type="button" className="btn-secondary-sm" onClick={handleAddRubricItem}>
                <Plus size={14} /> Add Rubric Criterion
              </button>
            </div>

            {rubricItems.map((r, idx) => (
              <div key={r.id} className="rubric-item-row">
                <input 
                  type="text"
                  className="form-control"
                  style={{ flex: 2 }}
                  placeholder="Criterion Title"
                  value={r.title}
                  onChange={(e) => {
                    const newItems = [...rubricItems];
                    newItems[idx].title = e.target.value;
                    setRubricItems(newItems);
                  }}
                />
                <input 
                  type="number"
                  className="form-control"
                  style={{ width: '90px' }}
                  placeholder="Max Pts"
                  value={r.maxPoints}
                  onChange={(e) => {
                    const newItems = [...rubricItems];
                    newItems[idx].maxPoints = Number(e.target.value);
                    setRubricItems(newItems);
                  }}
                />
                <button type="button" className="btn-icon-xs text-crimson" onClick={() => handleRemoveRubricItem(r.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Publish Assignment Brief
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
