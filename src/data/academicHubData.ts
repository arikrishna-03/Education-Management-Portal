export interface AppCourse {
  code: string;
  title: string;
  department: string;
  instructor: string;
  credits: number;
  studentsEnrolled: number;
  status: 'Active' | 'Under Review' | 'Upcoming';
  nextSession: string;
  enrollmentStatus: 'Open' | 'Closed' | 'Waitlisted';
  schedule: string;
  room: string;
  syllabus: { week: number; topic: string; details: string }[];
  announcements: { id: string; title: string; author: string; date: string }[];
}

export interface AppAssignment {
  id: string;
  title: string;
  courseCode: string;
  courseName: string;
  dueDate: string;
  dueTime: string;
  submissionsCount: number;
  totalStudents: number;
  completionRate: number;
  averageGrade?: number;
  gradingStatus: 'Graded' | 'In Review' | 'Pending';
  priority: 'High' | 'Medium' | 'Low';
  brief: string;
  instructions: string;
  rubric: { criteria: string; weight: number; points: number }[];
}

export interface AppStudent {
  id: string;
  studentId: string;
  name: string;
  avatar: string;
  program: string;
  department: string;
  year: string;
  gpa: number;
  attendance: number;
  performance: number;
  engagement: number;
  assignmentCompletion: number;
  riskStatus: 'On-Track' | 'Needs Attention' | 'At-Risk';
  courses: string[];
  strongSubjects: string[];
  weakSubjects: string[];
  mentorNotes: { date: string; author: string; note: string }[];
}

export interface AppAIInsight {
  id: string;
  category: 'Performance' | 'At-Risk' | 'Learning Gap' | 'Recommendation';
  title: string;
  targetStudent?: string;
  studentId?: string;
  riskLevel?: 'High' | 'Medium' | 'Low';
  reason: string;
  evidence: string;
  recommendedAction: string;
  expectedOutcome: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Resolved' | 'Dismissed';
}

export const MOCK_APP_COURSES: AppCourse[] = [
  {
    code: "EDU 204",
    title: "Learning Design & Pedagogical Frameworks",
    department: "Education Systems",
    instructor: "Dr. Sarah Jenkins",
    credits: 4,
    studentsEnrolled: 142,
    status: "Active",
    nextSession: "Today · 2:00 PM",
    enrollmentStatus: "Open",
    schedule: "Mon & Wed 2:00 PM - 3:30 PM",
    room: "Learning Commons Lab 3",
    syllabus: [
      { week: 1, topic: "Cognitive Load Theory & Instructional Architecture", details: "Managing intrinsic and germane cognitive load in online environments." },
      { week: 2, topic: "Formative Feedback Loops", details: "Designing continuous feedback loops using automated rubrics." }
    ],
    announcements: [
      { id: "a1", title: "Reflection 02 Grades Published", author: "Dr. Sarah Jenkins", date: "12 min ago" }
    ]
  },
  {
    code: "ARC 118",
    title: "Spatial Thinking & Environmental Architecture",
    department: "Architecture",
    instructor: "Prof. Leila Haddad",
    credits: 3,
    studentsEnrolled: 118,
    status: "Active",
    nextSession: "Tomorrow · 10:00 AM",
    enrollmentStatus: "Open",
    schedule: "Tue & Thu 10:00 AM - 11:30 AM",
    room: "Studio Hall 102",
    syllabus: [
      { week: 1, topic: "Spatial Geometry & Urban Flow", details: "Vector analysis of high-density pedestrian corridors." }
    ],
    announcements: [
      { id: "a2", title: "Studio Critique Venue Updated", author: "Prof. Leila Haddad", date: "1 hr ago" }
    ]
  },
  {
    code: "COM 210",
    title: "Academic Writing & Research Synthesis",
    department: "Humanities",
    instructor: "Dr. Marcus Brody",
    credits: 3,
    studentsEnrolled: 165,
    status: "Active",
    nextSession: "Wed · 1:00 PM",
    enrollmentStatus: "Open",
    schedule: "Wed & Fri 1:00 PM - 2:30 PM",
    room: "Auditorium B",
    syllabus: [
      { week: 1, topic: "Literature Review Methodology", details: "Synthesizing empirical sources into thematic matrices." }
    ],
    announcements: []
  },
  {
    code: "CS 312",
    title: "Applied AI & Machine Learning Systems",
    department: "Computer Science",
    instructor: "Prof. David Vance",
    credits: 4,
    studentsEnrolled: 210,
    status: "Active",
    nextSession: "Thu · 11:00 AM",
    enrollmentStatus: "Waitlisted",
    schedule: "Tue & Thu 11:00 AM - 12:30 PM",
    room: "Turing Lab 401",
    syllabus: [
      { week: 1, topic: "Neural Networks & Tensor Projections", details: "PyTorch gradient backpropagation pipeline construction." }
    ],
    announcements: []
  },
  {
    code: "MTH 201",
    title: "Research Methods & Statistical Inference",
    department: "Mathematics",
    instructor: "Dr. Amina Vance",
    credits: 4,
    studentsEnrolled: 185,
    status: "Under Review",
    nextSession: "Fri · 9:00 AM",
    enrollmentStatus: "Closed",
    schedule: "Mon & Fri 9:00 AM - 10:30 AM",
    room: "Euler Science Hall 204",
    syllabus: [
      { week: 1, topic: "Hypothesis Testing & ANOVA Variance", details: "Parametric vs non-parametric inferential models." }
    ],
    announcements: []
  }
];

