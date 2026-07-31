import {useState} from "react"
import { useProfile } from "../ProfileProvider";
import { DUMMY_PROFILE } from "../../components/UserData";
import "./Settings.css";

const Academicsettings = () => {
  const { profile, saveProfile } = useProfile();
  const [formData, setFormData] = useState(profile);
  const university = formData.university;
  const level = formData.level;

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
    <div>
      <h2 className="settings-header">Academic Details</h2>
      <p>Keep your school information up to date for better peer matching.</p>
      <form  className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-name-flex">
        <div className="settings-label-container">
          <label className="settings-form-label form-label">University:</label>
          <input
            name="fullname"
            className="settings-form-input form-input settings-fullname-input"
            value={university}
            onChange={handleChange}
          ></input>
        </div>
        <div className="settings-label-container">
          <label className="settings-form-label form-label">Level:</label>
          <input
            name="username"
            className="settings-form-input form-input"
            value={level}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      </form>
      <div className="btn-container academic-settings-button-container">
        <button className="save-settings-btn outside-save-settings-button" type="submit">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Academicsettings