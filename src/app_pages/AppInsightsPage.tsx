import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  BookOpen, 
  X, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { MOCK_APP_AI_INSIGHTS, AppAIInsight } from '../data/academicHubData';

export const AppInsightsPage: React.FC = () => {
  const [selectedInsightDetail, setSelectedInsightDetail] = useState<AppAIInsight | null>(null);
  const [insightsList, setInsightsList] = useState<AppAIInsight[]>(MOCK_APP_AI_INSIGHTS);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const handleResolveInsight = (id: string) => {
    setInsightsList(prev => prev.map(ins => ins.id === id ? { ...ins, status: 'Resolved' } : ins));
    setSelectedInsightDetail(null);
  };

  const filtered = insightsList.filter((ins) => {
    if (filterCategory === 'All') return true;
    return ins.category === filterCategory;
  });

  return (
    <div className="hub-page-container">
      {/* Category & Header */}
      <div className="hub-page-header">
        <span className="section-category-label text-purple">AI learning intelligence</span>
        <h1 className="hub-page-title">Insights center</h1>
        <p className="hub-page-subtitle">
          Turn attendance, assessment, and engagement signals into humane, actionable academic recommendations.
        </p>
      </div>

      {/* TOP SUMMARY OVERVIEW */}
      <div className="hub-content-panel" style={{ margin: '1.5rem 0', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', color: '#fff' }}>
        <div className="flex-align gap-2" style={{ marginBottom: '1rem' }}>
          <Sparkles size={20} className="text-cyan" />
          <h3 className="panel-title text-cyan" style={{ margin: 0 }}>AI learning overview</h3>
        </div>

        <div className="kpi-grid">
          <div className="h-stat-box" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span className="kpi-label" style={{ color: '#94a3b8' }}>Students Monitored</span>
            <h2 className="kpi-val" style={{ color: '#fff' }}>2,846</h2>
          </div>
          <div className="h-stat-box" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span className="kpi-label" style={{ color: '#94a3b8' }}>Active Signals</span>
            <h2 className="kpi-val text-cyan">18</h2>
          </div>
          <div className="h-stat-box" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span className="kpi-label" style={{ color: '#94a3b8' }}>High-Priority Alerts</span>
            <h2 className="kpi-val text-amber">5</h2>
          </div>
          <div className="h-stat-box" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span className="kpi-label" style={{ color: '#94a3b8' }}>Improving Students</span>
            <h2 className="kpi-val text-emerald">142</h2>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="modal-tabs" style={{ marginBottom: '1.5rem' }}>
        <button className={`modal-tab-btn ${filterCategory === 'All' ? 'active' : ''}`} onClick={() => setFilterCategory('All')}>All Signals ({insightsList.length})</button>
        <button className={`modal-tab-btn ${filterCategory === 'At-Risk' ? 'active' : ''}`} onClick={() => setFilterCategory('At-Risk')}>At-Risk Students</button>
        <button className={`modal-tab-btn ${filterCategory === 'Learning Gap' ? 'active' : ''}`} onClick={() => setFilterCategory('Learning Gap')}>Learning Gaps</button>
        <button className={`modal-tab-btn ${filterCategory === 'Performance' ? 'active' : ''}`} onClick={() => setFilterCategory('Performance')}>Performance Analysis</button>
      </div>

      {/* AI INSIGHT CARDS GRID */}
      <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
        {filtered.map((ins) => (
          <div key={ins.id} className="hub-content-panel border-purple">
            <div className="flex-between" style={{ marginBottom: '0.6rem' }}>
              <span className={`status-pill ${
                ins.priority === 'High' ? 'status-amber' : 'status-indigo'
              }`}>
                {ins.category} • {ins.priority} Priority
              </span>
              {ins.status === 'Resolved' && <span className="status-pill status-green">Resolved</span>}
            </div>

            <h3 className="panel-title">{ins.title}</h3>
            <p className="text-xs text-muted" style={{ margin: '0.4rem 0 0.8rem' }}>Target: <strong>{ins.targetStudent}</strong></p>

            <div className="rec-box-item" style={{ marginBottom: '1rem' }}>
              <strong className="text-xs text-indigo block">REASON & EVIDENCE</strong>
              <p className="text-xs text-primary" style={{ marginTop: '0.2rem' }}>{ins.reason}</p>
            </div>

            <div className="flex-between">
              <span className="text-xs font-semibold text-emerald">Intervention: {ins.recommendedAction.slice(0, 40)}...</span>
              <button className="btn-hub-primary text-xs" onClick={() => setSelectedInsightDetail(ins)}>
                Review Signal
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* STUDY RECOMMENDATIONS CARD */}
      <div className="hub-content-panel">
        <h3 className="panel-title flex-align gap-2 text-indigo">
          <BookOpen size={18} /> Automated Study Recommendations
        </h3>
        <p className="text-xs text-muted" style={{ marginBottom: '1rem' }}>Actionable interventions compiled for academic leadership.</p>

        <div className="study-rec-list">
          <div className="rec-box-item flex-align gap-3">
            <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
            <div>
              <strong className="text-sm font-bold text-primary">Recommend two additional practice sessions for research methods.</strong>
              <p className="text-xs text-muted">Targeted at first-year students with hypothesis testing error gaps.</p>
            </div>
          </div>

          <div className="rec-box-item flex-align gap-3">
            <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
            <div>
              <strong className="text-sm font-bold text-primary">Schedule a mentoring touchpoint for students with declining engagement.</strong>
              <p className="text-xs text-muted">Triggered for students with attendance drop &gt; 15%.</p>
            </div>
          </div>

          <div className="rec-box-item flex-align gap-3">
            <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
            <div>
              <strong className="text-sm font-bold text-primary">Open a focused study studio for first-year students.</strong>
              <p className="rec-desc text-xs text-muted">Scheduled for Wednesday afternoons in Learning Commons.</p>
            </div>
          </div>
        </div>
      </div>

      {/* INSIGHT DETAIL SLIDE-OUT / MODAL */}
      {selectedInsightDetail && (
        <div className="modal-overlay active" onClick={() => setSelectedInsightDetail(null)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <div>
                <span className="badge-purple-light">{selectedInsightDetail.category} SIGNAL</span>
                <h2 className="modal-title" style={{ marginTop: '0.3rem' }}>{selectedInsightDetail.title}</h2>
              </div>
              <button className="toast-close-btn" onClick={() => setSelectedInsightDetail(null)}><X size={18} /></button>
            </div>

            <div className="modal-body-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="rec-box-item">
                <strong className="text-xs text-indigo block">WHY THIS MATTERS</strong>
                <p className="text-xs text-primary" style={{ marginTop: '0.2rem' }}>{selectedInsightDetail.reason}</p>
              </div>

              <div className="rec-box-item">
                <strong className="text-xs text-cyan block">SUPPORTING DATA & EVIDENCE</strong>
                <p className="text-xs text-primary" style={{ marginTop: '0.2rem' }}>{selectedInsightDetail.evidence}</p>
              </div>

              <div className="rec-box-item">
                <strong className="text-xs text-emerald block">RECOMMENDED INTERVENTION & EXPECTED OUTCOME</strong>
                <p className="text-xs text-primary" style={{ marginTop: '0.2rem' }}>{selectedInsightDetail.recommendedAction}</p>
                <span className="text-xs text-muted block" style={{ marginTop: '0.2rem' }}>Expected Outcome: {selectedInsightDetail.expectedOutcome}</span>
              </div>

              {/* Actions */}
              <div className="flex-between" style={{ marginTop: '1rem' }}>
                <button className="btn-secondary" onClick={() => setSelectedInsightDetail(null)}>Dismiss</button>
                <div className="flex-align gap-2">
                  <button className="btn-hub-primary" onClick={() => handleResolveInsight(selectedInsightDetail.id)}>
                    <CheckCircle2 size={16} /> Mark Resolved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
