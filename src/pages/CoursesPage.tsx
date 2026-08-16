import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CoursesPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'ARTS', 'SCIENCE', 'BUSINESS', 'TECHNOLOGY', 'DESIGN', 'RESEARCH', 'LANGUAGE'];

  const allCourses = [
    {
      id: 'arc-118',
      category: 'DESIGN',
      categoryLabel: 'ARCHITECTURE & DESIGN',
      title: 'Spatial Thinking & Environmental Architecture',
      desc: 'A study of space, structure, and the relationship between human experience and built environments.',
      instructor: 'Dr. Leila Haddad',
      duration: '12 weeks',
      level: 'Advanced',
      rating: '4.9 ★',
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
      level: 'Intermediate',
      rating: '4.8 ★',
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
      level: 'Foundation',
      rating: '4.9 ★',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'cs-312',
      category: 'TECHNOLOGY',
      categoryLabel: 'APPLIED AI & COMPUTING',
      title: 'Applied AI & Neural Learning Systems',
      desc: 'Rigorous analysis of deep learning architectures, tensor backpropagation, and cognitive modeling.',
      instructor: 'Prof. David Vance',
      duration: '14 weeks',
      level: 'Advanced',
      rating: '4.8 ★',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'mth-201',
      category: 'SCIENCE',
      categoryLabel: 'MATHEMATICS',
      title: 'Research Methods & Statistical Inference',
      desc: 'Parametric and non-parametric statistical hypothesis testing for empirical research designs.',
      instructor: 'Dr. Amina Vance',
      duration: '12 weeks',
      level: 'Intermediate',
      rating: '4.7 ★',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'ALL' || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const topRatedCourses = [
    { id: 'com-210', num: '01', title: 'Academic Writing & Research Synthesis', rating: '4.9 ★' },
    { id: 'arc-118', num: '02', title: 'Spatial Thinking & Environmental Architecture', rating: '4.9 ★' },
    { id: 'cs-312', num: '03', title: 'Applied AI & Neural Learning Systems', rating: '4.8 ★' }
  ];

  return (
    <div className="academia-page">
      {/* 1. COURSES PAGE HEADER */}
      <section className="courses-hero-header">
        <div className="academia-container">
          <span className="micro-eyebrow">CURRICULUM CATALOG</span>
          <h1 className="hero-serif-title">Study with intention.</h1>
          <p className="hero-lead-desc" style={{ maxWidth: '700px' }}>
            Explore a carefully curated collection of academic courses taught by experienced educators and practitioners.
          </p>
        </div>
      </section>

      {/* 2. MINIMALIST SEARCH & FILTER SECTION */}
      <section className="section-space-sm border-top-thin">
        <div className="academia-container">
          {/* Minimalist Search Input */}
          <div className="search-field-minimal">
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-underline"
            />
            <span className="search-icon-symbol">⌕</span>
          </div>

          {/* Understated Filter Categories */}
          <div className="category-filters-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-text-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LUXURY EDITORIAL COURSE GRID */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
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
                    <span className="meta-text">{course.instructor} · {course.duration}</span>
                    <span className="btn-view-link">VIEW COURSE →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TOP RATED COURSES SECTION */}
      <section className="section-space border-top-thin">
        <div className="academia-container">
          <span className="micro-eyebrow">ACADEMIC BENCHMARKS</span>
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
                  <h3 className="ann-title">{item.title}</h3>
                </div>
                <div className="flex-align gap-4">
                  <span className="rating-badge">{item.rating}</span>
                  <span className="arrow-hover">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
