import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase-client.js";

import eclipse_top_left from "../../assets/images/Ellipse-top-left.png";
import eclipse_bottom_right from "../../assets/images/Ellipse 1.png";
import eclipse_bottom_left from "../../assets/images/Ellipse 4.png";
import eclipse_top_right from "../../assets/images/Ellipse 2.png";
import list_icon from "../../assets/images/Frame 7.png";
import arrow_left from "../../assets/images/basil_arrow-up-outline.png";
import arrow_right from "../../assets/images/basil_arrow-up-outline (1).png";
import "./LogIn-SignUp.css";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      console.log("Data received:", data);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMsg("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log("Google login error:", error.message);
      return;
    } else {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/dashboard",
        },
      });
      console.log("Google login data:", data);
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
      <div className="right-container">
        <Link className="back-to-home" to="/">
          <img src={arrow_left} alt="Go back arrow" className="arrow" /> Back to
          Home
        </Link>
        <div className="form">
          <h2>
            <span className="highlight">MyEdu</span>Pal
          </h2>
          <p className="form-sub-text">Sign in to your account</p>
          <p className="form-sub-text-2">
            Log back in to access your notes, groups and textbooks
          </p>

          <form className="signin-form" onSubmit={handleLogin}>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
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
            <label htmlFor="password" className="form-label" >Password:</label>
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
            <p className="forgot-password-link">
              <Link to="/reset-password">Forgot your password?</Link>
            </p>
            {errorMsg &&<div className="error"> <p>{errorMsg}</p></div>}

            <button
              type="submit"
              className="submit-button login-form-button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In "}
              {!loading && <img src={arrow_right} className="arrow" />}
            </button>
            <p className="sign-up-link">
              Don't have an account?
              <span className="highlight">
                <Link to="/sign-up">Sign Up</Link>
              </span>
            </p>
            <p className="or">Or</p>

            <button
              className="google-signin login-form-button"
              type="button"
              onClick={handleGoogleLogin}
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
