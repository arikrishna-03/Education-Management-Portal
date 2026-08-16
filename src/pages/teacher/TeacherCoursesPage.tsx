import React from 'react';
import { BookOpen, Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TeacherCoursesPage: React.FC = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 'arc-118', code: 'ARC 118', title: 'Spatial Thinking & Environmental Architecture', students: 48, avg: 'A- (84%)', status: 'Active' },
    { id: 'edu-204', code: 'EDU 204', title: 'Learning Design & Pedagogical Frameworks', students: 52, avg: 'B+ (81%)', status: 'Active' },
    { id: 'com-210', code: 'COM 210', title: 'Academic Writing & Research Synthesis', students: 42, avg: 'A (88%)', status: 'Active' }
  ];

  return (
    <div className="academia-page">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="micro-eyebrow">FACULTY CURRICULUM</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Faculty Courses Management
          </h1>
          <p className="meta-text" style={{ color: '#C7C4BC' }}>
            Manage active course offerings, syllabus modules, and enrolled student rosters.
          </p>
        </div>
        <button className="btn-editorial-primary text-xs" onClick={() => alert('New Course Form')}>
          + CREATE NEW COURSE
        </button>
      </div>

      <div className="grid-3">
        {courses.map((c) => (
          <div key={c.id} className="flow-card-panel">
            <span className="editorial-label">{c.code}</span>
            <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>{c.title}</h3>
            <div className="tuition-spec-list" style={{ marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div className="spec-item flex-between text-xs">
                <span>Enrolled Students</span>
                <strong>{c.students} Students</strong>
              </div>
              <div className="spec-item flex-between text-xs">
                <span>Class Average</span>
                <strong className="text-gold">{c.avg}</strong>
              </div>
            </div>
            <button className="btn-editorial-primary text-xs w-full" onClick={() => navigate(`/student/courses/${c.id}`)}>
              OPEN ACADEMIC FLOW WORKSPACE →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
