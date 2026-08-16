import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  UserCheck,
  Plus
} from 'lucide-react';
import { Student } from '../types';

interface StudentsViewProps {
  students: Student[];
  onSelectStudent: (student: Student) => void;
  onAddStudentToast: (msg: string) => void;
}

export const StudentsView: React.FC<StudentsViewProps> = ({
  students,
  onSelectStudent,
  onAddStudentToast
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const programs = ['All', ...Array.from(new Set(students.map((s) => s.program)))];
  const years = ['All', 'Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate'];

  const filteredStudents = students.filter((stu) => {
    const matchesSearch = 
      stu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stu.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stu.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stu.program.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesProg = selectedProgram === 'All' || stu.program === selectedProgram;
    const matchesYr = selectedYear === 'All' || stu.year === selectedYear;
    const matchesStat = selectedStatus === 'All' || stu.status === selectedStatus;

    return matchesSearch && matchesProg && matchesYr && matchesStat;
  });

  return (
    <div className="view-page-container">
      {/* Page Header */}
      <div className="view-page-header">
        <div>
          <h1 className="page-title">Student Directory & Academic Monitoring</h1>
          <p className="page-subtitle">Inspect student enrollment records, attendance consistency, GPA performance, and AI-assisted intervention profiles.</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn-primary" 
            onClick={() => onAddStudentToast("Student Enrollment Modal opened. (Pre-validated registration form)")}
          >
            <Plus size={18} /> Register Student
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-search-input">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search student name, ID, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls-group">
          <div className="filter-select-wrapper">
            <span className="filter-label">Program:</span>
            <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}>
              {programs.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="filter-select-wrapper hide-mobile">
            <span className="filter-label">Year:</span>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="filter-select-wrapper">
            <span className="filter-label">Status:</span>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="On-Track">On-Track</option>
              <option value="Needs Attention">Needs Attention</option>
              <option value="At-Risk">At-Risk</option>
            </select>
          </div>
        </div>
      </div>

      {/* Student Directory Table */}
      <div className="card-panel">
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Student ID & Name</th>
                <th>Program & Year</th>
                <th>GPA</th>
                <th>Attendance</th>
                <th>Completion</th>
                <th>Engagement</th>
                <th>Academic Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center text-muted" style={{ padding: '2rem' }}>
                    No student records match your filter parameters.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((stu) => (
                  <tr key={stu.id}>
                    <td>
                      <div className="instructor-cell-box">
                        <img src={stu.avatar} alt={stu.name} className="avatar-xs" />
                        <div>
                          <h4 className="cell-main-title">{stu.name}</h4>
                          <span className="cell-subtext">{stu.id} • {stu.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <strong>{stu.program}</strong>
                        <span className="cell-subtext">{stu.year}</span>
                      </div>
                    </td>
                    <td>
                      <strong className="text-indigo" style={{ fontSize: '1rem' }}>{stu.gpa.toFixed(2)}</strong>
                    </td>
                    <td>
                      <span className={`status-pill ${stu.attendanceRate >= 85 ? 'status-green' : 'status-crimson'}`}>
                        {stu.attendanceRate}%
                      </span>
                    </td>
                    <td>{stu.completionRate}%</td>
                    <td>
                      <span className="badge-gray">{stu.engagementLevel}</span>
                    </td>
                    <td>
                      <span className={`status-pill ${
                        stu.status === 'On-Track' ? 'status-green' : 
                        stu.status === 'Needs Attention' ? 'status-amber' : 'status-crimson'
                      }`}>
                        {stu.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-primary-sm" onClick={() => onSelectStudent(stu)}>
                        Profile <ChevronRight size={14} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
