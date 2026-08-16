import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  X, 
  FileText, 
  Plus, 
  Award,
  ChevronRight
} from 'lucide-react';
import { MOCK_APP_COURSES, AppCourse } from '../data/academicHubData';

export const AppCoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<AppCourse | null>(null);

  const departments = ['All', 'Education Systems', 'Architecture', 'Humanities', 'Computer Science', 'Mathematics'];

  const filteredCourses = MOCK_APP_COURSES.filter((c) => {
    const matchesSearch = 
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDept = selectedDept === 'All' || c.department === selectedDept;
    const matchesStatus = selectedStatus === 'All' || c.status === selectedStatus;

    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <div className="hub-page-container">
      {/* Category & Header */}
      <div className="hub-page-header">
        <span className="section-category-label">Academic flow</span>
        <h1 className="hub-page-title">Course directory</h1>
        <p className="hub-page-subtitle">
          Browse courses, syllabi, instructors, prerequisites, and enrollment status from one connected catalog.
        </p>
      </div>

      {/* SEARCH & FILTERS TOOLBAR */}
      <div className="hub-toolbar-card flex-between flex-wrap gap-4" style={{ margin: '1.5rem 0' }}>
        <div className="hub-search-input-box flex-align gap-2">
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="hub-filter-controls flex-align gap-3 flex-wrap">
          <div className="filter-select-group">
            <span className="filter-label-text">Department:</span>
            <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="filter-select-group">
            <span className="filter-label-text">Status:</span>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Under Review">Under Review</option>
            </select>
          </div>
        </div>
      </div>

      {/* COURSE TABLE CATALOG */}
      <div className="hub-content-panel">
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Title</th>
                <th>Department</th>
                <th>Instructor</th>
                <th>Credits</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Next Session</th>
                <th>Enrollment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.code} className="table-row-hover">
                  <td><span className="course-code-pill-sm">{course.code}</span></td>
                  <td><strong>{course.title}</strong></td>
                  <td>{course.department}</td>
                  <td>{course.instructor}</td>
                  <td><strong>{course.credits} Credits</strong></td>
                  <td><span className="flex-align gap-1"><Users size={14} /> {course.studentsEnrolled}</span></td>
                  <td>
                    <span className={`status-pill ${course.status === 'Active' ? 'status-green' : 'status-amber'}`}>
                      {course.status}
                    </span>
                  </td>
                  <td><span className="text-xs text-muted flex-align gap-1"><Clock size={12} /> {course.nextSession}</span></td>
                  <td>
                    <span className={`status-pill ${course.enrollmentStatus === 'Open' ? 'status-indigo' : 'status-amber'}`}>
                      {course.enrollmentStatus}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="btn-ghost-sm text-indigo"
                      onClick={() => setSelectedCourseDetail(course)}
                    >
                      Details <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* COURSE DETAIL MODAL */}
      {selectedCourseDetail && (
        <div className="modal-overlay active" onClick={() => setSelectedCourseDetail(null)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <div className="flex-align gap-3">
                <span className="course-code-pill">{selectedCourseDetail.code}</span>
                <div>
                  <h2 className="modal-title">{selectedCourseDetail.title}</h2>
                  <span className="text-xs text-muted">{selectedCourseDetail.department} • {selectedCourseDetail.instructor}</span>
                </div>
              </div>
              <button className="toast-close-btn" onClick={() => setSelectedCourseDetail(null)}><X size={18} /></button>
            </div>

            <div className="modal-body-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Telemetry Pills */}
              <div className="kpi-grid">
                <div className="kpi-card-sm">
                  <span className="kpi-label">Schedule</span>
                  <strong className="text-xs font-bold block">{selectedCourseDetail.schedule}</strong>
                </div>
                <div className="kpi-card-sm">
                  <span className="kpi-label">Venue</span>
                  <strong className="text-xs font-bold block">{selectedCourseDetail.room}</strong>
                </div>
                <div className="kpi-card-sm">
                  <span className="kpi-label">Enrolled Roster</span>
                  <strong className="text-xs font-bold text-indigo block">{selectedCourseDetail.studentsEnrolled} Students</strong>
                </div>
              </div>

              {/* Syllabus Module */}
              <div>
                <h4 className="detail-section-title" style={{ marginBottom: '0.6rem' }}>Course Syllabus & Modules</h4>
                <div className="syllabus-stack">
                  {selectedCourseDetail.syllabus.map((mod) => (
                    <div key={mod.week} className="syllabus-module-card">
                      <span className="mod-week-pill">Week {mod.week}</span>
                      <div>
                        <strong className="text-sm block">{mod.topic}</strong>
                        <span className="text-xs text-muted">{mod.details}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Announcements */}
              {selectedCourseDetail.announcements.length > 0 && (
                <div>
                  <h4 className="detail-section-title" style={{ marginBottom: '0.6rem' }}>Announcements</h4>
                  {selectedCourseDetail.announcements.map((ann) => (
                    <div key={ann.id} className="rec-box-item">
                      <strong className="text-xs text-indigo block">{ann.title}</strong>
                      <span className="text-xs text-muted">By {ann.author} • {ann.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-footer flex-end" style={{ marginTop: '1.5rem' }}>
              <button className="btn-secondary" onClick={() => setSelectedCourseDetail(null)}>Close Catalog Entry</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
