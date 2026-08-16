import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formCourse, setFormCourse] = useState('General Enquiry');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I enroll in a course?',
      a: 'Select your course from the directory and click "ENROLL NOW". Admissions will review your background and issue course access credentials.'
    },
    {
      q: 'Do courses offer accredited certificates?',
      a: 'Yes. Upon successful completion of all coursework and research projects, you receive an institutional certificate of academic completion.'
    },
    {
      q: 'Can I change my course schedule?',
      a: 'Schedule changes can be requested within the first two weeks of the term via the academic portal workspace.'
    },
    {
      q: 'How do I contact my instructor?',
      a: 'Enrolled students can communicate directly with faculty members through scheduled office hours or via the workspace portal.'
    },
    {
      q: 'What is the refund policy?',
      a: 'Full tuition refunds are available up to 7 calendar days prior to the term start date.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="academia-page">
      {/* 1. CONTACT HERO */}
      <section className="courses-hero-header" style={{ padding: '4rem 0 2rem' }}>
        <div className="academia-container">
          <span className="micro-eyebrow">INQUIRIES & ADMISSIONS</span>
          <h1 className="hero-serif-title" style={{ fontSize: '3.2rem', margin: '0.4rem 0', color: '#F5EFE3' }}>
            We would be pleased to hear from you.
          </h1>
          <p className="hero-lead-desc" style={{ maxWidth: '700px', color: '#C7C4BC' }}>
            Whether you are considering a course, need academic support, or simply want to learn more about the institute, our team is here to help.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO & CONTACT FORM 2-COLUMN SPLIT GRID */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="contact-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Left: Contact Info */}
            <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.5rem' }}>
              <span className="micro-eyebrow">CONTACT INFORMATION</span>
              <h2 className="section-serif-heading" style={{ fontSize: '2.2rem', color: '#F5EFE3', marginBottom: '2rem' }}>Get in Touch</h2>

              <div className="contact-info-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <div className="contact-info-block" style={{ paddingBottom: '1.2rem', borderBottom: '1px solid #1B3045' }}>
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>GENERAL ENQUIRIES</span>
                  <p className="contact-val-text font-serif text-gold" style={{ fontSize: '1.4rem', margin: '0.2rem 0' }}>hello@academicportal.com</p>
                </div>

                <div className="contact-info-block" style={{ paddingBottom: '1.2rem', borderBottom: '1px solid #1B3045' }}>
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>ADMISSIONS OFFICE</span>
                  <p className="contact-val-text font-serif text-gold" style={{ fontSize: '1.4rem', margin: '0.2rem 0' }}>admissions@academicportal.com</p>
                </div>

                <div className="contact-info-block" style={{ paddingBottom: '1.2rem', borderBottom: '1px solid #1B3045' }}>
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>PHONE</span>
                  <p className="contact-val-text font-serif text-primary" style={{ fontSize: '1.4rem', color: '#F5EFE3', margin: '0.2rem 0' }}>+44 (0)20 7946 0912</p>
                </div>

                <div className="contact-info-block">
                  <span className="micro-eyebrow" style={{ fontSize: '0.65rem' }}>CAMPUS LOCATION</span>
                  <p className="contact-val-text font-serif text-primary" style={{ fontSize: '1.3rem', color: '#F5EFE3', margin: '0.2rem 0', lineHeight: '1.4' }}>
                    12 University Avenue<br />
                    Bloomsbury, London WC1E 6BT
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '16px', padding: '2.5rem' }}>
              <span className="micro-eyebrow">TRANSMIT INQUIRY</span>
              <h2 className="section-serif-heading" style={{ fontSize: '2.2rem', color: '#F5EFE3', marginBottom: '1.5rem' }}>Contact Form</h2>

              {formSubmitted ? (
                <div className="editorial-success-box" style={{ background: '#0B192A', border: '1px solid #2FA36B', padding: '1.5rem', borderRadius: '10px' }}>
                  <h3 className="sub-serif-title text-emerald" style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>Message Transmitted</h3>
                  <p style={{ color: '#C7C4BC', fontSize: '0.95rem' }}>Thank you. An admissions counselor will respond to your inquiry within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-editorial" style={{ background: 'transparent', padding: 0, border: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div className="form-group-editorial">
                    <label className="editorial-label" style={{ color: '#F5EFE3' }}>Name *</label>
                    <input 
                      type="text" 
                      className="editorial-input-thin" 
                      placeholder="Your full name"
                      value={formName} 
                      onChange={(e) => setFormName(e.target.value)} 
                      required 
                    />
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label" style={{ color: '#F5EFE3' }}>Email Address *</label>
                    <input 
                      type="email" 
                      className="editorial-input-thin" 
                      placeholder="name@academic.edu"
                      value={formEmail} 
                      onChange={(e) => setFormEmail(e.target.value)} 
                      required 
                    />
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label" style={{ color: '#F5EFE3' }}>Subject</label>
                    <input 
                      type="text" 
                      className="editorial-input-thin" 
                      placeholder="Inquiry topic"
                      value={formSubject} 
                      onChange={(e) => setFormSubject(e.target.value)} 
                    />
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label" style={{ color: '#F5EFE3' }}>Course of Interest</label>
                    <select 
                      className="editorial-select-thin"
                      value={formCourse}
                      onChange={(e) => setFormCourse(e.target.value)}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="ARC 118">ARC 118 — Spatial Thinking & Environmental Architecture</option>
                      <option value="EDU 204">EDU 204 — Learning Design & Pedagogical Frameworks</option>
                      <option value="COM 210">COM 210 — Academic Writing & Research Synthesis</option>
                      <option value="CS 312">CS 312 — Applied AI & Neural Learning Systems</option>
                    </select>
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label" style={{ color: '#F5EFE3' }}>Message *</label>
                    <textarea 
                      className="editorial-textarea-thin" 
                      rows={4}
                      placeholder="How can our admissions desk assist you?"
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-editorial-primary w-full" style={{ padding: '1rem', marginTop: '0.5rem' }}>
                    TRANSMIT INQUIRY →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">COMMON INQUIRIES</span>
          <h2 className="section-serif-heading" style={{ fontSize: '2.2rem', color: '#F5EFE3', marginBottom: '2rem' }}>Frequently Asked Questions</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '840px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} className="flow-card-panel" style={{ background: '#0D1B2D', border: '1px solid #1B3045', borderRadius: '12px', padding: '1.4rem' }}>
                  <div 
                    className="flex-between cursor-pointer"
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  >
                    <h3 className="sub-serif-title" style={{ fontSize: '1.2rem', color: '#F5EFE3', margin: 0 }}>{faq.q}</h3>
                    <span className="text-gold font-bold" style={{ fontSize: '1.4rem' }}>{isOpen ? '−' : '+'}</span>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid #1B3045' }}>
                      <p style={{ color: '#C7C4BC', fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
