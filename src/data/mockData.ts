import { UserProfile, KPIMetric, Course, CalendarEvent, Assignment, Student, AIInsight, NotificationItem } from '../types';

export const CURRENT_USER: UserProfile = {
  name: "Amina Rahman",
  role: "Academic Administrator",
  email: "a.rahman@academichub.edu",
  department: "Division of Academic Affairs",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
};

export const KPI_METRICS: KPIMetric[] = [
  {
    id: "active_students",
    label: "Active Students",
    value: "2,846",
    change: "+4.2%",
    isPositive: true,
    subtext: "vs previous term"
  },
  {
    id: "live_courses",
    label: "Live Courses",
    value: "128",
    change: "+6.5%",
    isPositive: true,
    subtext: "across 8 departments"
  },
  {
    id: "on_track_rate",
    label: "On-Track Rate",
    value: "87.4%",
    change: "+2.1%",
    isPositive: true,
    subtext: "target: 85.0%"
  },
  {
    id: "ai_alerts",
    label: "AI Alerts",
    value: "18",
    change: "-14.3%",
    isPositive: true, // fewer alerts is good
    subtext: "3 high priority"
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: "c1",
    code: "CS-401",
    title: "Advanced Machine Learning & Neural Nets",
    department: "Computer Science",
    semester: "Fall 2026",
    instructor: "Dr. Sarah Jenkins",
    instructorTitle: "Professor of Artificial Intelligence",
    instructorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    credits: 4,
    enrolledCount: 48,
    maxCapacity: 50,
    status: "Active",
    prerequisites: ["CS-301 Algorithm Analysis", "MATH-202 Linear Algebra"],
    description: "Deep dive into transformer architectures, gradient flow optimizations, loss function geometry, and reinforcement learning paradigms.",
    avgGrade: 3.65,
    attendanceRate: 94.2,
    completionRate: 91.5,
    syllabus: [
      { week: 1, topic: "Foundations of Optimization & Loss Landscapes", details: "Convex optimization, SGD variants, AdamW tuning." },
      { week: 2, topic: "Transformer Self-Attention Tensors", details: "Multi-head attention, positional embeddings, QKV matrix operations." },
      { week: 3, topic: "Generative Adversarial & Diffusion Systems", details: "Latent space sampling, score matching, cross-attention guidance." },
      { week: 4, topic: "Reinforcement Learning from Human Feedback (RLHF)", details: "PPO training, reward modeling, alignment evaluation." }
    ],
    sessions: [
      { id: "s1", day: "Mon & Wed", time: "10:00 AM - 11:30 AM", room: "Turing Science Center 302", topic: "Multi-head Attention Tensors" },
      { id: "s2", day: "Friday", time: "02:00 PM - 04:00 PM", room: "AI Compute Lab B", topic: "Lab: Fine-Tuning Llama 3" }
    ],
    announcements: [
      { id: "an1", title: "Midterm Project Specs Released", date: "2026-08-14", author: "Dr. Sarah Jenkins", content: "The PyTorch Transformer project specification is now live on the portal." }
    ]
  },
  {
    id: "c2",
    code: "SE-302",
    title: "Cloud Architecture & Kubernetes Ingress",
    department: "Software Engineering",
    semester: "Fall 2026",
    instructor: "Prof. David Vance",
    instructorTitle: "Chair of Software Systems",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    credits: 3,
    enrolledCount: 52,
    maxCapacity: 55,
    status: "Active",
    prerequisites: ["SE-201 Operating Systems", "NET-101 Computer Networks"],
    description: "Distributed cloud infrastructure, container orchestration, service meshes, helm deployments, and zero-trust security.",
    avgGrade: 3.42,
    attendanceRate: 88.6,
    completionRate: 86.0,
    syllabus: [
      { week: 1, topic: "Containerization Mechanics & Docker Internal Storage", details: "Layer caching, multi-stage builds, rootless containers." },
      { week: 2, topic: "Kubernetes Control Plane Architecture", details: "etcd consistency, API server authentication, kubelet lifecycle." },
      { week: 3, topic: "Ingress Controllers & Istio Service Mesh", details: "Envoy proxies, mutual TLS, traffic splitting algorithms." }
    ],
    sessions: [
      { id: "s3", day: "Tue & Thu", time: "01:00 PM - 02:30 PM", room: "Engineering Annex 104", topic: "Istio Service Mesh Traffic Control" }
    ],
    announcements: [
      { id: "an2", title: "AWS Cloud Sandbox Credits Available", date: "2026-08-12", author: "Prof. David Vance", content: "Check your email for the $100 AWS credit voucher code for cluster labs." }
    ]
  },
  {
    id: "c3",
    code: "AI-505",
    title: "Ethics, Governance & Safety in AI Systems",
    department: "Artificial Intelligence",
    semester: "Fall 2026",
    instructor: "Dr. Amina Vance",
    instructorTitle: "Director of Tech Ethics Institute",
    instructorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    credits: 3,
    enrolledCount: 38,
    maxCapacity: 40,
    status: "Active",
    prerequisites: ["None"],
    description: "Policy frameworks, algorithmic bias mitigation, automated decision transparency, and international AI governance directives.",
    avgGrade: 3.88,
    attendanceRate: 96.5,
    completionRate: 95.0,
    syllabus: [
      { week: 1, topic: "Algorithmic Fairness Metrics", details: "Demographic parity, equalized odds, counterfactual fairness." },
      { week: 2, topic: "EU AI Act Compliance & Risk Classification", details: "High-risk categorization, transparency logs, audit readiness." }
    ],
    sessions: [
      { id: "s4", day: "Wednesday", time: "03:00 PM - 06:00 PM", room: "Humanities Auditorium 12", topic: "Socio-Technical Audit Frameworks" }
    ],
    announcements: []
  },
  {
    id: "c4",
    code: "CY-410",
    title: "Cybersecurity Protocols & Applied Cryptography",
    department: "Cybersecurity",
    semester: "Fall 2026",
    instructor: "Prof. Elena Rostova",
    instructorTitle: "Associate Professor of Cryptography",
    instructorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    credits: 4,
    enrolledCount: 45,
    maxCapacity: 45,
    status: "Active",
    prerequisites: ["CY-301 Network Security"],
    description: "Public key infrastructure, lattice-based post-quantum cryptography, zero-knowledge proofs, and exploit mitigation techniques.",
    avgGrade: 3.25,
    attendanceRate: 82.4,
    completionRate: 79.0,
    syllabus: [
      { week: 1, topic: "Elliptic Curve Cryptography (ECC) Tensors", details: "Group laws, ECDSA signatures, scalar multiplication attack vectors." }
    ],
    sessions: [
      { id: "s5", day: "Mon & Fri", time: "09:00 AM - 10:30 AM", room: "Cyber Security Lab 201", topic: "Zero-Knowledge SNARK Proofs" }
    ],
    announcements: []
  },
  {
    id: "c5",
    code: "DS-305",
    title: "Statistical Data Mining & Predictive Modeling",
    department: "Data Science",
    semester: "Fall 2026",
    instructor: "Dr. Marcus Thorne",
    instructorTitle: "Professor of Data Science",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    credits: 3,
    enrolledCount: 60,
    maxCapacity: 60,
    status: "Active",
    prerequisites: ["DS-201 Probability & Stats"],
    description: "Unsupervised clustering, anomaly detection algorithms, time-series forecasting, and feature selection methodologies.",
    avgGrade: 3.55,
    attendanceRate: 91.0,
    completionRate: 89.5,
    syllabus: [
      { week: 1, topic: "Dimensionality Reduction Algorithms", details: "PCA, t-SNE, UMAP projection comparison." }
    ],
    sessions: [
      { id: "s6", day: "Tue & Thu", time: "11:00 AM - 12:30 PM", room: "Data Analytics Hall A", topic: "Spatial Clustering Techniques" }
    ],
    announcements: []
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    id: "STU-1082",
    name: "Liam Chen",
    email: "liam.chen@academichub.edu",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    program: "Computer Science",
    year: "Senior",
    attendanceRate: 68.5,
    gpa: 2.72,
    completionRate: 72.0,
    engagementLevel: "At-Risk",
    status: "At-Risk",
    enrolledCourses: [
      { code: "CS-401", title: "Advanced Machine Learning", grade: "B-", score: 81 },
      { code: "CY-410", title: "Cybersecurity Protocols", grade: "C-", score: 70 },
      { code: "SE-302", title: "Cloud Architecture", grade: "D+", score: 68 }
    ],
    mentoringHistory: [
      { id: "m1", date: "2026-08-02", mentor: "Dr. Sarah Jenkins", notes: "Discussed attendance drop during 9 AM cryptography labs.", actionItem: "Set up morning peer check-in study group." }
    ],
    aiInsights: [
      "Attendance dropped 14% over the last 3 weeks in CY-410.",
      "High probability of course withdrawal without immediate faculty touchpoint."
    ]
  },
  {
    id: "STU-1094",
    name: "Sophia Martinez",
    email: "sophia.m@academichub.edu",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    program: "Artificial Intelligence",
    year: "Senior",
    attendanceRate: 98.4,
    gpa: 3.92,
    completionRate: 100.0,
    engagementLevel: "High",
    status: "On-Track",
    enrolledCourses: [
      { code: "CS-401", title: "Advanced Machine Learning", grade: "A", score: 96 },
      { code: "AI-505", title: "Ethics in AI Systems", grade: "A", score: 98 },
      { code: "DS-305", title: "Statistical Data Mining", grade: "A-", score: 92 }
    ],
    mentoringHistory: [
      { id: "m2", date: "2026-07-28", mentor: "Dr. Amina Vance", notes: "Recommended for Graduate Honors Thesis Fellowship.", actionItem: "Submit proposal to Dean's office." }
    ],
    aiInsights: [
      "Top 2% of cohort performance. Ideal candidate for peer tutoring mentor role."
    ]
  },
  {
    id: "STU-1120",
    name: "Marcus Brody",
    email: "marcus.b@academichub.edu",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    program: "Software Engineering",
    year: "Junior",
    attendanceRate: 84.0,
    gpa: 3.10,
    completionRate: 81.5,
    engagementLevel: "Moderate",
    status: "Needs Attention",
    enrolledCourses: [
      { code: "SE-302", title: "Cloud Architecture", grade: "B", score: 85 },
      { code: "DS-305", title: "Statistical Data Mining", grade: "C+", score: 77 }
    ],
    mentoringHistory: [],
    aiInsights: [
      "Late submission on 2 recent cloud cluster assignments. Needs assignment pacing reminder."
    ]
  },
  {
    id: "STU-1145",
    name: "Aisha Al-Mansoor",
    email: "aisha.m@academichub.edu",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    program: "Cybersecurity",
    year: "Graduate",
    attendanceRate: 95.0,
    gpa: 3.85,
    completionRate: 98.0,
    engagementLevel: "High",
    status: "On-Track",
    enrolledCourses: [
      { code: "CY-410", title: "Cybersecurity Protocols", grade: "A", score: 94 },
      { code: "AI-505", title: "Ethics in AI Systems", grade: "A", score: 95 }
    ],
    mentoringHistory: [],
    aiInsights: [
      "Consistently high exam scores across zero-knowledge cryptography modules."
    ]
  },
  {
    id: "STU-1168",
    name: "David Kim",
    email: "david.kim@academichub.edu",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    program: "Data Science",
    year: "Junior",
    attendanceRate: 74.2,
    gpa: 2.85,
    completionRate: 76.0,
    engagementLevel: "At-Risk",
    status: "Needs Attention",
    enrolledCourses: [
      { code: "DS-305", title: "Statistical Data Mining", grade: "C", score: 74 },
      { code: "CS-401", title: "Advanced Machine Learning", grade: "C-", score: 71 }
    ],
    mentoringHistory: [],
    aiInsights: [
      "Attendance warning generated: missed 3 consecutive lectures in DS-305."
    ]
  }
];

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: "asgn-101",
    courseCode: "CS-401",
    courseTitle: "Advanced Machine Learning",
    title: "Transformer Attention Head Implementation",
    description: "Build a PyTorch implementation of Multi-Head Self-Attention from scratch without using nn.MultiheadAttention.",
    dueDate: "2026-08-22",
    submissionsCount: 42,
    totalStudents: 48,
    completionPercentage: 87.5,
    gradingStatus: "In Review",
    averageGrade: 88.5,
    rubricStatus: "Attached",
    rubric: [
      { id: "r1", title: "Tensor Algebra & Scaled Dot Product", maxPoints: 40, description: "Correct computation of Q, K, V projections and softmax scaling." },
      { id: "r2", title: "Masking & Batch Parallelization", maxPoints: 30, description: "Proper causality masking for decoder heads and batch dimension handling." },
      { id: "r3", title: "Unit Testing & Loss Convergence", maxPoints: 30, description: "Verified loss minimization on synthetic token sequences." }
    ],
    submissions: [
      { id: "sub-1", studentId: "STU-1094", studentName: "Sophia Martinez", studentAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200", submittedAt: "2026-08-20 14:30", status: "Graded", score: 98, feedback: "Outstanding implementation of multi-head split and clean vectorized einsum operations." },
      { id: "sub-2", studentId: "STU-1082", studentName: "Liam Chen", studentAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200", submittedAt: "2026-08-22 23:54", status: "Pending Review", score: undefined, feedback: undefined }
    ]
  },
  {
    id: "asgn-102",
    courseCode: "SE-302",
    courseTitle: "Cloud Architecture",
    title: "Kubernetes Ingress & TLS Certificate Automation",
    description: "Configure cert-manager with Let's Encrypt staging ACME provider and NGINX ingress controller on AWS EKS.",
    dueDate: "2026-08-25",
    submissionsCount: 36,
    totalStudents: 52,
    completionPercentage: 69.2,
    gradingStatus: "Pending",
    averageGrade: 0,
    rubricStatus: "Attached",
    rubric: [
      { id: "r4", title: "Helm Chart & Manifest Integrity", maxPoints: 50, description: "Declarative YAML specs without hardcoded secrets." },
      { id: "r5", title: "TLS Certificate Verification", maxPoints: 50, description: "Successful SSL handshake on test subdomain." }
    ],
    submissions: []
  },
  {
    id: "asgn-103",
    courseCode: "AI-505",
    courseTitle: "Ethics in AI Systems",
    title: "EU AI Act Compliance & Risk Assessment Case Study",
    description: "Perform a comprehensive socio-technical risk audit of a credit scoring neural network according to EU AI Act Annex III.",
    dueDate: "2026-08-18",
    submissionsCount: 38,
    totalStudents: 38,
    completionPercentage: 100.0,
    gradingStatus: "Graded",
    averageGrade: 94.2,
    rubricStatus: "Attached",
    rubric: [
      { id: "r6", title: "Regulatory Mapping", maxPoints: 50, description: "Accurate mapping of risk tiers." },
      { id: "r7", title: "Mitigation Strategy", maxPoints: 50, description: "Actionable governance guidelines." }
    ],
    submissions: []
  }
];

