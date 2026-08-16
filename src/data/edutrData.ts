export interface User {
  id: string;
  name: string;
  email: string;
  role: 'public' | 'student' | 'teacher' | 'admin';
  avatar: string;
  department?: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  category: string;
  instructor: string;
  instructorTitle: string;
  instructorAvatar: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: string; // 'Free' or '$99'
  isPopular?: boolean;
  isTopRated?: boolean;
  image: string;
  description: string;
  syllabus: { week: number; topic: string; details: string }[];
  schedule: string;
  learningOutcomes: string[];
  requirements: string[];
  reviewsList: { id: string; user: string; avatar: string; rating: number; date: string; comment: string }[];
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  courseCode: string;
  courseName: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

export interface Assignment {
  id: string;
  courseCode: string;
  courseName: string;
  title: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Graded' | 'Overdue';
  grade?: number;
  feedback?: string;
  submissionPercentage: number;
  submissionDate?: string;
  description: string;
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Exam {
  id: string;
  courseCode: string;
  courseName: string;
  title: string;
  durationMinutes: number;
  totalQuestions: number;
  date: string;
  status: 'Available' | 'Upcoming' | 'Completed';
  score?: number;
  totalScore?: number;
  questions: ExamQuestion[];
}

export interface AtRiskStudent {
  id: string;
  name: string;
  studentId: string;
  department: string;
  riskLevel: 'High' | 'Medium' | 'Low';
  reason: string;
  attendance: number;
  avgGrade: number;
  assignmentCompletion: number;
  recommendedAction: string;
}

export interface WeakSubject {
  id: string;
  subject: string;
  score: number;
  status: 'Needs Improvement' | 'Moderate' | 'Excellent';
  recommendation: string;
}

export const MOCK_USERS: Record<'student' | 'teacher' | 'admin', User> = {
  student: {
    id: "u-stu-1",
    name: "Sophia Martinez",
    email: "sophia.m@edutr.edu",
    role: "student",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    department: "Computer Science"
  },
  teacher: {
    id: "u-tch-1",
    name: "Dr. Sarah Jenkins",
    email: "sarah.j@edutr.edu",
    role: "teacher",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    department: "Artificial Intelligence"
  },
  admin: {
    id: "u-adm-1",
    name: "Amina Rahman",
    email: "amina.r@edutr.edu",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    department: "Academic Affairs"
  }
};

export const MOCK_COURSES: Course[] = [
  {
    id: "cs-401",
    code: "CS-401",
    name: "Advanced Machine Learning & Neural Nets",
    category: "Artificial Intelligence",
    instructor: "Dr. Sarah Jenkins",
    instructorTitle: "Professor of Computer Science",
    instructorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    rating: 4.9,
    reviewsCount: 128,
    studentsCount: 1420,
    difficulty: "Advanced",
    duration: "12 Weeks",
    price: "Free",
    isPopular: true,
    isTopRated: true,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
    description: "Master Transformer models, PyTorch deep learning pipelines, self-attention tensors, loss function optimization, and RLHF fine-tuning.",
    syllabus: [
      { week: 1, topic: "Foundations of Optimization & Loss Landscapes", details: "Convex optimization, SGD variants, AdamW hyperparameter tuning." },
      { week: 2, topic: "Transformer Self-Attention Tensors", details: "Multi-head attention, QKV matrix projections, positional embeddings." },
      { week: 3, topic: "Diffusion Systems & Latent Space Guidance", details: "Score matching, noise schedules, cross-attention conditioning." },
      { week: 4, topic: "Reinforcement Learning from Human Feedback", details: "Reward modeling, PPO alignment, safety evaluation benchmarks." }
    ],
    schedule: "Mon & Wed 10:00 AM - 11:30 AM (Lab Fri 2:00 PM)",
    learningOutcomes: [
      "Implement Multi-Head Attention from scratch in PyTorch",
      "Optimize gradient convergence on large GPU cluster runs",
      "Deploy scalable inference pipelines using ONNX Runtime"
    ],
    requirements: [
      "CS-301 Algorithm Analysis or equivalent",
      "Proficiency in Python and Linear Algebra"
    ],
    reviewsList: [
      { id: "r1", user: "Liam Chen", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100", rating: 5, date: "3 days ago", comment: "Exceptional course! The Transformer tensor lab was eye-opening." }
    ]
  },
  {
    id: "se-302",
    code: "SE-302",
    name: "Cloud Architecture & Kubernetes Orchestration",
    category: "Software Engineering",
    instructor: "Prof. David Vance",
    instructorTitle: "Chair of Software Engineering",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 4.8,
    reviewsCount: 94,
    studentsCount: 1180,
    difficulty: "Intermediate",
    duration: "10 Weeks",
    price: "$99",
    isPopular: true,
    isTopRated: false,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    description: "Distributed infrastructure, containerized microservices, Istio service mesh, Helm deployment charts, and AWS EKS cluster management.",
    syllabus: [
      { week: 1, topic: "Docker Container Internals & Storage Drivers", details: "Multi-stage builds, cgroups, rootless isolation." },
      { week: 2, topic: "Kubernetes Control Plane Architecture", details: "etcd consistency, API server authentication, kubelet lifecycle." }
    ],
    schedule: "Tue & Thu 01:00 PM - 02:30 PM",
    learningOutcomes: [
      "Build production-ready Helm charts and ingress specs",
      "Configure automated cert-manager TLS certificates"
    ],
    requirements: ["Basic Linux CLI and Networking fundamentals"],
    reviewsList: []
  },
  {
    id: "ai-505",
    code: "AI-505",
    name: "Ethics, Governance & Safety in AI Systems",
    category: "Artificial Intelligence",
    instructor: "Dr. Amina Vance",
    instructorTitle: "Director of Tech Ethics Institute",
    instructorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    rating: 4.95,
    reviewsCount: 86,
    studentsCount: 890,
    difficulty: "Beginner",
    duration: "8 Weeks",
    price: "Free",
    isPopular: false,
    isTopRated: true,
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=600",
    description: "Policy frameworks, algorithmic bias auditing, socio-technical risk assessments, EU AI Act compliance, and automated transparency.",
    syllabus: [
      { week: 1, topic: "Algorithmic Fairness Metrics", details: "Demographic parity, equalized odds, counterfactual fairness." }
    ],
    schedule: "Wed 03:00 PM - 06:00 PM",
    learningOutcomes: ["Audit AI decision systems against international compliance acts"],
    requirements: ["None"],
    reviewsList: []
  },
  {
    id: "cy-410",
    code: "CY-410",
    name: "Cybersecurity Protocols & Applied Cryptography",
    category: "Cybersecurity",
    instructor: "Prof. Elena Rostova",
    instructorTitle: "Associate Professor of Cryptography",
    instructorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 4.7,
    reviewsCount: 62,
    studentsCount: 750,
    difficulty: "Advanced",
    duration: "10 Weeks",
    price: "$99",
    isPopular: false,
    isTopRated: false,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    description: "Public key infrastructure, zero-knowledge proofs (zk-SNARKs), post-quantum lattice cryptography, and network exploit mitigation.",
    syllabus: [
      { week: 1, topic: "Elliptic Curve Cryptography", details: "Group laws, ECDSA signatures, scalar multiplication attack vectors." }
    ],
    schedule: "Mon & Fri 09:00 AM - 10:30 AM",
    learningOutcomes: ["Implement zero-knowledge verifier circuits"],
    requirements: ["CY-301 Network Security"],
    reviewsList: []
  }
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: "att-1", studentId: "STU-1082", studentName: "Liam Chen", courseCode: "CY-410", courseName: "Cybersecurity Protocols", date: "2026-08-14", status: "Absent" },
  { id: "att-2", studentId: "STU-1082", studentName: "Liam Chen", courseCode: "CY-410", courseName: "Cybersecurity Protocols", date: "2026-08-12", status: "Absent" },
  { id: "att-3", studentId: "STU-1082", studentName: "Liam Chen", courseCode: "CS-401", courseName: "Advanced Machine Learning", date: "2026-08-15", status: "Present" },
  { id: "att-4", studentId: "STU-1094", studentName: "Sophia Martinez", courseCode: "CS-401", courseName: "Advanced Machine Learning", date: "2026-08-15", status: "Present" },
  { id: "att-5", studentId: "STU-1094", studentName: "Sophia Martinez", courseCode: "AI-505", courseName: "Ethics in AI Systems", date: "2026-08-13", status: "Present" }
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: "asgn-1",
    courseCode: "CS-401",
    courseName: "Advanced Machine Learning",
    title: "PyTorch Multi-Head Self-Attention Implementation",
    dueDate: "2026-08-22",
    status: "Graded",
    grade: 98,
    feedback: "Exceptional einsum matrix vectorization and loss convergence!",
    submissionPercentage: 92,
    submissionDate: "2026-08-20",
    description: "Construct scaled dot-product attention without using built-in PyTorch modules."
  },
  {
    id: "asgn-2",
    courseCode: "SE-302",
    courseName: "Cloud Architecture",
    title: "Kubernetes Ingress & TLS Certificate Automation",
    dueDate: "2026-08-25",
    status: "Pending",
    submissionPercentage: 68,
    description: "Configure cert-manager ACME staging provider on AWS EKS cluster."
  },
  {
    id: "asgn-3",
    courseCode: "AI-505",
    courseName: "Ethics in AI Systems",
    title: "EU AI Act Compliance & Socio-Technical Audit",
    dueDate: "2026-08-18",
    status: "Graded",
    grade: 95,
    feedback: "Thorough analysis of Annex III high-risk classification criteria.",
    submissionPercentage: 100,
    submissionDate: "2026-08-17",
    description: "Conduct a socio-technical audit on credit scoring neural networks."
  }
];

export const MOCK_EXAMS: Exam[] = [
  {
    id: "ex-101",
    courseCode: "CS-401",
    courseName: "Advanced Machine Learning",
    title: "Midterm Examination: Neural Architectures & Attention",
    durationMinutes: 45,
    totalQuestions: 4,
    date: "2026-08-28",
    status: "Available",
    questions: [
      {
        id: "q1",
        question: "In Multi-Head Self-Attention, why is the scaling factor 1 / sqrt(d_k) applied to the query-key dot products before the Softmax function?",
        options: [
          "To force the weight matrix to be symmetric",
          "To prevent extremely small gradients when d_k is large, which causes Softmax to saturate",
          "To reduce total GPU memory footprint during backpropagation",
          "To convert continuous embeddings into discrete tokens"
        ],
        correctIndex: 1,
        explanation: "For large values of d_k, the dot products grow large in magnitude, pushing the Softmax function into regions with extremely small gradients. Scaling by 1 / sqrt(d_k) stabilizes gradient flow."
      },
      {
        id: "q2",
        question: "Which optimizer variant incorporates decoupled weight decay regularization instead of L2 penalty?",
        options: [
          "Standard SGD",
          "RMSprop",
          "AdamW",
          "AdaGrad"
        ],
        correctIndex: 2,
        explanation: "AdamW decouples weight decay from the adaptive gradient updates, preventing weight decay from being scaled by historical gradient magnitudes."
      },
      {
        id: "q3",
        question: "What is the primary role of the Value matrix (V) in Self-Attention?",
        options: [
          "It represents the content vectors that get aggregated based on attention weights",
          "It indexes the position of tokens in the sequence",
          "It computes the similarity score between pairs",
          "It acts as a classification head"
        ],
        correctIndex: 0,
        explanation: "The Query and Key matrices determine the attention weight scores, which are then used as linear weights to sum the Value (V) vectors."
      },
      {
        id: "q4",
        question: "What is PPO (Proximal Policy Optimization) primarily used for in modern LLMs?",
        options: [
          "Tokenizing multilingual text",
          "Reinforcement Learning from Human Feedback (RLHF) alignment without destructive policy updates",
          "Pre-training raw web data",
          "Compressing model weights for mobile quantization"
        ],
        correctIndex: 1,
        explanation: "PPO uses a clipped surrogate objective to constrain policy updates, ensuring stable alignment during RLHF."
      }
    ]
  }
];

export const MOCK_AT_RISK_STUDENTS: AtRiskStudent[] = [
  {
    id: "r-1",
    name: "Liam Chen",
    studentId: "STU-1082",
    department: "Computer Science",
    riskLevel: "High",
    reason: "Attendance in CY-410 dropped below 68% with 2 missed lab assignments.",
    attendance: 68.5,
    avgGrade: 71.2,
    assignmentCompletion: 72.0,
    recommendedAction: "Schedule mandatory academic advisor touchpoint and assign a peer tutor."
  },
  {
    id: "r-2",
    name: "David Kim",
    studentId: "STU-1168",
    department: "Data Science",
    riskLevel: "Medium",
    reason: "Missed 3 consecutive lectures in DS-305 and submitted late assignment.",
    attendance: 74.2,
    avgGrade: 76.5,
    assignmentCompletion: 78.0,
    recommendedAction: "Issue attendance warning and send remedial study plan."
  }
];

export const MOCK_WEAK_SUBJECTS: WeakSubject[] = [
  { id: "w1", subject: "Cybersecurity Protocols & Cryptography", score: 68, status: "Needs Improvement", recommendation: "Review Elliptic Curve scalar multiplication and ZK-SNARK circuit mechanics." },
  { id: "w2", subject: "Cloud Kubernetes Ingress Schemas", score: 74, status: "Moderate", recommendation: "Practice Helm chart declarative YAML validation labs." },
  { id: "w3", subject: "Advanced Machine Learning Tensors", score: 89, status: "Excellent", recommendation: "Maintain current momentum. Candidate for research honors fellowship." }
];
