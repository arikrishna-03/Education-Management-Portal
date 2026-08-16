import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setStoredUser, DEFAULT_STUDENT_USER, DEFAULT_TEACHER_USER, UserRole } from '../data/authState';
import { GraduationCap, School, ArrowLeft } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRoleParam = searchParams.get('role') as UserRole;

  // Flow State
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRoleParam || null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Student Form State
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');

  // Teacher Form State
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherPassword, setTeacherPassword] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [teacherInst, setTeacherInst] = useState('');
  const [teacherDept, setTeacherDept] = useState('');
  const [teacherSubject, setTeacherSubject] = useState('');

  const [approvalNotice, setApprovalNotice] = useState(false);

  const handleStudentAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredUser({
      ...DEFAULT_STUDENT_USER,
      name: studentName || DEFAULT_STUDENT_USER.name,
      email: studentEmail || DEFAULT_STUDENT_USER.email,
      studentId: studentId || DEFAULT_STUDENT_USER.studentId
    });
    navigate('/student/dashboard');
  };

  const handleTeacherAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'register') {
      setApprovalNotice(true);
      setTimeout(() => {
        setStoredUser({
          ...DEFAULT_TEACHER_USER,
          name: teacherName || DEFAULT_TEACHER_USER.name,
          email: teacherEmail || DEFAULT_TEACHER_USER.email,
          department: teacherDept || DEFAULT_TEACHER_USER.department
        });
        navigate('/teacher/dashboard');
      }, 2000);
    } else {
      setStoredUser({
        ...DEFAULT_TEACHER_USER,
        email: teacherEmail || DEFAULT_TEACHER_USER.email
      });
      navigate('/teacher/dashboard');
    }
  };

  return (
    <div className="academia-page">
      <section className="section-space">
        <div className="academia-container" style={{ maxWidth: '960px' }}>
          
          {/* HEADER */}
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="micro-eyebrow">AUTHENTICATION & ACCESS</span>
            <h1 className="hero-serif-title" style={{ fontSize: '3.2rem', margin: '0.4rem 0' }}>
              USER LOGIN / REGISTER
            </h1>
            <p className="hero-lead-desc" style={{ margin: '0 auto', maxWidth: '500px' }}>
              Access your academic workspace.
            </p>
          </div>

          {/* STEP 1: ROLE SELECTION (STUDENT VS TEACHER SIDE-BY-SIDE) */}
          {!selectedRole ? (
            <div className="grid-2">
              {/* STUDENT ROLE CARD */}
              <div 
                className="flow-card-panel text-center cursor-pointer hover-lift"
                style={{ padding: '3.5rem 2rem', background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}
                onClick={() => setSelectedRole('student')}
              >
                <div className="flex-center" style={{ margin: '0 auto 1.5rem', width: '56px', height: '56px', borderRadius: '50%', background: '#472D00' }}>
                  <GraduationCap size={28} className="text-amber" />
                </div>

                <span className="micro-eyebrow">STUDENT ROLE</span>
                <h3 className="sub-serif-title" style={{ fontSize: '2rem', margin: '0.4rem 0', color: '#F5EFE3' }}>STUDENT</h3>
                <p style={{ marginBottom: '2rem', fontSize: '0.95rem', color: '#C7C4BC' }}>
                  Access courses, assignments, attendance, exams, grades, and AI academic recommendations.
                </p>

                <button className="btn-editorial-primary w-full">
                  CONTINUE AS STUDENT →
                </button>
              </div>

              {/* TEACHER ROLE CARD */}
              <div 
                className="flow-card-panel text-center cursor-pointer hover-lift"
                style={{ padding: '3.5rem 2rem', background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '14px' }}
                onClick={() => setSelectedRole('teacher')}
              >
                <div className="flex-center" style={{ margin: '0 auto 1.5rem', width: '56px', height: '56px', borderRadius: '50%', background: '#00382E' }}>
                  <School size={28} className="text-gold" />
                </div>

                <span className="micro-eyebrow">FACULTY ROLE</span>
                <h3 className="sub-serif-title" style={{ fontSize: '2rem', margin: '0.4rem 0', color: '#F5EFE3' }}>TEACHER</h3>
                <p style={{ marginBottom: '2rem', fontSize: '0.95rem', color: '#C7C4BC' }}>
                  Manage courses, evaluate assignments, review class performance, track students, and post reports.
                </p>

                <button className="btn-editorial-primary w-full">
                  CONTINUE AS TEACHER →
                </button>
              </div>
            </div>
          ) : (
            /* STEP 2: DEDICATED AUTH FORM WITH SEGMENTED TABS AND PILL BACK BUTTON */
            <div className="flow-card-panel" style={{ maxWidth: '580px', margin: '0 auto', padding: '3rem 2.5rem', background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px' }}>
              
              {/* POLISHED UI/UX HEADER */}
              <div className="flex-between flex-wrap gap-3" style={{ marginBottom: '2rem', paddingBottom: '1.2rem', borderBottom: '1px solid #1B3045' }}>
                <button 
                  className="auth-role-pill-btn"
                  onClick={() => setSelectedRole(null)}
                >
                  <ArrowLeft size={14} /> Change Role ({selectedRole.toUpperCase()})
                </button>

                {/* SEGMENTED TAB SWITCHER */}
                <div className="auth-segmented-tabs">
                  <button 
                    type="button"
                    className={`auth-tab-btn ${authMode === 'login' ? 'active' : ''}`}
                    onClick={() => setAuthMode('login')}
                  >
                    SIGN IN
                  </button>
                  <button 
                    type="button"
                    className={`auth-tab-btn ${authMode === 'register' ? 'active' : ''}`}
                    onClick={() => setAuthMode('register')}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </div>

              {/* STUDENT FORM */}
              {selectedRole === 'student' && (
                authMode === 'login' ? (
                  <form onSubmit={handleStudentAuth} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                    <span className="micro-eyebrow">STUDENT ACCESS</span>
                    <h2 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.8rem', marginBottom: '0.5rem' }}>STUDENT LOGIN</h2>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Email address</label>
                      <input 
                        type="email" 
                        className="editorial-input-thin" 
                        placeholder="student@academic.edu"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Password</label>
                      <input 
                        type="password" 
                        className="editorial-input-thin" 
                        placeholder="••••••••"
                        value={studentPassword}
                        onChange={(e) => setStudentPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex-between text-xs" style={{ margin: '0.4rem 0' }}>
                      <label className="flex-align gap-2 cursor-pointer text-muted">
                        <input type="checkbox" defaultChecked /> Remember me
                      </label>
                      <button type="button" className="btn-link-editorial text-xs">FORGOT PASSWORD?</button>
                    </div>

                    <button type="submit" className="btn-editorial-primary w-full" style={{ padding: '0.95rem', marginTop: '0.5rem' }}>
                      SIGN IN →
                    </button>

                    <div className="text-center" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #1B3045' }}>
                      <span className="text-xs text-muted">Don't have an account? </span>
                      <button 
                        type="button"
                        className="text-xs text-gold font-bold cursor-pointer"
                        onClick={() => setAuthMode('register')}
                        style={{ background: 'none', border: 'none', padding: 0 }}
                      >
                        CREATE STUDENT ACCOUNT →
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleStudentAuth} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                    <span className="micro-eyebrow">NEW STUDENT ENROLLMENT</span>
                    <h2 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.8rem', marginBottom: '0.5rem' }}>CREATE STUDENT ACCOUNT</h2>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="editorial-input-thin" 
                        placeholder="e.g. Amina Rahman"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Email *</label>
                      <input 
                        type="email" 
                        className="editorial-input-thin" 
                        placeholder="student@academic.edu"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Password *</label>
                      <input type="password" className="editorial-input-thin" placeholder="••••••••" required />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Confirm Password *</label>
                      <input type="password" className="editorial-input-thin" placeholder="••••••••" required />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Student ID (optional)</label>
                      <input 
                        type="text" 
                        className="editorial-input-thin" 
                        placeholder="STU-2026-XXXX"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn-editorial-primary w-full" style={{ padding: '0.95rem', marginTop: '0.5rem' }}>
                      CREATE ACCOUNT →
                    </button>
                  </form>
                )
              )}

              {/* TEACHER FORM */}
              {selectedRole === 'teacher' && (
                authMode === 'login' ? (
                  <form onSubmit={handleTeacherAuth} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                    <span className="micro-eyebrow">FACULTY PORTAL</span>
                    <h2 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.8rem', marginBottom: '0.5rem' }}>TEACHER LOGIN</h2>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Email address</label>
                      <input 
                        type="email" 
                        className="editorial-input-thin" 
                        placeholder="faculty@academic.edu"
                        value={teacherEmail}
                        onChange={(e) => setTeacherEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Password</label>
                      <input 
                        type="password" 
                        className="editorial-input-thin" 
                        placeholder="••••••••"
                        value={teacherPassword}
                        onChange={(e) => setTeacherPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex-between text-xs" style={{ margin: '0.4rem 0' }}>
                      <label className="flex-align gap-2 cursor-pointer text-muted">
                        <input type="checkbox" defaultChecked /> Remember me
                      </label>
                      <button type="button" className="btn-link-editorial text-xs">FORGOT PASSWORD?</button>
                    </div>

                    <button type="submit" className="btn-editorial-primary w-full" style={{ padding: '0.95rem', marginTop: '0.5rem' }}>
                      SIGN IN →
                    </button>

                    <div className="text-center" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #1B3045' }}>
                      <span className="text-xs text-muted">Don't have an account? </span>
                      <button 
                        type="button"
                        className="text-xs text-gold font-bold cursor-pointer"
                        onClick={() => setAuthMode('register')}
                        style={{ background: 'none', border: 'none', padding: 0 }}
                      >
                        CREATE TEACHER ACCOUNT →
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleTeacherAuth} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                    <span className="micro-eyebrow">FACULTY REGISTRATION</span>
                    <h2 className="sub-serif-title" style={{ color: '#F5EFE3', fontSize: '1.8rem', marginBottom: '0.5rem' }}>CREATE TEACHER ACCOUNT</h2>

                    {approvalNotice && (
                      <div className="editorial-success-box" style={{ marginBottom: '1rem' }}>
                        <span className="text-xs text-gold font-bold block">REGISTRATION PENDING APPROVAL</span>
                        <p className="text-xs text-muted">Your faculty credentials have been submitted for institutional review. Redirecting...</p>
                      </div>
                    )}

                    <div className="form-group-editorial">
                      <label className="editorial-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="editorial-input-thin" 
                        placeholder="e.g. Dr. Leila Haddad"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Email *</label>
                      <input 
                        type="email" 
                        className="editorial-input-thin" 
                        placeholder="faculty@academic.edu"
                        value={teacherEmail}
                        onChange={(e) => setTeacherEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Institution *</label>
                      <input 
                        type="text" 
                        className="editorial-input-thin" 
                        placeholder="Academic Institute of London"
                        value={teacherInst}
                        onChange={(e) => setTeacherInst(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Department *</label>
                      <input 
                        type="text" 
                        className="editorial-input-thin" 
                        placeholder="Architecture & Spatial Design"
                        value={teacherDept}
                        onChange={(e) => setTeacherDept(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-editorial">
                      <label className="editorial-label">Subject / Expertise *</label>
                      <input 
                        type="text" 
                        className="editorial-input-thin" 
                        placeholder="Spatial Geometry & Pedagogy"
                        value={teacherSubject}
                        onChange={(e) => setTeacherSubject(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="btn-editorial-primary w-full" style={{ padding: '0.95rem', marginTop: '0.5rem' }}>
                      CREATE ACCOUNT →
                    </button>
                  </form>
                )
              )}

            </div>
          )}

        </div>
      </section>
    </div>
  );
};