export const MOCK_APP_ASSIGNMENTS: AppAssignment[] = [
  {
    id: "asgn-101",
    title: "Research Methods Reflection 02",
    courseCode: "EDU 204",
    courseName: "Learning Design",
    dueDate: "21 Aug 2026",
    dueTime: "23:59",
    submissionsCount: 128,
    totalStudents: 142,
    completionRate: 90,
    averageGrade: 92,
    gradingStatus: "Graded",
    priority: "High",
    brief: "Reflect on how Cognitive Load Theory applies to modern learning management interfaces.",
    instructions: "Submit a 1,500-word APA formatted paper with at least 4 peer-reviewed citations.",
    rubric: [
      { criteria: "Theoretical Clarity", weight: 40, points: 40 },
      { criteria: "Empirical Citations", weight: 30, points: 30 },
      { criteria: "Structure & Style", weight: 30, points: 30 }
    ]
  },
  {
    id: "asgn-102",
    title: "Studio Critique Preparation",
    courseCode: "ARC 118",
    courseName: "Spatial Thinking",
    dueDate: "23 Aug 2026",
    dueTime: "17:00",
    submissionsCount: 84,
    totalStudents: 118,
    completionRate: 71,
    averageGrade: 86,
    gradingStatus: "In Review",
    priority: "High",
    brief: "Prepare vector layout boards for spatial flow critique session.",
    instructions: "Upload high-resolution PDF blueprints demonstrating 3D spatial zoning.",
    rubric: [
      { criteria: "Design Rigor", weight: 50, points: 50 },
      { criteria: "Spatial Zoning", weight: 50, points: 50 }
    ]
  },
  {
    id: "asgn-103",
    title: "Group Presentation Deck",
    courseCode: "COM 210",
    courseName: "Academic Writing",
    dueDate: "25 Aug 2026",
    dueTime: "12:00",
    submissionsCount: 42,
    totalStudents: 165,
    completionRate: 25,
    gradingStatus: "Pending",
    priority: "Medium",
    brief: "Deliver a 15-minute group slide presentation synthesizing literature reviews.",
    instructions: "Ensure all slide decks include speaker notes and data references.",
    rubric: [
      { criteria: "Presentation Delivery", weight: 50, points: 50 },
      { criteria: "Synthesis Rigor", weight: 50, points: 50 }
    ]
  }
];

