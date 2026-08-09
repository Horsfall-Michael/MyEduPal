import { formatDistanceToNowStrict, isValid } from "date-fns";
import peopleIcon2 from "../../assets/images/formkit_people (1).png";
import downloadIcon from "../../assets/images/download.svg";
import shareIcon from "../../assets/images/share.svg";

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
          <p className="time-stamp">{formatTimeAgo(activity.created_at)}</p>
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
          <p className="time-stamp">{formatTimeAgo(activity.created_at)}</p>
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
          <p className="time-stamp">{formatTimeAgo(activity.created_at)}</p>
        </span>
      </div>
    );
  }

  if (activity.type === "message") {
    return (
      <div className="recent-activity-item dashboard-list-style">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="recent-activity-icon"
        >
          <path
            d="M2.88675 14.0233C1.66675 13.0475 1.66675 12.3092 1.66675 9.16667C1.66675 6.02417 1.66675 4.4525 2.88675 3.47667C4.10841 2.5 6.07175 2.5 10.0001 2.5C13.9284 2.5 15.8926 2.5 17.1126 3.47667C18.3326 4.45333 18.3334 6.02417 18.3334 9.16667C18.3334 12.3092 18.3334 13.0475 17.1126 14.0233C15.8934 15 13.9284 15 10.0001 15C7.90841 15 6.83341 16.4483 5.00008 17.5V14.8233C4.08841 14.6875 3.41758 14.4483 2.88675 14.0233Z"
            fill="#1B357E"
            stroke="#1B357E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="activity-description">
          {activity.description}
          <p className="time-stamp">{formatTimeAgo(activity.created_at)}</p>
        </span>
      </div>
    );
  }
  return (
    <div className="recent-activity-item">
      <span className="activity-description">
        {activity.description}
        <p className="time-stamp">{activity.created_at}</p>
      </span>
    </div>
  );
}
