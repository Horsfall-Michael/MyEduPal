import { Link } from "react-router-dom";
import eclipse_top_left from "../assets/images/Ellipse-top-left.png";
import eclipse_bottom_right from "../assets/images/Ellipse 1.png";
import eclipse_bottom_left from "../assets/images/Ellipse 4.png";
import eclipse_top_right from "../assets/images/Ellipse 2.png";
import list_icon from "../assets/images/Frame 7.png";
import arrow_left from "../assets/images/basil_arrow-up-outline.png";
import arrow_right from "../assets/images/basil_arrow-up-outline (1).png";
import "./LogIn.css";

export function LogIn() {
  return (
    <div className="login-page">
      <div className="welcome-container">
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
        <h2>Welcome Back!</h2>

        <p>Your study groups, notes and marketplace are waiting for you.</p>

        <ul className="benefits-list">
          <li>
            {" "}
            <img src={list_icon} alt="List icon" className="list-icon" />
            Access notes from multiple universities
          </li>
          <li>
            <img src={list_icon} alt="List icon" className="list-icon" />
            Join study groups and connect with peers
          </li>
          <li>
            <img src={list_icon} alt="List icon" className="list-icon" />
            Buy and sell textbooks and study materials
          </li>
        </ul>

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
      </div>
      <div className="login-container">
        <Link className="back-to-home" to="/">
        <img src={arrow_left} alt="Go back arrow" className="arrow"
        />  Back to Home
        </Link>
        <div className="login-form">
          <h2>
            <span className="highlight">MyEdu</span>Pal
          </h2>
          <p className="sign-in-text">Sign in to your account</p>
          <p>Log back in to access your notes, groups and textbooks</p>

          <form className="signin-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              required
              
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
              required
            />
            <p className="forgot-password-link">
              <Link to="/forgot-password">Forgot your password?</Link>
            </p>
            <button type="submit" className="submit-button">Sign In
              <img
              src={arrow_right} 
              className="arrow"
              />
            </button>
            <p className="sign-up-link">
              Don't have an account?
              <span className="highlight">
                <Link to="/sign-up">Sign Up</Link>
              </span>
            </p>
            <p className="or">Or</p>
            
            <button type="button" className="google-signin">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
