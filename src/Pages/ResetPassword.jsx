import eclipse_top_left from "../assets/images/Ellipse-top-left.png";
import eclipse_bottom_right from "../assets/images/Ellipse 1.png";
import eclipse_bottom_left from "../assets/images/Ellipse 4.png";
import eclipse_top_right from "../assets/images/Ellipse 2.png";
import "./ResetPassword.css";

export function ResetPassword() {
  return (
    <div className="main-section">
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
      <div className="reset-form ">
        <h1 className="title">Reset Password</h1>

        <div className="password-input">
          <label htmlFor="password">New password:</label>
          <input
            type="password"
            id="new-password"
            name="password"
            placeholder="Enter your new password"
            className="password-input-box"
            required
          />
        </div>

          <div className="password-input">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="new-password"
            name="password"
            placeholder="Confirm your new password"
            className="password-input-box"
            required
          />
        </div>

        <button type="submit" className="reset-button reset-form-button">
          Reset password
        </button>
        <button type="button" className="cancel-button reset-form-button">
          Cancel
        </button>
      </div>
    </div>
  );
}
