import React, { useState } from 'react';
import { Calendar, UserCheck, UserX, Search, CheckCircle2, AlertTriangle, Filter, Plus, Save } from 'lucide-react';

interface StudentAttendanceRecord {
  id: string;
  name: string;
  studentId: string;
  course: string;
  attendanceRate: number;
  status: 'Present' | 'Absent';
}

export const TeacherAttendancePage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('ARC 118');
  const [selectedDate, setSelectedDate] = useState('2026-08-16');
  const [searchQuery, setSearchQuery] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [students, setStudents] = useState<StudentAttendanceRecord[]>([
    { id: '1', name: 'Amina Vance', studentId: 'STU-2026-01', course: 'ARC 118', attendanceRate: 96, status: 'Present' },
    { id: '2', name: 'Julian Thorne', studentId: 'STU-2026-02', course: 'ARC 118', attendanceRate: 92, status: 'Present' },
    { id: '3', name: 'Clara Mercer', studentId: 'STU-2026-03', course: 'ARC 118', attendanceRate: 78, status: 'Absent' },
    { id: '4', name: 'Marcus Brody', studentId: 'STU-2026-04', course: 'ARC 118', attendanceRate: 94, status: 'Present' },
    { id: '5', name: 'Elena Rostova', studentId: 'STU-2026-05', course: 'ARC 118', attendanceRate: 88, status: 'Present' },
    { id: '6', name: 'Devon Sterling', studentId: 'STU-2026-06', course: 'ARC 118', attendanceRate: 82, status: 'Absent' },
    { id: '7', name: 'Sophia Chen', studentId: 'STU-2026-07', course: 'ARC 118', attendanceRate: 98, status: 'Present' },
    { id: '8', name: 'Lucas Hayes', studentId: 'STU-2026-08', course: 'ARC 118', attendanceRate: 90, status: 'Present' }
  ]);

  const toggleStatus = (id: string) => {
    setStudents(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          status: s.status === 'Present' ? 'Absent' : 'Present'
        };
      }
      return s;
    }));
  };

  const handleSaveLogs = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const presentCount = students.filter(s => s.status === 'Present').length;
  const absentCount = students.filter(s => s.status === 'Absent').length;

  return (
    <div className="academia-page">
      {/* 1. PAGE HEADER */}
      <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '2.5rem' }}>
        <div>
          <span className="micro-eyebrow">FACULTY ATTENDANCE MANAGER</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Class Attendance Records
          </h1>
          <p className="meta-text" style={{ fontSize: '1rem', color: '#C7C4BC' }}>
            Verify daily seminar attendance logs, inspect cohort compliance, and flag absences.
          </p>
        </div>

        <button className="btn-editorial-primary text-xs flex-align gap-2" onClick={handleSaveLogs}>
          <Save size={16} /> SAVE ATTENDANCE LOGS →
        </button>
      </div>

      {saveSuccess && (
        <div className="editorial-success-box" style={{ background: '#0B192A', border: '1px solid #2FA36B', padding: '1rem 1.4rem', borderRadius: '10px', marginBottom: '2rem' }}>
          <div className="flex-align gap-2">
            <CheckCircle2 size={20} className="text-emerald" />
            <strong className="text-emerald text-sm">ATTENDANCE LOGS RECORDED & SAVED TO INSTITUTIONAL SYSTEM</strong>
          </div>
        </div>
      )}

      {/* 2. ATTENDANCE KPI SUMMARY CARDS */}
      <div className="grid-4" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>TOTAL COHORT</span>
          <strong className="font-serif text-gold" style={{ fontSize: '2.4rem', display: 'block', margin: '0.2rem 0' }}>{students.length}</strong>
          <span className="text-xs text-muted">Enrolled Seminar Students</span>
        </div>

        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>PRESENT TODAY</span>
          <strong className="font-serif text-emerald" style={{ fontSize: '2.4rem', display: 'block', margin: '0.2rem 0' }}>{presentCount}</strong>
          <span className="text-xs text-emerald">{((presentCount / students.length) * 100).toFixed(1)}% Attendance Rate</span>
        </div>

        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>ABSENT TODAY</span>
          <strong className="font-serif text-crimson" style={{ fontSize: '2.4rem', display: 'block', margin: '0.2rem 0' }}>{absentCount}</strong>
          <span className="text-xs text-crimson">Flagged for Follow-up</span>
        </div>

        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>SEMINAR STATUS</span>
          <strong className="font-serif text-primary" style={{ fontSize: '2.4rem', color: '#F5EFE3', display: 'block', margin: '0.2rem 0' }}>ACTIVE</strong>
          <span className="text-xs text-gold">Tuesday Studio Session</span>
        </div>
      </div>

      {/* 3. FILTERS & SEARCH BAR */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '1.8rem', marginBottom: '2rem' }}>
        <div className="flex-between flex-wrap gap-4">
          
          <div className="flex-align gap-3 flex-wrap flex-1">
            {/* Course Selector */}
            <div style={{ minWidth: '220px' }}>
              <span className="editorial-label" style={{ fontSize: '0.65rem', marginBottom: '0.3rem' }}>COURSE</span>
              <select 
                className="editorial-select-thin"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="ARC 118">ARC 118 — Spatial Thinking & Architecture</option>
                <option value="EDU 204">EDU 204 — Learning Design & Pedagogy</option>
                <option value="COM 210">COM 210 — Academic Writing Synthesis</option>
              </select>
            </div>

            {/* Date Selector */}
            <div style={{ minWidth: '180px' }}>
              <span className="editorial-label" style={{ fontSize: '0.65rem', marginBottom: '0.3rem' }}>SEMINAR DATE</span>
              <input 
                type="date" 
                className="editorial-input-thin"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          {/* Search Box */}
          <div style={{ minWidth: '280px' }}>
            <span className="editorial-label" style={{ fontSize: '0.65rem', marginBottom: '0.3rem' }}>SEARCH STUDENT</span>
            <div className="search-field-minimal">
              <input 
                type="text"
                placeholder="Search student name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-underline"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 4. STUDENT ATTENDANCE ROSTER TABLE */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2rem' }}>
        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
          <div>
            <span className="micro-eyebrow">SEMINAR ROSTER</span>
            <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', margin: 0 }}>
              {selectedCourse} · Seminar Attendance Sheet
            </h3>
          </div>
          <span className="text-xs text-muted font-mono">{filteredStudents.length} STUDENTS LOGGED</span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1B3045', color: '#F1BA4B', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                <th style={{ padding: '0.8rem 1rem' }}>Student Name</th>
                <th style={{ padding: '0.8rem 1rem' }}>Student ID</th>
                <th style={{ padding: '0.8rem 1rem' }}>Course</th>
                <th style={{ padding: '0.8rem 1rem' }}>Term Rate</th>
                <th style={{ padding: '0.8rem 1rem' }}>Status Today</th>
                <th style={{ padding: '0.8rem 1rem', textAlign: 'right' }}>Toggle Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => {
                const isPresent = student.status === 'Present';
                const isLowAttendance = student.attendanceRate < 85;

                return (
                  <tr key={student.id} style={{ borderBottom: '1px solid #1B3045', color: '#C7C4BC' }}>
                    <td style={{ padding: '1rem' }}>
                      <strong style={{ color: '#F5EFE3', fontSize: '0.95rem' }}>{student.name}</strong>
                      {isLowAttendance && (
                        <span className="text-xs text-crimson block font-semibold" style={{ fontSize: '0.68rem' }}>
                          ⚠️ Low Attendance Warning ({student.attendanceRate}%)
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{student.studentId}</td>
                    <td style={{ padding: '1rem' }}>{student.course}</td>
                    <td style={{ padding: '1rem' }}>
                      <strong className={isLowAttendance ? 'text-crimson' : 'text-emerald'}>
                        {student.attendanceRate}%
                      </strong>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      {isPresent ? (
                        <span style={{ background: '#00382E', color: '#2FA36B', border: '1px solid #2FA36B', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                          ✓ PRESENT
                        </span>
                      ) : (
                        <span style={{ background: '#3D0C0C', color: '#E05A5A', border: '1px solid #E05A5A', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                          ✕ ABSENT
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <button 
                        className={isPresent ? 'btn-secondary-sm text-crimson' : 'btn-editorial-primary text-xs'}
                        style={{ padding: '0.4rem 0.9rem', fontSize: '0.75rem' }}
                        onClick={() => toggleStatus(student.id)}
                      >
                        {isPresent ? 'MARK ABSENT' : 'MARK PRESENT'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
