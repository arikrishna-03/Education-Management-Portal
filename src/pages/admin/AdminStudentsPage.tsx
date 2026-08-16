import React, { useState } from 'react';
import { Users, Search, Plus, Edit2, UserX, CheckCircle2, AlertTriangle, Eye, X } from 'lucide-react';

export const AdminStudentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'At Risk' | 'Inactive'>('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  // Initial Student List State
  const [students, setStudents] = useState([
    { id: 'STU-9821', name: 'Amina Rahman', email: 'amina.rahman@academic.edu', program: 'B.Arch Spatial Design', coursesCount: 4, attendance: '92%', assignmentsPct: '89%', gpa: '3.78', status: 'Active' },
    { id: 'STU-9822', name: 'Julian Vance', email: 'julian.vance@academic.edu', program: 'B.Arch Spatial Design', coursesCount: 3, attendance: '68%', assignmentsPct: '62%', gpa: '2.45', status: 'At Risk' },
    { id: 'STU-9823', name: 'Claire Dupont', email: 'claire.dupont@academic.edu', program: 'Pedagogical Frameworks', coursesCount: 4, attendance: '96%', assignmentsPct: '94%', gpa: '3.92', status: 'Active' },
    { id: 'STU-9824', name: 'Siddharth Patel', email: 'siddharth.patel@academic.edu', program: 'Applied AI & CS', coursesCount: 5, attendance: '88%', assignmentsPct: '85%', gpa: '3.50', status: 'Active' },
    { id: 'STU-9825', name: 'Elena Rostova', email: 'elena.rostova@academic.edu', program: 'Pedagogical Frameworks', coursesCount: 0, attendance: '0%', assignmentsPct: '0%', gpa: '0.00', status: 'Inactive' }
  ]);

  // Form State
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentProgram, setNewStudentProgram] = useState('B.Arch Spatial Design');

  const activeCount = students.filter(s => s.status === 'Active' || s.status === 'At Risk').length;
  const inactiveCount = students.filter(s => s.status === 'Inactive').length;

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName || !newStudentEmail) return;

    const newStudent = {
      id: `STU-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newStudentName,
      email: newStudentEmail,
      program: newStudentProgram,
      coursesCount: 3,
      attendance: '100%',
      assignmentsPct: '100%',
      gpa: '4.00',
      status: 'Active'
    };

    setStudents([newStudent, ...students]);
    setNewStudentName('');
    setNewStudentEmail('');
    setShowAddModal(false);
  };

  const handleToggleDeactivate = (id: string) => {
    setStudents(students.map(s => {
      if (s.id === id) {
        return { ...s, status: s.status === 'Inactive' ? 'Active' : 'Inactive' };
      }
      return s;
    }));
  };

  return (
    <div className="academia-page">
      {/* HEADER & SUMMARY CARD */}
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>MODULE 1 · STUDENT MANAGEMENT</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Manage Students
          </h1>
          <p className="meta-text" style={{ color: '#C7C4BC' }}>
            System-wide student administration: view profiles, track attendance and grades, add or deactivate accounts.
          </p>
        </div>

        <button 
          className="btn-editorial-primary text-xs"
          onClick={() => setShowAddModal(true)}
        >
          + ADD NEW STUDENT
        </button>
      </div>

      {/* OVERVIEW METRICS BANNER CARD */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', marginBottom: '2rem', padding: '1.5rem 2rem' }}>
        <div className="flex-between flex-wrap gap-4">
          <div>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>TOTAL REGISTERED STUDENTS</span>
            <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#F5EFE3', margin: 0 }}>2,846 Students</h2>
          </div>

          <div className="flex-align gap-4">
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Active Students</span>
              <strong className="font-serif text-emerald" style={{ fontSize: '1.4rem' }}>{activeCount} (2,710)</strong>
            </div>
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Inactive / Suspended</span>
              <strong className="font-serif text-crimson" style={{ fontSize: '1.4rem' }}>{inactiveCount} (136)</strong>
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
              placeholder="Search by student name, ID, or email..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: '#0B192A', border: '1px solid #1B3045', padding: '0.55rem 0.8rem', fontSize: '0.85rem', color: '#F5EFE3', borderRadius: '6px', width: '100%' }}
            />
          </div>

          <div className="flex-align gap-2">
            <span className="text-xs text-muted">Filter Status:</span>
            {(['All', 'Active', 'At Risk', 'Inactive'] as const).map((st) => (
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

        {/* STUDENT ROSTER LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {filteredStudents.map((s) => (
            <div key={s.id} className="flex-between flex-wrap gap-3" style={{ background: '#0B192A', padding: '1.2rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
              <div>
                <div className="flex-align gap-2">
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem', color: '#A78BFA' }}>{s.id}</span>
                  <span className="text-xs text-muted">· {s.program}</span>
                </div>
                <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.1rem 0' }}>{s.name}</h4>
                <span className="text-xs text-muted">{s.email}</span>
              </div>

              <div className="flex-align gap-4 flex-wrap">
                <div className="text-right">
                  <span className="text-xs text-muted block">Enrolled Courses</span>
                  <strong className="text-xs" style={{ color: '#F5EFE3' }}>{s.coursesCount} Courses</strong>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted block">Attendance</span>
                  <strong className="text-xs text-emerald">{s.attendance}</strong>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted block">GPA Record</span>
                  <strong className="text-xs text-gold">{s.gpa}</strong>
                </div>

                <span className={`text-xs font-bold ${s.status === 'At Risk' ? 'text-crimson' : s.status === 'Inactive' ? 'text-muted' : 'text-emerald'}`}>
                  ● {s.status}
                </span>

                <div className="flex-align gap-2">
                  <button 
                    className="btn-secondary-sm text-xs"
                    onClick={() => setSelectedStudent(s)}
                  >
                    <Eye size={14} /> Profile
                  </button>
                  <button 
                    className="btn-secondary-sm text-xs text-crimson"
                    onClick={() => handleToggleDeactivate(s.id)}
                  >
                    {s.status === 'Inactive' ? 'Activate' : 'Deactivate'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ADD STUDENT MODAL */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.5rem', maxWidth: '520px' }}>
            <div className="flex-between" style={{ marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid #1B3045' }}>
              <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', margin: 0 }}>Add New Student</h3>
              <button onClick={() => setShowAddModal(false)}><X size={20} className="text-muted" /></button>
            </div>

            <form onSubmit={handleAddStudent} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
              <div className="form-group-editorial">
                <label className="editorial-label">Full Name *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="e.g. Maya Lin"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Email Address *</label>
                <input 
                  type="email" 
                  className="editorial-input-thin" 
                  placeholder="maya.lin@academic.edu"
                  value={newStudentEmail}
                  onChange={(e) => setNewStudentEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label">Program *</label>
                <select 
                  className="editorial-select-thin"
                  value={newStudentProgram}
                  onChange={(e) => setNewStudentProgram(e.target.value)}
                >
                  <option value="B.Arch Spatial Design">B.Arch Spatial Design</option>
                  <option value="Pedagogical Frameworks">Pedagogical Frameworks</option>
                  <option value="Applied AI & CS">Applied AI & CS</option>
                </select>
              </div>

              <button type="submit" className="btn-editorial-primary w-full" style={{ marginTop: '1rem' }}>
                REGISTER STUDENT →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VIEW STUDENT PROFILE MODAL */}
      {selectedStudent && (
        <div className="modal-overlay" onClick={() => setSelectedStudent(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.5rem', maxWidth: '560px' }}>
            <div className="flex-between" style={{ marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid #1B3045' }}>
              <div>
                <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>{selectedStudent.id}</span>
                <h3 className="sub-serif-title" style={{ fontSize: '1.8rem', color: '#F5EFE3', margin: 0 }}>{selectedStudent.name}</h3>
              </div>
              <button onClick={() => setSelectedStudent(null)}><X size={20} className="text-muted" /></button>
            </div>

            <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div className="spec-item flex-between text-sm">
                <span className="text-muted">Email Address</span>
                <strong style={{ color: '#F5EFE3' }}>{selectedStudent.email}</strong>
              </div>
              <div className="spec-item flex-between text-sm">
                <span className="text-muted">Enrolled Program</span>
                <strong style={{ color: '#F5EFE3' }}>{selectedStudent.program}</strong>
              </div>
              <div className="spec-item flex-between text-sm">
                <span className="text-muted">Cumulative GPA</span>
                <strong className="text-gold">{selectedStudent.gpa} / 4.00</strong>
              </div>
              <div className="spec-item flex-between text-sm">
                <span className="text-muted">Attendance Compliance</span>
                <strong className="text-emerald">{selectedStudent.attendance}</strong>
              </div>
              <div className="spec-item flex-between text-sm">
                <span className="text-muted">Assignments Completion</span>
                <strong style={{ color: '#F5EFE3' }}>{selectedStudent.assignmentsPct}</strong>
              </div>
            </div>

            <button className="btn-editorial-primary w-full" onClick={() => setSelectedStudent(null)}>
              CLOSE PROFILE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
