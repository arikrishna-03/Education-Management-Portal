import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onTriggerToast: (type: 'success' | 'info', title: string, msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onTriggerToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Course Enrollment Question');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    onTriggerToast('success', 'Message Sent!', 'Thank you for reaching out. Academic Support will respond within 24 hours.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const faqs = [
    { q: "How do I enroll in AI lab courses?", a: "Navigate to the Courses page, select your desired course, and click 'Enroll Now'. You will be redirected to complete enrollment." },
    { q: "Can teachers mark attendance online?", a: "Yes, faculty can navigate to the Attendance page, select their active class roster, and toggle student status between Present, Absent, or Late." },
    { q: "How are AI Risk alerts calculated?", a: "The AI Engine aggregates weekly attendance logs, assignment submission timestamps, and gradebook trends to identify at-risk students." }
  ];

  return (
    <div className="page-wrapper public-theme-blue">
      {/* Banner */}
      <div className="page-header-banner">
        <div className="page-container text-center">
          <span className="section-eyebrow text-blue">ACADEMIC SUPPORT & INQUIRIES</span>
          <h1 className="page-title-lg">Contact EduTR Hub</h1>
          <p className="page-subtitle">Have questions about admissions, course prerequisites, or platform support? We are here to assist you.</p>
        </div>
      </div>

      <div className="page-container section-padding">
        <div className="grid-2">
          {/* Contact Info Cards */}
          <div>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>Get in Touch</h2>
            <p className="text-muted" style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
              Our dedicated academic services desk operates Monday through Friday from 8:00 AM to 6:00 PM EST.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-card">
                <div className="contact-icon-box"><Mail size={20} className="text-blue" /></div>
                <div>
                  <h4 className="info-title">Email Support</h4>
                  <p className="info-detail">support@edutr.edu</p>
                  <span className="text-xs text-muted">Response time: &lt; 2 hours</span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box"><Phone size={20} className="text-blue" /></div>
                <div>
                  <h4 className="info-title">Phone & Hotlines</h4>
                  <p className="info-detail">+1 (800) 555-EDUTR (33887)</p>
                  <span className="text-xs text-muted">Mon - Fri, 8:00 AM - 6:00 PM EST</span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box"><MapPin size={20} className="text-blue" /></div>
                <div>
                  <h4 className="info-title">Campus Headquarters</h4>
                  <p className="info-detail">Academic Affairs Building, Suite 400</p>
                  <span className="text-xs text-muted">100 University Plaza, Boston, MA 02115</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card">
            <h3 className="section-title-sm" style={{ marginBottom: '1rem' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="form-grid-gap">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="john.doe@university.edu" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select 
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="Course Enrollment Question">Course Enrollment Question</option>
                  <option value="AI Engine Technical Support">AI Engine Technical Support</option>
                  <option value="Faculty & Grading Portal Inquiry">Faculty & Grading Portal Inquiry</option>
                  <option value="General Campus Question">General Campus Question</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea 
                  className="form-control" 
                  rows={4} 
                  placeholder="Describe your inquiry..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="btn-hero-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section" style={{ marginTop: '4rem' }}>
          <div className="section-header-center">
            <span className="section-eyebrow text-blue"><HelpCircle size={16} /> FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Common Academic Portal Inquiries</h2>
          </div>

          <div className="faq-grid" style={{ marginTop: '2rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <h4 className="faq-q flex-align gap-2">
                  <CheckCircle2 size={18} className="text-blue" /> {faq.q}
                </h4>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
