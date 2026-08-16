import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Search, 
  Clock, 
  MapPin, 
  Trash2, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { CalendarEvent } from '../types';

interface CalendarViewProps {
  events: CalendarEvent[];
  onAddEvent: () => void;
  onDeleteEvent: (id: string) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  events,
  onAddEvent,
  onDeleteEvent
}) => {
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('2026-08-17');

  // Filter events
  const filteredEvents = events.filter((ev) => {
    const matchesCategory = selectedCategory === 'All' || ev.category === selectedCategory;
    const matchesSearch = 
      ev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ev.description && ev.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (ev.courseCode && ev.courseCode.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Calendar dates generation for August 2026
  // August 1, 2026 is Saturday (offset 6)
  const daysInAugust = 31;
  const augustDays = Array.from({ length: daysInAugust }, (_, i) => {
    const dayNum = i + 1;
    const dateStr = `2026-08-${dayNum < 10 ? '0' + dayNum : dayNum}`;
    const dayEvents = filteredEvents.filter((ev) => ev.date === dateStr);
    return { dayNum, dateStr, dayEvents };
  });

  const getCategoryColorClass = (cat: CalendarEvent['category']) => {
    switch (cat) {
      case 'teaching_week': return 'cat-indigo';
      case 'exam': return 'cat-crimson';
      case 'assessment': return 'cat-amber';
      case 'campus_event': return 'cat-emerald';
      case 'faculty_meeting': return 'cat-purple';
      default: return 'cat-indigo';
    }
  };

  const getCategoryLabel = (cat: CalendarEvent['category']) => {
    switch (cat) {
      case 'teaching_week': return 'Teaching Week';
      case 'exam': return 'Examination';
      case 'assessment': return 'Assessment';
      case 'campus_event': return 'Campus Event';
      case 'faculty_meeting': return 'Faculty Senate';
    }
  };

  return (
    <div className="view-page-container">
      {/* Page Header */}
      <div className="view-page-header">
        <div>
          <h1 className="page-title">Institutional Academic Calendar</h1>
          <p className="page-subtitle">Schedule and coordinate teaching weeks, examination periods, faculty meetings, and campus events.</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary" onClick={onAddEvent}>
            <Plus size={18} /> Schedule Event
          </button>
        </div>
      </div>

      {/* Calendar Controls & Filters Bar */}
      <div className="filter-bar">
        <div className="filter-search-input">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search events, courses, or rooms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls-group">
          {/* Category Filter */}
          <div className="filter-select-wrapper">
            <span className="filter-label">Category:</span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Event Categories</option>
              <option value="teaching_week">Teaching Weeks</option>
              <option value="assessment">Assessments & Deadlines</option>
              <option value="exam">Exams & Finals</option>
              <option value="faculty_meeting">Faculty Meetings</option>
              <option value="campus_event">Campus Events</option>
            </select>
          </div>

          {/* Month/Week/Day View Switcher */}
          <div className="view-switcher">
            <button 
              className={`switcher-btn ${viewMode === 'month' ? 'active' : ''}`}
              onClick={() => setViewMode('month')}
            >
              Month
            </button>
            <button 
              className={`switcher-btn ${viewMode === 'week' ? 'active' : ''}`}
              onClick={() => setViewMode('week')}
            >
              Week
            </button>
            <button 
              className={`switcher-btn ${viewMode === 'day' ? 'active' : ''}`}
              onClick={() => setViewMode('day')}
            >
              Day
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Calendar Stage + Events Sidebar */}
      <div className="grid-3-1">
        {/* Left: Interactive Calendar Grid */}
        <div className="card-panel">
          <div className="calendar-month-header">
            <div className="flex-align gap-2">
              <h2 className="month-title">August 2026</h2>
              <span className="badge-indigo-light">Fall Term Semester</span>
            </div>
            <div className="calendar-nav-btns">
              <button className="btn-icon-sm"><ChevronLeft size={18} /></button>
              <button className="btn-ghost-sm" onClick={() => setSelectedDate('2026-08-17')}>Today</button>
              <button className="btn-icon-sm"><ChevronRight size={18} /></button>
            </div>
          </div>

          {/* Month View Grid */}
          {viewMode === 'month' && (
            <div className="calendar-grid">
              {/* Day Headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="calendar-day-header">{d}</div>
              ))}

              {/* Offset empty days for Aug 1 (Saturday = index 6) */}
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={`offset-${idx}`} className="calendar-day-cell cell-disabled" />
              ))}

              {/* Day cells */}
              {augustDays.map(({ dayNum, dateStr, dayEvents }) => {
                const isSelected = selectedDate === dateStr;
                const isToday = dateStr === '2026-08-17';

                return (
                  <div 
                    key={dateStr}
                    className={`calendar-day-cell ${isSelected ? 'cell-selected' : ''} ${isToday ? 'cell-today' : ''}`}
                    onClick={() => setSelectedDate(dateStr)}
                  >
                    <div className="cell-top">
                      <span className={`cell-day-num ${isToday ? 'num-today' : ''}`}>{dayNum}</span>
                      {dayEvents.length > 0 && (
                        <span className="cell-event-count">{dayEvents.length}</span>
                      )}
                    </div>

                    <div className="cell-events-list">
                      {dayEvents.map((ev) => (
                        <div 
                          key={ev.id} 
                          className={`cell-event-pill ${getCategoryColorClass(ev.category)}`}
                          title={ev.title}
                        >
                          {ev.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Week View Simulation */}
          {viewMode === 'week' && (
            <div className="week-view-box">
              <h3 className="week-title">Week of August 17 - August 23, 2026</h3>
              <div className="week-grid">
                {augustDays.slice(16, 23).map(({ dayNum, dateStr, dayEvents }) => (
                  <div key={dateStr} className="week-day-column">
                    <h4 className="week-day-title">Aug {dayNum}</h4>
                    <div className="week-day-events">
                      {dayEvents.length === 0 ? (
                        <span className="text-muted text-xs">No events</span>
                      ) : (
                        dayEvents.map((ev) => (
                          <div key={ev.id} className={`event-card-mini ${getCategoryColorClass(ev.category)}`}>
                            <strong>{ev.startTime}</strong>
                            <p>{ev.title}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Day View Simulation */}
          {viewMode === 'day' && (
            <div className="day-view-box">
              <h3 className="day-title">Events for {selectedDate}</h3>
              <div className="day-events-list">
                {filteredEvents.filter(e => e.date === selectedDate).length === 0 ? (
                  <p className="text-muted">No scheduled events for this selected date.</p>
                ) : (
                  filteredEvents.filter(e => e.date === selectedDate).map((ev) => (
                    <div key={ev.id} className="day-event-card">
                      <div className="flex-between">
                        <span className={`cat-pill ${getCategoryColorClass(ev.category)}`}>
                          {getCategoryLabel(ev.category)}
                        </span>
                        <button className="btn-icon-xs text-crimson" onClick={() => onDeleteEvent(ev.id)}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <h4 className="day-event-title">{ev.title}</h4>
                      <p className="day-event-time flex-align gap-2">
                        <Clock size={14} /> {ev.startTime} - {ev.endTime}
                        {ev.room && <><MapPin size={14} /> {ev.room}</>}
                      </p>
                      {ev.description && <p className="day-event-desc">{ev.description}</p>}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Upcoming Scheduled Events Roster */}
        <div className="card-panel">
          <div className="card-header-flex">
            <h3 className="card-title">Scheduled Roster</h3>
            <span className="badge-gray">{filteredEvents.length} Total</span>
          </div>

          <div className="events-roster-list">
            {filteredEvents.map((ev) => (
              <div key={ev.id} className="roster-event-card">
                <div className="roster-event-top">
                  <span className={`cat-pill ${getCategoryColorClass(ev.category)}`}>
                    {getCategoryLabel(ev.category)}
                  </span>
                  <button className="btn-icon-xs text-crimson" onClick={() => onDeleteEvent(ev.id)} title="Delete Event">
                    <Trash2 size={14} />
                  </button>
                </div>

                <h4 className="roster-event-title">{ev.title}</h4>

                <div className="roster-event-meta">
                  <span className="meta-item"><CalendarIcon size={12} /> {ev.date}</span>
                  <span className="meta-item"><Clock size={12} /> {ev.startTime}</span>
                  {ev.room && <span className="meta-item"><MapPin size={12} /> {ev.room}</span>}
                </div>

                {ev.courseCode && (
                  <span className="course-code-pill-xs" style={{ marginTop: '0.5rem', display: 'inline-block' }}>
                    {ev.courseCode}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
