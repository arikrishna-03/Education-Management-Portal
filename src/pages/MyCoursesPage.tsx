import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getStoredEnrolledCourses, EnrolledCourseData } from '../data/enrollmentState';
import { ArrowRight, BookOpen, Clock, Award } from 'lucide-react';

export const MyCoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourseData[]>([]);

  useEffect(() => {
    setEnrolledCourses(getStoredEnrolledCourses());
  }, []);

  return (
    <div className="academia-page">
      {/* HEADER */}
      <section className="courses-hero-header">
        <div className="academia-container">
          <span className="micro-eyebrow">AUTHENTICATED LEARNING HUB</span>
          <h1 className="hero-serif-title">My Courses</h1>
          <p className="hero-lead-desc" style={{ maxWidth: '600px' }}>
            Continue your learning. Access active academic flow, course materials, assignments, and AI insights.
          </p>
        </div>
      </section>

      {/* ENROLLED COURSES GRID */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          {enrolledCourses.length === 0 ? (
            <div className="empty-courses-state text-center" style={{ padding: '4rem 2rem' }}>
              <h3 className="sub-serif-title">No Enrolled Courses Found</h3>
              <p className="body-editorial-p" style={{ marginBottom: '1.5rem' }}>
                You have not enrolled in any academic courses yet. Browse our curriculum catalog to begin.
              </p>
              <Link to="/courses" className="btn-editorial-primary">
                EXPLORE CATALOG →
              </Link>
            </div>
          ) : (
            <div className="featured-courses-grid">
              {enrolledCourses.map((c) => (
                <div 
                  key={c.courseId} 
                  className="course-editorial-card"
                  onClick={() => navigate(`/enrolled-courses/${c.courseId}`)}
                >
                  <div className="course-img-box" style={{ position: 'relative' }}>
                    <img src={c.image} alt={c.title} className="editorial-img" />
                    <span className="badge-enrolled-status">ACTIVE ENROLLMENT</span>
                  </div>

                  <div className="course-content-box">
                    <span className="micro-category-label">{c.category}</span>
                    <h3 className="course-serif-title">{c.title}</h3>
                    <p className="meta-text" style={{ marginBottom: '1rem' }}>
                      Instructor: <strong>{c.instructor}</strong> · Grade: <strong className="text-emerald">{c.grade}</strong>
                    </p>

                    {/* Progress Bar */}
                    <div className="progress-section-enrolled" style={{ marginBottom: '1.2rem' }}>
                      <div className="flex-between text-xs font-semibold" style={{ marginBottom: '0.3rem' }}>
                        <span className="editorial-label" style={{ fontSize: '0.65rem' }}>COURSE PROGRESS</span>
                        <strong className="text-indigo">{c.progress}%</strong>
                      </div>
                      <div className="progress-bar-bg" style={{ height: '6px', background: '#d9d5cc', borderRadius: '3px' }}>
                        <div 
                          className="progress-bar-fill" 
                          style={{ width: `${c.progress}%`, height: '100%', background: '#173c35', borderRadius: '3px' }} 
                        />
                      </div>
                    </div>

                    <div className="course-meta-bottom flex-between">
                      <span className="meta-text">Attendance: {c.attendancePct}%</span>
                      <button className="btn-editorial-primary text-xs">
                        CONTINUE LEARNING →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
