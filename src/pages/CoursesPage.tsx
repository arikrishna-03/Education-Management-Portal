import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, X, Search, RotateCcw } from 'lucide-react';

export interface CourseItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  desc: string;
  instructor: string;
  duration: string;
  weeksCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  ratingVal: number;
  ratingStr: string;
  format: 'Online' | 'On Campus' | 'Hybrid';
  price: 'Free' | 'Paid';
  image: string;
}

export const CoursesPage: React.FC = () => {
  const navigate = useNavigate();

  // State controls
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Advanced filter states
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedRating, setSelectedRating] = useState<string>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');

  const categories = [
    { key: 'ALL', label: 'All Courses' },
    { key: 'DESIGN', label: 'Architecture & Design' },
    { key: 'BUSINESS', label: 'Business' },
    { key: 'CS', label: 'Computer Science' },
    { key: 'AI', label: 'Artificial Intelligence' },
    { key: 'MATH', label: 'Mathematics' },
    { key: 'SCIENCE', label: 'Science' },
    { key: 'ARTS', label: 'Arts & Humanities' },
    { key: 'WRITING', label: 'Academic Writing' },
    { key: 'RESEARCH', label: 'Research' },
    { key: 'LANGUAGE', label: 'Languages' }
  ];

  const allCourses: CourseItem[] = [
    {
      id: 'arc-118',
      category: 'DESIGN',
      categoryLabel: 'ARCHITECTURE & DESIGN',
      title: 'Spatial Thinking & Environmental Architecture',
      desc: 'A study of space, structure, and the relationship between human experience and built environments.',
      instructor: 'Dr. Leila Haddad',
      duration: '12 weeks',
      weeksCount: 12,
      level: 'Advanced',
      ratingVal: 4.9,
      ratingStr: '★ 4.9',
      format: 'On Campus',
      price: 'Paid',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'edu-204',
      category: 'ARTS',
      categoryLabel: 'PEDAGOGICAL DESIGN',
      title: 'Learning Design & Pedagogical Frameworks',
      desc: 'Exploring cognitive load theory, instructional architecture, and systemic educational models.',
      instructor: 'Dr. Sarah Jenkins',
      duration: '10 weeks',
      weeksCount: 10,
      level: 'Intermediate',
      ratingVal: 4.8,
      ratingStr: '★ 4.8',
      format: 'Hybrid',
      price: 'Paid',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'com-210',
      category: 'RESEARCH',
      categoryLabel: 'ACADEMIC SYNTHESIS',
      title: 'Academic Writing & Research Synthesis',
      desc: 'Synthesizing empirical sources into structured literature matrices and peer-reviewed papers.',
      instructor: 'Dr. Marcus Brody',
      duration: '8 weeks',
      weeksCount: 8,
      level: 'Beginner',
      ratingVal: 4.9,
      ratingStr: '★ 4.9',
      format: 'Online',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'cs-312',
      category: 'AI',
      categoryLabel: 'APPLIED AI & COMPUTING',
      title: 'Applied AI & Neural Learning Systems',
      desc: 'Rigorous analysis of deep learning architectures, tensor backpropagation, and cognitive modeling.',
      instructor: 'Prof. David Vance',
      duration: '14 weeks',
      weeksCount: 14,
      level: 'Advanced',
      ratingVal: 4.8,
      ratingStr: '★ 4.8',
      format: 'Online',
      price: 'Paid',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'mth-201',
      category: 'MATH',
      categoryLabel: 'MATHEMATICS',
      title: 'Research Methods & Statistical Inference',
      desc: 'Parametric and non-parametric statistical hypothesis testing for empirical research designs.',
      instructor: 'Dr. Amina Vance',
      duration: '12 weeks',
      weeksCount: 12,
      level: 'Intermediate',
      ratingVal: 4.7,
      ratingStr: '★ 4.7',
      format: 'On Campus',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'bus-401',
      category: 'BUSINESS',
      categoryLabel: 'STRATEGIC BUSINESS',
      title: 'Institutional Economics & Strategic Leadership',
      desc: 'Analyzing global market dynamics, organizational behavior, and venture strategy in modern economies.',
      instructor: 'Prof. Richard Sterling',
      duration: '6 weeks',
      weeksCount: 6,
      level: 'Beginner',
      ratingVal: 4.6,
      ratingStr: '★ 4.6',
      format: 'Hybrid',
      price: 'Paid',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedLevel('All');
    setSelectedDuration('All');
    setSelectedRating('All');
    setSelectedFormat('All');
    setSelectedPrice('All');
  };

  const filteredCourses = allCourses.filter((course) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      course.title.toLowerCase().includes(query) || 
      course.desc.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query) ||
      course.categoryLabel.toLowerCase().includes(query);

    const matchesCategory = selectedCategory === 'ALL' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

    let matchesDuration = true;
    if (selectedDuration === 'Short') matchesDuration = course.weeksCount < 8;
    if (selectedDuration === 'Medium') matchesDuration = course.weeksCount >= 8 && course.weeksCount <= 12;
    if (selectedDuration === 'Long') matchesDuration = course.weeksCount > 12;

    let matchesRating = true;
    if (selectedRating === '4.5+') matchesRating = course.ratingVal >= 4.5;
    if (selectedRating === '4.0+') matchesRating = course.ratingVal >= 4.0;

    const matchesFormat = selectedFormat === 'All' || course.format === selectedFormat;
    const matchesPrice = selectedPrice === 'All' || course.price === selectedPrice;

    return matchesSearch && matchesCategory && matchesLevel && matchesDuration && matchesRating && matchesFormat && matchesPrice;
  });

  const topRatedCourses = [
    { id: 'arc-118', num: '01', title: 'Spatial Thinking & Environmental Architecture', category: 'Architecture & Design', rating: '★ 4.9', instructor: 'Dr. Leila Haddad' },
    { id: 'com-210', num: '02', title: 'Academic Writing & Research Synthesis', category: 'Research', rating: '★ 4.9', instructor: 'Dr. Marcus Brody' },
    { id: 'cs-312', num: '03', title: 'Applied AI & Neural Learning Systems', category: 'Computer Science', rating: '★ 4.8', instructor: 'Prof. David Vance' }
  ];

  const activeFilterCount = (selectedCategory !== 'ALL' ? 1 : 0) + 
    (selectedLevel !== 'All' ? 1 : 0) + 
    (selectedDuration !== 'All' ? 1 : 0) + 
    (selectedRating !== 'All' ? 1 : 0) + 
    (selectedFormat !== 'All' ? 1 : 0) + 
    (selectedPrice !== 'All' ? 1 : 0);

  return (
    <div className="academia-page">
      {/* COURSES PAGE HERO */}
      <section className="courses-hero-header">
        <div className="academia-container">
          <span className="micro-eyebrow">ACADEMIC CURRICULUM</span>
          <h1 className="hero-serif-title">Courses</h1>
          <p className="hero-lead-desc" style={{ maxWidth: '700px' }}>
            Study with intention. Explore a carefully curated collection of academic courses taught by experienced educators.
          </p>
        </div>
      </section>

      {/* SECTION 1 & 2: SEARCH COURSES & FILTER */}
      <section className="section-space-sm border-top-thin">
        <div className="academia-container">
          <div className="flex-between flex-wrap gap-4 align-items-end">
            {/* 1. SEARCH COURSES */}
            <div className="search-courses-container flex-1" style={{ minWidth: '280px' }}>
              <h2 className="section-serif-heading" style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>Search Courses</h2>
              <div className="search-field-minimal">
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-underline"
                />
                <button className="btn-search-trigger flex-align gap-1" title="Search">
                  <span>SEARCH</span>
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* 2. FILTER CONTROL BUTTON */}
            <div className="filter-control-wrapper">
              <button 
                className={`btn-filter-trigger flex-align gap-2 ${filterPanelOpen ? 'active' : ''}`}
                onClick={() => setFilterPanelOpen(!filterPanelOpen)}
              >
                <SlidersHorizontal size={16} />
                <span>FILTER</span>
                {activeFilterCount > 0 && <span className="filter-count-badge">{activeFilterCount}</span>}
              </button>
            </div>
          </div>

          {/* EXPANDABLE LUXURY FILTER PANEL */}
          {filterPanelOpen && (
            <div className="luxury-filter-panel">
              <div className="flex-between filter-panel-header">
                <div>
                  <h4 className="sub-serif-title" style={{ fontSize: '1.4rem', margin: 0 }}>Filter Options</h4>
                  <span className="text-xs text-muted">Refine catalog by level, duration, rating, format, or price</span>
                </div>
                <button className="btn-icon-close" onClick={() => setFilterPanelOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className="filter-grid-options">
                {/* Level */}
                <div className="filter-group-col">
                  <span className="editorial-label">LEVEL</span>
                  <div className="filter-radio-stack">
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                      <label key={lvl} className="filter-checkbox-item flex-align gap-2">
                        <input type="radio" name="level" checked={selectedLevel === lvl} onChange={() => setSelectedLevel(lvl)} />
                        <span>{lvl}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="filter-group-col">
                  <span className="editorial-label">DURATION</span>
                  <div className="filter-radio-stack">
                    {[
                      { key: 'All', label: 'All Durations' },
                      { key: 'Short', label: 'Short (< 8 wks)' },
                      { key: 'Medium', label: 'Medium (8–12 wks)' },
                      { key: 'Long', label: 'Long (> 12 wks)' }
                    ].map(dur => (
                      <label key={dur.key} className="filter-checkbox-item flex-align gap-2">
                        <input type="radio" name="duration" checked={selectedDuration === dur.key} onChange={() => setSelectedDuration(dur.key)} />
                        <span>{dur.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="filter-group-col">
                  <span className="editorial-label">RATING</span>
                  <div className="filter-radio-stack">
                    {['All', '4.5+', '4.0+'].map(rat => (
                      <label key={rat} className="filter-checkbox-item flex-align gap-2">
                        <input type="radio" name="rating" checked={selectedRating === rat} onChange={() => setSelectedRating(rat)} />
                        <span>{rat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Format */}
                <div className="filter-group-col">
                  <span className="editorial-label">FORMAT</span>
                  <div className="filter-radio-stack">
                    {['All', 'Online', 'On Campus', 'Hybrid'].map(fmt => (
                      <label key={fmt} className="filter-checkbox-item flex-align gap-2">
                        <input type="radio" name="format" checked={selectedFormat === fmt} onChange={() => setSelectedFormat(fmt)} />
                        <span>{fmt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="filter-group-col">
                  <span className="editorial-label">PRICE</span>
                  <div className="filter-radio-stack">
                    {['All', 'Free', 'Paid'].map(prc => (
                      <label key={prc} className="filter-checkbox-item flex-align gap-2">
                        <input type="radio" name="price" checked={selectedPrice === prc} onChange={() => setSelectedPrice(prc)} />
                        <span>{prc}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="filter-panel-footer flex-between">
                <button className="btn-reset-filters flex-align gap-1" onClick={handleResetFilters}>
                  <RotateCcw size={14} /> Clear Filters
                </button>
                <button className="btn-editorial-primary" onClick={() => setFilterPanelOpen(false)}>
                  APPLY FILTERS ({filteredCourses.length} COURSES)
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: CATEGORIES */}
      <section className="section-space-sm border-top-thin">
        <div className="academia-container">
          <h2 className="section-serif-heading" style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Categories</h2>

          <div className="category-filters-row">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-text-btn ${selectedCategory === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COURSE LISTING */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <h2 className="section-serif-heading">Course Listing</h2>
            <span className="text-xs text-muted font-mono">{filteredCourses.length} COURSES FOUND</span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="empty-courses-state text-center" style={{ padding: '4rem 2rem' }}>
              <h3 className="sub-serif-title">No courses found.</h3>
              <p className="body-editorial-p" style={{ marginBottom: '1.5rem' }}>
                Try adjusting your search query or filter options.
              </p>
              <button className="btn-editorial-primary" onClick={handleResetFilters}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="featured-courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-editorial-card" onClick={() => navigate(`/courses/${course.id}`)}>
                  <div className="course-img-box">
                    <img src={course.image} alt={course.title} className="editorial-img" />
                  </div>
                  <div className="course-content-box">
                    <span className="micro-category-label">{course.categoryLabel}</span>
                    <h3 className="course-serif-title">{course.title}</h3>
                    <p className="course-body-desc">{course.desc}</p>
                    
                    <div className="course-meta-bottom flex-between">
                      <span className="meta-text">
                        {course.instructor} · {course.duration} · <strong>{course.level}</strong> · <span className="text-gold">{course.ratingStr}</span>
                      </span>
                      <span className="btn-view-link">VIEW COURSE →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: TOP RATED COURSES */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <h2 className="section-serif-heading">Top Rated Courses</h2>

          <div className="top-rated-list" style={{ marginTop: '2rem' }}>
            {topRatedCourses.map((item) => (
              <div 
                key={item.id} 
                className="top-rated-row flex-between cursor-pointer"
                onClick={() => navigate(`/courses/${item.id}`)}
              >
                <div className="flex-align gap-4">
                  <span className="ann-num">{item.num}</span>
                  <div>
                    <h3 className="ann-title">{item.title}</h3>
                    <span className="text-xs text-muted">{item.category} • {item.instructor}</span>
                  </div>
                </div>

                <div className="flex-align gap-4">
                  <span className="rating-badge font-serif" style={{ fontSize: '1.2rem', color: '#b49a62' }}>{item.rating}</span>
                  <span className="btn-view-link">VIEW COURSE →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
