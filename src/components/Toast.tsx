import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-card toast-${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' && <CheckCircle2 size={20} className="text-emerald" />}
            {toast.type === 'error' && <AlertCircle size={20} className="text-crimson" />}
            {toast.type === 'info' && <Info size={20} className="text-indigo" />}
          </div>
          <div className="toast-content">
            <h4 className="toast-title">{toast.title}</h4>
            {toast.message && <p className="toast-desc">{toast.message}</p>}
          </div>
          <button className="toast-close-btn" onClick={() => onDismiss(toast.id)}>
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
