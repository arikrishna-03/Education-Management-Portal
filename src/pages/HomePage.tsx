import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, UserCheck, Sparkles, Award } from 'lucide-react';

export const HomePage: React.FC = () => {
  const announcements = [
    {
      id: '01',
      title: 'Autumn Academic Research Seminars Open for Registration',
      date: '14 September 2026'
    },
    {
      id: '02',
      title: 'Publication: Spatial Geometry & Pedagogy Matrix',
      date: '02 September 2026'
    },
    {
      id: '03',
      title: 'Faculty Appointments: Applied Neural Learning Systems',
      date: '28 August 2026'
    }
  ];

  const featuredCourses = [
    {
      id: 'arc-118',
      category: 'ARCHITECTURE & DESIGN',
      title: 'Spatial Thinking & Environmental Architecture',
      desc: 'A study of space, structure, and the relationship between human experience and built environments.',
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
      category: 'ACADEMIC WRITING',
      title: 'Academic Writing & Research Synthesis',
      desc: 'Developing clarity of argument, structural coherence, and rigorous literature analysis.',
      instructor: 'Dr. Marcus Brody',
      duration: '8 weeks',
      level: 'Beginner',
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
              <div className="hero-cta-wrapper flex-align gap-3 flex-wrap">
                <Link to="/login" className="btn-editorial-primary">
                  USER LOGIN / REGISTER <span className="arrow-sym">→</span>
                </Link>
                <Link to="/courses" className="btn-editorial-primary-light">
                  EXPLORE COURSES →
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

      {/* SIGNATURE GOLD ACADEMIC HERO CARD */}
      <section className="section-space-sm">
        <div className="academia-container">
          <div className="signature-gold-panel">
            <div className="circle-decor-1" />
            <div className="circle-decor-2" />
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className="micro-eyebrow" style={{ color: '#472D00' }}>INTELLIGENT LEARNING ENGINE</span>
              <h2 className="hero-title-dark">AI-Powered Academic Intelligence & Insights</h2>
              <p className="hero-desc-dark">
                Track coursework progress, detect academic weak spots, generate automated revision schedules, and evaluate assignments with personalized AI recommendations.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/login" className="btn-dark-green">
                  REVIEW AI INSIGHTS <span className="arrow-sym">→</span>
                </Link>
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
          <div className="section-header-flex">
            <div>
              <span className="micro-eyebrow">CURRICULUM DISCIPLINE</span>
              <h2 className="section-serif-heading">Featured Courses</h2>
            </div>
            <Link to="/courses" className="btn-link-editorial">
              VIEW CATALOG →
            </Link>
          </div>

          <div className="featured-courses-grid">
            {featuredCourses.map((c) => (
              <Link key={c.id} to={`/courses/${c.id}`} className="course-editorial-card">
                <div className="course-img-box">
                  <img src={c.image} alt={c.title} className="editorial-img" />
                </div>
                <span className="micro-category-label">{c.category}</span>
                <h3 className="course-serif-title">{c.title}</h3>
                <p className="course-body-desc">{c.desc}</p>
                <div className="course-meta-bottom flex-between">
                  <span className="meta-text">{c.instructor} · {c.duration}</span>
                  <span className="btn-view-link">VIEW COURSE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FACULTY DIRECTORY SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">ACADEMIC LEADERSHIP</span>
          <h2 className="section-serif-heading">Faculty Directory</h2>

          <div className="faculty-grid-3">
            {faculty.map((member, idx) => (
              <div key={idx} className="faculty-card">
                <div className="faculty-portrait-frame">
                  <img src={member.image} alt={member.name} className="editorial-img grayscale-img" />
                </div>
                <span className="micro-category-label" style={{ marginTop: '0.8rem' }}>{member.discipline}</span>
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

      {/* 6. HOME CTA BANNER */}
      <section className="home-cta-banner text-center border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">BEGIN YOUR STUDIES</span>
          <h2 className="cta-serif-title">Ready to Begin?</h2>
          <p className="cta-subtitle">
            Explore our academic curriculum catalog or access your student & teacher workspace.
          </p>
          <div className="flex-center gap-4 flex-wrap">
            <Link to="/login" className="btn-editorial-primary">
              USER LOGIN / REGISTER →
            </Link>
            <Link to="/courses" className="btn-editorial-primary-light">
              EXPLORE COURSES →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
