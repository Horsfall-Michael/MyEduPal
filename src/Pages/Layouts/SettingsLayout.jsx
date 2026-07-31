import profileImage from "../../assets/Ellipse 12.png";
import { Outlet } from "react-router-dom";
import SettingsNav from "../../Components/layout/SettingsNav";
import { useProfile } from "../../Pages/ProfileProvider"
import "./SettingsLayout.css";
function SettingsLayout() {
  const { profile } = useProfile();
  
  return (
    <div className="settings-layout">
      <div>
        <h1 className="settings-header">Settings</h1>
        <p>Manage your EduPal profile and app preferences.</p>
      </div>

      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2 className="profile-name">{profile.username}</h2>
          <p className="profile-bio">{profile.bio}</p>

          <div className="profile-actions">
            <button className="change-photo-btn">Change photo</button>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
      </div>
      <SettingsNav />

      <section className="settings-content">
        <Outlet />
      </section>
    </div>
  );
}

export default SettingsLayout;
