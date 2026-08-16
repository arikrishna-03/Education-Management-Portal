import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Users, 
  Award, 
  Brain, 
  CheckCircle2, 
  Star, 
  Clock, 
  Lightbulb, 
  Megaphone,
  GraduationCap
} from 'lucide-react';
import { MOCK_COURSES } from '../data/edutrData';

interface HomePageProps {
  onSelectCourse: (courseId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectCourse }) => {
  const featuredCourses = MOCK_COURSES.slice(0, 3);
  const topTeachers = [
    { name: "Dr. Sarah Jenkins", title: "Professor of Artificial Intelligence", dept: "Computer Science", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200", rating: 4.9 },
    { name: "Prof. David Vance", title: "Chair of Software Engineering", dept: "Software Systems", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", rating: 4.8 },
    { name: "Dr. Amina Vance", title: "Director of Tech Ethics Institute", dept: "Ethics & Governance", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200", rating: 4.95 }
  ];

  return (
    <div className="page-wrapper public-theme-blue">
      {/* Hero / Banner */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">
              <Sparkles size={14} /> AI-POWERED ACADEMIC OPERATING SYSTEM
            </span>
            <h1 className="hero-headline">
              Learn Smarter.<br />
              <span className="text-gradient-blue">Perform Better.</span>
            </h1>
            <p className="hero-subtext">
              EduTR unifies student learning management, real-time attendance, rubric-backed assessment studios, and predictive AI intelligence into one seamless platform.
            </p>
            <div className="hero-cta-buttons">
              <Link to="/courses" className="btn-hero-primary">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link to="/login" className="btn-hero-secondary">
                Get Started
              </Link>
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="hero-card-header flex-between">
              <div className="flex-align gap-2">
                <Brain size={20} className="text-indigo" />
                <span className="font-bold text-sm">Live AI Intelligence Core</span>
              </div>
              <span className="status-pill status-green">Operational</span>
            </div>
            
            <div className="hero-card-stats">
              <div className="h-stat-box">
                <span className="h-stat-label">Active Students</span>
                <strong className="h-stat-val">2,846</strong>
              </div>
              <div className="h-stat-box">
                <span className="h-stat-label">Average Pass Rate</span>
                <strong className="h-stat-val text-emerald">94.8%</strong>
              </div>
              <div className="h-stat-box">
                <span className="h-stat-label">AI Risk Alerts</span>
                <strong className="h-stat-val text-amber">3 Active</strong>
              </div>
            </div>

            <div className="hero-ai-snippet">
              <div className="flex-align gap-2 text-xs font-bold text-indigo" style={{ marginBottom: '0.3rem' }}>
                <Lightbulb size={14} /> AI STUDY TIP OF THE DAY
              </div>
              <p className="text-xs text-muted">
                Review Transformer Self-Attention matrix math today before Wednesday’s PyTorch lab exam to lock memory retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Banner Section */}
      <section className="section-padding bg-surface border-y">
        <div className="page-container">
          <div className="section-header-flex">
            <div>
              <span className="section-eyebrow flex-align gap-1 text-orange">
                <Megaphone size={16} /> Campus Bulletins
              </span>
              <h2 className="section-title">Live Academic Announcements</h2>
            </div>
          </div>

          <div className="grid-3">
            <div className="announcement-card-pub">
              <span className="tag-blue">Registration</span>
              <h3 className="ann-title">Fall 2026 Course Add/Drop Period Open</h3>
              <p className="ann-desc">Students can adjust course schedules and electives until August 30 via the portal.</p>
              <span className="ann-date">Posted 2 hours ago</span>
            </div>
            <div className="announcement-card-pub">
              <span className="tag-orange">Exams</span>
              <h3 className="ann-title">Midterm Assessment Window Schedule</h3>
              <p className="ann-desc">Midterm exam timetables and lab venue assignments are now available under Exams & Grades.</p>
              <span className="ann-date">Posted Yesterday</span>
            </div>
            <div className="announcement-card-pub">
              <span className="tag-green">AI Research</span>
              <h3 className="ann-title">Honors AI Research Fellowship Applications</h3>
              <p className="ann-desc">Senior computer science students with GPA &gt; 3.75 are invited to apply for lab stipends.</p>
              <span className="ann-date">Posted 3 days ago</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="section-header-flex">
            <div>
              <span className="section-eyebrow text-blue">Curriculum Showcase</span>
              <h2 className="section-title">Featured Academic Courses</h2>
            </div>
            <Link to="/courses" className="btn-ghost-blue">
              View All Courses ({MOCK_COURSES.length}) <ArrowRight size={16} />
            </Link>
          </div>

          <div className="courses-grid-3">
            {featuredCourses.map((course) => (
              <div key={course.id} className="public-course-card">
                <div className="course-card-img-wrapper">
                  <img src={course.image} alt={course.name} className="course-card-img" />
                  <span className="course-badge-price">{course.price}</span>
                </div>
                <div className="course-card-body">
                  <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                    <span className="tag-blue">{course.category}</span>
                    <span className="flex-align gap-1 font-bold text-amber">
                      <Star size={14} fill="#f59e0b" /> {course.rating} ({course.reviewsCount})
                    </span>
                  </div>
                  <h3 className="public-course-title">{course.name}</h3>
                  <p className="public-course-desc">{course.description}</p>
                  
                  <div className="instructor-row-sm">
                    <img src={course.instructorAvatar} alt={course.instructor} className="avatar-xs" />
                    <div>
                      <h5 className="inst-name">{course.instructor}</h5>
                      <span className="inst-title">{course.instructorTitle}</span>
                    </div>
                  </div>

                  <div className="card-footer-flex">
                    <span className="meta-text"><Users size={12} /> {course.studentsCount} Students</span>
                    <Link to={`/courses/${course.id}`} className="btn-card-view">
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Teachers Section */}
      <section className="section-padding bg-surface border-y">
        <div className="page-container">
          <div className="section-header-center">
            <span className="section-eyebrow text-blue">Faculty Excellence</span>
            <h2 className="section-title">Meet Our Top Professors & Researchers</h2>
            <p className="section-subtitle">World-class educators driving academic rigor, student mentorship, and groundbreaking research.</p>
          </div>

          <div className="grid-3" style={{ marginTop: '2rem' }}>
            {topTeachers.map((teacher, idx) => (
              <div key={idx} className="teacher-card">
                <img src={teacher.avatar} alt={teacher.name} className="teacher-avatar-lg" />
                <h3 className="teacher-name">{teacher.name}</h3>
                <p className="teacher-title">{teacher.title}</p>
                <span className="dept-tag">{teacher.dept}</span>
                <div className="teacher-rating-box">
                  <Star size={14} fill="#f59e0b" className="text-amber" />
                  <span><strong>{teacher.rating}</strong> / 5.0 Instructor Rating</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Study Tips & Popular Courses Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="grid-2-1">
            <div className="card-panel-pub">
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Popular Courses Enrolling Now</h2>
              <div className="pop-course-list">
                {MOCK_COURSES.map((c) => (
                  <div key={c.id} className="pop-course-item">
                    <img src={c.image} alt={c.name} className="pop-img" />
                    <div style={{ flex: 1 }}>
                      <span className="tag-blue">{c.code}</span>
                      <h4 className="pop-title">{c.name}</h4>
                      <span className="text-xs text-muted">{c.instructor} • {c.duration}</span>
                    </div>
                    <Link to={`/courses/${c.id}`} className="btn-secondary-sm">
                      Inspect
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tip Showcase Card */}
            <div className="ai-tip-card-pub">
              <div className="ai-tip-icon">
                <Brain size={36} className="text-indigo" />
              </div>
              <h3 className="ai-tip-headline">AI-Powered Personalized Study Engine</h3>
              <p className="ai-tip-desc">
                Our embedded neural algorithms continuously analyze your attendance patterns, lab assignment submissions, and quiz metrics to predict knowledge gaps before exams.
              </p>
              <ul className="ai-benefit-list">
                <li><CheckCircle2 size={16} className="text-emerald" /> Automated Weak Topic Identification</li>
                <li><CheckCircle2 size={16} className="text-emerald" /> Spaced Repetition Revision Schedules</li>
                <li><CheckCircle2 size={16} className="text-emerald" /> Instant Assignment Feedback Loops</li>
              </ul>
              <Link to="/courses" className="btn-hero-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Explore Curriculum <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="cta-banner-section">
        <div className="page-container text-center">
          <h2 className="cta-title">Ready to Elevate Your Academic Journey?</h2>
          <p className="cta-subtitle">Join thousands of students and faculty leveraging EduTR for intelligent learning and administrative excellence.</p>
          <div className="flex-center gap-4">
            <Link to="/courses" className="btn-hero-primary">
              Explore Courses Now
            </Link>
            <Link to="/contact" className="btn-hero-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
