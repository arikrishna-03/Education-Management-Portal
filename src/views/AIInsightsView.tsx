import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  BookOpen, 
  ChevronRight, 
  ArrowRight,
  Filter,
  RefreshCw
} from 'lucide-react';
import { AIInsight, Student, Course } from '../types';

interface AIInsightsViewProps {
  insights: AIInsight[];
  onResolveInsight: (id: string) => void;
  onReviewStudent: (studentName: string) => void;
  onReviewCourse: (courseCode: string) => void;
}

export const AIInsightsView: React.FC<AIInsightsViewProps> = ({
  insights,
  onResolveInsight,
  onReviewStudent,
  onReviewCourse
}) => {
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'active' | 'resolved' | 'all'>('active');

  const filteredInsights = insights.filter((item) => {
    const matchesPriority = priorityFilter === 'All' || item.priority === priorityFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesPriority && matchesStatus;
  });

  const activeCount = insights.filter(i => i.status === 'active').length;

  return (
    <div className="view-page-container">
      {/* Executive AI Network Summary Banner */}
      <div className="ai-summary-banner">
        <div className="ai-summary-icon">
          <Brain size={32} className="text-indigo" />
        </div>
        <div className="ai-summary-content">
          <span className="ai-badge-header"><Sparkles size={14} /> AI Intelligence Network Summary</span>
          <h2 className="ai-summary-headline">
            “The learning network is moving in a good direction. The cohort has improved 8.4% this term. Three students may benefit from an earlier mentoring touchpoint.”
          </h2>
          <p className="ai-summary-subtext">
            Continuous background diagnostics active across {activeCount} unhandled risk parameters. AI telemetry last computed 4 minutes ago.
          </p>
        </div>
      </div>

      {/* Page Controls & Filters */}
      <div className="filter-bar">
        <div className="flex-align gap-2">
          <h3 className="card-title" style={{ margin: 0 }}>AI Prescriptive Diagnostic Center</h3>
          <span className="badge-indigo-light">{activeCount} Active Insights</span>
        </div>

        <div className="filter-controls-group">
          <div className="filter-select-wrapper">
            <span className="filter-label">Priority:</span>
            <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
              <option value="All">All Priorities</option>
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>

          <div className="filter-select-wrapper">
            <span className="filter-label">Status:</span>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)}>
              <option value="active">Active ({activeCount})</option>
              <option value="resolved">Resolved</option>
              <option value="all">All Insights</option>
            </select>
          </div>
        </div>
      </div>

      {/* Insights Cards List */}
      <div className="insights-grid">
        {filteredInsights.length === 0 ? (
          <div className="empty-state-card col-span-full">
            <CheckCircle2 size={44} className="text-emerald" />
            <h3>No Active AI Risk Alerts</h3>
            <p>All identified learning gaps and attendance concerns have been reviewed and resolved.</p>
          </div>
        ) : (
          filteredInsights.map((insight) => {
            const isHigh = insight.priority === 'High';
            const isMedium = insight.priority === 'Medium';

            return (
              <div 
                key={insight.id} 
                className={`insight-card ${insight.status === 'resolved' ? 'insight-resolved' : ''}`}
              >
                <div className="insight-card-header">
                  <div className="flex-align gap-2">
                    <span className={`priority-badge ${isHigh ? 'prio-high' : isMedium ? 'prio-med' : 'prio-low'}`}>
                      {insight.priority} Priority
                    </span>
                    <span className="target-type-badge">{insight.targetType}: <strong>{insight.targetName}</strong></span>
                  </div>
                  {insight.status === 'resolved' && (
                    <span className="resolved-pill flex-align gap-1">
                      <CheckCircle2 size={14} /> Resolved
                    </span>
                  )}
                </div>

                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-reason">{insight.reason}</p>

                {/* Supporting Metrics Pills */}
                <div className="supporting-metrics-row">
                  {insight.supportingMetrics.map((m, idx) => (
                    <div key={idx} className="metric-chip">
                      <span className="metric-chip-label">{m.label}:</span>
                      <strong className="metric-chip-val">{m.value}</strong>
                    </div>
                  ))}
                </div>

                {/* Suggested Intervention Box */}
                <div className="intervention-box">
                  <div className="flex-align gap-2 text-indigo text-xs font-semibold" style={{ marginBottom: '0.3rem' }}>
                    <Sparkles size={14} /> RECOMMENDED ADMINISTRATIVE INTERVENTION
                  </div>
                  <p className="intervention-text">{insight.suggestedIntervention}</p>
                </div>

                {/* Card Action Buttons */}
                <div className="insight-card-actions">
                  <button 
                    className="btn-primary-sm"
                    onClick={() => {
                      if (insight.targetType === 'Student') {
                        onReviewStudent(insight.targetName);
                      } else {
                        onReviewCourse(insight.targetName);
                      }
                    }}
                  >
                    Review Profile <ArrowRight size={14} />
                  </button>

                  {insight.status === 'active' && (
                    <button 
                      className="btn-ghost-sm text-emerald"
                      onClick={() => onResolveInsight(insight.id)}
                    >
                      <CheckCircle2 size={14} /> Mark as Resolved
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
