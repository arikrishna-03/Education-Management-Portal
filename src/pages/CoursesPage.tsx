import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Users, Clock, Award, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { MOCK_COURSES } from '../data/edutrData';

interface CoursesPageProps {
  onSelectCourse: (id: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [sortBy, setSortBy] = useState<'rating' | 'popularity' | 'newest'>('rating');

  const categories = ['All', 'Artificial Intelligence', 'Software Engineering', 'Cybersecurity', 'Data Science'];

  // Filter & Sort
  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchesSearch = 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDiff = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    const matchesPrice = selectedPrice === 'All' || course.price === selectedPrice;

    return matchesSearch && matchesCat && matchesDiff && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'popularity') return b.studentsCount - a.studentsCount;
    return b.code.localeCompare(a.code);
  });

  return (
    <div className="page-wrapper public-theme-blue">
      {/* Header Banner */}
      <div className="page-header-banner">
        <div className="page-container">
          <span className="section-eyebrow text-blue">EXPLORE CURRICULUM</span>
          <h1 className="page-title-lg">Academic Course Catalog</h1>
          <p className="page-subtitle">Discover accredited university courses, deep-dive AI modules, and practical cloud engineering labs.</p>
        </div>
      </div>

      {/* Main Filter & Catalog Section */}
      <div className="page-container section-padding">
        {/* Search & Filter Toolbar */}
        <div className="catalog-toolbar">
          <div className="catalog-search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search course code, topic, or professor name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="catalog-filter-group">
            {/* Category */}
            <div className="filter-item">
              <label>Category:</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Difficulty */}
            <div className="filter-item hide-mobile">
              <label>Level:</label>
              <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Price */}
            <div className="filter-item hide-mobile">
              <label>Access:</label>
              <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
                <option value="All">All Courses</option>
                <option value="Free">Free</option>
                <option value="$99">Paid / Credit</option>
              </select>
            </div>

            {/* Sort */}
            <div className="filter-item">
              <label>Sort By:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
                <option value="rating">Top Rated</option>
                <option value="popularity">Most Popular</option>
                <option value="newest">Course Code</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid-3">
          {filteredCourses.length === 0 ? (
            <div className="empty-state-card col-span-full">
              <BookOpen size={44} className="text-muted" />
              <h3>No courses found matching criteria</h3>
              <p>Try broadening your category or difficulty search filter.</p>
              <button 
                className="btn-secondary-sm" 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedDifficulty('All'); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <div key={course.id} className="public-course-card">
                <div className="course-card-img-wrapper">
                  <img src={course.image} alt={course.name} className="course-card-img" />
                  <span className="course-badge-price">{course.price}</span>
                  <span className="course-code-tag-overlay">{course.code}</span>
                </div>
                <div className="course-card-body">
                  <div className="flex-between text-xs" style={{ marginBottom: '0.4rem' }}>
                    <span className="tag-blue">{course.category}</span>
                    <span className="flex-align gap-1 font-bold text-amber">
                      <Star size={14} fill="#f59e0b" /> {course.rating} ({course.reviewsCount})
                    </span>
                  </div>
                  <h3 className="public-course-title">{course.name}</h3>
                  <p className="public-course-desc">{course.description}</p>

                  <div className="instructor-row-sm">
                    <img src={course.instructorAvatar} alt={course.instructor} className="avatar-xs" />
                    <div>
                      <h5 className="inst-name">{course.instructor}</h5>
                      <span className="inst-title">{course.instructorTitle}</span>
                    </div>
                  </div>

                  <div className="course-meta-pills-row flex-align gap-3 text-xs text-muted" style={{ margin: '0.8rem 0' }}>
                    <span className="flex-align gap-1"><Clock size={12} /> {course.duration}</span>
                    <span className="flex-align gap-1"><Award size={12} /> {course.difficulty}</span>
                    <span className="flex-align gap-1"><Users size={12} /> {course.studentsCount} Students</span>
                  </div>

                  <div className="card-footer-flex">
                    <span className="text-xs text-muted">{course.syllabus.length} Modules</span>
                    <Link to={`/courses/${course.id}`} className="btn-card-view">
                      View Course Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
