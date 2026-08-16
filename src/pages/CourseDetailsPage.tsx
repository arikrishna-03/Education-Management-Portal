import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { isCourseEnrolled, enrollInCourse } from '../data/enrollmentState';
import { getStoredUser } from '../data/authState';
import { X, CheckCircle2, ArrowRight, Lock, BookOpen, Clock, User, Calendar, Award } from 'lucide-react';

export const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const currentUser = getStoredUser();

  const currentCourseId = courseId || 'arc-118';
  const enrolledAlready = isCourseEnrolled(currentCourseId);

  const [activeSyllabusIndex, setActiveSyllabusIndex] = useState<number | null>(0);
  const [showEnrollSuccessModal, setShowEnrollSuccessModal] = useState(false);

  // Syllabus accordion data
  const syllabusModules = [
    {
      num: '01',
      title: 'Introduction to Spatial Thinking',
      details: 'Managing intrinsic cognitive load in environmental layouts, structural geometry, and perceptual volume.'
    },
    {
      num: '02',
      title: 'Space, Structure & Human Behaviour',
      details: 'Analyzing pedestrian vector flow, high-density public corridors, and spatial psychology.'
    },
    {
      num: '03',
      title: 'Observation & Field Analysis',
      details: 'Fieldwork methodologies for spatial mapping, vector blueprint recording, and empirical observation.'
    },
    {
      num: '04',
      title: 'Applied Design Methods',
      details: 'Constructing high-resolution 3D spatial models and environmental critique presentations.'
    },
    {
      num: '05',
      title: 'Final Research Studio Project',
      details: 'Synthesis of spatial theory into a final peer-reviewed architectural design thesis.'
    }
  ];

  const handleEnrollClick = () => {
    // 1. Unauthenticated Check: If user is not logged in, redirect directly to Student Login page
    if (!currentUser) {
      navigate('/login?role=student');
      return;
    }

    // 2. Authenticated Enrollment
    if (!enrolledAlready) {
      enrollInCourse({
        courseId: currentCourseId,
        title: currentCourseId === 'edu-204' ? 'Learning Design & Pedagogical Frameworks' : 'Spatial Thinking & Environmental Architecture',
        category: currentCourseId === 'edu-204' ? 'Pedagogical Design' : 'Architecture & Design',
        instructor: currentCourseId === 'edu-204' ? 'Dr. Sarah Jenkins' : 'Dr. Leila Haddad',
        progress: 68,
        grade: 'A-',
        attendancePct: 92,
        assignmentsCompleted: 8,
        totalAssignments: 10,
        image: currentCourseId === 'edu-204' ? 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000' : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
      });
    }

    // Redirect to Student Academic Flow page /student/courses/:courseId
    navigate(`/student/courses/${currentCourseId}`);
  };

  return (
    <div className="academia-page">
      {/* 1. COURSE DETAIL HERO */}
      <section className="course-detail-hero" style={{ padding: '4rem 0 2rem' }}>
        <div className="academia-container">
          <div className="hero-split-grid">
            <div className="hero-text-col">
              <span className="micro-category-label">
                {currentCourseId === 'edu-204' ? 'PEDAGOGICAL DESIGN' : 'DESIGN & ARCHITECTURE'}
              </span>
              <h1 className="hero-serif-title" style={{ fontSize: '3rem', margin: '0.5rem 0', color: '#F5EFE3' }}>
                {currentCourseId === 'edu-204' ? 'Learning Design & Pedagogical Frameworks' : 'Spatial Thinking & Environmental Architecture'}
              </h1>
              <p className="hero-lead-desc" style={{ marginBottom: '1.5rem', color: '#C7C4BC' }}>
                Understand how space and pedagogical frameworks shape human experience through structural design and observation.
              </p>

              <div className="course-hero-meta-row flex-align gap-4" style={{ background: '#0D1B2D', padding: '1rem 1.4rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
                <div>
                  <span className="micro-eyebrow">INSTRUCTOR</span>
                  <strong className="meta-val-text" style={{ color: '#F5EFE3' }}>
                    {currentCourseId === 'edu-204' ? 'Dr. Sarah Jenkins' : 'Dr. Leila Haddad'}
                  </strong>
                </div>
                <div className="divider-vert" style={{ width: '1px', height: '24px', background: '#1B3045' }} />
                <div>
                  <span className="micro-eyebrow">DURATION</span>
                  <strong className="meta-val-text" style={{ color: '#F5EFE3' }}>12 Weeks</strong>
                </div>
                <div className="divider-vert" style={{ width: '1px', height: '24px', background: '#1B3045' }} />
                <div>
                  <span className="micro-eyebrow">LEVEL</span>
                  <strong className="meta-val-text text-gold">Advanced</strong>
                </div>
              </div>
            </div>

            {/* STICKY ENROLLMENT CARD */}
            <div className="course-sticky-card">
              <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2rem' }}>
                <div className="course-img-box">
                  <img 
                    src={currentCourseId === 'edu-204' ? 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000' : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'} 
                    alt="Course Preview" 
                    className="editorial-img"
                  />
                </div>

                <div className="flex-between" style={{ margin: '1rem 0' }}>
                  <span className="micro-eyebrow">ACADEMIC TUITION</span>
                  <strong className="font-serif text-gold" style={{ fontSize: '1.8rem' }}>$1,200</strong>
                </div>

                {/* ALWAYS DISPLAY "ENROLL NOW →" ONLY */}
                <button 
                  onClick={handleEnrollClick}
                  className="btn-editorial-primary w-full"
                  style={{ padding: '0.95rem', marginBottom: '1rem' }}
                >
                  ENROLL NOW →
                </button>

                <div className="tuition-spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="spec-item flex-between text-xs">
                    <span>Course Access</span>
                    <strong>Lifetime Digital Access</strong>
                  </div>
                  <div className="spec-item flex-between text-xs">
                    <span>Assessment</span>
                    <strong>Peer-reviewed Studio Thesis</strong>
                  </div>
                  <div className="spec-item flex-between text-xs">
                    <span>Certificate</span>
                    <strong>Institutional Academic Credential</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSE INFO & OVERVIEW */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">COURSE OVERVIEW</span>
          <h2 className="section-serif-heading" style={{ color: '#F5EFE3', marginBottom: '1rem' }}>Course Info & Objectives</h2>
          <p className="hero-lead-desc" style={{ maxWidth: '800px', color: '#C7C4BC' }}>
            This course explores how physical built environments and cognitive load interact. Students will examine structural geometry, human circulation patterns, and spatial psychology through empirical fieldwork and digital modeling.
          </p>
        </div>
      </section>

      {/* 3. SYLLABUS SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">CURRICULUM ARCHITECTURE</span>
          <h2 className="section-serif-heading" style={{ color: '#F5EFE3', marginBottom: '1.8rem' }}>Course Syllabus</h2>

          <div className="syllabus-accordion-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {syllabusModules.map((mod, idx) => {
              const isOpen = activeSyllabusIndex === idx;
              return (
                <div 
                  key={mod.num} 
                  className="flow-card-panel" 
                  style={{ 
                    background: '#0D1B2D', 
                    border: '1px solid #1B3045', 
                    borderRadius: '12px', 
                    padding: '1.4rem 1.8rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div 
                    className="flex-between cursor-pointer"
                    onClick={() => setActiveSyllabusIndex(isOpen ? null : idx)}
                  >
                    <div className="flex-align gap-4">
                      <span className="mod-num-badge font-serif text-gold" style={{ fontSize: '1.2rem', fontWeight: 700, minWidth: '32px' }}>
                        {mod.num}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 600, color: '#F5EFE3', margin: 0 }}>
                        {mod.title}
                      </h3>
                    </div>

                    <div className="flex-center" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0B192A', border: '1px solid #1B3045', color: '#F1BA4B', fontWeight: 700, fontSize: '1.2rem' }}>
                      {isOpen ? '−' : '+'}
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #1B3045', paddingLeft: '2.5rem' }}>
                      <p style={{ color: '#C7C4BC', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {mod.details}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TEACHER INFO & SCHEDULE */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="grid-2">
            <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
              <span className="micro-eyebrow">FACULTY INSTRUCTOR</span>
              <h3 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.6rem', margin: '0.4rem 0' }}>
                {currentCourseId === 'edu-204' ? 'Dr. Sarah Jenkins' : 'Dr. Leila Haddad'}
              </h3>
              <p style={{ color: '#C7C4BC', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Senior Fellow in Spatial Geometry and Environmental Pedagogy with 15+ years of research at international architectural laboratories.
              </p>
            </div>

            <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '2rem' }}>
              <span className="micro-eyebrow">ACADEMIC SCHEDULE</span>
              <h3 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.6rem', margin: '0.4rem 0' }}>
                Tuesdays & Thursdays · 14:00 - 16:30 GMT
              </h3>
              <p style={{ color: '#C7C4BC', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Live research studio seminars, bi-weekly peer reviews, and interactive AI evaluation workshops.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
