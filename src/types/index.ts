export type NavigationTab = 
  | 'overview' 
  | 'courses' 
  | 'calendar' 
  | 'assignments' 
  | 'students' 
  | 'insights' 
  | 'reports';

export interface UserProfile {
  name: string;
  role: string;
  email: string;
  department: string;
  avatar: string;
}

export interface KPIMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
}

export interface CourseSession {
  id: string;
  day: string;
  time: string;
  room: string;
  topic: string;
}

export interface CourseAnnouncement {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  department: string;
  semester: string;
  instructor: string;
  instructorTitle: string;
  instructorAvatar: string;
  credits: number;
  enrolledCount: number;
  maxCapacity: number;
  status: 'Active' | 'Upcoming' | 'Completed';
  prerequisites: string[];
  description: string;
  avgGrade: number;
  attendanceRate: number;
  completionRate: number;
  syllabus: { week: number; topic: string; details: string }[];
  sessions: CourseSession[];
  announcements: CourseAnnouncement[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  startTime: string;
  endTime: string;
  category: 'teaching_week' | 'exam' | 'assessment' | 'campus_event' | 'faculty_meeting';
  room?: string;
  courseCode?: string;
  description?: string;
}

export interface RubricCriteria {
  id: string;
  title: string;
  maxPoints: number;
  description: string;
}

export interface StudentSubmission {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  submittedAt: string;
  status: 'Graded' | 'Pending Review' | 'Late' | 'Not Submitted';
  score?: number;
  feedback?: string;
  submissionText?: string;
}

export interface Assignment {
  id: string;
  courseCode: string;
  courseTitle: string;
  title: string;
  description: string;
  dueDate: string;
  submissionsCount: number;
  totalStudents: number;
  completionPercentage: number;
  gradingStatus: 'Graded' | 'In Review' | 'Pending';
  averageGrade: number;
  rubricStatus: 'Attached' | 'Draft' | 'None';
  rubric: RubricCriteria[];
  submissions: StudentSubmission[];
}

export interface MentoringLog {
  id: string;
  date: string;
  mentor: string;
  notes: string;
  actionItem: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  program: string;
  year: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Graduate';
  attendanceRate: number;
  gpa: number;
  completionRate: number;
  engagementLevel: 'High' | 'Moderate' | 'At-Risk';
  status: 'On-Track' | 'Needs Attention' | 'At-Risk';
  enrolledCourses: { code: string; title: string; grade: string; score: number }[];
  mentoringHistory: MentoringLog[];
  aiInsights: string[];
}

export interface AIInsight {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  type: 'at_risk' | 'learning_gap' | 'attendance_concern' | 'assignment_delay' | 'engagement_drop' | 'mentoring_opportunity';
  title: string;
  targetName: string; // e.g. "Liam Chen" or "CS-401"
  targetType: 'Student' | 'Course' | 'Cohort';
  reason: string;
  supportingMetrics: { label: string; value: string }[];
  suggestedIntervention: string;
  status: 'active' | 'resolved';
}

export interface NotificationItem {
  id: string;
  title: string;
  time: string;
  type: 'alert' | 'info' | 'success';
  read: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}
