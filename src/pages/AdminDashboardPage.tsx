import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  FileCheck, 
  Award, 
  Brain, 
  FileText, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { MOCK_USERS, MOCK_COURSES, MOCK_AT_RISK_STUDENTS, User } from '../data/edutrData';

interface AdminDashboardPageProps {
  currentUser: User;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ currentUser, onTriggerToast }) => {
  const [activeAdminTab, setActiveAdminTab] = useState<'students' | 'teachers' | 'courses' | 'ai'>('students');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample Admin Student State
  const [students, setStudents] = useState([
    { id: "STU-1094", name: "Sophia Martinez", dept: "Computer Science", gpa: 3.92, status: "On-Track" },
    { id: "STU-1082", name: "Liam Chen", dept: "Cybersecurity", gpa: 2.85, status: "Needs Attention" },
    { id: "STU-1120", name: "Marcus Brody", dept: "Software Systems", gpa: 3.75, status: "On-Track" },
    { id: "STU-1168", name: "David Kim", dept: "Data Science", gpa: 3.10, status: "Needs Attention" }
  ]);

  const handleDeleteStudent = (id: string, name: string) => {
    setStudents(students.filter(s => s.id !== id));
    onTriggerToast('info', 'Student Record Removed', `${name} (${id}) has been removed from institutional roster.`);
  };

  return (
    <div className="page-wrapper area-admin-purple">
      <div className="page-container section-padding">
        {/* Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-purple flex-align gap-1">
              <ShieldCheck size={16} /> INSTITUTIONAL ADMIN QUADRANT
            </span>
            <h1 className="page-title-lg">Institutional Administration & Governance</h1>
            <p className="page-subtitle">Oversee student rosters, faculty assignments, curriculum scheduling, and real-time AI risk monitoring.</p>
          </div>
          <div className="header-actions">
            <Link to="/performance-reports" className="btn-purple-primary flex-align gap-2">
              <TrendingUp size={16} /> Performance Summary <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Admin 7 KPI Cards */}
        <div className="kpi-grid-7" style={{ margin: '1.5rem 0' }}>
          <div className="kpi-card-purple">
            <span className="kpi-label">Total Students</span>
            <h3 className="kpi-val text-purple">2,846</h3>
          </div>
          <div className="kpi-card-purple">
            <span className="kpi-label">Total Faculty</span>
            <h3 className="kpi-val text-indigo">128</h3>
          </div>
          <div className="kpi-card-purple">
            <span className="kpi-label">Active Courses</span>
            <h3 className="kpi-val text-cyan">42</h3>
          </div>
          <div className="kpi-card-purple">
            <span className="kpi-label">Active Classes</span>
            <h3 className="kpi-val text-emerald">18</h3>
          </div>
          <div className="kpi-card-purple">
            <span className="kpi-label">Pending Briefs</span>
            <h3 className="kpi-val text-amber">12</h3>
          </div>
          <div className="kpi-card-purple">
            <span className="kpi-label">Scheduled Exams</span>
            <h3 className="kpi-val text-indigo">8</h3>
          </div>
          <div className="kpi-card-purple">
            <span className="kpi-label">Institutional Avg</span>
            <h3 className="kpi-val text-emerald">87.4%</h3>
          </div>
        </div>

        {/* Main Admin Management Navigation Tabs */}
        <div className="card-panel-purple">
          <div className="modal-tabs" style={{ marginBottom: '1.5rem' }}>
            <button className={`modal-tab-btn ${activeAdminTab === 'students' ? 'active' : ''}`} onClick={() => setActiveAdminTab('students')}>
              Manage Students ({students.length})
            </button>
            <button className={`modal-tab-btn ${activeAdminTab === 'teachers' ? 'active' : ''}`} onClick={() => setActiveAdminTab('teachers')}>
              Manage Faculty & Teachers
            </button>
            <button className={`modal-tab-btn ${activeAdminTab === 'courses' ? 'active' : ''}`} onClick={() => setActiveAdminTab('courses')}>
              Manage Courses & Classes
            </button>
            <button className={`modal-tab-btn ${activeAdminTab === 'ai' ? 'active' : ''}`} onClick={() => setActiveAdminTab('ai')}>
              AI Monitoring & Risk Alerts ({MOCK_AT_RISK_STUDENTS.length})
            </button>
          </div>

          {/* Sub-tab 1: Manage Students */}
          {activeAdminTab === 'students' && (
            <div>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <div className="catalog-search-box" style={{ maxWidth: '360px' }}>
                  <Search size={16} className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search student ID or name..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <button 
                  className="btn-purple-primary"
                  onClick={() => onTriggerToast('info', 'Add Student Form', 'New student enrollment modal loaded.')}
                >
                  <Plus size={16} /> Enroll New Student
                </button>
              </div>

              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Cumulative GPA</th>
                      <th>Academic Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.id.toLowerCase().includes(searchQuery.toLowerCase())).map((stu) => (
                      <tr key={stu.id}>
                        <td><strong>{stu.id}</strong></td>
                        <td>{stu.name}</td>
                        <td>{stu.dept}</td>
                        <td><strong>{stu.gpa}</strong></td>
                        <td>
                          <span className={`status-pill ${stu.status === 'On-Track' ? 'status-green' : 'status-amber'}`}>
                            {stu.status}
                          </span>
                        </td>
                        <td>
                          <div className="flex-align gap-2">
                            <button className="btn-ghost-sm" title="Edit Student">
                              <Edit3 size={14} />
                            </button>
                            <button className="btn-ghost-sm text-crimson" title="Delete Student" onClick={() => handleDeleteStudent(stu.id, stu.name)}>
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Sub-tab 2: Manage Teachers */}
          {activeAdminTab === 'teachers' && (
            <div>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <h4 className="detail-section-title">Faculty Roster & Course Allocation</h4>
                <button className="btn-purple-primary" onClick={() => onTriggerToast('info', 'Faculty Onboarding', 'New faculty appointment form opened.')}>
                  <Plus size={16} /> Appoint Faculty Member
                </button>
              </div>
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Faculty Member</th>
                      <th>Academic Title</th>
                      <th>Department</th>
                      <th>Assigned Courses</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Dr. Sarah Jenkins</strong></td>
                      <td>Professor of Computer Science</td>
                      <td>Artificial Intelligence</td>
                      <td><span className="course-code-pill">CS-401</span></td>
                    </tr>
                    <tr>
                      <td><strong>Prof. David Vance</strong></td>
                      <td>Chair of Software Engineering</td>
                      <td>Software Systems</td>
                      <td><span className="course-code-pill">SE-302</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Sub-tab 3: Manage Courses */}
          {activeAdminTab === 'courses' && (
            <div>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <h4 className="detail-section-title">Curriculum Catalog & Schedules</h4>
                <button className="btn-purple-primary" onClick={() => onTriggerToast('info', 'Create Course', 'Course creation modal opened.')}>
                  <Plus size={16} /> Create New Accredited Course
                </button>
              </div>
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Course Title</th>
                      <th>Instructor</th>
                      <th>Duration</th>
                      <th>Students Enrolled</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_COURSES.map(c => (
                      <tr key={c.id}>
                        <td><strong>{c.code}</strong></td>
                        <td>{c.name}</td>
                        <td>{c.instructor}</td>
                        <td>{c.duration}</td>
                        <td><strong>{c.studentsCount}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Sub-tab 4: AI Monitoring */}
          {activeAdminTab === 'ai' && (
            <div>
              <h4 className="detail-section-title text-purple" style={{ marginBottom: '1rem' }}>Institutional AI Risk Alert Radar</h4>
              <div className="study-rec-list">
                {MOCK_AT_RISK_STUDENTS.map(r => (
                  <div key={r.id} className="rec-box-item border-amber">
                    <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                      <h4 className="rec-title">{r.name} ({r.studentId})</h4>
                      <span className="status-pill status-crimson">{r.riskLevel} Risk</span>
                    </div>
                    <p className="rec-desc">{r.reason}</p>
                    <span className="text-xs font-bold text-indigo">Action: {r.recommendedAction}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
