import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Scroll Helper
import { ScrollToTop } from './components/ScrollToTop';

// Layout Components
import { PublicNavbar } from './components/PublicNavbar';
import { Footer } from './components/Footer';
import { StudentShell } from './layouts/StudentShell';
import { TeacherShell } from './layouts/TeacherShell';
import { AdminShell } from './layouts/AdminShell';
import { AppShell } from './app_components/AppShell';
import { ToastContainer } from './components/Toast';

// Public Luxury Pages
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { ContactPage } from './pages/ContactPage';

// Authentication Pages
import { LoginPage } from './pages/LoginPage';
import { StudentRegisterPage } from './pages/StudentRegisterPage';
import { TeacherRegisterPage } from './pages/TeacherRegisterPage';
import { AdminLoginPage } from './pages/AdminLoginPage';

// Authenticated Student Role Pages (Rendered inside StudentShell, NO PUBLIC NAVBAR/FOOTER)
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { StudentCoursesPage } from './pages/StudentCoursesPage';
import { AcademicFlowPage } from './pages/AcademicFlowPage';
import { AcademicFlowAttendancePage } from './pages/flow/AcademicFlowAttendancePage';
import { AcademicFlowAssignmentsPage } from './pages/flow/AcademicFlowAssignmentsPage';
import { AcademicFlowExamsPage } from './pages/flow/AcademicFlowExamsPage';
import { AcademicFlowAiPage } from './pages/flow/AcademicFlowAiPage';
import { AcademicFlowReportsPage } from './pages/flow/AcademicFlowReportsPage';
import { StudentAssignmentsPage } from './pages/student/StudentAssignmentsPage';
import { StudentAttendancePage } from './pages/student/StudentAttendancePage';
import { StudentGradesPage } from './pages/student/StudentGradesPage';
import { StudentProgressPage } from './pages/student/StudentProgressPage';
import { StudentAiPage } from './pages/student/StudentAiPage';
import { StudentPerformanceReportPage } from './pages/student/StudentPerformanceReportPage';
import { StudentProfilePage } from './pages/student/StudentProfilePage';

// Authenticated Teacher Role Pages (Rendered inside TeacherShell, NO PUBLIC NAVBAR/FOOTER)
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { TeacherCoursesPage } from './pages/teacher/TeacherCoursesPage';
import { TeacherStudentsPage } from './pages/teacher/TeacherStudentsPage';
import { TeacherAssignmentsPage } from './pages/teacher/TeacherAssignmentsPage';
import { TeacherAttendancePage } from './pages/teacher/TeacherAttendancePage';
import { TeacherExamsPage } from './pages/teacher/TeacherExamsPage';
import { TeacherReportsPage } from './pages/teacher/TeacherReportsPage';
import { TeacherInsightsPage } from './pages/teacher/TeacherInsightsPage';
import { TeacherProfilePage } from './pages/teacher/TeacherProfilePage';

// Authenticated Admin Role Pages (Rendered inside AdminShell with Purple Security System)
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminStudentsPage } from './pages/admin/AdminStudentsPage';
import { AdminTeachersPage } from './pages/admin/AdminTeachersPage';
import { AdminCoursesPage } from './pages/admin/AdminCoursesPage';
import { AdminAssignmentsPage } from './pages/admin/AdminAssignmentsPage';
import { AdminExamsPage } from './pages/admin/AdminExamsPage';
import { AdminReportsPage } from './pages/admin/AdminReportsPage';
import { AdminInsightsPage } from './pages/admin/AdminInsightsPage';
import { AdminPerformanceReportsPage } from './pages/admin/AdminPerformanceReportsPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { AdminProfilePage } from './pages/admin/AdminProfilePage';

// Academic Hub /app Workspace Pages
import { AppOverviewPage } from './app_pages/AppOverviewPage';
import { AppCoursesPage } from './app_pages/AppCoursesPage';
import { AppCalendarPage } from './app_pages/AppCalendarPage';
import { AppAssignmentsPage } from './app_pages/AppAssignmentsPage';
import { AppStudentsPage } from './app_pages/AppStudentsPage';
import { AppInsightsPage } from './app_pages/AppInsightsPage';
import { AppReportsPage } from './app_pages/AppReportsPage';

// Dedicated Mentor Portal Page
import { MentorDashboardPage } from './pages/MentorDashboardPage';

