import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, description, checked, onChange }) => {
  return (
    <div className="toggle-container">
      <div className="toggle-info">
        <p className="notification-toggle-label">{label}</p>
        <p className="notification-toggle-description">{description}</p>
      </div>
      <button
        type="button"
        className={`toggle-switch ${checked ? "active" : ""}`}
        onClick={() => onChange(!checked)}
      >
        <span className="toggle-thumb" />
      </button>
    </div>
  );
};
export default ToggleSwitch;
