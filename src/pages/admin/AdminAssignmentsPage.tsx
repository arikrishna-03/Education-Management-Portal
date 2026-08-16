import React, { useState } from 'react';
import { FileCheck, Search, Filter, Clock, AlertTriangle } from 'lucide-react';

export const AdminAssignmentsPage: React.FC = () => {
  const [courseFilter, setCourseFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const assignmentsList = [
    { id: 'ass-101', course: 'Spatial Thinking (ARC 118)', title: 'Pedestrian Flow Vector Matrix Analysis', teacher: 'Dr. Leila Haddad', dueDate: '24 August 2026', submissionsCount: 44, pendingCount: 4, overdueCount: 0, status: 'Active' },
    { id: 'ass-102', course: 'Spatial Thinking (ARC 118)', title: 'Cognitive Load Reduction Blueprint', teacher: 'Dr. Leila Haddad', dueDate: '10 August 2026', submissionsCount: 48, pendingCount: 0, overdueCount: 0, status: 'Completed' },
    { id: 'ass-103', course: 'Learning Design (EDU 204)', title: 'Pedagogical Frameworks Synthesis', teacher: 'Dr. Sarah Jenkins', dueDate: '18 August 2026', submissionsCount: 38, pendingCount: 14, overdueCount: 6, status: 'Overdue Warning' },
    { id: 'ass-104', course: 'Applied AI (CS 312)', title: 'Tensor Backpropagation Draft', teacher: 'Prof. Marcus Vance', dueDate: '02 September 2026', submissionsCount: 22, pendingCount: 20, overdueCount: 0, status: 'Active' }
  ];

  return (
    <div className="academia-page">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>MODULE 4 · ASSIGNMENT MONITORING</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Manage Assignments
          </h1>
          <p className="meta-text" style={{ color: '#C7C4BC' }}>
            Track system-wide course assignments, teacher postings, submission deadlines, and AI feedback logs.
          </p>
        </div>
      </div>

      {/* OVERVIEW METRICS BANNER CARD */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', marginBottom: '2rem', padding: '1.5rem 2rem' }}>
        <div className="flex-between flex-wrap gap-4">
          <div>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>ASSIGNMENTS MONITORING</span>
            <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#F5EFE3', margin: 0 }}>342 Active Assignments</h2>
          </div>

          <div className="flex-align gap-4">
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Pending Submissions</span>
              <strong className="font-serif text-gold" style={{ fontSize: '1.4rem' }}>1,284</strong>
            </div>
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Overdue Papers</span>
              <strong className="font-serif text-crimson" style={{ fontSize: '1.4rem' }}>86</strong>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS ROW */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
        <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #1B3045' }}>
          <div className="flex-align gap-3 flex-wrap">
            <span className="text-xs text-muted">Filter Course:</span>
            <select 
              className="editorial-select-thin"
              style={{ width: '220px', padding: '0.4rem 0.8rem' }}
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
            >
              <option value="All">All Courses</option>
              <option value="ARC 118">ARC 118 (Spatial Thinking)</option>
              <option value="EDU 204">EDU 204 (Learning Design)</option>
              <option value="CS 312">CS 312 (Applied AI)</option>
            </select>
          </div>

          <div className="flex-align gap-2">
            <span className="text-xs text-muted">Status:</span>
            {['All', 'Active', 'Overdue Warning', 'Completed'].map((st) => (
              <button
                key={st}
                className={`btn-secondary-sm text-xs ${statusFilter === st ? 'text-gold' : ''}`}
                style={{ borderColor: statusFilter === st ? '#F1BA4B' : '#1B3045' }}
                onClick={() => setStatusFilter(st)}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* ASSIGNMENT CARDS LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {assignmentsList.map((ass) => (
            <div key={ass.id} className="flex-between flex-wrap gap-3" style={{ background: '#0B192A', padding: '1.2rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
              <div>
                <span className="micro-eyebrow" style={{ fontSize: '0.65rem', color: '#A78BFA' }}>{ass.course} · {ass.teacher}</span>
                <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.1rem 0' }}>{ass.title}</h4>
                <span className="text-xs text-muted">Due Date: <strong>{ass.dueDate}</strong></span>
              </div>

              <div className="flex-align gap-4 flex-wrap">
                <div className="text-right">
                  <span className="text-xs text-muted block">Submissions Rate</span>
                  <strong className="text-xs text-emerald">{ass.submissionsCount} Submitted</strong>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted block">Pending</span>
                  <strong className="text-xs text-gold">{ass.pendingCount} Pending</strong>
                </div>

                <span className={`text-xs font-bold ${ass.overdueCount > 0 ? 'text-crimson' : 'text-emerald'}`}>
                  ● {ass.status}
                </span>

                <button className="btn-secondary-sm text-xs">INSPECT SUBMISSIONS</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
