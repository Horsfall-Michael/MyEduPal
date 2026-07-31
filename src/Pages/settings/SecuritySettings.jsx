import { NavLink } from "react-router-dom";

const SecuritySettings = () => {
  return (
    <div>
      <h2 className="settings-header">Password & Security</h2>
      <p>Secure your Edupal account with a strong password.</p>

      <NavLink to="/change-password">
        <div className="security-setting-container">
          <div>
            <h2 className="settings-title">Change your password</h2>
            <p>Change your password at any time</p>
          </div>  
          <p className="greater-than">{">"}</p>
        </div>
      </NavLink>

      <div className="security-setting-container">
        <div>
          <h2 className="settings-title">Two Factor Authentication</h2>
          <p>Setup two factor authentication to keep your acoount protected</p>
        </div>
        <p className="greater-than">{">"}</p>
      </div>

      <div className="security-setting-container">
        <div>
          <h2 className="settings-title">Deactivate your account</h2>
          <p>Find out how you can deactivate your account</p>
        </div>
        <p className="greater-than">{">"}</p>
      </div>

      <div className="btn-container academic-settings-button-container">
        <button
          className="log-out-button "
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;
