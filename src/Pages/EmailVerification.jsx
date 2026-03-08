import { Link } from "react-router-dom";
import eclipse_top_left from "../assets/images/Ellipse-top-left.png";
import eclipse_bottom_right from "../assets/images/Ellipse 1.png";
import eclipse_bottom_left from "../assets/images/Ellipse 4.png";
import eclipse_top_right from "../assets/images/Ellipse 2.png";
import "./EmailVerification.css";

export function VerifyEmail() {
  return (
    <div className="main-section">
      <img
        src={eclipse_top_left}
        alt="Eclipse"
        className="eclipse-image-top-left"
      />
      <img
        src={eclipse_top_right}
        alt="Eclipse"
        className="eclipse-image-top-right"
      />
      <img
        src={eclipse_bottom_left}
        alt="Eclipse"
        className="eclipse-image-bottom-left"
      />
      <img
        src={eclipse_bottom_right}
        alt="Eclipse"
        className="eclipse-image-bottom-right"
      />
      <div className="verification-form">
        <h1 className="title">Verify your email</h1>

        <p className="subtext">
          We've sent a verification link to your email
         <br />
          Please check your inbox to continue
        </p>
        <div className="email-input">
          <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="form-input email-input-box"
          required
        />
        </div>
        
        <p className="change-email">
          <Link to="/forgot-password">Change email</Link>
        </p>
        <button type="submit" className="resend-button">
          Resend email
        </button>
        <button type="button" className="back-to-sign-in-btn">
          Back to Sign in
        </button>
      </div>
    </div>
  );
}
