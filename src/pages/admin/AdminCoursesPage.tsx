import React, { useState } from 'react';
import { BookOpen, Plus, Search, Edit2, Archive, CheckCircle2, UserCheck, MapPin, Calendar } from 'lucide-react';

export const AdminCoursesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'classes'>('courses');
  const [searchQuery, setSearchQuery] = useState('');

  const coursesList = [
    { id: 'arc-118', code: 'ARC 118', title: 'Spatial Thinking & Environmental Architecture', instructor: 'Dr. Leila Haddad', category: 'Architecture & Design', schedule: 'Tue & Thu 14:00 GMT', enrollments: 48, status: 'Published' },
    { id: 'edu-204', code: 'EDU 204', title: 'Learning Design & Pedagogical Frameworks', instructor: 'Dr. Sarah Jenkins', category: 'Pedagogical Design', schedule: 'Mon & Wed 10:00 GMT', enrollments: 52, status: 'Published' },
    { id: 'cs-312', code: 'CS 312', title: 'Applied AI & Neural Learning Systems', instructor: 'Prof. Marcus Vance', category: 'Computer Science', schedule: 'Fri 16:00 GMT', enrollments: 42, status: 'Draft' }
  ];

  const classesList = [
    { id: 'cls-01', code: 'CLASS 01', courseName: 'ARC 118 - Studio Lab A', instructor: 'Dr. Leila Haddad', room: 'Studio Lab 04 (Physical)', studentsCount: 24, schedule: 'Tuesdays 14:00 GMT' },
    { id: 'cls-02', code: 'CLASS 02', courseName: 'ARC 118 - Studio Lab B', instructor: 'Dr. Leila Haddad', room: 'Virtual Studio 02 (Online)', studentsCount: 24, schedule: 'Thursdays 14:00 GMT' },
    { id: 'cls-03', code: 'CLASS 03', courseName: 'EDU 204 - Pedagogy Seminar', instructor: 'Dr. Sarah Jenkins', room: 'Lecture Hall B (Physical)', studentsCount: 52, schedule: 'Mondays 10:00 GMT' }
  ];

  return (
    <div className="academia-page">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="micro-eyebrow" style={{ color: '#A78BFA' }}>MODULE 3 · ACADEMIC CURRICULUM</span>
          <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
            Manage Courses & Classes
          </h1>
          <p className="meta-text" style={{ color: '#C7C4BC' }}>
            Create and edit institutional courses, schedule studio classes, assign faculty instructors, and manage enrollments.
          </p>
        </div>

        <div className="flex-align gap-2">
          <button className="btn-dark-green text-xs">
            + CREATE COURSE
          </button>
          <button className="btn-admin-purple text-xs">
            + CREATE CLASS
          </button>
        </div>
      </div>

      {/* OVERVIEW BANNER CARD */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', marginBottom: '2rem', padding: '1.5rem 2rem' }}>
        <div className="flex-between flex-wrap gap-4">
          <div>
            <span className="editorial-label" style={{ color: '#A78BFA' }}>CURRICULUM OVERVIEW</span>
            <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#F5EFE3', margin: 0 }}>128 Active Courses · 64 Classes</h2>
          </div>

          <div className="flex-align gap-4">
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Active Courses</span>
              <strong className="font-serif text-emerald" style={{ fontSize: '1.4rem' }}>128</strong>
            </div>
            <div style={{ background: '#0B192A', padding: '0.8rem 1.4rem', borderRadius: '8px', border: '1px solid #1B3045' }}>
              <span className="text-xs text-muted block">Active Classes</span>
              <strong className="font-serif text-gold" style={{ fontSize: '1.4rem' }}>64</strong>
            </div>
          </div>
        </div>
      </div>

      {/* SEGMENTED TAB SELECTOR: COURSES VS CLASSES */}
      <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}>
        <div className="flex-between flex-wrap gap-4" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #1B3045' }}>
          
          <div className="auth-segmented-tabs">
            <button 
              className={`auth-tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              ACTIVE COURSES (128)
            </button>
            <button 
              className={`auth-tab-btn ${activeTab === 'classes' ? 'active' : ''}`}
              onClick={() => setActiveTab('classes')}
            >
              ACTIVE CLASSES (64)
            </button>
          </div>

          <div className="flex-align gap-2 search-field-minimal" style={{ width: '280px' }}>
            <Search size={16} style={{ color: '#8D918F' }} />
            <input 
              type="text" 
              placeholder={`Search ${activeTab}...`} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: '#0B192A', border: '1px solid #1B3045', padding: '0.55rem 0.8rem', fontSize: '0.85rem', color: '#F5EFE3', borderRadius: '6px', width: '100%' }}
            />
          </div>
        </div>

        {/* TAB 1: COURSES */}
        {activeTab === 'courses' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {coursesList.map((c) => (
              <div key={c.id} className="flex-between flex-wrap gap-3" style={{ background: '#0B192A', padding: '1.2rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
                <div>
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem', color: '#A78BFA' }}>{c.code} · {c.category}</span>
                  <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.1rem 0' }}>{c.title}</h4>
                  <span className="text-xs text-muted">Instructor: <strong>{c.instructor}</strong> · Schedule: {c.schedule}</span>
                </div>

                <div className="flex-align gap-4 flex-wrap">
                  <div className="text-right">
                    <span className="text-xs text-muted block">Enrolled Students</span>
                    <strong className="text-xs text-gold">{c.enrollments} Enrolled</strong>
                  </div>

                  <span className={`text-xs font-bold ${c.status === 'Published' ? 'text-emerald' : 'text-gold'}`}>
                    ● {c.status}
                  </span>

                  <div className="flex-align gap-2">
                    <button className="btn-secondary-sm text-xs">EDIT</button>
                    <button className="btn-secondary-sm text-xs text-crimson">ARCHIVE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CLASSES */}
        {activeTab === 'classes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {classesList.map((cls) => (
              <div key={cls.id} className="flex-between flex-wrap gap-3" style={{ background: '#0B192A', padding: '1.2rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
                <div>
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem', color: '#A78BFA' }}>{cls.code}</span>
                  <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.1rem 0' }}>{cls.courseName}</h4>
                  <span className="text-xs text-muted">Teacher: <strong>{cls.instructor}</strong> · Location: {cls.room}</span>
                </div>

                <div className="flex-align gap-4 flex-wrap">
                  <div className="text-right">
                    <span className="text-xs text-muted block">Class Roster</span>
                    <strong className="text-xs text-emerald">{cls.studentsCount} Students</strong>
                  </div>

                  <button className="btn-secondary-sm text-xs">ASSIGN STUDENTS</button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
