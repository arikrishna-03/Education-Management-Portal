import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

export const StudentGradesPage: React.FC = () => {
  const grades = [
    { course: 'Spatial Thinking & Environmental Architecture', code: 'ARC 118', grade: 'A-', score: '86.0%', credits: '4.0' },
    { course: 'Learning Design & Pedagogical Frameworks', code: 'EDU 204', grade: 'B+', score: '81.5%', credits: '3.0' },
    { course: 'Academic Writing & Research Synthesis', code: 'COM 210', grade: 'A', score: '91.0%', credits: '3.0' },
    { course: 'Applied AI & Neural Learning Systems', code: 'CS 312', grade: 'A-', score: '88.5%', credits: '4.0' }
  ];

  return (
    <div className="academia-page">
      <div style={{ marginBottom: '2rem' }}>
        <span className="micro-eyebrow">ACADEMIC CREDENTIALS</span>
        <h1 className="hero-serif-title" style={{ fontSize: '2.4rem', margin: '0.2rem 0', color: '#F5EFE3' }}>
          Grades & Transcript
        </h1>
        <p className="meta-text" style={{ color: '#C7C4BC' }}>
          Institutional record of course evaluation grades and cumulative GPA performance.
        </p>
      </div>

      <div className="flow-card-panel" style={{ marginBottom: '2rem' }}>
        <div className="flex-between">
          <div>
            <span className="editorial-label">CUMULATIVE GPA</span>
            <h2 className="font-serif text-gold" style={{ fontSize: '2.5rem', margin: 0 }}>3.78 / 4.00</h2>
          </div>
          <div>
            <span className="editorial-label">ACADEMIC STANDING</span>
            <strong className="text-emerald block" style={{ fontSize: '1.2rem' }}>HONORS / FIRST CLASS</strong>
          </div>
        </div>
      </div>

      <div className="flow-card-panel">
        <span className="editorial-label">TERM GRADE BREAKDOWN</span>
        <h3 className="sub-serif-title" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.4rem 0 1.2rem' }}>
          Enrolled Courses Grades
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {grades.map((item, idx) => (
            <div key={idx} className="flex-between" style={{ background: '#0B192A', padding: '1rem 1.4rem', border: '1px solid #1B3045', borderRadius: '8px' }}>
              <div>
                <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>{item.code} · {item.credits} Credits</span>
                <h4 className="font-serif" style={{ fontSize: '1.2rem', color: '#F5EFE3', margin: 0 }}>{item.course}</h4>
              </div>
              <div className="text-right">
                <span className="font-serif text-gold" style={{ fontSize: '1.6rem', fontWeight: 700 }}>{item.grade}</span>
                <span className="text-xs text-muted block">{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
