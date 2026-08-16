import React, { useState } from 'react';
import { Award, Calendar, Plus, Save, CheckCircle2, Search, Filter, BookOpen, Clock, MapPin } from 'lucide-react';

interface ExamGradeItem {
  id: string;
  studentName: string;
  studentId: string;
  course: string;
  examScore: number;
  gradeLetter: string;
  status: 'Posted' | 'Draft';
}

export const TeacherExamsPage: React.FC = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [postSuccess, setPostSuccess] = useState(false);

  // New Exam Form State
  const [newExamTitle, setNewExamTitle] = useState('');
  const [newExamCourse, setNewExamCourse] = useState('ARC 118');
  const [newExamDate, setNewExamDate] = useState('');
  const [newExamDuration, setNewExamDuration] = useState('120 Mins');
  const [newExamLocation, setNewExamLocation] = useState('Studio Lab 04');

  const [upcomingExams, setUpcomingExams] = useState([
    {
      id: 'ex-1',
      title: 'Mid-Term Studio Examination',
      course: 'ARC 118',
      date: '04 October 2026',
      duration: '120 Mins',
      location: 'Studio Lab 04',
      weight: '30% of Final Grade'
    },
    {
      id: 'ex-2',
      title: 'Pedagogical Frameworks Final Quiz',
      course: 'EDU 204',
      date: '18 October 2026',
      duration: '90 Mins',
      location: 'Online Examination Portal',
      weight: '25% of Final Grade'
    }
  ]);

  const [gradeRoster, setGradeRoster] = useState<ExamGradeItem[]>([
    { id: '1', studentName: 'Amina Vance', studentId: 'STU-2026-01', course: 'ARC 118', examScore: 92, gradeLetter: 'A', status: 'Posted' },
    { id: '2', studentName: 'Julian Thorne', studentId: 'STU-2026-02', course: 'ARC 118', examScore: 86, gradeLetter: 'A-', status: 'Posted' },
    { id: '3', studentName: 'Clara Mercer', studentId: 'STU-2026-03', course: 'ARC 118', examScore: 74, gradeLetter: 'B', status: 'Draft' },
    { id: '4', studentName: 'Marcus Brody', studentId: 'STU-2026-04', course: 'EDU 204', examScore: 95, gradeLetter: 'A+', status: 'Posted' },
    { id: '5', studentName: 'Elena Rostova', studentId: 'STU-2026-05', course: 'EDU 204', examScore: 88, gradeLetter: 'A-', status: 'Posted' },
    { id: '6', studentName: 'Devon Sterling', studentId: 'STU-2026-06', course: 'COM 210', examScore: 81, gradeLetter: 'B+', status: 'Draft' }
  ]);

  const handleScheduleExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExamTitle || !newExamDate) return;

    const created = {
      id: `ex-${Date.now()}`,
      title: newExamTitle,
      course: newExamCourse,
      date: newExamDate,
      duration: newExamDuration,
      location: newExamLocation,
      weight: '20% of Final Grade'
    };

    setUpcomingExams([...upcomingExams, created]);
    setNewExamTitle('');
    setShowScheduleModal(false);
  };

  const handlePostAllGrades = () => {
    setGradeRoster(prev => prev.map(g => ({ ...g, status: 'Posted' as const })));
    setPostSuccess(true);
    setTimeout(() => setPostSuccess(false), 3000);
  };

  const filteredRoster = gradeRoster.filter(item => {
    const matchesCourse = selectedCourse === 'All' || item.course === selectedCourse;
    const matchesQuery = item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || item.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCourse && matchesQuery;
  });

  return (
    <div className="academia-page">
      {/* 1. PAGE HEADER */}
      <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '2.5rem' }}>
        <div>
          <span className="micro-eyebrow">FACULTY EXAM PORTAL</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.8rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Exams & Grade Postings
          </h1>
          <p className="meta-text" style={{ fontSize: '1rem', color: '#C7C4BC' }}>
            Schedule mid-term examinations, analyze question statistics, and record official transcript grades.
          </p>
        </div>

        <div className="flex-align gap-3 flex-wrap">
          <button className="btn-editorial-primary-light text-xs flex-align gap-2" onClick={() => setShowScheduleModal(true)}>
            <Plus size={16} /> SCHEDULE EXAM
          </button>
          <button className="btn-editorial-primary text-xs flex-align gap-2" onClick={handlePostAllGrades}>
            <Save size={16} /> POST GRADES TO TRANSCRIPT →
          </button>
        </div>
      </div>

      {postSuccess && (
        <div className="editorial-success-box" style={{ background: '#0B192A', border: '1px solid #2FA36B', padding: '1rem 1.4rem', borderRadius: '10px', marginBottom: '2rem' }}>
          <div className="flex-align gap-2">
            <CheckCircle2 size={20} className="text-emerald" />
            <strong className="text-emerald text-sm">OFFICIAL GRADES POSTED TO STUDENT ACADEMIC TRANSCRIPTS</strong>
          </div>
        </div>
      )}

      {/* 2. EXAM & GRADE KPI STATS */}
      <div className="grid-4" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>UPCOMING EXAMS</span>
          <strong className="font-serif text-gold" style={{ fontSize: '2.4rem', display: 'block', margin: '0.2rem 0' }}>{upcomingExams.length}</strong>
          <span className="text-xs text-muted">Scheduled for Active Term</span>
        </div>

        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>EXAM PASS RATE</span>
          <strong className="font-serif text-emerald" style={{ fontSize: '2.4rem', display: 'block', margin: '0.2rem 0' }}>88.4%</strong>
          <span className="text-xs text-emerald">↑ Institutional Standard</span>
        </div>

        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>COHORT AVERAGE GRADE</span>
          <strong className="font-serif text-primary" style={{ fontSize: '2.4rem', color: '#F5EFE3', display: 'block', margin: '0.2rem 0' }}>A- (84%)</strong>
          <span className="text-xs text-gold">48 Studio Papers</span>
        </div>

        <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
          <span className="text-xs text-muted block" style={{ letterSpacing: '0.08em' }}>GRADES PENDING POSTING</span>
          <strong className="font-serif text-amber" style={{ fontSize: '2.4rem', display: 'block', margin: '0.2rem 0' }}>
            {gradeRoster.filter(g => g.status === 'Draft').length}
          </strong>
          <span className="text-xs text-muted">Draft Papers Awaiting Finalization</span>
        </div>
      </div>

      {/* 3. UPCOMING EXAMINATIONS SCHEDULE CARDS */}
      <div style={{ marginBottom: '3rem' }}>
        <span className="micro-eyebrow">FACULTY EXAM SCHEDULE</span>
        <h2 className="section-serif-heading" style={{ fontSize: '2rem', color: '#F5EFE3', marginBottom: '1.4rem' }}>Scheduled Examinations</h2>

        <div className="grid-2" style={{ gap: '1.8rem' }}>
          {upcomingExams.map((ex) => (
            <div key={ex.id} className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2rem' }}>
              <div className="flex-between" style={{ marginBottom: '0.6rem' }}>
                <span className="micro-category-label text-gold">{ex.course}</span>
                <span className="text-xs text-muted" style={{ background: '#0B192A', padding: '0.2rem 0.6rem', borderRadius: '10px', border: '1px solid #1B3045' }}>
                  {ex.weight}
                </span>
              </div>

              <h3 className="sub-serif-title" style={{ fontSize: '1.5rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>
                {ex.title}
              </h3>

              <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
                <div className="flex-align gap-2 text-xs" style={{ color: '#C7C4BC' }}>
                  <Calendar size={14} className="text-gold" />
                  <span>Date: <strong style={{ color: '#F5EFE3' }}>{ex.date}</strong></span>
                </div>
                <div className="flex-align gap-2 text-xs" style={{ color: '#C7C4BC' }}>
                  <Clock size={14} className="text-gold" />
                  <span>Duration: <strong style={{ color: '#F5EFE3' }}>{ex.duration}</strong></span>
                </div>
                <div className="flex-align gap-2 text-xs" style={{ color: '#C7C4BC' }}>
                  <MapPin size={14} className="text-gold" />
                  <span>Location: <strong style={{ color: '#F5EFE3' }}>{ex.location}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. OFFICIAL GRADE ROSTER TABLE */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2rem' }}>
        <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '1.5rem' }}>
          <div>
            <span className="micro-eyebrow">OFFICIAL TRANSCRIPT EVALUATION</span>
            <h3 className="sub-serif-title" style={{ fontSize: '1.6rem', color: '#F5EFE3', margin: 0 }}>
              Student Grade Postings Roster
            </h3>
          </div>

          <div className="flex-align gap-3 flex-wrap">
            <select 
              className="editorial-select-thin"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              style={{ minWidth: '160px' }}
            >
              <option value="All">All Courses</option>
              <option value="ARC 118">ARC 118</option>
              <option value="EDU 204">EDU 204</option>
              <option value="COM 210">COM 210</option>
            </select>

            <input 
              type="text" 
              placeholder="Search student..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-underline"
              style={{ minWidth: '220px' }}
            />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1B3045', color: '#F1BA4B', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                <th style={{ padding: '0.8rem 1rem' }}>Student Name</th>
                <th style={{ padding: '0.8rem 1rem' }}>Student ID</th>
                <th style={{ padding: '0.8rem 1rem' }}>Course Code</th>
                <th style={{ padding: '0.8rem 1rem' }}>Exam Score</th>
                <th style={{ padding: '0.8rem 1rem' }}>Letter Grade</th>
                <th style={{ padding: '0.8rem 1rem', textAlign: 'right' }}>Posting Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoster.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #1B3045', color: '#C7C4BC' }}>
                  <td style={{ padding: '1rem' }}>
                    <strong style={{ color: '#F5EFE3', fontSize: '0.95rem' }}>{item.studentName}</strong>
                  </td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{item.studentId}</td>
                  <td style={{ padding: '1rem' }}>{item.course}</td>
                  <td style={{ padding: '1rem' }}>
                    <strong className="text-gold" style={{ fontSize: '1.05rem' }}>{item.examScore}%</strong>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span className="font-serif text-emerald" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                      {item.gradeLetter}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    {item.status === 'Posted' ? (
                      <span style={{ background: '#00382E', color: '#2FA36B', border: '1px solid #2FA36B', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                        ✓ POSTED TO TRANSCRIPT
                      </span>
                    ) : (
                      <span style={{ background: '#472D00', color: '#F1BA4B', border: '1px solid #F1BA4B', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                        ⏳ DRAFT / PENDING
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SCHEDULE NEW EXAM MODAL */}
      {showScheduleModal && (
        <div className="modal-overlay" onClick={() => setShowScheduleModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ background: '#0D1B2D', border: '1px solid #1B3045', padding: '2.5rem', borderRadius: '16px', maxWidth: '520px' }}>
            <span className="micro-eyebrow text-gold">FACULTY EXAM PORTAL</span>
            <h2 className="sub-serif-title" style={{ fontSize: '2rem', color: '#F5EFE3', margin: '0.3rem 0 1.5rem' }}>
              Schedule Examination
            </h2>

            <form onSubmit={handleScheduleExam} className="flex-column gap-3">
              <div className="form-group-editorial">
                <label className="editorial-label" style={{ color: '#F5EFE3' }}>Exam Title *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="e.g. Mid-Term Studio Examination"
                  value={newExamTitle}
                  onChange={(e) => setNewExamTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label" style={{ color: '#F5EFE3' }}>Course *</label>
                <select 
                  className="editorial-select-thin"
                  value={newExamCourse}
                  onChange={(e) => setNewExamCourse(e.target.value)}
                >
                  <option value="ARC 118">ARC 118 — Spatial Thinking</option>
                  <option value="EDU 204">EDU 204 — Pedagogical Frameworks</option>
                  <option value="COM 210">COM 210 — Academic Writing</option>
                </select>
              </div>

              <div className="form-group-editorial">
                <label className="editorial-label" style={{ color: '#F5EFE3' }}>Examination Date *</label>
                <input 
                  type="text" 
                  className="editorial-input-thin" 
                  placeholder="e.g. 04 October 2026"
                  value={newExamDate}
                  onChange={(e) => setNewExamDate(e.target.value)}
                  required
                />
              </div>

              <div className="flex-end gap-3" style={{ marginTop: '1rem' }}>
                <button type="button" className="btn-editorial-primary-light text-xs" onClick={() => setShowScheduleModal(false)}>
                  CANCEL
                </button>
                <button type="submit" className="btn-editorial-primary text-xs">
                  CONFIRM SCHEDULE →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
