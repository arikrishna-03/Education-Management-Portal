import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  LayoutGrid, 
  List,
  Sparkles,
  Plus
} from 'lucide-react';
import { Course } from '../types';

interface CoursesViewProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onAddCourseToast: (msg: string) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  courses,
  onSelectCourse,
  onAddCourseToast
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedInstructor, setSelectedInstructor] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Extract unique departments & instructors
  const departments = ['All', ...Array.from(new Set(courses.map((c) => c.department)))];
  const instructors = ['All', ...Array.from(new Set(courses.map((c) => c.instructor)))];

  // Filtered courses
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = selectedDept === 'All' || course.department === selectedDept;
    const matchesSem = selectedSemester === 'All' || course.semester === selectedSemester;
    const matchesInst = selectedInstructor === 'All' || course.instructor === selectedInstructor;
    const matchesStatus = selectedStatus === 'All' || course.status === selectedStatus;

    return matchesSearch && matchesDept && matchesSem && matchesInst && matchesStatus;
  });

  return (
    <div className="view-page-container">
      {/* Page Header */}
      <div className="view-page-header">
        <div>
          <h1 className="page-title">Course Directory & Curriculum Management</h1>
          <p className="page-subtitle">Manage active course offerings, syllabus modules, faculty allocations, and enrollment thresholds.</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn-primary" 
            onClick={() => onAddCourseToast("Course Creation Wizard opened. (Form pre-validated)")}
          >
            <Plus size={18} /> Add New Course
          </button>
        </div>
      </div>

      {/* Filter & View Switcher Bar */}
      <div className="filter-bar">
        <div className="filter-search-input">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search course code, title, or instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls-group">
          {/* Department Filter */}
          <div className="filter-select-wrapper">
            <span className="filter-label">Dept:</span>
            <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Instructor Filter */}
          <div className="filter-select-wrapper hide-mobile">
            <span className="filter-label">Instructor:</span>
            <select value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)}>
              {instructors.map((inst) => (
                <option key={inst} value={inst}>{inst}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="filter-select-wrapper">
            <span className="filter-label">Status:</span>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* View Switcher Toggle */}
          <div className="view-switcher">
            <button 
              className={`switcher-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              className={`switcher-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
              title="Table View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Mode */}
      {viewMode === 'grid' && (
        <div className="course-cards-grid">
          {filteredCourses.length === 0 ? (
            <div className="empty-state-card col-span-full">
              <BookOpen size={40} className="text-muted" />
              <h3>No courses match your filter criteria</h3>
              <p>Try resetting search keywords or department filters.</p>
              <button className="btn-secondary" onClick={() => { setSearchTerm(''); setSelectedDept('All'); setSelectedStatus('All'); }}>
                Reset Filters
              </button>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="course-card"
                onClick={() => onSelectCourse(course)}
              >
                <div className="course-card-top">
                  <span className="course-code-tag">{course.code}</span>
                  <span className="dept-pill">{course.department}</span>
                </div>

                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.description}</p>

                <div className="course-instructor-row">
                  <img src={course.instructorAvatar} alt={course.instructor} className="avatar-xs" />
                  <div>
                    <h5 className="instructor-name-sm">{course.instructor}</h5>
                    <span className="instructor-role-sm">{course.instructorTitle}</span>
                  </div>
                </div>

                <div className="course-stats-grid">
                  <div className="c-stat">
                    <span className="c-stat-label">Enrolled</span>
                    <strong className="c-stat-val">{course.enrolledCount}/{course.maxCapacity}</strong>
                  </div>
                  <div className="c-stat">
                    <span className="c-stat-label">Avg Grade</span>
                    <strong className="c-stat-val text-indigo">{course.avgGrade.toFixed(2)}</strong>
                  </div>
                  <div className="c-stat">
                    <span className="c-stat-label">Attendance</span>
                    <strong className="c-stat-val text-emerald">{course.attendanceRate}%</strong>
                  </div>
                </div>

                <div className="course-card-footer">
                  <span className="prereq-count">
                    {course.prerequisites.length} Prereq(s)
                  </span>
                  <button className="btn-ghost-sm">
                    Inspect Syllabus <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Table Mode */}
      {viewMode === 'table' && (
        <div className="card-panel">
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Course Code & Title</th>
                  <th>Instructor</th>
                  <th>Department</th>
                  <th>Credits</th>
                  <th>Enrollment</th>
                  <th>Avg GPA</th>
                  <th>Attendance</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id}>
                    <td>
                      <div className="course-cell-box">
                        <span className="course-code-pill">{course.code}</span>
                        <div>
                          <h4 className="cell-main-title">{course.title}</h4>
                          <span className="cell-subtext">{course.semester}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="instructor-cell-box">
                        <img src={course.instructorAvatar} alt={course.instructor} className="avatar-xs" />
                        <span>{course.instructor}</span>
                      </div>
                    </td>
                    <td><span className="dept-tag">{course.department}</span></td>
                    <td><strong>{course.credits} Cr</strong></td>
                    <td>{course.enrolledCount} / {course.maxCapacity}</td>
                    <td><strong className="text-indigo">{course.avgGrade.toFixed(2)}</strong></td>
                    <td>
                      <span className={`status-pill ${course.attendanceRate >= 90 ? 'status-green' : 'status-amber'}`}>
                        {course.attendanceRate}%
                      </span>
                    </td>
                    <td>
                      <span className="status-pill status-green">{course.status}</span>
                    </td>
                    <td>
                      <button className="btn-primary-sm" onClick={() => onSelectCourse(course)}>
                        Inspect Course
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
