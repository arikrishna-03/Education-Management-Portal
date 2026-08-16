import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getStoredEnrolledCourses, EnrolledCourseData } from '../data/enrollmentState';
import { ArrowRight, BookOpen, Clock, Award } from 'lucide-react';

export const StudentCoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourseData[]>([]);

  useEffect(() => {
    setEnrolledCourses(getStoredEnrolledCourses());
  }, []);

  return (
    <div className="academia-page">
      {/* HERO HEADER */}
      <section className="courses-hero-header">
        <div className="academia-container">
          <span className="micro-eyebrow">ENROLLED STUDENT CURRICULUM</span>
          <h1 className="hero-serif-title">MY COURSES →</h1>
          <p className="hero-lead-desc" style={{ maxWidth: '600px' }}>
            Select an active course below to open its dedicated Academic Flow workspace.
          </p>
        </div>
      </section>

      {/* COURSES LIST */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="featured-courses-grid">
            {enrolledCourses.map((c) => (
              <div 
                key={c.courseId} 
                className="course-editorial-card"
                onClick={() => navigate(`/student/courses/${c.courseId}`)}
              >
                <div className="course-img-box" style={{ position: 'relative' }}>
                  <img src={c.image} alt={c.title} className="editorial-img" />
                  <span className="badge-enrolled-status">ENROLLED</span>
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
                      <span className="editorial-label" style={{ fontSize: '0.65rem' }}>PROGRESS</span>
                      <strong className="text-indigo">{c.progress}%</strong>
                    </div>
                    <div className="progress-bar-bg" style={{ height: '6px', background: '#d9d5cc' }}>
                      <div className="progress-bar-fill" style={{ width: `${c.progress}%`, height: '100%', background: '#173c35' }} />
                    </div>
                  </div>

                  <div className="course-meta-bottom flex-between">
                    <span className="meta-text">Attendance: {c.attendancePct}%</span>
                    <button className="btn-editorial-primary text-xs">
                      OPEN ACADEMIC FLOW →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
