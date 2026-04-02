import React from "react";
import "./ConfirmEmailModal.css";
export function ConfirmEmailModal({ isOpen, onClose }) {
  if (!isOpen) return null; 
  return (
    <div className="modal-overlay">
      <div className="modal-container">

        <h2 className="modal-title">Check your email</h2>
        <p className="modal-text">
          We’ve sent a confirmation link to your email. Please verify your
          account before logging in.
        </p>

        <button className="modal-button" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
