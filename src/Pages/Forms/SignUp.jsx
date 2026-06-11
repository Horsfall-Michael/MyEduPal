import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase-client.js";
import { ConfirmEmailModal } from "./ConfirmEmailModal.jsx";
import eclipse_top_left from "../../assets/images/Ellipse-top-left.png";
import eclipse_bottom_right from "../../assets/images/Ellipse 1.png";
import eclipse_bottom_left from "../../assets/images/Ellipse 4.png";
import eclipse_top_right from "../../assets/images/Ellipse 2.png";
import list_icon from "../../assets/images/Frame 7.png";
import arrow_left from "../../assets/images/basil_arrow-up-outline.png";
import arrow_right from "../../assets/images/basil_arrow-up-outline (1).png";
import "./LogIn-SignUp.css";

export function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSignupErrorMessage = (error) => {
    if (!error) return "";

    if (error.message.includes("User already registered")) {
      return "This email is already in use.";
    }

    if (error.message.includes("Password should")) {
      return "Password must be at least 6 characters.";
    }

    if (error.message.includes("invalid format")) {
      return "Please enter a valid email.";
    }

    if (error.message.includes("Failed to fetch")) {
      return "Network error. Check your connection.";
    }

    if (error.message.includes("violates row-level security")) {
      return "Internal error. Please try again later.";
    }

    return "Something went wrong. Try again.";
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
            university: university,
          },
        },
      });

      if (error) {
        setErrorMsg(getSignupErrorMessage(error));
        console.log("Signup Error:", error.message);
        return;
      }

      const user = data.user;

      if (!data.session) {
        setIsModalOpen(true);
        return;
      }

      const { error: insertError } = await supabase.auth.signUp(
        {
          id: user.id,
          name,
          email: user.email,
          university,
        },
      );

      if (insertError) {
        console.log(insertError);
        setErrorMsg("Failed to save user data.");
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setErrorMsg("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-main-section">
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
          <p className="form-sub-text-2">
            Join thousands of students who are learning and sharing smarter
          </p>

          <form className="signin-form" onSubmit={handleSignUp}>
            <label htmlFor="name">Fullname:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="fullname"
              placeholder="John Doe"
              className="form-input"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
              required
            />
            <label>University (optional)</label>
            <input
              type="text"
              id="university"
              name="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="Lagos State University"
              className="form-input"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-input"
              required
            />
            <p className="error-message" id="email-already-exists-error">
              {errorMsg}
            </p>
            <button
              type="submit"
              disabled={loading}
              className="submit-button create-acct-btn"
            >
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <img src={arrow_right} className="arrow" />}
            </button>
            <p className="sign-up-link">
              Already have an account?
              <span className="highlight">
                <Link to="/log-in">Sign In</Link>
              </span>
            </p>
            <p className="or">Or</p>

            <button className="google-signin login-form-button" type="button">
              Continue with Google
            </button>
          </form>
          <ConfirmEmailModal
           isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
           email={email}
          />
        </div>
      </div>
    </div>
  );
}
