import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { isCourseEnrolled, enrollInCourse } from '../data/enrollmentState';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

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
    if (enrolledAlready) {
      // Redirect directly to enrolled Academic Flow
      navigate(`/enrolled-courses/${currentCourseId}`);
      return;
    }

    // Enroll dynamically
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
    navigate(`/enrolled-courses/${currentCourseId}`);
  };

  return (
    <div className="academia-page">
      {/* 1. COURSE DETAIL HERO */}
      <section className="course-detail-hero">
        <div className="academia-container">
          <div className="hero-split-grid">
            <div className="hero-text-col">
              <span className="micro-category-label">
                {currentCourseId === 'edu-204' ? 'PEDAGOGICAL DESIGN' : 'DESIGN & ARCHITECTURE'}
              </span>
              <h1 className="hero-serif-title" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>
                {currentCourseId === 'edu-204' ? 'Learning Design & Pedagogical Frameworks' : 'Spatial Thinking & Environmental Architecture'}
              </h1>
              <p className="hero-lead-desc" style={{ marginBottom: '1.5rem' }}>
                Understand how space and pedagogical frameworks shape human experience through structural design and observation.
              </p>

              <div className="course-hero-meta-row flex-align gap-4">
                <div>
                  <span className="micro-eyebrow">INSTRUCTOR</span>
                  <strong className="meta-val-text">
                    {currentCourseId === 'edu-204' ? 'Dr. Sarah Jenkins' : 'Dr. Leila Haddad'}
                  </strong>
                </div>
                <div className="divider-vert" />
                <div>
                  <span className="micro-eyebrow">DURATION</span>
                  <strong className="meta-val-text">12 Weeks · Advanced</strong>
                </div>
                <div className="divider-vert" />
                <div>
                  <span className="micro-eyebrow">FORMAT</span>
                  <strong className="meta-val-text">On Campus / Hybrid</strong>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button className="btn-editorial-primary" onClick={handleEnrollClick}>
                  {enrolledAlready ? 'GO TO MY COURSE →' : 'ENROLL NOW →'}
                </button>
              </div>
            </div>

            <div className="hero-image-col">
              <div className="hero-image-frame">
                <img 
                  src={currentCourseId === 'edu-204' ? 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200' : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'} 
                  alt="Course Artwork" 
                  className="editorial-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSE INFO SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">COURSE INFORMATION</span>
          <h2 className="section-serif-heading">Overview & Outcomes</h2>

          <div className="grid-2-1" style={{ marginTop: '2rem', gap: '3rem' }}>
            {/* Left: Overview text */}
            <div>
              <h3 className="sub-serif-title">Curriculum Foundations</h3>
              <p className="body-editorial-p">
                This course examines the fundamental principles of spatial geometry, architectural volume, and environmental psychology. Students learn to decode how human behavior interacts with built spaces across high-density urban corridors and academic institutions.
              </p>
              
              <h3 className="sub-serif-title" style={{ marginTop: '2rem' }}>Key Learning Outcomes</h3>
              <ul className="editorial-bullet-list">
                <li>Formulate rigorous spatial analysis matrices for architectural site evaluations.</li>
                <li>Apply cognitive load theory to public navigation and spatial orientation.</li>
                <li>Construct vector blueprints demonstrating 3D spatial zoning and human flow.</li>
                <li>Synthesize empirical research into an architectural critique portfolio.</li>
              </ul>
            </div>

            {/* Right: Sticky Enrollment Sidebar Panel */}
            <div>
              <div className="sticky-enrollment-card">
                <span className="micro-eyebrow">TUITION & ADMISSION</span>
                <h2 className="tuition-price">€480</h2>
                
                <div className="tuition-spec-list">
                  <div className="spec-item flex-between">
                    <span>Duration</span>
                    <strong>12 Weeks</strong>
                  </div>
                  <div className="spec-item flex-between">
                    <span>Level</span>
                    <strong>Advanced</strong>
                  </div>
                  <div className="spec-item flex-between">
                    <span>Certificate</span>
                    <strong>Institutional Accredited</strong>
                  </div>
                  <div className="spec-item flex-between">
                    <span>Format</span>
                    <strong>Studio Lectures</strong>
                  </div>
                </div>

                <button className="btn-editorial-primary w-full" onClick={handleEnrollClick}>
                  {enrolledAlready ? 'GO TO MY COURSE →' : 'ENROLL NOW →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYLLABUS SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">CURRICULUM ARCHITECTURE</span>
          <h2 className="section-serif-heading">Course Syllabus</h2>

          <div className="syllabus-accordion-stack" style={{ marginTop: '2rem' }}>
            {syllabusModules.map((mod, idx) => {
              const isOpen = activeSyllabusIndex === idx;
              return (
                <div key={mod.num} className="accordion-item-editorial">
                  <div 
                    className="accordion-header-flex flex-between cursor-pointer"
                    onClick={() => setActiveSyllabusIndex(isOpen ? null : idx)}
                  >
                    <div className="flex-align gap-4">
                      <span className="ann-num">{mod.num}</span>
                      <h3 className="ann-title">{mod.title}</h3>
                    </div>
                    <span className="accordion-toggle-sym">{isOpen ? '−' : '+'}</span>
                  </div>

                  {isOpen && (
                    <div className="accordion-content-body">
                      <p className="body-editorial-p">{mod.details}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENROLLMENT SUCCESS CONFIRMATION MODAL */}
      {showEnrollSuccessModal && (
        <div className="modal-overlay active" onClick={() => setShowEnrollSuccessModal(false)}>
          <div className="modal-box modal-md text-center" onClick={(e) => e.stopPropagation()} style={{ padding: '3rem 2rem' }}>
            <div className="intel-sparkle-box flex-center" style={{ margin: '0 auto 1.2rem', width: '54px', height: '54px', borderRadius: '50%', background: '#e7f5ee' }}>
              <CheckCircle2 size={32} className="text-emerald" />
            </div>

            <span className="micro-eyebrow text-emerald">ENROLLMENT CONFIRMED</span>
            <h2 className="sub-serif-title" style={{ fontSize: '2.2rem', margin: '0.4rem 0' }}>
              You are now enrolled in
            </h2>
            <h3 className="hero-serif-title" style={{ fontSize: '1.8rem', color: '#173c35', margin: '0.2rem 0 1rem' }}>
              {currentCourseId === 'edu-204' ? 'Learning Design & Pedagogical Frameworks' : 'Spatial Thinking & Environmental Architecture'}
            </h3>
            <p className="body-editorial-p" style={{ marginBottom: '2rem' }}>
              Your academic workspace is ready. Access course modules, assignments, attendance records, and AI intelligence.
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