export const INITIAL_EVENTS: CalendarEvent[] = [
  {
    id: "ev-1",
    title: "Teaching Week 4 Starts",
    date: "2026-08-17",
    startTime: "08:00 AM",
    endTime: "05:00 PM",
    category: "teaching_week",
    description: "Focus on Midterm project milestones and lab evaluations."
  },
  {
    id: "ev-2",
    title: "Faculty Board Senate Meeting",
    date: "2026-08-19",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    category: "faculty_meeting",
    room: "Executive Boardroom 401",
    description: "Reviewing Fall term curriculum accreditation and AI lab funding."
  },
  {
    id: "ev-3",
    title: "CS-401 Midterm Assessment Window",
    date: "2026-08-22",
    startTime: "11:59 PM",
    endTime: "11:59 PM",
    category: "assessment",
    courseCode: "CS-401",
    description: "Transformer Attention Head Implementation Due Date."
  },
  {
    id: "ev-4",
    title: "Campus AI & Tech Innovation Symposium",
    date: "2026-08-26",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    category: "campus_event",
    room: "Grand Academic Center Hall",
    description: "Guest keynote speakers from OpenAI, Google DeepMind, and Stanford."
  },
  {
    id: "ev-5",
    title: "CY-410 Cryptography Lab Exam",
    date: "2026-08-28",
    startTime: "09:00 AM",
    endTime: "11:30 AM",
    category: "exam",
    room: "Cyber Lab 201",
    courseCode: "CY-410",
    description: "Zero-Knowledge Proof implementation lab test."
  }
];

