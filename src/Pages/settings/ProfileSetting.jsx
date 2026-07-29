import {useState} from "react"
import { useProfile } from "../ProfileProvider";
import { DUMMY_PROFILE } from "../../components/UserData";
import "./Settings.css";
const ProfileSetting = () => {
  const { profile, saveProfile } = useProfile();
  const [formData, setFormData] = useState(profile);
  const fullName = formData.fullname;
  const userName = formData.username;
  const email = formData.email;
  const bio = formData.bio;

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProfile(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <div className="settings-name-flex">
        <div className="settings-label-container">
          <label className="settings-form-label form-label">Full Name:</label>
          <input
            name="fullname"
            className="settings-form-input form-input settings-fullname-input"
            value={fullName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="settings-label-container">
          <label className="settings-form-label form-label">Username:</label>
          <input
            name="username"
            className="settings-form-input form-input"
            value={userName}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="settings-label-container">
        <label className="settings-form-label form-label">Email:</label>
        <input
          name="email"
          className="settings-form-input form-input"
          value={email}
          onChange={handleChange}
        ></input>
      </div>
      <div className="settings-label-container">
        <label className="settings-form-label form-label">Bio:</label>
        <input
          name="bio"
          className="settings-form-input form-input"
          value={bio}
          onChange={handleChange}
        ></input>
      </div>
      <div className="btn-container">
        <button className="save-settings-btn" type="submit">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileSetting;
