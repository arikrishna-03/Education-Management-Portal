import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import { PublicNavbar } from './components/PublicNavbar';
import { Footer } from './components/Footer';
import { AppShell } from './app_components/AppShell';
import { ToastContainer } from './components/Toast';

// Public Luxury Pages
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { ContactPage } from './pages/ContactPage';

// Authenticated Student Enrolled Experience
import { MyCoursesPage } from './pages/MyCoursesPage';
import { AcademicFlowPage } from './pages/AcademicFlowPage';

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
        {/* PUBLIC LUXURY EDITORIAL PAGES */}
        <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
        <Route path="/courses" element={<PublicLayout><CoursesPage /></PublicLayout>} />
        <Route path="/courses/:courseId" element={<PublicLayout><CourseDetailsPage /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

        {/* AUTHENTICATED STUDENT ENROLLED EXPERIENCE */}
        <Route path="/my-courses" element={<PublicLayout><MyCoursesPage /></PublicLayout>} />
        <Route path="/enrolled-courses/:courseId" element={<PublicLayout><AcademicFlowPage /></PublicLayout>} />

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
      <AppContent />
    </Router>
  );
}
