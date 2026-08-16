import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const announcements = [
    { id: '01', title: 'Autumn applications are now open', date: '12 September 2026' },
    { id: '02', title: 'New research seminar series announced', date: '24 September 2026' },
    { id: '03', title: 'Faculty lecture programme published', date: '03 October 2026' },
  ];

  const featuredCourses = [
    {
      id: 'arc-118',
      category: 'ARCHITECTURE & DESIGN',
      title: 'Spatial Thinking & Environmental Architecture',
      desc: 'A study of space, structure, and the relationship between people and their built environments.',
      instructor: 'Dr. Leila Haddad',
      duration: '12 weeks',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'edu-204',
      category: 'PEDAGOGICAL DESIGN',
      title: 'Learning Design & Pedagogical Frameworks',
      desc: 'Exploring cognitive load theory, instructional architecture, and systemic educational models.',
      instructor: 'Dr. Sarah Jenkins',
      duration: '10 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'com-210',
      category: 'ACADEMIC SYNTHESIS',
      title: 'Academic Writing & Research Synthesis',
      desc: 'Synthesizing empirical sources into structured literature matrices and peer-reviewed papers.',
      instructor: 'Dr. Marcus Brody',
      duration: '8 weeks',
      level: 'Foundation',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'cs-312',
      category: 'APPLIED AI & COMPUTING',
      title: 'Applied AI & Neural Learning Systems',
      desc: 'Rigorous analysis of deep learning architectures, tensor backpropagation, and cognitive modeling.',
      instructor: 'Prof. David Vance',
      duration: '14 weeks',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const faculty = [
    {
      name: 'Dr. Leila Haddad',
      discipline: 'ARCHITECTURE & SPATIAL DESIGN',
      role: 'Professor of Spatial Studies',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Dr. Marcus Chen',
      discipline: 'COMPUTER SCIENCE & AI',
      role: 'Chair of Neural Computing',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Prof. Elena Rossi',
      discipline: 'ACADEMIC WRITING & RESEARCH',
      role: 'Director of Humanities Lab',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="academia-page">
      {/* 1. LUXURY HERO SECTION */}
      <section className="academia-hero-section">
        <div className="academia-container">
          <div className="hero-split-grid">
            <div className="hero-text-col">
              <span className="micro-eyebrow">ACADEMIC EXCELLENCE</span>
              <h1 className="hero-serif-title">
                Learn deeply.<br />
                Think independently.<br />
                Create what matters.
              </h1>
              <p className="hero-lead-desc">
                A carefully curated academic environment for ambitious learners, researchers, and future thinkers.
              </p>
              <div className="hero-cta-wrapper">
                <Link to="/courses" className="btn-editorial-primary">
                  EXPLORE COURSES <span className="arrow-sym">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-image-col">
              <div className="hero-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1400" 
                  alt="Academic Library Architecture"
                  className="editorial-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANNOUNCEMENTS SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="section-header-flex">
            <span className="micro-eyebrow">INSTITUTIONAL ANNOUNCEMENTS</span>
          </div>

          <div className="announcements-editorial-list">
            {announcements.map((item) => (
              <div key={item.id} className="announcement-row flex-between">
                <div className="flex-align gap-4">
                  <span className="ann-num">{item.id}</span>
                  <h3 className="ann-title">{item.title}</h3>
                </div>
                <div className="flex-align gap-4">
                  <span className="ann-date">{item.date}</span>
                  <span className="arrow-hover">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED COURSES SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="section-header-flex flex-between">
            <div>
              <span className="micro-eyebrow">CURRICULUM DISCIPLINE</span>
              <h2 className="section-serif-heading">Featured Courses</h2>
            </div>
            <Link to="/courses" className="btn-link-editorial">
              ALL COURSES →
            </Link>
          </div>

          <div className="featured-courses-grid">
            {featuredCourses.map((course) => (
              <div key={course.id} className="course-editorial-card" onClick={() => navigate(`/courses/${course.id}`)}>
                <div className="course-img-box">
                  <img src={course.image} alt={course.title} className="editorial-img" />
                </div>
                <div className="course-content-box">
                  <span className="micro-category-label">{course.category}</span>
                  <h3 className="course-serif-title">{course.title}</h3>
                  <p className="course-body-desc">{course.desc}</p>
                  
                  <div className="course-meta-bottom flex-between">
                    <span className="meta-text">{course.instructor} · {course.duration}</span>
                    <span className="btn-view-link">VIEW COURSE →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TOP TEACHERS / FACULTY SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="section-header-flex">
            <span className="micro-eyebrow">ACADEMIC LEADERSHIP</span>
            <h2 className="section-serif-heading">Faculty Directory</h2>
          </div>

          <div className="faculty-grid-3">
            {faculty.map((member, idx) => (
              <div key={idx} className="faculty-card">
                <div className="faculty-portrait-frame">
                  <img src={member.image} alt={member.name} className="editorial-img grayscale-img" />
                </div>
                <span className="micro-category-label" style={{ marginTop: '1rem', display: 'block' }}>
                  {member.discipline}
                </span>
                <h3 className="faculty-serif-name">{member.name}</h3>
                <p className="faculty-role-text">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI STUDY TIPS SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="ai-tips-container">
            <span className="micro-eyebrow">INTELLIGENT METHODOLOGY</span>
            <h2 className="section-serif-heading" style={{ maxWidth: '600px' }}>
              A more intelligent way to study.
            </h2>
            <p className="ai-lead-text">
              Use AI thoughtfully to organize research, understand complex ideas, improve writing structure, and build more effective academic habits.
            </p>

            <div className="ai-grid-4">
              <div className="ai-tip-card">
                <span className="ai-step-num">01</span>
                <h4 className="ai-tip-title">RESEARCH</h4>
                <p className="ai-tip-desc">Clarify complex academic material into structured synthesis matrices.</p>
              </div>
              <div className="ai-tip-card">
                <span className="ai-step-num">02</span>
                <h4 className="ai-tip-title">WRITING</h4>
                <p className="ai-tip-desc">Improve argument structure, clarity, and citation alignment.</p>
              </div>
              <div className="ai-tip-card">
                <span className="ai-step-num">03</span>
                <h4 className="ai-tip-title">REVISION</h4>
                <p className="ai-tip-desc">Create focused revision plans based on empirical knowledge gaps.</p>
              </div>
              <div className="ai-tip-card">
                <span className="ai-step-num">04</span>
                <h4 className="ai-tip-title">PLANNING</h4>
                <p className="ai-tip-desc">Build personalized study routines around key assessment windows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOME CTA SECTION */}
      <section className="home-cta-banner">
        <div className="academia-container text-center">
          <h2 className="cta-serif-title">A deeper way to learn.</h2>
          <p className="cta-subtitle">
            Explore courses designed for curious minds and ambitious futures.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/courses" className="btn-editorial-primary-light">
              EXPLORE COURSES <span className="arrow-sym">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
