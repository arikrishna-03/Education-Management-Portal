import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Filter, 
  Clock, 
  MapPin, 
  BookOpen, 
  Users, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const AppCalendarPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<'month' | 'week' | 'day' | 'agenda'>('month');
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  // Form states for Add Event Modal
  const [eventTitle, setEventTitle] = useState('');
  const [eventType, setEventType] = useState('Teaching Week');
  const [eventDate, setEventDate] = useState('2026-08-19');
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:30');
  const [room, setRoom] = useState('Learning Commons Lab 3');
  const [courseCode, setCourseCode] = useState('EDU 204');
  const [eventDesc, setEventDesc] = useState('');

  const [calendarEvents, setCalendarEvents] = useState([
    { id: 'ev-1', title: 'Teaching Week 02: Instructional Architecture', type: 'Teaching Week', date: '19 Aug 2026', time: '09:00 - 10:30', room: 'Learning Commons 3', course: 'EDU 204' },
    { id: 'ev-2', title: 'Midterm Assessment Window', type: 'Assessment', date: '21 Aug 2026', time: '11:00 - 13:00', room: 'Auditorium B', course: 'COM 210' },
    { id: 'ev-3', title: 'Faculty Academic Senate Meeting', type: 'Faculty Meeting', date: '22 Aug 2026', time: '14:00 - 15:30', room: 'Boardroom 400', course: 'Institutional' },
    { id: 'ev-4', title: 'Spatial Blueprint Studio Review', type: 'Exam', date: '23 Aug 2026', time: '10:00 - 12:00', room: 'Studio Hall 102', course: 'ARC 118' }
  ]);

  const handleAddEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle) return;

    const newEv = {
      id: `ev-${Date.now()}`,
      title: eventTitle,
      type: eventType,
      date: eventDate,
      time: `${startTime} - ${endTime}`,
      room: room || 'Main Hall',
      course: courseCode
    };

    setCalendarEvents([...calendarEvents, newEv]);
    setShowAddEventModal(false);
    setEventTitle('');
  };

  return (
    <div className="hub-page-container">
      {/* Category & Header */}
      <div className="hub-page-header">
        <span className="section-category-label">Academic flow</span>
        <h1 className="hub-page-title">Academic calendar</h1>
        <p className="hub-page-subtitle">
          See teaching weeks, assessment windows, rooms, and campus events in one shared rhythm.
        </p>
      </div>

      {/* TOOLBAR CONTROLS */}
      <div className="hub-toolbar-card flex-between flex-wrap gap-4" style={{ margin: '1.5rem 0' }}>
        <div className="flex-align gap-2">
          <button className="btn-secondary-sm">Today</button>
          <div className="flex-align gap-1">
            <button className="btn-icon-sm"><ChevronLeft size={16} /></button>
            <strong className="text-sm">August 2026</strong>
            <button className="btn-icon-sm"><ChevronRight size={16} /></button>
          </div>
        </div>

        {/* View Switcher */}
        <div className="modal-tabs" style={{ border: 'none', margin: 0 }}>
          <button className={`modal-tab-btn ${currentView === 'month' ? 'active' : ''}`} onClick={() => setCurrentView('month')}>Month</button>
          <button className={`modal-tab-btn ${currentView === 'week' ? 'active' : ''}`} onClick={() => setCurrentView('week')}>Week</button>
          <button className={`modal-tab-btn ${currentView === 'day' ? 'active' : ''}`} onClick={() => setCurrentView('day')}>Day</button>
          <button className={`modal-tab-btn ${currentView === 'agenda' ? 'active' : ''}`} onClick={() => setCurrentView('agenda')}>Agenda</button>
        </div>

        {/* Action Buttons */}
        <div className="flex-align gap-2">
          <button className="btn-secondary-sm flex-align gap-1"><Filter size={14} /> Filter</button>
          <button className="btn-hub-primary" onClick={() => setShowAddEventModal(true)}>
            <Plus size={16} /> Add event
          </button>
        </div>
      </div>

      {/* CALENDAR DISPLAY GRID */}
      <div className="hub-content-panel">
        <h3 className="panel-title" style={{ marginBottom: '1rem' }}>Scheduled Institutional Rhythm</h3>
        <div className="calendar-agenda-list">
          {calendarEvents.map((ev) => (
            <div key={ev.id} className="agenda-event-card flex-between">
              <div className="flex-align gap-3">
                <span className={`status-pill ${
                  ev.type === 'Teaching Week' ? 'status-indigo' : 
                  ev.type === 'Assessment' ? 'status-amber' : 
                  ev.type === 'Exam' ? 'status-crimson' : 'status-green'
                }`}>
                  {ev.type}
                </span>
                <div>
                  <h4 className="ev-title">{ev.title}</h4>
                  <div className="flex-align gap-3 text-xs text-muted" style={{ marginTop: '0.2rem' }}>
                    <span className="flex-align gap-1"><CalendarIcon size={12} /> {ev.date}</span>
                    <span className="flex-align gap-1"><Clock size={12} /> {ev.time}</span>
                    <span className="flex-align gap-1"><MapPin size={12} /> {ev.room}</span>
                  </div>
                </div>
              </div>

              <span className="course-code-pill-sm">{ev.course}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ADD EVENT MODAL */}
      {showAddEventModal && (
        <div className="modal-overlay active" onClick={() => setShowAddEventModal(false)}>
          <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
              <h2 className="modal-title flex-align gap-2 text-indigo">
                <CalendarIcon size={20} /> Add Academic Event
              </h2>
              <button className="toast-close-btn" onClick={() => setShowAddEventModal(false)}><X size={18} /></button>
            </div>

            <form onSubmit={handleAddEventSubmit} className="modal-body-form">
              <div className="form-group">
                <label className="form-label">Event Title *</label>
                <input type="text" className="form-control" placeholder="e.g. Midterm Examination Window" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Event Type</label>
                  <select className="form-control" value={eventType} onChange={(e) => setEventType(e.target.value)}>
                    <option value="Teaching Week">Teaching Week</option>
                    <option value="Lecture">Lecture</option>
                    <option value="Assessment">Assessment Window</option>
                    <option value="Exam">Examination</option>
                    <option value="Faculty Meeting">Faculty Meeting</option>
                    <option value="Campus Event">Campus Event</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Course Code</label>
                  <input type="text" className="form-control" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
                </div>
              </div>

              <div className="form-grid-3">
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-control" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Start Time</label>
                  <input type="time" className="form-control" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">End Time</label>
                  <input type="time" className="form-control" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Room / Campus Venue</label>
                <input type="text" className="form-control" placeholder="e.g. Learning Commons 3" value={room} onChange={(e) => setRoom(e.target.value)} />
              </div>

              <div className="modal-footer flex-end gap-3" style={{ marginTop: '1.5rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setShowAddEventModal(false)}>Cancel</button>
                <button type="submit" className="btn-hub-primary">Save Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
