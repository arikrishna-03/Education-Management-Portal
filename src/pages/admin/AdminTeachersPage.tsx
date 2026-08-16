import React, { useState } from 'react';
import { School, Search, Plus, CheckCircle2, AlertCircle, X, UserCheck } from 'lucide-react';

export const AdminTeachersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Pending'>('All');
  const [showAddModal, setShowAddModal] = useState(false);

  const [teachers, setTeachers] = useState([
    { id: 'tch-4401', name: 'Dr. Leila Haddad', email: 'leila.haddad@academic.edu', department: 'Architecture & Spatial Design', institution: 'Academic Institute of London', coursesCount: 2, classesCount: 3, status: 'Active' },
    { id: 'tch-4402', name: 'Dr. Sarah Jenkins', email: 'sarah.jenkins@academic.edu', department: 'Pedagogical Frameworks', institution: 'Academic Institute of London', coursesCount: 1, classesCount: 2, status: 'Active' },
    { id: 'tch-4403', name: 'Prof. Marcus Vance', email: 'marcus.vance@academic.edu', department: 'Computational Neural Systems', institution: 'MIT Media Lab', coursesCount: 1, classesCount: 1, status: 'Pending' }
  ]);

  const [newTeacherName, setNewTeacherName] = useState('');
  const [newTeacherEmail, setNewTeacherEmail] = useState('');
  const [newTeacherDept, setNewTeacherDept] = useState('Architecture & Spatial Design');

  const activeCount = teachers.filter(t => t.status === 'Active').length;
  const pendingCount = teachers.filter(t => t.status === 'Pending').length;

  const filteredTeachers = teachers.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeacherName || !newTeacherEmail) return;

    const newTeacher = {
      id: `tch-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newTeacherName,
      email: newTeacherEmail,
      department: newTeacherDept,
      institution: 'Academic Institute of London',
      coursesCount: 1,
      classesCount: 1,
      status: 'Active'
    };

    setTeachers([newTeacher, ...teachers]);
    setNewTeacherName('');
    setNewTeacherEmail('');
    setShowAddModal(false);
  };

  const handleApprove = (id: string) => {
    setTeachers(teachers.map(t => t.id === id ? { ...t, status: 'Active' } : t));
  };

  return (
    <div className="academia-page">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>MODULE 2 · FACULTY ADMINISTRATION</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Manage Teachers
          </h1>
          <p className="meta-text" style={{ color: '#C7C4BC' }}>
            Faculty members directory, teacher approvals, course assignments, and department performance.
          </p>
        </div>

        <button 
          className="btn-admin-purple text-xs"
          onClick={() => setShowAddModal(false)}
        >
          + ADD NEW TEACHER
        </button>
      </div>

      {/* OVERVIEW METRICS BANNER CARD */}
      <div className="flow-card-panel admin-card-purple" style={{ marginBottom: '2rem', padding: '1.5rem 2rem' }}>
        <div className="flex-between flex-wrap gap-4">
          <div>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>TOTAL FACULTY MEMBERS</span>
            <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#F5EFE3', margin: 0 }}>128 Teachers</h2>
          </div>

          <div className="flex-align gap-4">
            <div style={{ background: '#2A1647', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #7C3AED' }}>
              <span className="text-xs text-muted block" style={{ color: '#F3E8FF' }}>Active Faculty</span>
              <strong className="font-serif text-emerald" style={{ fontSize: '1.4rem' }}>{activeCount} (116)</strong>
            </div>
            <div style={{ background: '#2A1647', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #7C3AED' }}>
              <span className="text-xs text-muted block" style={{ color: '#F3E8FF' }}>Pending Approvals</span>
              <strong className="font-serif text-gold" style={{ fontSize: '1.4rem' }}>{pendingCount} (12)</strong>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS & SEARCH ROW */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
        <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #1B3045' }}>
          <div className="flex-align gap-2 search-field-minimal" style={{ width: '320px' }}>
            <Search size={16} style={{ color: '#8D918F' }} />
            <input 
              type="text" 
              placeholder="Search teacher by name or department..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: '#0B192A', border: '1px solid #1B3045', padding: '0.55rem 0.8rem', fontSize: '0.85rem', color: '#F5EFE3', borderRadius: '6px', width: '100%' }}
            />
          </div>

          <div className="flex-align gap-2">
            <span className="text-xs text-muted">Filter:</span>
            {(['All', 'Active', 'Pending'] as const).map((st) => (
              <button
                key={st}
                className={`btn-secondary-sm text-xs ${statusFilter === st ? 'text-purple' : ''}`}
                style={{ borderColor: statusFilter === st ? '#7C3AED' : '#1B3045' }}
                onClick={() => setStatusFilter(st)}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* TEACHERS ROSTER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {filteredTeachers.map((t) => (
            <div key={t.id} className="flex-between flex-wrap gap-3" style={{ background: '#0B192A', padding: '1.2rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
              <div>
                <span className="micro-eyebrow" style={{ fontSize: '0.65rem', color: '#A78BFA' }}>{t.id} · {t.department}</span>
                <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.1rem 0' }}>{t.name}</h4>
                <span className="text-xs text-muted">{t.email} · {t.institution}</span>
              </div>

              <div className="flex-align gap-4 flex-wrap">
                <div className="text-right">
                  <span className="text-xs text-muted block">Assigned Courses</span>
                  <strong className="text-xs text-gold">{t.coursesCount} Courses</strong>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted block">Assigned Classes</span>
                  <strong className="text-xs text-emerald">{t.classesCount} Classes</strong>
                </div>

                <span className={`text-xs font-bold ${t.status === 'Active' ? 'text-emerald' : 'text-gold'}`}>
                  ● {t.status}
                </span>

                {t.status === 'Pending' ? (
                  <button className="btn-admin-purple text-xs" onClick={() => handleApprove(t.id)}>
                    APPROVE TEACHER →
                  </button>
                ) : (
                  <button className="btn-secondary-sm text-xs">ASSIGN COURSES</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
