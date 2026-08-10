import { formatDistanceToNowStrict, isValid } from "date-fns";
import peopleIcon2 from "../../assets/images/formkit_people (1).png";
import downloadIcon from "../../assets/images/download.svg";
import shareIcon from "../../assets/images/share.svg";
import messageIcon from "../../assets/images/message-icon.svg";
export function ActivityItem({ activity }) {
  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return "Unknown time";

    const date = new Date(timestamp);
    if (!isValid(date)) return "Invalid date";

    const formatted = formatDistanceToNowStrict(date, { addSuffix: true });

    if (formatted.includes("second")) return "just now";

    return formatted;
  };

  if (activity.type === "download") {
    return (
      <div className="recent-activity-item dashboard-list-style">
        <img
          src={downloadIcon}
          className="recent-activity-icon"
          alt="download activity"
        />
        <span className="activity-description">
          {activity.description}
          <p className="time-stamp">{formatTimeAgo(activity.timestamp)}</p>
        </span>
      </div>
    );
  }

  if (activity.type === "group") {
    return (
      <div className="recent-activity-item dashboard-list-style">
        <img
          src={peopleIcon2}
          className="recent-activity-icon"
          alt="group activity"
        />
        <span className="activity-description">
          {activity.description}
          <p className="time-stamp">{formatTimeAgo(activity.timestamp)}</p>
        </span>
      </div>
    );
  }

  if (activity.type === "shared") {
    return (
      <div className="recent-activity-item dashboard-list-style">
        <img src={shareIcon} className="recent-activity-icon" alt=" activity" />
        <span className="activity-description">
          {activity.description}
          <p className="time-stamp">{formatTimeAgo(activity.timestamp)}</p>
        </span>
      </div>
    );
  }

  if (activity.type === "message") {
    return (
      <div className="recent-activity-item dashboard-list-style">
         <img src={messageIcon} className="recent-activity-icon" alt=" message activity" />
        <span className="activity-description">
          {activity.description}
          <p className="time-stamp">{formatTimeAgo(activity.timestamp)}</p>
        </span>
      </div>
    );
  }
  return (
    <div className="recent-activity-item">
      <span className="activity-description">
        {activity.description}
        <p className="time-stamp">{activity.timestamp}</p>
      </span>
    </div>
  );
}
