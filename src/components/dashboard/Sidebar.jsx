import { NavLink } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/dashboard" end>
        Dashboard
      </NavLink>

      <NavLink to="/dashboard/profile">
        Profile
      </NavLink>

      <NavLink to="/dashboard/settings">
        Settings
      </NavLink>
    </aside>
  );
}