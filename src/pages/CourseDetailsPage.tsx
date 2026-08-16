import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Clock, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { MOCK_COURSES, User } from '../data/edutrData';

interface CourseDetailsPageProps {
  currentUser: User;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ currentUser, onTriggerToast }) => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'outcomes' | 'reviews'>('overview');

  const course = MOCK_COURSES.find((c) => c.id === courseId) || MOCK_COURSES[0];

  const handleEnrollClick = () => {
    if (currentUser.role === 'public') {
      onTriggerToast('info', 'Authentication Required', 'Please log in or register to enroll in academic courses.');
      navigate('/login');
    } else {
      setIsEnrolled(true);
      onTriggerToast('success', 'Enrollment Complete!', `You are now enrolled in ${course.code}: ${course.name}.`);
    }
  };

  return (
    <div className="page-wrapper public-theme-blue">
      {/* Back Button */}
      <div className="page-container" style={{ paddingTop: '1.5rem' }}>
        <Link to="/courses" className="btn-ghost-blue flex-align gap-1">
          <ArrowLeft size={16} /> Back to Course Directory
        </Link>
      </div>

      {/* Hero Course Header Banner */}
      <div className="course-detail-hero">
        <div className="page-container grid-2-1">
          <div>
            <div className="flex-align gap-2" style={{ marginBottom: '0.8rem' }}>
              <span className="course-code-pill-lg">{course.code}</span>
              <span className="tag-blue">{course.category}</span>
              <span className="badge-indigo-light">{course.difficulty} Level</span>
            </div>
            
            <h1 className="course-detail-title">{course.name}</h1>
            <p className="course-detail-desc">{course.description}</p>

            <div className="course-detail-meta-row flex-align gap-4">
              <span className="flex-align gap-1 font-bold text-amber">
                <Star size={16} fill="#f59e0b" /> {course.rating} ({course.reviewsCount} reviews)
              </span>
              <span className="flex-align gap-1 text-muted">
                <Users size={16} /> {course.studentsCount} Students Enrolled
              </span>
              <span className="flex-align gap-1 text-muted">
                <Clock size={16} /> {course.duration}
              </span>
            </div>

            {/* Instructor Quick Info */}
            <div className="instructor-detail-bar flex-align gap-3">
              <img src={course.instructorAvatar} alt={course.instructor} className="avatar-md" />
              <div>
                <h4 className="inst-name-md">{course.instructor}</h4>
                <span className="inst-title-md">{course.instructorTitle}</span>
              </div>
            </div>
          </div>

          {/* Right Enrollment CTA Box */}
          <div className="course-cta-card">
            <img src={course.image} alt={course.name} className="cta-card-img" />
            <div className="cta-card-body">
              <div className="cta-price-row flex-between">
                <span className="text-muted text-xs font-bold">COURSE TUITION</span>
                <strong className="cta-price-val">{course.price}</strong>
              </div>

              {!isEnrolled ? (
                <button className="btn-enroll-primary" onClick={handleEnrollClick}>
                  Enroll Now <ArrowRight size={18} />
                </button>
              ) : (
                <button className="btn-enroll-success" onClick={() => navigate('/dashboard')}>
                  <CheckCircle2 size={18} /> Access Course Dashboard
                </button>
              )}

              <p className="text-center text-xs text-muted" style={{ marginTop: '0.8rem' }}>
                Full access to assignments, exam simulators, and AI feedback.
              </p>

              <div className="cta-features-list">
                <div className="feat-item flex-align gap-2"><BookOpen size={14} className="text-blue" /> {course.syllabus.length} Module Lessons</div>
                <div className="feat-item flex-align gap-2"><Calendar size={14} className="text-blue" /> {course.schedule}</div>
                <div className="feat-item flex-align gap-2"><ShieldCheck size={14} className="text-emerald" /> University Credit Eligible</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Course Content Tabs */}
      <div className="page-container section-padding">
        <div className="course-detail-tabs-bar">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'syllabus' ? 'active' : ''}`}
            onClick={() => setActiveTab('syllabus')}
          >
            Syllabus & Schedule
          </button>
          <button 
            className={`tab-btn ${activeTab === 'outcomes' ? 'active' : ''}`}
            onClick={() => setActiveTab('outcomes')}
          >
            Learning Outcomes
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Student Reviews ({course.reviewsCount})
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="tab-content-box">
            <h3 className="section-title-sm">Course Overview & Objectives</h3>
            <p className="detail-para">{course.description}</p>
            
            <h4 className="section-title-sm" style={{ marginTop: '1.8rem' }}>Course Prerequisites</h4>
            <ul className="prereq-bullets">
              {course.requirements.map((req, idx) => (
                <li key={idx} className="flex-align gap-2">
                  <CheckCircle2 size={16} className="text-emerald" /> {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tab 2: Syllabus & Schedule */}
        {activeTab === 'syllabus' && (
          <div className="tab-content-box">
            <h3 className="section-title-sm">Class Schedule</h3>
            <div className="schedule-box flex-align gap-2" style={{ marginBottom: '1.8rem' }}>
              <Calendar size={18} className="text-blue" />
              <strong>{course.schedule}</strong>
            </div>

            <h3 className="section-title-sm">Week-by-Week Syllabus</h3>
            <div className="syllabus-accordion">
              {course.syllabus.map((mod) => (
                <div key={mod.week} className="syllabus-module-card">
                  <div className="mod-week-pill">Week {mod.week}</div>
                  <div>
                    <h4 className="mod-topic">{mod.topic}</h4>
                    <p className="mod-details">{mod.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Outcomes */}
        {activeTab === 'outcomes' && (
          <div className="tab-content-box">
            <h3 className="section-title-sm">What You Will Master</h3>
            <div className="outcomes-grid">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="outcome-card flex-align gap-3">
                  <CheckCircle2 size={20} className="text-emerald flex-shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Reviews */}
        {activeTab === 'reviews' && (
          <div className="tab-content-box">
            <h3 className="section-title-sm">Student Testimonials & Reviews</h3>
            {course.reviewsList.length === 0 ? (
              <p className="text-muted">No student reviews published yet for this semester.</p>
            ) : (
              course.reviewsList.map((rev) => (
                <div key={rev.id} className="review-card">
                  <div className="flex-between">
                    <div className="flex-align gap-2">
                      <img src={rev.avatar} alt={rev.user} className="avatar-xs" />
                      <div>
                        <strong className="text-sm">{rev.user}</strong>
                        <span className="text-xs text-muted block">{rev.date}</span>
                      </div>
                    </div>
                    <span className="flex-align gap-1 font-bold text-amber">
                      <Star size={14} fill="#f59e0b" /> {rev.rating}.0
                    </span>
                  </div>
                  <p className="review-comment">{rev.comment}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