export const MOCK_APP_STUDENTS: AppStudent[] = [
  {
    id: "stu-app-1",
    studentId: "STU-2041",
    name: "Aarav Sharma",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    program: "B.Sc. Computer Science",
    department: "Computer Science",
    year: "Junior (Year 3)",
    gpa: 3.92,
    attendance: 96,
    performance: 95,
    engagement: 92,
    assignmentCompletion: 98,
    riskStatus: "On-Track",
    courses: ["CS 312", "EDU 204", "COM 210"],
    strongSubjects: ["Applied AI", "Neural Networks", "Learning Design"],
    weakSubjects: ["Academic Writing Style"],
    mentorNotes: [
      { date: "15 Aug 2026", author: "Amina Rahman", note: "Exceptional performance in PyTorch tensor labs. Recommended for research assistantship." }
    ]
  },
  {
    id: "stu-app-2",
    studentId: "STU-2084",
    name: "Meera Patel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    program: "B.A. Learning Design",
    department: "Education Systems",
    year: "Sophomore (Year 2)",
    gpa: 3.12,
    attendance: 78,
    performance: 74,
    engagement: 68,
    assignmentCompletion: 76,
    riskStatus: "Needs Attention",
    courses: ["EDU 204", "MTH 201"],
    strongSubjects: ["Pedagogical Theory"],
    weakSubjects: ["Research Methods & Statistics"],
    mentorNotes: [
      { date: "12 Aug 2026", author: "Dr. Sarah Jenkins", note: "Missed 2 statistical inference lectures. Assigned peer tutor." }
    ]
  },
  {
    id: "stu-app-3",
    studentId: "STU-2105",
    name: "Rohan Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    program: "B.Arch. Environmental Architecture",
    department: "Architecture",
    year: "Senior (Year 4)",
    gpa: 3.85,
    attendance: 94,
    performance: 92,
    engagement: 90,
    assignmentCompletion: 95,
    riskStatus: "On-Track",
    courses: ["ARC 118", "COM 210"],
    strongSubjects: ["Spatial Thinking", "Blueprint Geometry"],
    weakSubjects: [],
    mentorNotes: [
      { date: "10 Aug 2026", author: "Prof. Leila Haddad", note: "Studio blueprint boards nominated for annual design exhibition." }
    ]
  },
  {
    id: "stu-app-4",
    studentId: "STU-2142",
    name: "Ananya Singh",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    program: "B.Sc. Mathematics & Statistics",
    department: "Mathematics",
    year: "Freshman (Year 1)",
    gpa: 2.80,
    attendance: 68,
    performance: 64,
    engagement: 60,
    assignmentCompletion: 65,
    riskStatus: "At-Risk",
    courses: ["MTH 201", "EDU 204"],
    strongSubjects: ["Pure Mathematics"],
    weakSubjects: ["Statistical ANOVA", "Research Methods Reflection"],
    mentorNotes: [
      { date: "14 Aug 2026", author: "Amina Rahman", note: "High risk flag triggered. Attendance dropped below 70%. Mandatory academic check-in scheduled." }
    ]
  },
  {
    id: "stu-app-5",
    studentId: "STU-2198",
    name: "Kabir Shah",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    program: "B.A. Communication & Media",
    department: "Humanities",
    year: "Junior (Year 3)",
    gpa: 3.65,
    attendance: 92,
    performance: 88,
    engagement: 86,
    assignmentCompletion: 90,
    riskStatus: "On-Track",
    courses: ["COM 210", "ARC 118"],
    strongSubjects: ["Academic Synthesis", "Public Speaking"],
    weakSubjects: ["Technical Vector Formatting"],
    mentorNotes: []
  }
];

export const MOCK_APP_AI_INSIGHTS: AppAIInsight[] = [
  {
    id: "ins-101",
    category: "At-Risk",
    title: "Declining Engagement in First-Year Research Methods",
    targetStudent: "Ananya Singh",
    studentId: "STU-2142",
    riskLevel: "High",
    reason: "Attendance in MTH 201 dropped 22% over the last 3 weeks with 2 late assignments.",
    evidence: "Log records show 68% attendance rate in MTH 201 and missing reflection brief.",
    recommendedAction: "Schedule a mandatory 15-minute mentoring consultation and assign a peer learning studio.",
    expectedOutcome: "Restore attendance above 80% threshold before midterm assessment window.",
    priority: "High",
    status: "Active"
  },
  {
    id: "ins-102",
    category: "Learning Gap",
    title: "ANOVA Statistical Inference Cohort Learning Gap",
    targetStudent: "Meera Patel & 14 students",
    studentId: "STU-2084",
    riskLevel: "Medium",
    reason: "35% of first-year education design cohort scored below 70% on statistical inferential homework.",
    evidence: "Item analysis on MTH 201 assignment 2 shows low discrimination index on hypothesis testing.",
    recommendedAction: "Open a focused study studio for first-year research methods.",
    expectedOutcome: "Bridge conceptual statistics gap prior to end-of-term research submissions.",
    priority: "High",
    status: "Active"
  },
  {
    id: "ins-103",
    category: "Performance",
    title: "High Achievement Milestone Trigger",
    targetStudent: "Aarav Sharma",
    studentId: "STU-2041",
    riskLevel: "Low",
    reason: "Completed 4 advanced PyTorch neural network milestones with 98% average score.",
    evidence: "Consistently top-ranked submission benchmarks in CS 312.",
    recommendedAction: "Recommend candidate for Honors Undergraduate Research Assistantship.",
    expectedOutcome: "Advance student to faculty research laboratory team.",
    priority: "Medium",
    status: "Active"
  }
];
