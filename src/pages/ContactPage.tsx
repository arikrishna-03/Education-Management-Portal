import React, { useState } from 'react';

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
      <section className="courses-hero-header">
        <div className="academia-container">
          <span className="micro-eyebrow">INQUIRIES & ADMISSIONS</span>
          <h1 className="hero-serif-title">We would be pleased to hear from you.</h1>
          <p className="hero-lead-desc" style={{ maxWidth: '700px' }}>
            Whether you are considering a course, need academic support, or simply want to learn more about the institute, our team is here to help.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO & CONTACT FORM GRID */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="grid-2-1" style={{ gap: '4rem' }}>
            {/* Left: Contact Info */}
            <div>
              <span className="micro-eyebrow">CONTACT INFORMATION</span>
              <h2 className="section-serif-heading">Get in Touch</h2>

              <div className="contact-info-stack" style={{ marginTop: '2rem' }}>
                <div className="contact-info-block">
                  <span className="micro-eyebrow">GENERAL ENQUIRIES</span>
                  <p className="contact-val-text font-serif">hello@academicportal.com</p>
                </div>

                <div className="contact-info-block">
                  <span className="micro-eyebrow">ADMISSIONS OFFICE</span>
                  <p className="contact-val-text font-serif">admissions@academicportal.com</p>
                </div>

                <div className="contact-info-block">
                  <span className="micro-eyebrow">PHONE</span>
                  <p className="contact-val-text font-serif">+44 (0)20 7946 0912</p>
                </div>

                <div className="contact-info-block">
                  <span className="micro-eyebrow">CAMPUS LOCATION</span>
                  <p className="contact-val-text font-serif">
                    12 University Avenue<br />
                    Bloomsbury, London WC1E 6BT
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <span className="micro-eyebrow">TRANSMIT INQUIRY</span>
              <h2 className="section-serif-heading">Contact Form</h2>

              {formSubmitted ? (
                <div className="editorial-success-box" style={{ marginTop: '2rem' }}>
                  <h3 className="sub-serif-title text-emerald">Message Transmitted</h3>
                  <p className="body-editorial-p">Thank you. An admissions counselor will respond to your inquiry within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-editorial" style={{ marginTop: '2rem' }}>
                  <div className="form-group-editorial">
                    <label className="editorial-label">Name *</label>
                    <input 
                      type="text" 
                      className="editorial-input-thin" 
                      value={formName} 
                      onChange={(e) => setFormName(e.target.value)} 
                      required 
                    />
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label">Email Address *</label>
                    <input 
                      type="email" 
                      className="editorial-input-thin" 
                      value={formEmail} 
                      onChange={(e) => setFormEmail(e.target.value)} 
                      required 
                    />
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label">Subject</label>
                    <input 
                      type="text" 
                      className="editorial-input-thin" 
                      value={formSubject} 
                      onChange={(e) => setFormSubject(e.target.value)} 
                    />
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label">Course of Interest</label>
                    <select 
                      className="editorial-select-thin"
                      value={formCourse} 
                      onChange={(e) => setFormCourse(e.target.value)}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="ARC 118">ARC 118 — Spatial Thinking</option>
                      <option value="EDU 204">EDU 204 — Learning Design</option>
                      <option value="COM 210">COM 210 — Academic Writing</option>
                      <option value="CS 312">CS 312 — Applied AI</option>
                    </select>
                  </div>

                  <div className="form-group-editorial">
                    <label className="editorial-label">Message *</label>
                    <textarea 
                      className="editorial-textarea-thin" 
                      rows={4} 
                      value={formMessage} 
                      onChange={(e) => setFormMessage(e.target.value)} 
                      required 
                    />
                  </div>

                  <button type="submit" className="btn-editorial-primary w-full" style={{ marginTop: '1rem' }}>
                    SEND MESSAGE →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">COMMON QUESTIONS</span>
          <h2 className="section-serif-heading">Frequently Asked Questions</h2>

          <div className="syllabus-accordion-stack" style={{ marginTop: '2rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} className="accordion-item-editorial">
                  <div 
                    className="accordion-header-flex flex-between cursor-pointer"
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  >
                    <h3 className="ann-title">{faq.q}</h3>
                    <span className="accordion-toggle-sym">{isOpen ? '−' : '+'}</span>
                  </div>

                  {isOpen && (
                    <div className="accordion-content-body">
                      <p className="body-editorial-p">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SUPPORT CTA SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container text-center">
          <span className="micro-eyebrow">ACADEMIC SUPPORT</span>
          <h2 className="section-serif-heading">Need Support?</h2>
          <p className="hero-lead-desc" style={{ maxWidth: '600px', margin: '0.8rem auto 1.5rem' }}>
            Our academic support team is available to help with course access, enrollment, scheduling, and technical questions.
          </p>
          <button className="btn-editorial-primary" onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}>
            CONTACT SUPPORT →
          </button>
        </div>
      </section>
    </div>
  );
};
