import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <span className="highlight">MyEdu</span>Pal
        </div>

        <ul className="nav-links">
          <Link to="/">
            <li className="navlink">Notes</li>
          </Link>
          <Link to="/">
            <li className="navlink">Market place</li>
          </Link>
          <Link to="/">
            <li className="navlink">Community</li>
          </Link>
          <Link to="/">
            <li className="navlink">Study Groups</li>
          </Link>
        </ul>

        <div className="nav-cta">
          <Link to="/log-in">
            <button className="login-btn nav-btn">Log In</button>
          </Link>

          <Link to="/sign-up">
            <button className="signin-btn nav-btn">Sign In</button>
          </Link>
        </div>

        <button onClick={toggleMenu} className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={`hamburger-nav ${isOpen ? "open" : ""}`}>
        <ul className="hamburger-nav-links">
          <Link to="/">
            <li className="hamburger-navlink">Notes</li>
          </Link>
          <Link to="/">
            <li className="hamburger-navlink">Market place</li>
          </Link>
          <Link to="/">
            <li className="hamburger-navlink">Community</li>
          </Link>
          <Link to="/">
            <li className="hamburger-navlink">Study Groups</li>
          </Link>
          <Link to="/">
            <li className="hamburger-navlink">Log In</li>
          </Link>
          <Link to="/">
            <li className="hamburger-navlink">Sign Up</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
