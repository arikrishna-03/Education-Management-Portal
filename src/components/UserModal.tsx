import React from 'react';
import { X, ShieldCheck, Mail, Building, LogOut, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface UserProfileModalProps {
  user: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  user,
  isOpen,
  onClose,
  onSignOut
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box modal-md" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title-box">
            <ShieldCheck className="text-indigo" size={24} />
            <div>
              <h2 className="modal-title">Administrator Account Profile</h2>
              <p className="modal-subtitle">Academic Hub Institutional Credentials & Privileges</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="profile-modal-body">
          <div className="profile-banner-card">
            <img src={user.avatar} alt={user.name} className="profile-avatar-xl" />
            <div>
              <h3 className="profile-name-lg">{user.name}</h3>
              <p className="profile-role-badge flex-align gap-1">
                <ShieldCheck size={14} /> {user.role}
              </p>
              <p className="profile-dept-text flex-align gap-1">
                <Building size={14} /> {user.department}
              </p>
            </div>
          </div>

          <div className="card-panel-inner" style={{ marginTop: '1.2rem' }}>
            <h4 className="detail-section-title">System Privileges & Permissions</h4>
            <ul className="privilege-list">
              <li><CheckCircle2 size={16} className="text-emerald" /> Full Executive Curriculum Access & Course Directory Editing</li>
              <li><CheckCircle2 size={16} className="text-emerald" /> AI Risk Diagnostics & Mentoring Touchpoint Allocation</li>
              <li><CheckCircle2 size={16} className="text-emerald" /> Institutional Performance Report Compilation & PDF/CSV Export</li>
              <li><CheckCircle2 size={16} className="text-emerald" /> Master Academic Calendar Administration & Room Allocations</li>
            </ul>
          </div>

          <div className="modal-footer" style={{ marginTop: '1.5rem', padding: 0 }}>
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
            <button className="btn-secondary text-crimson" onClick={onSignOut}>
              <LogOut size={16} /> Sign Out of Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SignOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const SignOutModal: React.FC<SignOutModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box modal-sm" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title text-crimson flex-align gap-2">
            <LogOut size={20} /> Confirm Sign Out
          </h3>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <p className="text-muted text-sm" style={{ padding: '1rem 0' }}>
          Are you sure you want to end your current session as <strong>Amina Rahman (Academic Administrator)</strong>? Unsaved draft changes will be stored locally.
        </p>
        <div className="modal-footer" style={{ padding: 0 }}>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" style={{ backgroundColor: '#ef4444', borderColor: '#ef4444' }} onClick={onConfirm}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
