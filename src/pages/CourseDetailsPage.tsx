import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [activeSyllabusIndex, setActiveSyllabusIndex] = useState<number | null>(0);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

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
    setEnrollSuccess(true);
    setTimeout(() => {
      navigate('/app/courses');
    }, 1500);
  };

  return (
    <div className="academia-page">
      {/* 1. COURSE DETAIL HERO */}
      <section className="course-detail-hero">
        <div className="academia-container">
          <div className="hero-split-grid">
            <div className="hero-text-col">
              <span className="micro-category-label">DESIGN & ARCHITECTURE</span>
              <h1 className="hero-serif-title" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>
                Spatial Thinking & Environmental Architecture
              </h1>
              <p className="hero-lead-desc" style={{ marginBottom: '1.5rem' }}>
                Understand how space shapes human experience through architecture, structural design, and empirical observation.
              </p>

              <div className="course-hero-meta-row flex-align gap-4">
                <div>
                  <span className="micro-eyebrow">INSTRUCTOR</span>
                  <strong className="meta-val-text">Dr. Leila Haddad</strong>
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
                  {enrollSuccess ? 'ENROLLED SUCCESSFULLY ✓' : 'ENROLL NOW →'}
                </button>
              </div>
            </div>

            <div className="hero-image-col">
              <div className="hero-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Spatial Thinking Architecture" 
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
                  {enrollSuccess ? 'ENROLLED ✓' : 'ENROLL NOW →'}
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

      {/* 4. TEACHER INFORMATION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">FACULTY PROFILE</span>
          <h2 className="section-serif-heading">Instructor Information</h2>

          <div className="grid-2-1" style={{ marginTop: '2rem', gap: '3rem' }}>
            <div className="faculty-portrait-frame" style={{ maxHeight: '450px' }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Leila Haddad" 
                className="editorial-img grayscale-img"
              />
            </div>

            <div>
              <span className="micro-category-label">PROFESSOR OF ARCHITECTURE</span>
              <h2 className="hero-serif-title" style={{ fontSize: '2.5rem', margin: '0.3rem 0' }}>Dr. Leila Haddad</h2>
              <p className="role-subtext">Institute of Spatial Studies · Senior Faculty Fellow</p>
              
              <p className="body-editorial-p" style={{ marginTop: '1.2rem' }}>
                Dr. Haddad holds a Ph.D. in Architectural Geometry from ETH Zürich. Her research focuses on high-density pedestrian corridors, environmental psychology, and the cognitive experience of architectural space.
              </p>

              <h4 className="sub-serif-title" style={{ marginTop: '1.5rem' }}>Areas of Expertise</h4>
              <p className="body-editorial-p">Spatial Thinking · Urban Corridor Analysis · Vector Blueprint Systems · Architectural Theory</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SCHEDULE SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">TIMELINE & VENUE</span>
          <h2 className="section-serif-heading">Course Schedule</h2>

          <div className="schedule-editorial-grid" style={{ marginTop: '2rem' }}>
            <div className="schedule-cell">
              <span className="micro-eyebrow">START DATE</span>
              <strong className="sched-val font-serif">14 September 2026</strong>
            </div>
            <div className="schedule-cell">
              <span className="micro-eyebrow">DURATION</span>
              <strong className="sched-val font-serif">12 Weeks</strong>
            </div>
            <div className="schedule-cell">
              <span className="micro-eyebrow">LECTURE DAYS</span>
              <strong className="sched-val font-serif">Tuesday & Thursday</strong>
            </div>
            <div className="schedule-cell">
              <span className="micro-eyebrow">TIME WINDOW</span>
              <strong className="sched-val font-serif">18:00 – 20:00 GMT</strong>
            </div>
            <div className="schedule-cell">
              <span className="micro-eyebrow">VENUE</span>
              <strong className="sched-val font-serif">Studio Hall 102</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
