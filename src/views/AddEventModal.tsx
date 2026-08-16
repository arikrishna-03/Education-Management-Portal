import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, MapPin, Tag, FileText } from 'lucide-react';
import { CalendarEvent } from '../types';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveEvent: (event: Omit<CalendarEvent, 'id'>) => void;
}

export const AddEventModal: React.FC<AddEventModalProps> = ({
  isOpen,
  onClose,
  onSaveEvent
}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2026-08-20');
  const [startTime, setStartTime] = useState('10:00 AM');
  const [endTime, setEndTime] = useState('12:00 PM');
  const [category, setCategory] = useState<CalendarEvent['category']>('assessment');
  const [room, setRoom] = useState('Turing Science Center 302');
  const [courseCode, setCourseCode] = useState('CS-401');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSaveEvent({
      title,
      date,
      startTime,
      endTime,
      category,
      room,
      courseCode,
      description
    });

    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title-box">
            <CalendarIcon className="text-indigo" size={24} />
            <div>
              <h2 className="modal-title">Schedule New Academic Event</h2>
              <p className="modal-subtitle">Add exams, deadlines, faculty meetings, or campus milestones.</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body-form">
          <div className="form-group">
            <label className="form-label">Event Title *</label>
            <input 
              type="text" 
              className="form-control"
              placeholder="e.g. CS-401 Midterm Examination"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Category</label>
              <select 
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
              >
                <option value="teaching_week">Teaching Week</option>
                <option value="assessment">Assessment Window</option>
                <option value="exam">Examination Period</option>
                <option value="faculty_meeting">Faculty Meeting</option>
                <option value="campus_event">Campus Event</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Event Date</label>
              <input 
                type="date" 
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Start Time</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="10:00 AM"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">End Time</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="12:00 PM"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Location / Room</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="Room / Building"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Associated Course Code</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="e.g. CS-401"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description & Notes</label>
            <textarea 
              className="form-control"
              rows={3}
              placeholder="Additional guidelines or agenda..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Schedule Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
