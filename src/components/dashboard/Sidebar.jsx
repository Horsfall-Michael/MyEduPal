import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/images/group.svg";
import noteIcon from "../../assets/images/solar_notes-outline.svg";
import peopleIcon from "../../assets/images/people-icon.svg";
import shoppingIcon from "../../assets/images/shopping-bag-icon.svg";
import messageIcon from "../../assets/images/message-icon.svg";
import settingsIcon from "../../assets/images/setting.svg";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">MyEdu<span className="sidebar-logo-highlight">Pal</span></h1>

      <div className="sidebar-links">
        <NavLink to="/dashboard" end>
         <img src={homeIcon} alt="icon" className="sidebar-links-icon"/>
         <span>Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/notes-&-questions">
        <img src={noteIcon} alt="icon" className="sidebar-links-icon"/>
        <span>Notes and Questions</span>
        </NavLink>

        <NavLink to="/dashboard/textbook-store">
        <img src={shoppingIcon} alt="icon" className="sidebar-links-icon"/>
        <span>Textbook Store</span>
        </NavLink>

        <NavLink to="/dashboard/peer-matching">
        <img src={peopleIcon} alt="icon" className="sidebar-links-icon"/>
        <span>Peer Matching</span>
        </NavLink>

        <NavLink to="/dashboard/study-groups">
        <img src={messageIcon} alt="icon" className="sidebar-links-icon"/>
        <span>Study Groups</span>
        </NavLink>
      </div>
      <NavLink to="/dashboard/settings" className="sidebar-settings-link">
        <img src={settingsIcon} alt="icon" className="sidebar-links-icon"/>
        <span>Settings</span>
      </NavLink>
    </aside>
  );
}
