import { useState, useEffect } from 'react';

export type UserRole = 'student' | 'teacher' | 'admin' | null;

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  studentId?: string;
  institution?: string;
  department?: string;
  expertise?: string;
  program?: string;
  adminId?: string;
}

const AUTH_STORAGE_KEY = 'academia_auth_user_v3';

export const DEFAULT_STUDENT_USER: AuthUser = {
  id: 'stu-9821',
  name: 'Amina Rahman',
  email: 'amina.rahman@academic.edu',
  role: 'student',
  studentId: 'STU-2026-9821',
  program: 'B.Arch Spatial Design',
  avatar: 'AR'
};

export const DEFAULT_TEACHER_USER: AuthUser = {
  id: 'tch-4401',
  name: 'Dr. Leila Haddad',
  email: 'leila.haddad@academic.edu',
  role: 'teacher',
  institution: 'Academic Institute of London',
  department: 'Architecture & Spatial Design',
  expertise: 'Spatial Geometry & Pedagogy',
  avatar: 'LH'
};

export const DEFAULT_ADMIN_USER: AuthUser = {
  id: 'adm-0001',
  name: 'System Administrator',
  email: 'admin@academic.edu',
  role: 'admin',
  adminId: 'ADM-SEC-001',
  avatar: 'AD'
};

export function getStoredUser(): AuthUser | null {
  try {
    const data = localStorage.getItem(AUTH_STORAGE_KEY);
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error loading auth user', e);
  }
  return null;
}

export function setStoredUser(user: AuthUser | null) {
  try {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch (e) {
    console.error('Error saving auth user', e);
  }
}
