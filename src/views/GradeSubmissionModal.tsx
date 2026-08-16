import React, { useState } from 'react';
import { X, Award, CheckCircle2, FileText, Send, Sparkles } from 'lucide-react';
import { Assignment, StudentSubmission } from '../types';
import confetti from 'canvas-confetti';

interface GradeSubmissionModalProps {
  assignment: Assignment | null;
  onClose: () => void;
  onGradeStudent: (assignmentId: string, submissionId: string, score: number, feedback: string) => void;
}

export const GradeSubmissionModal: React.FC<GradeSubmissionModalProps> = ({
  assignment,
  onClose,
  onGradeStudent
}) => {
  const [selectedSub, setSelectedSub] = useState<StudentSubmission | null>(
    assignment && assignment.submissions.length > 0 ? assignment.submissions[0] : null
  );
  const [scoreInput, setScoreInput] = useState<number>(92);
  const [feedbackInput, setFeedbackInput] = useState<string>('Great work on tensor parallelization!');

  if (!assignment) return null;

  const handleSaveGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSub) return;

    onGradeStudent(assignment.id, selectedSub.id, scoreInput, feedbackInput);
    
    // Trigger celebration confetti
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}

    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title-box">
            <span className="course-code-pill">{assignment.courseCode}</span>
            <div>
              <h2 className="modal-title">Submissions & Grading Studio</h2>
              <p className="modal-subtitle">{assignment.title} • Due {assignment.dueDate}</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="grid-1-2">
          {/* Submissions List */}
          <div className="card-panel-inner">
            <h4 className="detail-section-title">Student Submissions</h4>
            <div className="sub-list">
              {assignment.submissions.length === 0 ? (
                <p className="text-muted text-sm" style={{ padding: '1rem' }}>
                  No submissions submitted for review yet.
                </p>
              ) : (
                assignment.submissions.map((sub) => (
                  <div 
                    key={sub.id} 
                    className={`sub-item-card ${selectedSub?.id === sub.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedSub(sub);
                      setScoreInput(sub.score || 90);
                      setFeedbackInput(sub.feedback || 'Excellent execution of rubric specifications.');
                    }}
                  >
                    <img src={sub.studentAvatar} alt={sub.studentName} className="avatar-xs" />
                    <div style={{ flex: 1 }}>
                      <h5 className="sub-name">{sub.studentName}</h5>
                      <span className="sub-time">{sub.submittedAt}</span>
                    </div>
                    <span className={`status-pill ${sub.status === 'Graded' ? 'status-green' : 'status-amber'}`}>
                      {sub.status === 'Graded' ? `${sub.score}/100` : 'Pending'}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Grading Editor */}
          <div className="card-panel-inner">
            {!selectedSub ? (
              <div className="empty-state-box">
                <FileText size={32} className="text-muted" />
                <p className="text-muted">Select a student submission to evaluate and grade.</p>
              </div>
            ) : (
              <form onSubmit={handleSaveGrade}>
                <div className="flex-between" style={{ marginBottom: '1rem' }}>
                  <div>
                    <h3 className="card-title">{selectedSub.studentName}</h3>
                    <span className="text-muted text-xs">Submitted on {selectedSub.submittedAt}</span>
                  </div>
                  <span className="badge-indigo-light">Rubric Attached</span>
                </div>

                <div className="form-group">
                  <label className="form-label">Assign Final Score (0 - 100) *</label>
                  <input 
                    type="number" 
                    min={0}
                    max={100}
                    className="form-control"
                    style={{ fontSize: '1.2rem', fontWeight: 700 }}
                    value={scoreInput}
                    onChange={(e) => setScoreInput(Number(e.target.value))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Detailed Academic Feedback</label>
                  <textarea 
                    className="form-control"
                    rows={4}
                    value={feedbackInput}
                    onChange={(e) => setFeedbackInput(e.target.value)}
                    required
                  />
                </div>

                <div className="rubric-mini-summary">
                  <h5 className="text-xs text-muted" style={{ marginBottom: '0.4rem' }}>RUBRIC CRITERIA EVALUATION</h5>
                  {assignment.rubric.map((r) => (
                    <div key={r.id} className="flex-between text-xs" style={{ marginBottom: '0.3rem' }}>
                      <span>{r.title}</span>
                      <strong>{r.maxPoints} pts max</strong>
                    </div>
                  ))}
                </div>

                <div className="modal-footer" style={{ marginTop: '1.5rem', padding: 0 }}>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} /> Save Grade & Notify Student
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
