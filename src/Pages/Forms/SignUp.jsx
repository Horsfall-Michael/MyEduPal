import { Link } from "react-router-dom";
import eclipse_top_left from "../../assets/images/Ellipse-top-left.png";
import eclipse_bottom_right from "../../assets/images/Ellipse 1.png";
import eclipse_bottom_left from "../../assets/images/Ellipse 4.png";
import eclipse_top_right from "../../assets/images/Ellipse 2.png";
import list_icon from "../../assets/images/Frame 7.png";
import arrow_left from "../../assets/images/basil_arrow-up-outline.png";
import arrow_right from "../../assets/images/basil_arrow-up-outline (1).png";
import "./LogIn-SignUp.css";

export function CreateAccount() {
  return (
    <div className="login-form-main-section">
      <div className="left-container">
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
        <h2>Join the Community</h2>

        <p>
          Connect with thousands of Nigerian university students, share notes,
          trade textbooks and study together.
        </p>

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
      <div className="right-container">
        <Link className="back-to-home" to="/">
          <img src={arrow_left} alt="Go back arrow" className="arrow" /> Back to
          Home
        </Link>
        <div className="form">
          <p className="create-account-text">Create your account</p>
          <p className="form-sub-text-2">Join thousands of students who are learning and sharing smarter</p>

          <form className="signin-form">
            <label htmlFor="name">Fullname:</label>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="John Doe"
              className="form-input"
              required
            />
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              name="username"
              placeholder="Classic-John"
              className="form-input"
              required
            />
            <p className="error-message" id="username-error">
              Username already taken
            </p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              required
            />
            <p className="error-message" id="email-already-exists-error">
              This email has already been used.
            </p>
            <p className="error-message" id="Invalid-email-error">
              Invalid or incorrect email.
            </p>
            <label>University (optional)</label>
            <input
              type="text"
              id="university"
              name="university"
              placeholder="Lagos State University"
              className="form-input"
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
            <button type="submit" className="submit-button create-acct-btn login-form-button">
              Create Account
              <img src={arrow_right} className="arrow" />
            </button>
            <p className="sign-up-link">
              Already have an account?
              <span className="highlight">
                <Link to="/">Sign In</Link>
              </span>
            </p>
            <p className="or">Or</p>

            <button className="google-signin login-form-button">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
