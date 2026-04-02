import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase-client.js";

import "./ConfirmEmailModal.css";

export function ConfirmEmailModal({ isOpen, onClose, email }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleResend = async () => {
    await supabase.auth.resend({
      type: "signup",
      email,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Verify your email</h2>

        <p className="modal-text">
          We’ve sent a confirmation link to <strong>{email}</strong>.
          <br />Please check your inbox (and spam folder).
        </p>

        <button className="resend-email-button" onClick={handleResend}>
          Resend Email
        </button>

        <button
          className="go-to-login-button"
          onClick={() => {
            onClose();
            navigate("/log-in");
          }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
