import {Link} from "react-router-dom";
import "./Header.css";

export function Header() {
  return(
    <>
    <div className="navbar">
      <div className="logo"><span className="highlight">MyEdu</span>Pal</div>

      <ul className="nav-links">
        <Link to="/"><li className="navlink">Notes</li></Link>
        <Link to="/"><li className="navlink">Market place</li></Link>
        <Link to="/"><li className="navlink">Community</li></Link>
        <Link to="/"><li className="navlink">Study Groups</li></Link>
      </ul>

      <div className="nav-cta">
        <Link to="/log-in"><button className="login-btn nav-btn">Log In</button></Link>
      
       <Link to="/sign-up"><button className="signin-btn nav-btn">Sign In</button></Link>
      </div>
    </div>

    
    </>
  )
}