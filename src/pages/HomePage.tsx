import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, School, Sparkles, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredCourses = [
    {
      id: 'arc-118',
      title: 'Spatial Thinking & Environmental Architecture',
      category: 'ARCHITECTURE & DESIGN',
      instructor: 'Dr. Leila Haddad',
      duration: '12 Weeks',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      desc: 'Understand how built environments and spatial geometry shape human experience and environmental pedagogy.'
    },
    {
      id: 'edu-204',
      title: 'Learning Design & Pedagogical Frameworks',
      category: 'PEDAGOGICAL DESIGN',
      instructor: 'Dr. Sarah Jenkins',
      duration: '10 Weeks',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000',
      desc: 'Analyze cognitive load theories, instructional systems design, and empirical learning matrix frameworks.'
    }
  ];

  const announcements = [
    {
      id: '01',
      title: '2026 Academic Term Registration Open',
      date: '14 August 2026'
    },
    {
      id: '02',
      title: 'International Architectural Research Colloquium Keynote',
      date: '02 September 2026'
    },
    {
      id: '03',
      title: 'AI Structural Design & Pedagogy Fellowship Announced',
      date: '18 September 2026'
    }
  ];

  const faculty = [
    {
      name: 'Dr. Leila Haddad',
      role: 'Senior Fellow in Spatial Geometry',
      discipline: 'ARCHITECTURE',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Professor of Pedagogical Systems',
      discipline: 'EDUCATION',
      image: 'https://images.unsplash.com/photo-1580894732413-8472bf624fde?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Prof. Marcus Vance',
      role: 'Director of AI Learning Research',
      discipline: 'COMPUTER SCIENCE',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="academia-page">
      {/* 1. HERO SECTION */}
      <section className="academia-hero-section">
        <div className="academia-container">
          <div className="hero-split-grid">
            <div className="hero-text-col">
              <span className="micro-eyebrow">ACADEMIC PORTAL & RESEARCH DESK</span>
              <h1 className="hero-serif-title">
                Academic Hub
              </h1>
              <p className="hero-lead-desc">
                An institutional platform for structural thinking, pedagogical design, and restrained AI academic intelligence.
              </p>

              <div className="flex-align gap-4 flex-wrap" style={{ marginTop: '0.5rem' }}>
                <Link to="/login" className="btn-editorial-primary">
                  USER LOGIN / REGISTER →
                </Link>
                <Link to="/courses" className="btn-editorial-primary-light">
                  EXPLORE COURSES →
                </Link>
              </div>
            </div>

            <div className="hero-image-col">
              <div className="hero-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Academic Library Architecture" 
                  className="editorial-img grayscale-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE GOLD ACADEMIC INTELLIGENCE PANEL */}
      <section className="section-space-sm border-top-thin">
        <div className="academia-container">
          <div className="signature-gold-panel" style={{ background: '#F1BA4B', color: '#05101E', borderRadius: '16px', padding: '3.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
            <span className="micro-eyebrow" style={{ color: '#472D00', letterSpacing: '0.14em' }}>INTELLIGENCE SYSTEM</span>
            <h2 className="hero-title-dark" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#05101E', margin: '0.4rem 0 1rem' }}>
              Academic Intelligence & Pedagogy
            </h2>
            <p className="hero-desc-dark" style={{ color: '#2A1A00', fontSize: '1.1rem', maxWidth: '680px', lineHeight: '1.7', marginBottom: '2rem' }}>
              Integrating analytical rigor, vector spatial modeling, and contextual AI study workflows across institutional research disciplines.
            </p>

            {/* 4-COLUMN HORIZONTAL AI GRID */}
            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ background: '#05101E', padding: '1.6rem 1.4rem', borderRadius: '12px', border: '1px solid #1B3045' }}>
                <span className="micro-eyebrow" style={{ color: '#F1BA4B', fontSize: '0.65rem' }}>01 · RESEARCH MATRIX</span>
                <h4 style={{ color: '#F5EFE3', fontSize: '1.1rem', margin: '0.3rem 0', fontFamily: 'var(--font-serif)' }}>Synthesize Literature</h4>
                <p className="text-xs text-muted" style={{ color: '#C7C4BC', lineHeight: '1.5' }}>Clarify complex academic material into structured synthesis matrices.</p>
              </div>

              <div style={{ background: '#05101E', padding: '1.6rem 1.4rem', borderRadius: '12px', border: '1px solid #1B3045' }}>
                <span className="micro-eyebrow" style={{ color: '#F1BA4B', fontSize: '0.65rem' }}>02 · SYNTAX EVALUATION</span>
                <h4 style={{ color: '#F5EFE3', fontSize: '1.1rem', margin: '0.3rem 0', fontFamily: 'var(--font-serif)' }}>Argument Structure</h4>
                <p className="text-xs text-muted" style={{ color: '#C7C4BC', lineHeight: '1.5' }}>Improve thesis clarity, argument flow, and citation alignment.</p>
              </div>

              <div style={{ background: '#05101E', padding: '1.6rem 1.4rem', borderRadius: '12px', border: '1px solid #1B3045' }}>
                <span className="micro-eyebrow" style={{ color: '#F1BA4B', fontSize: '0.65rem' }}>03 · DELTA REVISION</span>
                <h4 style={{ color: '#F5EFE3', fontSize: '1.1rem', margin: '0.3rem 0', fontFamily: 'var(--font-serif)' }}>Empirical Knowledge</h4>
                <p className="text-xs text-muted" style={{ color: '#C7C4BC', lineHeight: '1.5' }}>Create focused revision plans based on empirical knowledge gaps.</p>
              </div>

              <div style={{ background: '#05101E', padding: '1.6rem 1.4rem', borderRadius: '12px', border: '1px solid #1B3045' }}>
                <span className="micro-eyebrow" style={{ color: '#F1BA4B', fontSize: '0.65rem' }}>04 · PLANNING MODULE</span>
                <h4 style={{ color: '#F5EFE3', fontSize: '1.1rem', margin: '0.3rem 0', fontFamily: 'var(--font-serif)' }}>Personalized Routines</h4>
                <p className="text-xs text-muted" style={{ color: '#C7C4BC', lineHeight: '1.5' }}>Build personalized study routines around key assessment windows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANNOUNCEMENTS SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="section-header-flex" style={{ marginBottom: '2rem' }}>
            <span className="micro-eyebrow">INSTITUTIONAL ANNOUNCEMENTS</span>
          </div>

          <div className="announcements-editorial-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {announcements.map((item) => (
              <div key={item.id} className="announcement-row flex-between" style={{ background: '#0D1B2D', padding: '1.2rem 1.8rem', border: '1px solid #1B3045', borderRadius: '10px' }}>
                <div className="flex-align gap-4">
                  <span className="ann-num font-serif text-gold" style={{ fontSize: '1.4rem', fontWeight: 700 }}>{item.id}</span>
                  <h3 className="ann-title font-serif text-primary" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: 0 }}>{item.title}</h3>
                </div>
                <div className="flex-align gap-4">
                  <span className="ann-date text-xs text-muted">{item.date}</span>
                  <span className="arrow-hover text-gold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED COURSES SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="section-header-flex flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <span className="micro-eyebrow">CURRICULUM DISCIPLINE</span>
              <h2 className="section-serif-heading" style={{ color: '#F5EFE3', fontSize: '2.2rem', margin: 0 }}>Featured Courses</h2>
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
          <h2 className="section-serif-heading" style={{ color: '#F5EFE3', fontSize: '2.2rem', marginBottom: '2rem' }}>Faculty Directory</h2>

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

      {/* 5. AI STUDY TIPS SECTION (4-COLUMN HORIZONTAL GRID) */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="ai-tips-container">
            <span className="micro-eyebrow">INTELLIGENT METHODOLOGY</span>
            <h2 className="section-serif-heading" style={{ maxWidth: '600px', color: '#F5EFE3', fontSize: '2.4rem', margin: '0.4rem 0' }}>
              A more intelligent way to study.
            </h2>
            <p className="ai-lead-text" style={{ color: '#C7C4BC', fontSize: '1.05rem', maxWidth: '640px', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Use AI thoughtfully to organize research, understand complex ideas, improve writing structure, and build more effective academic habits.
            </p>

            {/* 4-COLUMN HORIZONTAL GRID */}
            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.8rem' }}>
              <div className="ai-tip-card" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '12px', padding: '1.8rem 1.4rem' }}>
                <span className="ai-step-num font-serif text-gold" style={{ fontSize: '2rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>01</span>
                <h4 className="ai-tip-title" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', color: '#F5EFE3', marginBottom: '0.5rem' }}>RESEARCH</h4>
                <p className="ai-tip-desc" style={{ fontSize: '0.88rem', color: '#C7C4BC', lineHeight: '1.6' }}>Clarify complex academic material into structured synthesis matrices.</p>
              </div>

              <div className="ai-tip-card" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '12px', padding: '1.8rem 1.4rem' }}>
                <span className="ai-step-num font-serif text-gold" style={{ fontSize: '2rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>02</span>
                <h4 className="ai-tip-title" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', color: '#F5EFE3', marginBottom: '0.5rem' }}>WRITING</h4>
                <p className="ai-tip-desc" style={{ fontSize: '0.88rem', color: '#C7C4BC', lineHeight: '1.6' }}>Improve argument structure, clarity, and citation alignment.</p>
              </div>

              <div className="ai-tip-card" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '12px', padding: '1.8rem 1.4rem' }}>
                <span className="ai-step-num font-serif text-gold" style={{ fontSize: '2rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>03</span>
                <h4 className="ai-tip-title" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', color: '#F5EFE3', marginBottom: '0.5rem' }}>REVISION</h4>
                <p className="ai-tip-desc" style={{ fontSize: '0.88rem', color: '#C7C4BC', lineHeight: '1.6' }}>Create focused revision plans based on empirical knowledge gaps.</p>
              </div>

              <div className="ai-tip-card" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '12px', padding: '1.8rem 1.4rem' }}>
                <span className="ai-step-num font-serif text-gold" style={{ fontSize: '2rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>04</span>
                <h4 className="ai-tip-title" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', color: '#F5EFE3', marginBottom: '0.5rem' }}>PLANNING</h4>
                <p className="ai-tip-desc" style={{ fontSize: '0.88rem', color: '#C7C4BC', lineHeight: '1.6' }}>Build personalized study routines around key assessment windows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOME CTA BANNER */}
      <section className="home-cta-banner text-center border-top-thin" style={{ padding: '5rem 0' }}>
        <div className="academia-container">
          <span className="micro-eyebrow">BEGIN YOUR STUDIES</span>
          <h2 className="cta-serif-title font-serif" style={{ fontSize: '3rem', color: '#F5EFE3', margin: '0.4rem 0 1rem' }}>Ready to Begin?</h2>
          <p className="cta-subtitle text-muted" style={{ fontSize: '1.1rem', color: '#C7C4BC', marginBottom: '2rem' }}>
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
