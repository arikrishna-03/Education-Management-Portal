import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppShell } from './app_components/AppShell';
import { ToastContainer } from './components/Toast';

// Academic Hub /app Workspace Pages
import { AppOverviewPage } from './app_pages/AppOverviewPage';
import { AppCoursesPage } from './app_pages/AppCoursesPage';
import { AppCalendarPage } from './app_pages/AppCalendarPage';
import { AppAssignmentsPage } from './app_pages/AppAssignmentsPage';
import { AppStudentsPage } from './app_pages/AppStudentsPage';
import { AppInsightsPage } from './app_pages/AppInsightsPage';
import { AppReportsPage } from './app_pages/AppReportsPage';

// Mentor Portal Page
import { MentorDashboardPage } from './pages/MentorDashboardPage';

import { ToastMessage } from './types';

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

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

  const isMentorPage = path.startsWith('/mentor');

  return (
    <div className="app-shell min-h-screen">
      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      <Routes>
        {/* Academic Hub /app Workspace Routes (Wrapped in AppShell) */}
        <Route path="/app" element={<AppShell><AppOverviewPage /></AppShell>} />
        <Route path="/app/courses" element={<AppShell><AppCoursesPage /></AppShell>} />
        <Route path="/app/calendar" element={<AppShell><AppCalendarPage /></AppShell>} />
        <Route path="/app/assignments" element={<AppShell><AppAssignmentsPage /></AppShell>} />
        <Route path="/app/students" element={<AppShell><AppStudentsPage /></AppShell>} />
        <Route path="/app/insights" element={<AppShell><AppInsightsPage /></AppShell>} />
        <Route path="/app/reports" element={<AppShell><AppReportsPage /></AppShell>} />

        {/* Dedicated Mentor Portal Route */}
        <Route path="/mentor" element={<MentorDashboardPage onTriggerToast={triggerToast} />} />

        {/* Default Route: Redirect '/' to '/app' */}
        <Route path="/" element={<Navigate to="/app" replace />} />

        {/* Fallback Catch-all Route */}
        <Route path="*" element={<Navigate to="/app" replace />} />
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