export const INITIAL_INSIGHTS: AIInsight[] = [
  {
    id: "ins-1",
    priority: "High",
    type: "at_risk",
    title: "Attendance Drop & At-Risk Alert for Liam Chen",
    targetName: "Liam Chen (STU-1082)",
    targetType: "Student",
    reason: "Attendance in CY-410 dropped below 70% with 2 missing lab assignments.",
    supportingMetrics: [
      { label: "Attendance Rate", value: "68.5%" },
      { label: "Current GPA", value: "2.72" },
      { label: "Missing Submissions", value: "2" }
    ],
    suggestedIntervention: "Schedule an early academic advisor touchpoint and assign a peer tutor for Cryptography.",
    status: "active"
  },
  {
    id: "ins-2",
    priority: "Medium",
    type: "learning_gap",
    title: "Prerequisite Gap in Cloud Ingress Manifests",
    targetName: "SE-302 (Cloud Architecture)",
    targetType: "Course",
    reason: "35% of students scored below threshold on YAML declarative schema validations.",
    supportingMetrics: [
      { label: "Cohort Error Rate", value: "35.2%" },
      { label: "Affected Students", value: "18" }
    ],
    suggestedIntervention: "Distribute remedial self-paced lab on Helm chart validations before Friday's project.",
    status: "active"
  },
  {
    id: "ins-3",
    priority: "Low",
    type: "mentoring_opportunity",
    title: "Fellowship Opportunity for Sophia Martinez",
    targetName: "Sophia Martinez (STU-1094)",
    targetType: "Student",
    reason: "Sustained 3.92 GPA with 100% assignment completion across all AI modules.",
    supportingMetrics: [
      { label: "GPA", value: "3.92" },
      { label: "Completion Rate", value: "100%" }
    ],
    suggestedIntervention: "Invite to apply for the Graduate Honors AI Research Fellowship.",
    status: "active"
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: "n1", title: "New AI At-Risk Alert: Liam Chen (CY-410)", time: "10 mins ago", type: "alert", read: false },
  { id: "n2", title: "Faculty Senate Meeting Reminder for Wednesday 2 PM", time: "1 hour ago", type: "info", read: false },
  { id: "n3", title: "EU AI Act Compliance Report generated successfully", time: "3 hours ago", type: "success", read: true }
];
