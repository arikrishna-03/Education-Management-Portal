import { useState, useEffect } from 'react';

export interface EnrolledCourseData {
  courseId: string;
  title: string;
  category: string;
  instructor: string;
  progress: number;
  grade: string;
  attendancePct: number;
  assignmentsCompleted: number;
  totalAssignments: number;
  image: string;
}

export const INITIAL_ENROLLED_COURSES: EnrolledCourseData[] = [
  {
    courseId: 'arc-118',
    title: 'Spatial Thinking & Environmental Architecture',
    category: 'Architecture & Design',
    instructor: 'Dr. Leila Haddad',
    progress: 68,
    grade: 'A-',
    attendancePct: 92,
    assignmentsCompleted: 8,
    totalAssignments: 10,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  }
];

const LOCAL_STORAGE_KEY = 'academia_enrolled_courses_v1';

export function getStoredEnrolledCourses(): EnrolledCourseData[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error loading enrolled courses', e);
  }
  return INITIAL_ENROLLED_COURSES;
}

export function saveEnrolledCourses(courses: EnrolledCourseData[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(courses));
  } catch (e) {
    console.error('Error saving enrolled courses', e);
  }
}

export function isCourseEnrolled(courseId: string): boolean {
  const courses = getStoredEnrolledCourses();
  return courses.some(c => c.courseId === courseId);
}

export function enrollInCourse(courseData: EnrolledCourseData): EnrolledCourseData[] {
  const courses = getStoredEnrolledCourses();
  if (!courses.some(c => c.courseId === courseData.courseId)) {
    const updated = [...courses, courseData];
    saveEnrolledCourses(updated);
    return updated;
  }
  return courses;
}
