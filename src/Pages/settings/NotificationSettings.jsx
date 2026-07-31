import {useState} from "react"
import ToggleSwitch from "../../components/ui/Toggleswitch";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    peerSuggestions: true,
    groupChats: true,
    materialDownload:true,
    resourceRecommendation:false
  });

  return (
    <div>
      <h1 className="settings-header">App Notification</h1>
      <p>Toggle alerts for various activities within the ecosystem.</p>

      <div>
        <div className="notification-setting-container">
          <ToggleSwitch
              label="New Study Partner Suggestions"
              description="Get notified when AI finds a match."
              checked={settings.peerSuggestions}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  peerSuggestions: value,
                }))
              }
            />

            <ToggleSwitch
              label="Group Chat Messages"
              description="Receive notifications for new messages on active group chats."
              checked={settings.groupChats}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  groupChats: value,
                }))
              }
            />
            
            <ToggleSwitch
              label="Material Download Alerts"
              description="Know when notes have been dowloaded."
              checked={settings.materialDownload}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  materialDownload: value,
                }))
              }
            />

            <ToggleSwitch
              label="Resource Recommendation"
              description="Get notified of textbook deals."
              checked={settings.resourceRecommendation}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  resourceRecommendation: value,
                }))
              }
            />
        </div>
      </div>
      <div className="btn-container academic-settings-button-container">
        <button className="save-settings-btn outside-save-settings-button" type="submit">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
