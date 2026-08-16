import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, Award, Brain, RefreshCw } from 'lucide-react';
import { MOCK_EXAMS } from '../data/edutrData';
import confetti from 'canvas-confetti';

interface TakeExamPageProps {
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const TakeExamPage: React.FC<TakeExamPageProps> = ({ onTriggerToast }) => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();

  const exam = MOCK_EXAMS.find(e => e.id === examId) || MOCK_EXAMS[0];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(exam.durationMinutes * 60);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const handleSelectOption = (optIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optIndex
    });
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 } });
    } catch (e) {}
    onTriggerToast('success', 'Exam Submitted!', 'Your answers have been evaluated by the AI grading engine.');
  };

  // Calculate Score
  const calculateResults = () => {
    let correctCount = 0;
    exam.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });
    const percentage = Math.round((correctCount / exam.questions.length) * 100);
    let grade = 'A';
    if (percentage < 90) grade = 'B';
    if (percentage < 75) grade = 'C';
    if (percentage < 60) grade = 'F';

    return { correctCount, percentage, grade };
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins < 10 ? '0' + mins : mins}:${remainderSecs < 10 ? '0' + remainderSecs : remainderSecs}`;
  };

  const currentQuestion = exam.questions[currentQuestionIndex];
  const results = isSubmitted ? calculateResults() : null;

  return (
    <div className="page-wrapper area-academic-orange">
      <div className="page-container section-padding">
        {/* Top Exam Header */}
        <div className="exam-header-bar flex-between" style={{ marginBottom: '1.5rem' }}>
          <div>
            <span className="course-code-pill">{exam.courseCode}</span>
            <h2 className="exam-main-title">{exam.title}</h2>
          </div>

          {!isSubmitted ? (
            <div className="exam-timer-box flex-align gap-2">
              <Clock size={20} className="text-orange" />
              <span className="timer-val">{formatTime(secondsRemaining)}</span>
            </div>
          ) : (
            <span className="status-pill status-green">Exam Completed</span>
          )}
        </div>

        {!isSubmitted ? (
          /* Live Exam Taking Interface */
          <div className="grid-3-1">
            {/* Question Stage */}
            <div className="card-panel-orange">
              <div className="flex-between text-xs text-muted" style={{ marginBottom: '1rem' }}>
                <span>Question {currentQuestionIndex + 1} of {exam.questions.length}</span>
                <span>{Object.keys(selectedAnswers).length}/{exam.questions.length} Answered</span>
              </div>

              <h3 className="question-text">{currentQuestion.question}</h3>

              <div className="options-list">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`option-item-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(idx)}
                    >
                      <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                      <span className="opt-text">{opt}</span>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex-between" style={{ marginTop: '2rem' }}>
                <button 
                  className="btn-secondary" 
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                >
                  <ArrowLeft size={16} /> Previous
                </button>

                {currentQuestionIndex < exam.questions.length - 1 ? (
                  <button 
                    className="btn-orange-primary" 
                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  >
                    Next Question <ArrowRight size={16} />
                  </button>
                ) : (
                  <button className="btn-orange-primary" onClick={handleSubmitExam}>
                    Submit Exam Now
                  </button>
                )}
              </div>
            </div>

            {/* Question Navigator Sidebar */}
            <div className="card-panel-orange">
              <h4 className="detail-section-title">Question Navigator</h4>
              <div className="q-nav-grid">
                {exam.questions.map((_, idx) => {
                  const isAnswered = selectedAnswers[idx] !== undefined;
                  const isCurrent = currentQuestionIndex === idx;
                  return (
                    <button 
                      key={idx}
                      className={`q-nav-btn ${isCurrent ? 'current' : isAnswered ? 'answered' : ''}`}
                      onClick={() => setCurrentQuestionIndex(idx)}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button className="btn-orange-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSubmitExam}>
                  Submit Exam
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Post Submission Results Breakdown */
          <div className="card-panel-orange">
            <div className="exam-results-hero text-center" style={{ padding: '2rem' }}>
              <Award size={48} className="text-orange" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Exam Performance Results</h2>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Your answers have been evaluated and logged into the university gradebook.</p>

              <div className="results-kpi-row flex-center gap-4">
                <div className="r-kpi">
                  <span className="text-xs text-muted block">SCORE PERCENTAGE</span>
                  <strong className="text-orange text-2xl">{results?.percentage}%</strong>
                </div>
                <div className="r-kpi">
                  <span className="text-xs text-muted block">LETTER GRADE</span>
                  <strong className="text-indigo text-2xl">{results?.grade}</strong>
                </div>
                <div className="r-kpi">
                  <span className="text-xs text-muted block">CORRECT ANSWERS</span>
                  <strong className="text-emerald text-2xl">{results?.correctCount} / {exam.questions.length}</strong>
                </div>
              </div>
            </div>

            {/* Answers Analysis Breakdown */}
            <h3 className="section-title-sm" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Detailed Answer Analysis & AI Explanations</h3>
            <div className="answers-breakdown-list">
              {exam.questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctIndex;

                return (
                  <div key={q.id} className={`answer-card ${isCorrect ? 'card-correct' : 'card-incorrect'}`}>
                    <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                      <strong className="text-sm">Question {idx + 1}</strong>
                      <span className={`status-pill ${isCorrect ? 'status-green' : 'status-crimson'}`}>
                        {isCorrect ? 'Correct (+25 pts)' : 'Incorrect (0 pts)'}
                      </span>
                    </div>
                    <p className="q-text-sm">{q.question}</p>
                    <p className="text-xs text-muted">Your Selection: <strong>{userAns !== undefined ? q.options[userAns] : 'Not Answered'}</strong></p>
                    <p className="text-xs text-emerald">Correct Answer: <strong>{q.options[q.correctIndex]}</strong></p>
                    <div className="ai-explanation-box flex-align gap-2">
                      <Brain size={16} className="text-indigo flex-shrink-0" />
                      <p className="text-xs">{q.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex-between" style={{ marginTop: '2rem' }}>
              <Link to="/exams-grades" className="btn-secondary">
                <ArrowLeft size={16} /> Return to Exam Schedule
              </Link>
              <Link to="/ai" className="btn-orange-primary">
                View AI Weak Subject Recommendations <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
