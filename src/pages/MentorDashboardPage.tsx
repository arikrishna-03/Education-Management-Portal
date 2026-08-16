import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Target, 
  MessageCircle, 
  Plus, 
  Search, 
  Bell, 
  ChevronDown, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Brain, 
  Sparkles, 
  TrendingUp, 
  FileText, 
  Upload, 
  UserPlus, 
  Send, 
  HelpCircle, 
  LogOut, 
  Settings, 
  GraduationCap,
  X,
  Check,
  Video,
  Filter
} from 'lucide-react';
import { Bar, Line } from 'react-chartjs-2';
import confetti from 'canvas-confetti';

interface MentorDashboardPageProps {
  onTriggerToast: (type: 'success' | 'info' | 'error', title: string, msg?: string) => void;
}

export const MentorDashboardPage: React.FC<MentorDashboardPageProps> = ({ onTriggerToast }) => {
  // Sidebar active nav state
  const [activeSidebarNav, setActiveSidebarNav] = useState('Home');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Modals state
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedStudentForModal, setSelectedStudentForModal] = useState<string>('Rahul Kumar');
  const [sessionType, setSessionType] = useState('Career Guidance');
  const [sessionDate, setSessionDate] = useState('2026-08-17');
  const [sessionTime, setSessionTime] = useState('16:30');
  const [sessionDuration, setSessionDuration] = useState('45');
  const [sessionLink, setSessionLink] = useState('https://meet.edutr.edu/mentor-session-401');
  const [sessionNotes, setSessionNotes] = useState('');

  // Student Details Modal State
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<any | null>(null);

  // Search Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Interactive Sessions State
  const [sessions, setSessions] = useState([
    {
      id: 'sess-1',
      studentName: 'Rahul Kumar',
      studentAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
      topic: 'Career Guidance',
      timeText: 'Today · 4:30 PM',
      duration: '45 min',
      status: 'Confirmed',
      link: 'https://meet.edutr.edu/rahul-career'
    },
    {
      id: 'sess-2',
      studentName: 'Priya Sharma',
      studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      topic: 'React & Frontend Development',
      timeText: 'Tomorrow · 6:00 PM',
      duration: '60 min',
      status: 'Confirmed',
      link: 'https://meet.edutr.edu/priya-react'
    },
    {
      id: 'sess-3',
      studentName: 'Aditya Raj',
      studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      topic: 'Project Review',
      timeText: 'Aug 18 · 5:30 PM',
      duration: '45 min',
      status: 'Pending',
      link: 'https://meet.edutr.edu/aditya-review'
    }
  ]);

  // Students Dataset
  const studentsList = [
    {
      id: 'stu-1',
      name: 'Rahul Kumar',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
      goal: 'Frontend Development',
      progress: 78,
      lastSession: 'Yesterday',
      status: 'On Track',
      email: 'rahul.k@edutr.edu',
      milestones: 8,
      completedMilestones: 6,
      attendance: '96%',
      recentNote: 'Demonstrated high competence in React context and custom hooks.'
    },
    {
      id: 'stu-2',
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      goal: 'Data Science',
      progress: 64,
      lastSession: '2 days ago',
      status: 'Needs Attention',
      email: 'priya.s@edutr.edu',
      milestones: 10,
      completedMilestones: 6,
      attendance: '82%',
      recentNote: 'Activity dropped 18% this week due to midterms. Needs check-in.'
    },
    {
      id: 'stu-3',
      name: 'Aditya Raj',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      goal: 'UI/UX Design',
      progress: 91,
      lastSession: 'Today',
      status: 'Excellent',
      email: 'aditya.r@edutr.edu',
      milestones: 7,
      completedMilestones: 7,
      attendance: '100%',
      recentNote: 'Portfolio Figma prototypes complete. Ready for interview prep.'
    },
    {
      id: 'stu-4',
      name: 'Sneha Patel',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
      goal: 'Career Preparation',
      progress: 52,
      lastSession: '4 days ago',
      status: 'Needs Attention',
      email: 'sneha.p@edutr.edu',
      milestones: 9,
      completedMilestones: 4,
      attendance: '74%',
      recentNote: 'Behind on mock technical interview practice schedule.'
    }
  ];

  // Students Needing Attention
  const studentsNeedingAttention = [
    { name: 'Priya Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200', issue: 'Low engagement (-18%)', priority: 'Medium' },
    { name: 'Sneha Patel', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200', issue: 'Goal behind schedule', priority: 'High' },
    { name: 'Arjun Mehta', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', issue: 'Missed Tuesday session', priority: 'Medium' }
  ];

  // Chart Data: Mentoring Activity (Last 7 Days)
  const mentoringActivityChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sessions Conducted',
        data: [2, 3, 1, 4, 2, 1, 0],
        backgroundColor: '#4f46e5',
        borderRadius: 6
      },
      {
        label: 'Student Submissions',
        data: [4, 5, 3, 7, 5, 2, 1],
        backgroundColor: '#0891b2',
        borderRadius: 6
      }
    ]
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentForModal) return;

    const newSess = {
      id: `sess-${Date.now()}`,
      studentName: selectedStudentForModal,
      studentAvatar: studentsList.find(s => s.name === selectedStudentForModal)?.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
      topic: sessionType,
      timeText: `${sessionDate} · ${sessionTime}`,
      duration: `${sessionDuration} min`,
      status: 'Confirmed',
      link: sessionLink
    };

    setSessions([newSess, ...sessions]);
    setShowScheduleModal(false);

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}

    onTriggerToast('success', 'Session Scheduled Successfully!', `Mentoring appointment created with ${selectedStudentForModal}.`);
  };

  const handleJoinSession = (sess: any) => {
    onTriggerToast('info', 'Joining Video Session', `Launching meeting room for ${sess.studentName} (${sess.topic}).`);
    window.open(sess.link, '_blank');
  };

  // Filtered Students
  const filteredStudents = studentsList.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.goal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="mentor-app-shell">
      {/* --------------------------------------------------------------------------
         FIXED SIDEBAR
         -------------------------------------------------------------------------- */}
      <aside className={`mentor-sidebar ${mobileDrawerOpen ? 'mobile-open' : ''}`}>
        <div className="mentor-sidebar-top">
          {/* Brand */}
          <div className="mentor-brand flex-align gap-3">
            <div className="mentor-brand-icon flex-center">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="mentor-brand-title">EduTR</span>
              <span className="mentor-brand-subtitle">Mentor Portal</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mentor-nav-list">
            {[
              { name: 'Home', icon: <GraduationCap size={18} /> },
              { name: 'My Students', icon: <Users size={18} /> },
              { name: 'Sessions', icon: <Video size={18} /> },
              { name: 'Calendar', icon: <Calendar size={18} /> },
              { name: 'Resources', icon: <FileText size={18} /> },
              { name: 'Progress', icon: <Target size={18} /> },
              { name: 'Messages', icon: <MessageCircle size={18} />, badge: 5 },
              { name: 'Notifications', icon: <Bell size={18} />, badge: 3 }
            ].map((item) => {
              const isSelected = activeSidebarNav === item.name;
              return (
                <button
                  key={item.name}
                  className={`mentor-nav-item ${isSelected ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSidebarNav(item.name);
                    setMobileDrawerOpen(false);
                  }}
                >
                  <span className="mentor-nav-icon">{item.icon}</span>
                  <span className="mentor-nav-text">{item.name}</span>
                  {item.badge && <span className="mentor-nav-badge">{item.badge}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Profile */}
        <div className="mentor-sidebar-bottom">
          <div className="mentor-profile-card flex-between">
            <div className="flex-align gap-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                alt="Arikrishna" 
                className="mentor-avatar" 
              />
              <div>
                <strong className="mentor-name">Arikrishna</strong>
                <span className="mentor-role">Senior Academic Mentor</span>
              </div>
            </div>
          </div>

          <div className="mentor-sidebar-sublinks">
            <button className="sublink-btn flex-align gap-2" onClick={() => onTriggerToast('info', 'Settings', 'Mentor profile preferences opened.')}>
              <Settings size={14} /> Profile Settings
            </button>
            <button className="sublink-btn flex-align gap-2" onClick={() => onTriggerToast('info', 'Help Desk', 'EduTR Mentor support hub ready.')}>
              <HelpCircle size={14} /> Help & Support
            </button>
            <button className="sublink-btn flex-align gap-2 text-crimson" onClick={() => onTriggerToast('info', 'Logged Out', 'Signed out of Mentor Portal.')}>
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* --------------------------------------------------------------------------
         MAIN CONTENT AREA
         -------------------------------------------------------------------------- */}
      <div className="mentor-main-layout">
        {/* TOP HEADER */}
        <header className="mentor-header flex-between">
          <div className="flex-align gap-3">
            <button 
              className="mentor-hamburger-btn hide-desktop"
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            >
              {mobileDrawerOpen ? <X size={20} /> : <GraduationCap size={20} />}
            </button>
            <div>
              <h1 className="header-greeting">Good morning, Arikrishna 👋</h1>
              <p className="header-subtext">Here's what's happening with your students today.</p>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="header-actions-right flex-align gap-3">
            {/* Search Box */}
            <div className="header-search-bar flex-align gap-2">
              <Search size={16} className="text-muted" />
              <input 
                type="text" 
                placeholder="Search students, goals, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Notification Bell */}
            <button 
              className="header-icon-btn" 
              title="Notifications"
              onClick={() => onTriggerToast('info', 'Notifications', 'You have 3 unread mentor alerts.')}
            >
              <Bell size={18} />
              <span className="unread-dot" />
            </button>

            {/* User Avatar Dropdown */}
            <div 
              className="header-user-pill flex-align gap-2 cursor-pointer"
              onClick={() => onTriggerToast('info', 'Profile Options', 'Arikrishna Mentor Account active.')}
            >
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                alt="Arikrishna" 
                className="user-avatar-sm"
              />
              <span className="user-name-text hide-mobile">Arikrishna</span>
              <ChevronDown size={14} className="text-muted hide-mobile" />
            </div>
          </div>
        </header>

        {/* HERO / SUMMARY OVERVIEW */}
        <section className="mentor-hero-panel flex-between">
          <div>
            <h2 className="hero-title">Mentor Overview</h2>
            <p className="hero-subtitle">Track your students, sessions, and mentoring progress from one place.</p>
          </div>
          <div className="hero-btn-group flex-align gap-3">
            <button className="btn-hero-action-secondary flex-align gap-2" onClick={() => setActiveSidebarNav('Calendar')}>
              <Calendar size={16} /> View Calendar
            </button>
            <button className="btn-hero-action-primary flex-align gap-2" onClick={() => setShowScheduleModal(true)}>
              <Plus size={16} /> Schedule Session
            </button>
          </div>
        </section>

        {/* --------------------------------------------------------------------------
           KPI CARDS (4 HORIZONTAL CARDS)
           -------------------------------------------------------------------------- */}
        <section className="kpi-cards-grid">
          {/* Card 1 */}
          <div className="kpi-stat-card">
            <div className="flex-between">
              <div className="kpi-icon-box bg-indigo-light text-indigo">
                <Users size={20} />
              </div>
              <span className="kpi-trend-pill trend-up">+2 this month</span>
            </div>
            <h3 className="kpi-number">12</h3>
            <span className="kpi-card-label">Active Students</span>
          </div>

          {/* Card 2 */}
          <div className="kpi-stat-card">
            <div className="flex-between">
              <div className="kpi-icon-box bg-cyan-light text-cyan">
                <Calendar size={20} />
              </div>
              <span className="kpi-supporting-text">Next 7 days</span>
            </div>
            <h3 className="kpi-number">8</h3>
            <span className="kpi-card-label">Upcoming Sessions</span>
          </div>

          {/* Card 3 */}
          <div className="kpi-stat-card">
            <div className="flex-between">
              <div className="kpi-icon-box bg-emerald-light text-emerald">
                <Target size={20} />
              </div>
              <span className="kpi-trend-pill trend-up">+6.4% this month</span>
            </div>
            <h3 className="kpi-number">86%</h3>
            <span className="kpi-card-label">Average Progress</span>
          </div>

          {/* Card 4 */}
          <div className="kpi-stat-card">
            <div className="flex-between">
              <div className="kpi-icon-box bg-amber-light text-amber">
                <MessageCircle size={20} />
              </div>
              <span className="kpi-supporting-text text-amber">3 require attention</span>
            </div>
            <h3 className="kpi-number">5</h3>
            <span className="kpi-card-label">Unread Messages</span>
          </div>
        </section>

        {/* --------------------------------------------------------------------------
           TWO-COLUMN MAIN CONTENT GRID
           -------------------------------------------------------------------------- */}
        <div className="mentor-content-grid">
          {/* =========================================================================
             LEFT COLUMN (~70% Width)
             ========================================================================= */}
          <div className="left-column-layout">
            {/* UPCOMING SESSIONS CARD */}
            <div className="dashboard-card">
              <div className="card-header-row flex-between">
                <div>
                  <h3 className="dash-card-title flex-align gap-2">
                    <Video size={18} className="text-indigo" /> Upcoming Sessions
                  </h3>
                  <span className="dash-card-sub text-xs text-muted">Confirmed and pending student appointments</span>
                </div>
                <button className="btn-link-sm flex-align gap-1" onClick={() => setActiveSidebarNav('Sessions')}>
                  View all <ArrowRight size={14} />
                </button>
              </div>

              <div className="sessions-list-grid">
                {sessions.map((sess) => (
                  <div key={sess.id} className="session-item-card flex-between">
                    <div className="flex-align gap-3">
                      <img src={sess.studentAvatar} alt={sess.studentName} className="student-avatar-md" />
                      <div>
                        <div className="flex-align gap-2">
                          <h4 className="sess-student-name">{sess.studentName}</h4>
                          <span className={`status-pill ${
                            sess.status === 'Confirmed' ? 'status-green' : 'status-amber'
                          }`}>
                            {sess.status}
                          </span>
                        </div>
                        <p className="sess-topic-text">{sess.topic}</p>
                        <div className="sess-meta-row flex-align gap-3 text-xs text-muted">
                          <span className="flex-align gap-1"><Clock size={12} /> {sess.timeText}</span>
                          <span>•</span>
                          <span>Duration: <strong>{sess.duration}</strong></span>
                        </div>
                      </div>
                    </div>

                    <button 
                      className={`btn-session-action ${sess.status === 'Confirmed' ? 'btn-join' : 'btn-review'}`}
                      onClick={() => handleJoinSession(sess)}
                    >
                      {sess.status === 'Confirmed' ? 'Join Session' : 'Review'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* STUDENT PROGRESS SECTION */}
            <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
              <div className="card-header-row flex-between">
                <div>
                  <h3 className="dash-card-title flex-align gap-2">
                    <Target size={18} className="text-emerald" /> Student Progress
                  </h3>
                  <span className="dash-card-sub text-xs text-muted">Monitor how your students are progressing toward their goals.</span>
                </div>
                <button className="btn-link-sm flex-align gap-1" onClick={() => setActiveSidebarNav('My Students')}>
                  View All Students <ArrowRight size={14} />
                </button>
              </div>

              {/* Progress Table */}
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Learning Goal</th>
                      <th>Progress %</th>
                      <th>Last Session</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((stu) => (
                      <tr key={stu.id} className="table-row-hover">
                        <td>
                          <div className="flex-align gap-2">
                            <img src={stu.avatar} alt={stu.name} className="avatar-xs" />
                            <div>
                              <strong className="text-sm font-semibold">{stu.name}</strong>
                              <span className="cell-subtext">{stu.email}</span>
                            </div>
                          </div>
                        </td>
                        <td><span className="tag-blue">{stu.goal}</span></td>
                        <td>
                          <div className="progress-cell-wrapper" style={{ width: '130px' }}>
                            <div className="flex-between text-xs font-bold" style={{ marginBottom: '0.2rem' }}>
                              <span>{stu.progress}%</span>
                            </div>
                            <div className="progress-bar-bg">
                              <div 
                                className="progress-bar-fill" 
                                style={{ 
                                  width: `${stu.progress}%`,
                                  background: stu.progress >= 80 ? '#10b981' : stu.progress >= 65 ? '#4f46e5' : '#f59e0b' 
                                }} 
                              />
                            </div>
                          </div>
                        </td>
                        <td><span className="text-xs text-muted">{stu.lastSession}</span></td>
                        <td>
                          <span className={`status-pill ${
                            stu.status === 'Excellent' ? 'status-green' : 
                            stu.status === 'On Track' ? 'status-indigo' : 'status-amber'
                          }`}>
                            {stu.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="btn-ghost-sm" 
                            onClick={() => setSelectedStudentDetail(stu)}
                          >
                            Inspect Profile
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* WEEKLY ACTIVITY CHART */}
            <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
              <div className="card-header-row flex-between">
                <div>
                  <h3 className="dash-card-title flex-align gap-2">
                    <TrendingUp size={18} className="text-indigo" /> Mentoring Activity
                  </h3>
                  <span className="dash-card-sub text-xs text-muted">Sessions and student engagement over the last 7 days.</span>
                </div>
              </div>

              <div className="chart-container-lg" style={{ height: '220px', marginTop: '1rem' }}>
                <Bar 
                  data={mentoringActivityChartData} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'top' } }
                  }} 
                />
              </div>
            </div>
          </div>

          {/* =========================================================================
             RIGHT COLUMN (~30% Width)
             ========================================================================= */}
          <div className="right-column-layout">
            {/* QUICK ACTIONS CARD */}
            <div className="dashboard-card">
              <h3 className="dash-card-title text-sm font-bold" style={{ marginBottom: '0.8rem' }}>Quick Actions</h3>
              <div className="quick-actions-stack">
                <button className="quick-action-row" onClick={() => setShowScheduleModal(true)}>
                  <div className="qa-icon bg-indigo-light text-indigo"><Plus size={16} /></div>
                  <span>Schedule Session</span>
                </button>

                <button className="quick-action-row" onClick={() => onTriggerToast('info', 'Add Student', 'New student invite link generated.')}>
                  <div className="qa-icon bg-emerald-light text-emerald"><UserPlus size={16} /></div>
                  <span>Add Student</span>
                </button>

                <button className="quick-action-row" onClick={() => onTriggerToast('info', 'Upload Resource', 'Resource uploader opened.')}>
                  <div className="qa-icon bg-cyan-light text-cyan"><Upload size={16} /></div>
                  <span>Upload Resource</span>
                </button>

                <button className="quick-action-row" onClick={() => setActiveSidebarNav('Messages')}>
                  <div className="qa-icon bg-purple-light text-purple"><Send size={16} /></div>
                  <span>Send Message</span>
                </button>

                <button className="quick-action-row" onClick={() => setActiveSidebarNav('Calendar')}>
                  <div className="qa-icon bg-amber-light text-amber"><Calendar size={16} /></div>
                  <span>View Calendar</span>
                </button>
              </div>
            </div>

            {/* AI MENTOR INSIGHTS CARD */}
            <div className="dashboard-card ai-insight-card" style={{ marginTop: '1.2rem' }}>
              <div className="flex-align gap-2" style={{ marginBottom: '0.4rem' }}>
                <Sparkles size={18} className="text-cyan" />
                <h3 className="dash-card-title text-sm font-bold text-cyan">AI Mentor Insights</h3>
              </div>
              <p className="text-xs text-muted" style={{ marginBottom: '1rem' }}>Personalized recommendations based on student activity.</p>

              <div className="ai-insights-stack">
                {/* Insight 1 */}
                <div className="insight-item-box border-amber">
                  <span className="insight-tag text-amber">Attention Needed</span>
                  <p className="insight-text">Priya's activity has dropped 18% this week.</p>
                  <span className="text-xs text-muted block" style={{ margin: '0.2rem 0 0.5rem' }}>Suggested: Schedule check-in session.</span>
                  <button className="btn-ai-action-sm" onClick={() => setSelectedStudentDetail(studentsList[1])}>
                    View Student
                  </button>
                </div>

                {/* Insight 2 */}
                <div className="insight-item-box border-green">
                  <span className="insight-tag text-emerald">Progress Update</span>
                  <p className="insight-text">Rahul completed 4 learning milestones this week.</p>
                  <span className="text-xs text-muted block" style={{ margin: '0.2rem 0 0.5rem' }}>Suggested: Assign next project.</span>
                  <button className="btn-ai-action-sm" onClick={() => setSelectedStudentDetail(studentsList[0])}>
                    Review Progress
                  </button>
                </div>

                {/* Insight 3 */}
                <div className="insight-item-box border-crimson">
                  <span className="insight-tag text-crimson">Goal Risk</span>
                  <p className="insight-text">Sneha may fall behind her interview prep timeline.</p>
                  <span className="text-xs text-muted block" style={{ margin: '0.2rem 0 0.5rem' }}>Suggested: Recommend practice session.</span>
                  <button className="btn-ai-action-sm" onClick={() => setSelectedStudentDetail(studentsList[3])}>
                    Take Action
                  </button>
                </div>
              </div>
            </div>

            {/* STUDENTS NEEDING ATTENTION CARD */}
            <div className="dashboard-card" style={{ marginTop: '1.2rem' }}>
              <h3 className="dash-card-title text-sm font-bold text-amber" style={{ marginBottom: '0.8rem' }}>
                Students Needing Attention
              </h3>
              <div className="attention-students-stack">
                {studentsNeedingAttention.map((item, idx) => (
                  <div key={idx} className="attention-row flex-between">
                    <div className="flex-align gap-2">
                      <img src={item.avatar} alt={item.name} className="avatar-xs" />
                      <div>
                        <strong className="text-xs block">{item.name}</strong>
                        <span className="text-xs text-muted">{item.issue}</span>
                      </div>
                    </div>
                    <div className="flex-align gap-2">
                      <span className={`status-pill ${item.priority === 'High' ? 'status-crimson' : 'status-amber'}`}>
                        {item.priority}
                      </span>
                      <button className="btn-ghost-sm" onClick={() => onTriggerToast('info', 'Student Alert', `Reviewing ${item.name}'s file.`)}>
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TODAY'S SCHEDULE / CALENDAR PREVIEW */}
            <div className="dashboard-card" style={{ marginTop: '1.2rem' }}>
              <div className="card-header-row flex-between">
                <h3 className="dash-card-title text-sm font-bold">Today's Schedule</h3>
                <button className="btn-link-sm text-xs" onClick={() => setActiveSidebarNav('Calendar')}>
                  Open Calendar →
                </button>
              </div>

              <div className="timeline-schedule-list" style={{ marginTop: '0.8rem' }}>
                <div className="timeline-item">
                  <span className="time-col">09:00 AM</span>
                  <span className="status-dot dot-gray" />
                  <span className="event-title text-muted">Available</span>
                </div>
                <div className="timeline-item active-slot">
                  <span className="time-col">11:00 AM</span>
                  <span className="status-dot dot-indigo" />
                  <div>
                    <strong className="event-title">Rahul Kumar</strong>
                    <span className="event-sub">Career Planning</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="time-col">02:00 PM</span>
                  <span className="status-dot dot-gray" />
                  <span className="event-title text-muted">Available</span>
                </div>
                <div className="timeline-item active-slot">
                  <span className="time-col">04:30 PM</span>
                  <span className="status-dot dot-amber" />
                  <div>
                    <strong className="event-title">Priya Sharma</strong>
                    <span className="event-sub">Development Mentoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT MESSAGES */}
            <div className="dashboard-card" style={{ marginTop: '1.2rem' }}>
              <div className="card-header-row flex-between">
                <h3 className="dash-card-title text-sm font-bold">Recent Messages</h3>
                <button className="btn-link-sm text-xs" onClick={() => setActiveSidebarNav('Messages')}>
                  View Messages →
                </button>
              </div>
              <div className="messages-preview-stack" style={{ marginTop: '0.8rem' }}>
                <div className="msg-preview-item flex-align gap-2">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" alt="Rahul" className="avatar-xs" />
                  <div style={{ flex: 1 }}>
                    <div className="flex-between">
                      <strong className="text-xs">Rahul Kumar</strong>
                      <span className="text-xs text-muted">10 min ago</span>
                    </div>
                    <p className="text-xs text-muted text-truncate">“Can we discuss my project architecture?”</p>
                  </div>
                </div>

                <div className="msg-preview-item flex-align gap-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Priya" className="avatar-xs" />
                  <div style={{ flex: 1 }}>
                    <div className="flex-between">
                      <strong className="text-xs">Priya Sharma</strong>
                      <span className="text-xs text-muted">1 hour ago</span>
                    </div>
                    <p className="text-xs text-muted text-truncate">“I've completed the assignment.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER STATUS BAR */}
        <footer className="mentor-footer-status flex-between" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
          <div className="flex-align gap-2 text-xs text-muted">
            <span className="online-dot-green" />
            <span>EduTR is running normally</span>
          </div>
          <span className="text-xs text-muted">© 2026 EduTR Mentor Operating Core. All systems operational.</span>
        </footer>
      </div>

      {/* --------------------------------------------------------------------------
         SCHEDULE SESSION MODAL
         -------------------------------------------------------------------------- */}
      {showScheduleModal && (
        <div className="modal-overlay active" onClick={() => setShowScheduleModal(false)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <h2 className="modal-title flex-align gap-2 text-indigo">
                <Video size={20} /> Schedule Mentoring Session
              </h2>
              <button className="toast-close-btn" onClick={() => setShowScheduleModal(false)}><X size={18} /></button>
            </div>

            <form onSubmit={handleScheduleSubmit} className="modal-body-form">
              <div className="form-group">
                <label className="form-label">Select Student *</label>
                <select className="form-control" value={selectedStudentForModal} onChange={(e) => setSelectedStudentForModal(e.target.value)}>
                  {studentsList.map(s => <option key={s.id} value={s.name}>{s.name} ({s.goal})</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Session Type *</label>
                <select className="form-control" value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
                  <option value="Career Guidance">Career Guidance</option>
                  <option value="Technical Mentoring">Technical Mentoring</option>
                  <option value="Project Review">Project Review</option>
                  <option value="General Check-in">General Check-in</option>
                </select>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Date *</label>
                  <input type="date" className="form-control" value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Time *</label>
                  <input type="time" className="form-control" value={sessionTime} onChange={(e) => setSessionTime(e.target.value)} required />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Duration (Minutes)</label>
                  <select className="form-control" value={sessionDuration} onChange={(e) => setSessionDuration(e.target.value)}>
                    <option value="30">30 Minutes</option>
                    <option value="45">45 Minutes</option>
                    <option value="60">60 Minutes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Meeting Room Link</label>
                  <input type="text" className="form-control" value={sessionLink} onChange={(e) => setSessionLink(e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Mentor Notes / Agenda</label>
                <textarea className="form-control" rows={3} placeholder="Topics to cover in this session..." value={sessionNotes} onChange={(e) => setSessionNotes(e.target.value)} />
              </div>

              <div className="modal-footer flex-end gap-3" style={{ marginTop: '1.5rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setShowScheduleModal(false)}>Cancel</button>
                <button type="submit" className="btn-hero-primary">Schedule Session</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------------------------
         STUDENT DETAILS MODAL
         -------------------------------------------------------------------------- */}
      {selectedStudentDetail && (
        <div className="modal-overlay active" onClick={() => setSelectedStudentDetail(null)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <div className="flex-align gap-3">
                <img src={selectedStudentDetail.avatar} alt={selectedStudentDetail.name} className="avatar-md" />
                <div>
                  <h2 className="modal-title">{selectedStudentDetail.name}</h2>
                  <span className="tag-blue">{selectedStudentDetail.goal}</span>
                </div>
              </div>
              <button className="toast-close-btn" onClick={() => setSelectedStudentDetail(null)}><X size={18} /></button>
            </div>

            <div className="student-modal-body">
              <div className="kpi-grid" style={{ marginBottom: '1.2rem' }}>
                <div className="kpi-card-sm">
                  <span className="kpi-label">Progress</span>
                  <strong className="kpi-val text-indigo">{selectedStudentDetail.progress}%</strong>
                </div>
                <div className="kpi-card-sm">
                  <span className="kpi-label">Attendance</span>
                  <strong className="kpi-val text-emerald">{selectedStudentDetail.attendance}</strong>
                </div>
                <div className="kpi-card-sm">
                  <span className="kpi-label">Milestones</span>
                  <strong className="kpi-val text-cyan">{selectedStudentDetail.completedMilestones}/{selectedStudentDetail.milestones}</strong>
                </div>
              </div>

              <h4 className="section-title-sm" style={{ marginBottom: '0.4rem' }}>Recent Mentor Note</h4>
              <p className="text-xs text-muted" style={{ padding: '0.8rem', background: '#f8fafc', borderRadius: '8px', marginBottom: '1rem' }}>
                {selectedStudentDetail.recentNote}
              </p>

              <div className="modal-footer flex-between">
                <button className="btn-secondary" onClick={() => setSelectedStudentDetail(null)}>Close</button>
                <button 
                  className="btn-hero-primary"
                  onClick={() => {
                    setSelectedStudentForModal(selectedStudentDetail.name);
                    setSelectedStudentDetail(null);
                    setShowScheduleModal(true);
                  }}
                >
                  <Video size={16} /> Schedule Session with {selectedStudentDetail.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
