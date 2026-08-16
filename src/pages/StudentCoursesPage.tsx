import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredEnrolledCourses } from '../data/enrollmentState';
import { BookOpen, ArrowRight, Clock, Award } from 'lucide-react';

export const StudentCoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const enrolledCourses = getStoredEnrolledCourses();

  return (
    <div className="academia-page">
      {/* HEADER */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="micro-eyebrow">ENROLLED ACADEMIC CURRICULUM</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.5rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          MY COURSES
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC', fontSize: '1rem' }}>
          Your enrolled academic courses and digital studio workspaces.
        </p>
      </div>

      {/* ENROLLED COURSES GRID */}
      {enrolledCourses.length === 0 ? (
        <div className="flow-card-panel text-center" style={{ padding: '4rem 2rem', background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px' }}>
          <h3 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.6rem' }}>No Courses Enrolled Yet</h3>
          <p className="meta-text" style={{ marginBottom: '1.5rem', color: '#C7C4BC' }}>
            Explore our curriculum catalog and enroll to access your academic flow workspace.
          </p>
          <button 
            className="btn-editorial-primary"
            onClick={() => navigate('/courses')}
          >
            BROWSE COURSES CATALOG →
          </button>
        </div>
      ) : (
        <div className="featured-courses-grid">
          {enrolledCourses.map((c) => (
            <div key={c.courseId} className="course-editorial-card" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px', padding: '1.8rem' }}>
              <div className="course-img-box">
                <img src={c.image} alt={c.title} className="editorial-img" />
              </div>
              <span className="micro-category-label">{c.category}</span>
              <h3 className="course-serif-title" style={{ fontSize: '1.6rem', margin: '0.4rem 0 0.8rem', color: '#F5EFE3' }}>{c.title}</h3>
              <p className="meta-text" style={{ marginBottom: '1rem', color: '#C7C4BC' }}>Instructor: <strong>{c.instructor}</strong></p>
              
              {/* PROGRESS BAR */}
              <div className="progress-section-enrolled" style={{ marginBottom: '1.5rem' }}>
                <div className="flex-between text-xs font-semibold" style={{ marginBottom: '0.4rem' }}>
                  <span className="editorial-label" style={{ fontSize: '0.65rem' }}>COURSE PROGRESS</span>
                  <strong className="text-gold">{c.progress}%</strong>
                </div>
                <div className="progress-bar-bg" style={{ height: '6px', background: '#1B3045', borderRadius: '4px' }}>
                  <div className="progress-bar-fill" style={{ width: `${c.progress}%`, height: '100%', background: '#F1BA4B', borderRadius: '4px' }} />
                </div>
              </div>

              {/* PRIMARY ACTION BUTTON NAVIGATES TO REAL /student/courses/:courseId ROUTE */}
              <button 
                className="btn-editorial-primary w-full"
                style={{ padding: '0.9rem' }}
                onClick={() => navigate(`/student/courses/${c.courseId}`)}
              >
                GO TO MY COURSE →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
