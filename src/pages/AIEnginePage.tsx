import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  BookOpen, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';
import { MOCK_AT_RISK_STUDENTS, MOCK_WEAK_SUBJECTS, User } from '../data/edutrData';

interface AIEnginePageProps {
  currentUser: User;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const AIEnginePage: React.FC<AIEnginePageProps> = ({ currentUser, onTriggerToast }) => {
  return (
    <div className="page-wrapper area-ai-cyan">
      <div className="page-container section-padding">
        {/* Page Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-purple flex-align gap-1">
              <Brain size={16} /> AI ACADEMIC INTELLIGENCE CORE
            </span>
            <h1 className="page-title-lg">AI Learning Diagnostics & Risk Analytics</h1>
            <p className="page-subtitle">Algorithmic analysis identifying at-risk students, subject-level learning gaps, personalized study plans, and intervention briefs.</p>
          </div>
          <div className="header-actions">
            <Link to="/reports" className="btn-ai-primary flex-align gap-2">
              <FileText size={16} /> Reports & Analytics <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* AI Executive Summary Banner */}
        <div className="ai-summary-banner" style={{ margin: '1.5rem 0' }}>
          <div className="ai-summary-icon">
            <Sparkles size={36} className="text-cyan" />
          </div>
          <div className="ai-summary-content">
            <span className="ai-badge-header">AI SYSTEM DIAGNOSTIC BRIEF</span>
            <h2 className="ai-summary-headline">
              “The cohort performance network has improved +8.4% this term. 2 students have been flagged for attendance and lab submission risk.”
            </h2>
            <p className="ai-summary-subtext">
              Real-time heuristic evaluation running across 2,846 student gradebook trajectories.
            </p>
          </div>
        </div>

        {/* Section 1: At-Risk Student Detection */}
        <div className="card-panel-ai" style={{ marginBottom: '2rem' }}>
          <div className="card-header-flex">
            <div>
              <h3 className="card-title text-purple flex-align gap-2">
                <AlertTriangle size={20} className="text-amber" /> At-Risk Student Detection Engine
              </h3>
              <p className="card-subtitle">Automated identification based on attendance drops, late assignments, and exam trends.</p>
            </div>
            <span className="badge-indigo-light">{MOCK_AT_RISK_STUDENTS.length} Flagged Students</span>
          </div>

          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Student ID & Name</th>
                  <th>Department</th>
                  <th>Risk Level</th>
                  <th>Primary Risk Reason</th>
                  <th>Attendance %</th>
                  <th>Avg Grade</th>
                  <th>Recommended Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_AT_RISK_STUDENTS.map((stu) => (
                  <tr key={stu.id}>
                    <td>
                      <strong>{stu.name}</strong>
                      <span className="cell-subtext">{stu.studentId}</span>
                    </td>
                    <td>{stu.department}</td>
                    <td>
                      <span className={`status-pill ${stu.riskLevel === 'High' ? 'status-crimson' : 'status-amber'}`}>
                        {stu.riskLevel} Risk
                      </span>
                    </td>
                    <td><p className="text-xs text-muted" style={{ maxWidth: '240px' }}>{stu.reason}</p></td>
                    <td><span className="text-crimson font-bold">{stu.attendance}%</span></td>
                    <td><strong>{stu.avgGrade}%</strong></td>
                    <td><p className="text-xs font-semibold text-indigo" style={{ maxWidth: '240px' }}>{stu.recommendedAction}</p></td>
                    <td>
                      <button 
                        className="btn-ghost-sm text-emerald"
                        onClick={() => onTriggerToast('success', 'Intervention Allocated', `Advisor appointment scheduled for ${stu.name}.`)}
                      >
                        <CheckCircle2 size={14} /> Resolve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Weak Subject Identification & Study Recommendations */}
        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          <div className="card-panel-ai">
            <h3 className="card-title text-purple flex-align gap-2" style={{ marginBottom: '1rem' }}>
              <Target size={20} className="text-cyan" /> Weak Subject Identification
            </h3>
            <div className="weak-subjects-list">
              {MOCK_WEAK_SUBJECTS.map((subj) => (
                <div key={subj.id} className="weak-subj-card">
                  <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                    <h4 className="subj-title">{subj.subject}</h4>
                    <span className={`status-pill ${subj.score < 70 ? 'status-crimson' : subj.score < 80 ? 'status-amber' : 'status-green'}`}>
                      {subj.status} ({subj.score}%)
                    </span>
                  </div>
                  <p className="subj-rec flex-align gap-2">
                    <Sparkles size={14} className="text-indigo flex-shrink-0" />
                    <span>{subj.recommendation}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Study Recommendations */}
          <div className="card-panel-ai">
            <h3 className="card-title text-purple flex-align gap-2" style={{ marginBottom: '1rem' }}>
              <BookOpen size={20} className="text-emerald" /> AI Personalized Study Recommendations
            </h3>
            <div className="study-rec-list">
              <div className="rec-box-item">
                <h4 className="rec-title">1. Spaced Repetition Flashcard Schedule</h4>
                <p className="rec-desc">Review Transformer Self-Attention matrix projections for 20 minutes daily before Friday's lab exam.</p>
              </div>
              <div className="rec-box-item">
                <h4 className="rec-title">2. Practice Lab: Helm Declarative Schemas</h4>
                <p className="rec-desc">Complete self-paced Kubernetes ingress validation module to bridge the 35% cohort error gap.</p>
              </div>
              <div className="rec-box-item">
                <h4 className="rec-title">3. Faculty Advisor Touchpoint</h4>
                <p className="rec-desc">Schedule a 15-minute consultation with Dr. Sarah Jenkins regarding Cryptography lab attendance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Reports */}
        <div className="card-panel-ai text-center" style={{ padding: '2rem' }}>
          <h3 className="card-title text-purple" style={{ marginBottom: '0.5rem' }}>Synthesize AI Telemetry into Executive Reports</h3>
          <p className="text-muted text-sm" style={{ marginBottom: '1.2rem' }}>Generate institutional PDFs, CSV exports, or print briefs for accreditation boards.</p>
          <Link to="/reports" className="btn-ai-primary" style={{ display: 'inline-flex' }}>
            Open Analytics & Reports Engine <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
