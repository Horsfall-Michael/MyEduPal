import { NavLink } from "react-router-dom";
import "./SettingsNav.css";
function SettingsNav() {
  return (
    <nav className="settings-nav">
      <NavLink to="profile-settings">Profile</NavLink>
      <NavLink to="academic-settings">Academic</NavLink>
      <NavLink to="notification-settings">Notifications</NavLink>
      <NavLink to="security-settings">Security</NavLink>
    </nav>
  );
}

export default SettingsNav;