import { ToastMessage } from './types';

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-luxury-wrapper flex-column min-h-screen">
      <PublicNavbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function AppContent() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const triggerToast = (type: 'success' | 'info' | 'error', title: string, message?: string) => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random()}`,
      type,
      title,
      message
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app-main-root min-h-screen">
      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      <Routes>
        {/* PUBLIC LUXURY EDITORIAL PAGES (PublicLayout: Header + Footer) */}
        <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
        <Route path="/courses" element={<PublicLayout><CoursesPage /></PublicLayout>} />
        <Route path="/courses/:courseId" element={<PublicLayout><CourseDetailsPage /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

        {/* AUTHENTICATION ROUTES */}
        <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
        <Route path="/register/student" element={<PublicLayout><StudentRegisterPage /></PublicLayout>} />
        <Route path="/register/teacher" element={<PublicLayout><TeacherRegisterPage /></PublicLayout>} />
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* DEDICATED AUTHENTICATED STUDENT ROUTES (StudentShell: NO PUBLIC NAVBAR, NO PUBLIC FOOTER) */}
        <Route path="/student/dashboard" element={<StudentShell><StudentDashboardPage /></StudentShell>} />
        <Route path="/student/courses" element={<StudentShell><StudentCoursesPage /></StudentShell>} />
        <Route path="/student/courses/:courseId" element={<StudentShell><AcademicFlowPage /></StudentShell>} />
        <Route path="/student/courses/:courseId/attendance" element={<StudentShell><AcademicFlowAttendancePage /></StudentShell>} />
        <Route path="/student/courses/:courseId/assignments" element={<StudentShell><AcademicFlowAssignmentsPage /></StudentShell>} />
        <Route path="/student/courses/:courseId/exams" element={<StudentShell><AcademicFlowExamsPage /></StudentShell>} />
        <Route path="/student/courses/:courseId/ai-engine" element={<StudentShell><AcademicFlowAiPage /></StudentShell>} />
        <Route path="/student/courses/:courseId/reports" element={<StudentShell><AcademicFlowReportsPage /></StudentShell>} />

        <Route path="/student/assignments" element={<StudentShell><StudentAssignmentsPage /></StudentShell>} />
        <Route path="/student/attendance" element={<StudentShell><StudentAttendancePage /></StudentShell>} />
        <Route path="/student/grades" element={<StudentShell><StudentGradesPage /></StudentShell>} />
        <Route path="/student/progress" element={<StudentShell><StudentProgressPage /></StudentShell>} />
        <Route path="/student/ai-recommendations" element={<StudentShell><StudentAiPage /></StudentShell>} />
        <Route path="/student/performance-report" element={<StudentShell><StudentPerformanceReportPage /></StudentShell>} />
        <Route path="/student/profile" element={<StudentShell><StudentProfilePage /></StudentShell>} />

        {/* Legacy aliases redirecting to dedicated student routes */}
        <Route path="/my-courses" element={<Navigate to="/student/courses" replace />} />
        <Route path="/enrolled-courses/:courseId" element={<Navigate to="/student/courses/:courseId" replace />} />

        {/* DEDICATED AUTHENTICATED TEACHER ROUTES (TeacherShell: NO PUBLIC NAVBAR, NO PUBLIC FOOTER) */}
        <Route path="/teacher/dashboard" element={<TeacherShell><TeacherDashboardPage /></TeacherShell>} />
        <Route path="/teacher/courses" element={<TeacherShell><TeacherCoursesPage /></TeacherShell>} />
        <Route path="/teacher/students" element={<TeacherShell><TeacherStudentsPage /></TeacherShell>} />
        <Route path="/teacher/assignments" element={<TeacherShell><TeacherAssignmentsPage /></TeacherShell>} />
        <Route path="/teacher/attendance" element={<TeacherShell><TeacherAttendancePage /></TeacherShell>} />
        <Route path="/teacher/exams" element={<TeacherShell><TeacherExamsPage /></TeacherShell>} />
        <Route path="/teacher/reports" element={<TeacherShell><TeacherReportsPage /></TeacherShell>} />
        <Route path="/teacher/insights" element={<TeacherShell><TeacherInsightsPage /></TeacherShell>} />
        <Route path="/teacher/profile" element={<TeacherShell><TeacherProfilePage /></TeacherShell>} />

        {/* DEDICATED AUTHENTICATED ADMIN ROUTES (AdminShell: NO PUBLIC NAVBAR, NO PUBLIC FOOTER) */}
        <Route path="/admin/dashboard" element={<AdminShell><AdminDashboardPage /></AdminShell>} />
        <Route path="/admin/students" element={<AdminShell><AdminStudentsPage /></AdminShell>} />
        <Route path="/admin/teachers" element={<AdminShell><AdminTeachersPage /></AdminShell>} />
        <Route path="/admin/courses" element={<AdminShell><AdminCoursesPage /></AdminShell>} />
        <Route path="/admin/assignments" element={<AdminShell><AdminAssignmentsPage /></AdminShell>} />
        <Route path="/admin/exams" element={<AdminShell><AdminExamsPage /></AdminShell>} />
        <Route path="/admin/reports" element={<AdminShell><AdminReportsPage /></AdminShell>} />
        <Route path="/admin/ai-insights" element={<AdminShell><AdminInsightsPage /></AdminShell>} />
        <Route path="/admin/performance-reports" element={<AdminShell><AdminPerformanceReportsPage /></AdminShell>} />
        <Route path="/admin/settings" element={<AdminShell><AdminSettingsPage /></AdminShell>} />
        <Route path="/admin/profile" element={<AdminShell><AdminProfilePage /></AdminShell>} />

        {/* ACADEMIC HUB /app WORKSPACE ROUTES */}
        <Route path="/app" element={<AppShell><AppOverviewPage /></AppShell>} />
        <Route path="/app/courses" element={<AppShell><AppCoursesPage /></AppShell>} />
        <Route path="/app/calendar" element={<AppShell><AppCalendarPage /></AppShell>} />
        <Route path="/app/assignments" element={<AppShell><AppAssignmentsPage /></AppShell>} />
        <Route path="/app/students" element={<AppShell><AppStudentsPage /></AppShell>} />
        <Route path="/app/insights" element={<AppShell><AppInsightsPage /></AppShell>} />
        <Route path="/app/reports" element={<AppShell><AppReportsPage /></AppShell>} />

        {/* DEDICATED MENTOR PORTAL ROUTE */}
        <Route path="/mentor" element={<MentorDashboardPage onTriggerToast={triggerToast} />} />

        {/* Fallback Catch-all Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
