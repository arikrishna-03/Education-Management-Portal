import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Users, 
  Calendar, 
  Award, 
  FileText, 
  Bell, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Course, Student } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  allStudents: Student[];
  onSelectStudent: (student: Student) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  allStudents,
  onSelectStudent
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'students' | 'sessions' | 'announcements'>('overview');

  if (!course) return null;

  // Filter students enrolled in this course
  const enrolledStudents = allStudents.filter((s) => 
    s.enrolledCourses.some((c) => c.code === course.code)
  );

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box modal-lg" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-title-box">
            <span className="course-code-pill-lg">{course.code}</span>
            <div>
              <h2 className="modal-title">{course.title}</h2>
              <p className="modal-subtitle">{course.department} • {course.semester} • {course.credits} Academic Credits</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Course Quick Key Performance Metrics Bar */}
        <div className="course-metrics-bar">
          <div className="c-metric">
            <span className="c-metric-label">Enrolled Students</span>
            <strong className="c-metric-val">{course.enrolledCount} / {course.maxCapacity}</strong>
          </div>
          <div className="c-metric">
            <span className="c-metric-label">Average Cohort GPA</span>
            <strong className="c-metric-val text-indigo">{course.avgGrade.toFixed(2)}</strong>
          </div>
          <div className="c-metric">
            <span className="c-metric-label">Attendance Rate</span>
            <strong className="c-metric-val text-emerald">{course.attendanceRate}%</strong>
          </div>
          <div className="c-metric">
            <span className="c-metric-label">Completion Rate</span>
            <strong className="c-metric-val text-cyan">{course.completionRate}%</strong>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button 
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BookOpen size={16} /> Overview & Faculty
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'syllabus' ? 'active' : ''}`}
            onClick={() => setActiveTab('syllabus')}
          >
            <FileText size={16} /> Syllabus ({course.syllabus.length} Weeks)
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <Users size={16} /> Enrolled Students ({enrolledStudents.length})
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'sessions' ? 'active' : ''}`}
            onClick={() => setActiveTab('sessions')}
          >
            <Calendar size={16} /> Schedule & Rooms
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            <Bell size={16} /> Announcements ({course.announcements.length})
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="modal-tab-body">
            <div className="grid-2">
              <div>
                <h4 className="detail-section-title">Course Description</h4>
                <p className="detail-description-text">{course.description}</p>

                <h4 className="detail-section-title" style={{ marginTop: '1.5rem' }}>Prerequisites</h4>
                <div className="prereq-list">
                  {course.prerequisites.length === 0 ? (
                    <span className="text-muted">None specified. Open enrollment.</span>
                  ) : (
                    course.prerequisites.map((prereq, idx) => (
                      <span key={idx} className="prereq-pill">
                        <CheckCircle2 size={14} className="text-emerald" /> {prereq}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Instructor Card */}
              <div className="card-panel-inner">
                <h4 className="detail-section-title">Course Lead Faculty</h4>
                <div className="instructor-detail-box">
                  <img src={course.instructorAvatar} alt={course.instructor} className="instructor-avatar-lg" />
                  <div>
                    <h3 className="instructor-name">{course.instructor}</h3>
                    <p className="instructor-role">{course.instructorTitle}</p>
                    <span className="dept-tag" style={{ marginTop: '0.5rem', display: 'inline-block' }}>
                      {course.department}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Syllabus */}
        {activeTab === 'syllabus' && (
          <div className="modal-tab-body">
            <div className="syllabus-timeline">
              {course.syllabus.map((item) => (
                <div key={item.week} className="syllabus-item">
                  <div className="syllabus-week-badge">Week {item.week}</div>
                  <div className="syllabus-content">
                    <h4 className="syllabus-topic">{item.topic}</h4>
                    <p className="syllabus-details">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Enrolled Students */}
        {activeTab === 'students' && (
          <div className="modal-tab-body">
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Student ID & Name</th>
                    <th>Program</th>
                    <th>Year</th>
                    <th>Course Score</th>
                    <th>Attendance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enrolledStudents.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center text-muted" style={{ padding: '2rem' }}>
                        No students enrolled directly match this search criteria.
                      </td>
                    </tr>
                  ) : (
                    enrolledStudents.map((stu) => {
                      const courseGrade = stu.enrolledCourses.find((c) => c.code === course.code);
                      return (
                        <tr key={stu.id}>
                          <td>
                            <div className="instructor-cell-box">
                              <img src={stu.avatar} alt={stu.name} className="avatar-xs" />
                              <div>
                                <strong>{stu.name}</strong>
                                <span className="cell-subtext">{stu.id}</span>
                              </div>
                            </div>
                          </td>
                          <td>{stu.program}</td>
                          <td>{stu.year}</td>
                          <td>
                            <strong className="text-indigo">
                              {courseGrade ? `${courseGrade.score}% (${courseGrade.grade})` : 'N/A'}
                            </strong>
                          </td>
                          <td>
                            <span className={`status-pill ${stu.attendanceRate >= 85 ? 'status-green' : 'status-amber'}`}>
                              {stu.attendanceRate}%
                            </span>
                          </td>
                          <td>
                            <button 
                              className="btn-ghost-sm" 
                              onClick={() => {
                                onClose();
                                onSelectStudent(stu);
                              }}
                            >
                              Profile <ChevronRight size={14} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Sessions */}
        {activeTab === 'sessions' && (
          <div className="modal-tab-body">
            <div className="sessions-grid">
              {course.sessions.map((sess) => (
                <div key={sess.id} className="session-card">
                  <div className="session-header">
                    <span className="session-day"><Clock size={14} /> {sess.day}</span>
                    <span className="session-time">{sess.time}</span>
                  </div>
                  <h4 className="session-topic">{sess.topic}</h4>
                  <div className="session-location flex-align gap-2">
                    <MapPin size={14} className="text-indigo" />
                    <span>{sess.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Announcements */}
        {activeTab === 'announcements' && (
          <div className="modal-tab-body">
            {course.announcements.length === 0 ? (
              <div className="empty-state-box">
                <Bell size={32} className="text-muted" />
                <p className="text-muted">No announcements posted for this course yet.</p>
              </div>
            ) : (
              course.announcements.map((ann) => (
                <div key={ann.id} className="announcement-card">
                  <div className="announcement-header">
                    <h4 className="announcement-title">{ann.title}</h4>
                    <span className="announcement-date">{ann.date}</span>
                  </div>
                  <p className="announcement-content">{ann.content}</p>
                  <span className="announcement-author">Posted by {ann.author}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
