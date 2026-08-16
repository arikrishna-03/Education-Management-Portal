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
  const [showAuthRequiredModal, setShowAuthRequiredModal] = useState(false);

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
    // 1. Unauthenticated Check: If user is not logged in, show Auth Required Popup
    if (!currentUser) {
      setShowAuthRequiredModal(true);
      return;
    }

    // 2. Already Enrolled: Redirect to Course Details
    if (enrolledAlready) {
      navigate(`/courses/${currentCourseId}`);
      return;
    }

    // 3. Authenticated Enrollment
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

    setShowEnrollSuccessModal(true);
  };

  const handleGoToCourse = () => {
    setShowEnrollSuccessModal(false);
    navigate(`/courses/${currentCourseId}`);
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

                <button 
                  onClick={handleEnrollClick}
                  className="btn-editorial-primary w-full"
                  style={{ padding: '0.95rem', marginBottom: '1rem' }}
                >
                  {enrolledAlready ? 'GO TO MY COURSE →' : 'ENROLL NOW →'}
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
          <h2 className="section-serif-heading" style={{ color: '#F5EFE3', marginBottom: '1.5rem' }}>Course Syllabus</h2>

          <div className="syllabus-accordion-stack">
            {syllabusModules.map((mod, idx) => {
              const isOpen = activeSyllabusIndex === idx;
              return (
                <div key={mod.num} className="flow-card-panel" style={{ marginBottom: '1rem', background: '#0D1B2D', border: '1px solid #1B3045' }}>
                  <div 
                    className="accordion-header-flex flex-between cursor-pointer"
                    onClick={() => setActiveSyllabusIndex(isOpen ? null : idx)}
                  >
                    <div className="flex-align gap-4">
                      <span className="mod-num-badge">{mod.num}</span>
                      <h3 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.3rem' }}>{mod.title}</h3>
                    </div>
                    <span className="text-gold font-bold" style={{ fontSize: '1.4rem' }}>{isOpen ? '−' : '+'}</span>
                  </div>

                  {isOpen && (
                    <div className="accordion-content-body" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #1B3045' }}>
                      <p style={{ color: '#C7C4BC', fontSize: '0.95rem' }}>{mod.details}</p>
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
            <div className="flow-card-panel">
              <span className="micro-eyebrow">FACULTY INSTRUCTOR</span>
              <h3 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.6rem', margin: '0.4rem 0' }}>
                {currentCourseId === 'edu-204' ? 'Dr. Sarah Jenkins' : 'Dr. Leila Haddad'}
              </h3>
              <p style={{ color: '#C7C4BC', fontSize: '0.9rem' }}>
                Senior Fellow in Spatial Geometry and Environmental Pedagogy with 15+ years of research at international architectural laboratories.
              </p>
            </div>

            <div className="flow-card-panel">
              <span className="micro-eyebrow">ACADEMIC SCHEDULE</span>
              <h3 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.6rem', margin: '0.4rem 0' }}>
                Tuesdays & Thursdays · 14:00 - 16:30 GMT
              </h3>
              <p style={{ color: '#C7C4BC', fontSize: '0.9rem' }}>
                Live research studio seminars, bi-weekly peer reviews, and interactive AI evaluation workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. AUTHENTICATION REQUIRED MODAL FOR UNLOGGED VISITORS */}
      {showAuthRequiredModal && (
        <div className="modal-overlay" onClick={() => setShowAuthRequiredModal(false)}>
          <div className="modal-box text-center" onClick={(e) => e.stopPropagation()} style={{ padding: '3rem 2.5rem', background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px' }}>
            <div className="flex-center" style={{ margin: '0 auto 1.2rem', width: '56px', height: '56px', borderRadius: '50%', background: '#472D00' }}>
              <Lock size={28} className="text-gold" />
            </div>

            <span className="micro-eyebrow text-gold">AUTHENTICATION REQUIRED</span>
            <h2 className="sub-serif-title" style={{ fontSize: '2rem', margin: '0.4rem 0', color: '#F5EFE3' }}>
              Please Login or Register
            </h2>
            <p style={{ marginBottom: '2rem', color: '#C7C4BC', lineHeight: '1.6' }}>
              You must be signed into your student account to enroll in courses and access the academic flow workspace.
            </p>

            <div className="flex-column gap-3">
              <button 
                className="btn-editorial-primary w-full" 
                style={{ padding: '0.95rem' }} 
                onClick={() => { setShowAuthRequiredModal(false); navigate('/login?role=student'); }}
              >
                LOGIN TO YOUR ACCOUNT →
              </button>
              <button 
                className="btn-editorial-primary-light w-full" 
                style={{ padding: '0.95rem', justifyContent: 'center' }} 
                onClick={() => { setShowAuthRequiredModal(false); navigate('/register/student'); }}
              >
                CREATE STUDENT ACCOUNT →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. ENROLLMENT SUCCESS CONFIRMATION MODAL FOR AUTHENTICATED USERS */}
      {showEnrollSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowEnrollSuccessModal(false)}>
          <div className="modal-box text-center" onClick={(e) => e.stopPropagation()} style={{ padding: '3rem 2rem', background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px' }}>
            <div className="flex-center" style={{ margin: '0 auto 1.2rem', width: '54px', height: '54px', borderRadius: '50%', background: '#472D00' }}>
              <CheckCircle2 size={32} className="text-gold" />
            </div>

            <span className="micro-eyebrow text-gold">ENROLLMENT CONFIRMED</span>
            <h2 className="sub-serif-title" style={{ fontSize: '2.2rem', margin: '0.4rem 0', color: '#F5EFE3' }}>
              You are now enrolled in
            </h2>
            <h3 className="hero-serif-title" style={{ fontSize: '1.8rem', color: '#F1BA4B', margin: '0.2rem 0 1rem' }}>
              {currentCourseId === 'edu-204' ? 'Learning Design & Pedagogical Frameworks' : 'Spatial Thinking & Environmental Architecture'}
            </h3>
            <p style={{ marginBottom: '2rem', color: '#C7C4BC' }}>
              Your academic workspace is ready. Access course info, syllabus modules, schedule, and assignments.
            </p>

            <button className="btn-editorial-primary w-full" style={{ padding: '1rem' }} onClick={handleGoToCourse}>
              GO TO MY COURSE →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
