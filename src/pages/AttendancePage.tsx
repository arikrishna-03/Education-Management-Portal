import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarCheck, 
  UserCheck, 
  AlertTriangle, 
  Brain, 
  CheckCircle2, 
  Clock, 
  Filter, 
  Save,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { MOCK_ATTENDANCE, User, MOCK_COURSES } from '../data/edutrData';

interface AttendancePageProps {
  currentUser: User;
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const AttendancePage: React.FC<AttendancePageProps> = ({ currentUser, onTriggerToast }) => {
  const isTeacherOrAdmin = currentUser.role === 'teacher' || currentUser.role === 'admin';

  const [selectedCourse, setSelectedCourse] = useState('CY-410');
  const [selectedDate, setSelectedDate] = useState('2026-08-17');
  
  // Teacher roster state for marking
  const [roster, setRoster] = useState([
    { id: 'STU-1082', name: 'Liam Chen', status: 'Absent' as const },
    { id: 'STU-1094', name: 'Sophia Martinez', status: 'Present' as const },
    { id: 'STU-1120', name: 'Marcus Brody', status: 'Present' as const },
    { id: 'STU-1145', name: 'Aisha Al-Mansoor', status: 'Present' as const },
    { id: 'STU-1168', name: 'David Kim', status: 'Late' as const }
  ]);

  const handleToggleStatus = (studentId: string, newStatus: 'Present' | 'Absent' | 'Late') => {
    setRoster(prev => prev.map(s => s.id === studentId ? { ...s, status: newStatus } : s));
  };

  const handleSaveAttendance = () => {
    onTriggerToast('success', 'Attendance Saved!', `Roster recorded for ${selectedCourse} on ${selectedDate}.`);
  };

  return (
    <div className="page-wrapper area-academic-orange">
      <div className="page-container section-padding">
        {/* Page Header */}
        <div className="view-page-header">
          <div>
            <span className="section-eyebrow text-orange flex-align gap-1">
              <CalendarCheck size={16} /> ACADEMIC FLOW SECTOR
            </span>
            <h1 className="page-title-lg">Attendance & Cohort Tracking</h1>
            <p className="page-subtitle">Track course-wise attendance consistency, mark class check-ins, and inspect AI-driven risk alerts.</p>
          </div>
          <div className="header-actions">
            <Link to="/ai" className="btn-orange-primary flex-align gap-2">
              <Brain size={16} /> AI Risk Detection <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Student Attendance Alert Banner */}
        {!isTeacherOrAdmin && (
          <div className="attendance-warning-card">
            <AlertTriangle size={24} className="text-amber flex-shrink-0" />
            <div>
              <h4 className="warning-title">Attendance Policy Threshold Warning</h4>
              <p className="warning-desc">
                Your overall attendance rate in <strong>CY-410 Cryptography</strong> is currently at <strong>68.5%</strong>. 
                University policy requires a minimum 75.0% rate to sit for final examinations.
              </p>
            </div>
          </div>
        )}

        {/* Attendance Summary KPIs */}
        <div className="kpi-grid" style={{ margin: '1.5rem 0' }}>
          <div className="kpi-card-orange">
            <span className="kpi-label">Overall Attendance Rate</span>
            <h2 className="kpi-value text-orange">88.4%</h2>
            <span className="kpi-subtext">Across 4 enrolled courses</span>
          </div>
          <div className="kpi-card-orange">
            <span className="kpi-label">Classes Attended</span>
            <h2 className="kpi-value text-emerald">42 / 48</h2>
            <span className="kpi-subtext">This semester</span>
          </div>
          <div className="kpi-card-orange">
            <span className="kpi-label">Unexcused Absences</span>
            <h2 className="kpi-value text-crimson">4 Days</h2>
            <span className="kpi-subtext">Requires advisor note</span>
          </div>
          <div className="kpi-card-orange">
            <span className="kpi-label">Required Threshold</span>
            <h2 className="kpi-value">75.0%</h2>
            <span className="kpi-subtext">Min accreditation bar</span>
          </div>
        </div>

        {/* Teacher Marking Interface vs Student View */}
        {isTeacherOrAdmin ? (
          <div className="card-panel-orange">
            <div className="card-header-flex">
              <div>
                <h3 className="card-title text-orange">Faculty Attendance Marking Workspace</h3>
                <p className="card-subtitle">Select course and date to record daily student check-ins.</p>
              </div>
              <button className="btn-orange-primary" onClick={handleSaveAttendance}>
                <Save size={16} /> Save Attendance Roster
              </button>
            </div>

            <div className="filter-bar" style={{ marginBottom: '1.5rem', background: '#fff' }}>
              <div className="filter-select-wrapper">
                <span className="filter-label">Course:</span>
                <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                  {MOCK_COURSES.map(c => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
                </select>
              </div>

              <div className="filter-select-wrapper">
                <span className="filter-label">Session Date:</span>
                <input 
                  type="date" 
                  className="form-control-sm"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>

            {/* Roster Table */}
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Attendance Status</th>
                    <th>Action Toggle</th>
                  </tr>
                </thead>
                <tbody>
                  {roster.map((stu) => (
                    <tr key={stu.id}>
                      <td><strong>{stu.id}</strong></td>
                      <td>{stu.name}</td>
                      <td>
                        <span className={`status-pill ${
                          stu.status === 'Present' ? 'status-green' : 
                          stu.status === 'Late' ? 'status-amber' : 'status-crimson'
                        }`}>
                          {stu.status}
                        </span>
                      </td>
                      <td>
                        <div className="attendance-toggle-btns">
                          <button 
                            className={`toggle-btn ${stu.status === 'Present' ? 'btn-pres-active' : ''}`}
                            onClick={() => handleToggleStatus(stu.id, 'Present')}
                          >
                            Present
                          </button>
                          <button 
                            className={`toggle-btn ${stu.status === 'Late' ? 'btn-late-active' : ''}`}
                            onClick={() => handleToggleStatus(stu.id, 'Late')}
                          >
                            Late
                          </button>
                          <button 
                            className={`toggle-btn ${stu.status === 'Absent' ? 'btn-abs-active' : ''}`}
                            onClick={() => handleToggleStatus(stu.id, 'Absent')}
                          >
                            Absent
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Student Attendance History View */
          <div className="card-panel-orange">
            <h3 className="card-title text-orange" style={{ marginBottom: '1rem' }}>Course-wise Attendance History</h3>
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Course Code & Title</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_ATTENDANCE.map((att) => (
                    <tr key={att.id}>
                      <td><span className="text-muted"><Clock size={14} /> {att.date}</span></td>
                      <td><strong>{att.courseCode}</strong> - {att.courseName}</td>
                      <td>
                        <span className={`status-pill ${
                          att.status === 'Present' ? 'status-green' : 'status-crimson'
                        }`}>
                          {att.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
