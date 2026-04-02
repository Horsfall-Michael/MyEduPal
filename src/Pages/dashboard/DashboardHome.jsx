import { formatDistanceToNow } from "date-fns";
import { user } from "../../components/data.js";
import noteIcon from "../../assets/images/solar_notes-outline.svg";
import peopleIcon from "../../assets/images/people-icon.svg";
import peopleIcon2 from "../../assets/images/formkit_people (1).png";
import clockIcon from "../../assets/images/mdi_clock-outline.svg";
import streakIcon from "../../assets/images/solar_fire-broken.svg";
import shareIcon from "../../assets/images/share.svg";
import downloadIcon from "../../assets/images/download.svg";
import vectorIcon from "../../assets/images/Vector.svg";

import "./DashboardHome.css";
function DashboardHome() {

  
  const renderActivity = (activity) => {
    if (activity.type === "download") {
      return (
        <div className="recent-activity-item dashboard-list-style">
          <img src={downloadIcon} className="recent-activity-icon" />
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
          <img src={peopleIcon2} className="recent-activity-icon" />
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
          <img src={shareIcon} className="recent-activity-icon" />
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
            <p className="time-stamp">{formatTimeAgo(activity.timestamp)}</p>
          </span>
        </div>
      );
    }
    return (
      <div className="recent-activity-item">
        <span className="activity-description">
          {activity.description}
          <p className="time-stamp">1 hour ago</p>
        </span>
      </div>
    );
  };

  const renderRecentMatch = (match) => {
    return (
      <div className="dashboard-list-style">
        <img src={match.image} className="match-image" />
        <div>
          <p className="match-name">{match.name}</p>
          <p className="match-details">
            {match.school} <span className="match-course">{match.course}</span>
          </p>
        </div>
        <img src={vectorIcon} alt="icon" className="vector-icon" />
      </div>
    );
  };
  const formatTimeAgo = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  const maxHours = user.dailyHoursGoal;

  const weeklyHours = Object.values(user.dailyHours).reduce(
    (total, hours) => total + hours,
    0,
  );

  const daysOrder = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

  const days = daysOrder.map((day) => {
    return [day, user.dailyHours[day] || 0];
  });
  return (
    <>
      <main className="dashboard-home-container">
        <div className="dashboard-home-container-intro">
          <div>
            <h1 className="dashboard-heading">Welcome back, {user.username}</h1>
          </div>
          <div className="dashboard-level-container">
            <p className="dashboard-level">
              {user.level}lv-<span>{user.department}</span>
            </p>
            <p className="dashboard-school"> {user.schoolAbreviation}</p>
          </div>
        </div>
        <p className="dasboard-heading-subtext">
          Here's a quick overview of your dashboard activities and updates.
        </p>

        <div className="dashboard-summary">
          <div className="dashboard-summary-flex-card">
            <div className="summary-card-title">
              <img src={noteIcon} alt="icon" />
              <span>Notes Saved</span>
            </div>
            <p className="summary-flex-card-main-digit">
              {user.totalNotesSaved}
            </p>
            <p className="summary-flex-card-green-text">
              Plus {user.notesSavedThisweek} this week
            </p>
          </div>

          <div className="dashboard-summary-flex-card">
            <div className="summary-card-title">
              <img src={peopleIcon} alt="icon" />
              <span>Study Group</span>
            </div>
            <p className="summary-flex-card-main-digit">{user.groupsJoined}</p>
            <p className="summary-flex-card-green-text">
              {user.groupActiveStatus} Member
            </p>
          </div>

          <div className="dashboard-summary-flex-card">
            <div className="summary-card-title">
              <img src={clockIcon} alt="icon" />
              <span>Study Hours</span>
            </div>
            <p className="summary-flex-card-main-digit">{user.weeklyHours}</p>
            <p className="summary-flex-card-green-text">
              Plus {weeklyHours}hrs this week
            </p>
          </div>

          <div className="dashboard-summary-flex-card">
            <div className="summary-card-title">
              <img src={streakIcon} alt="icon" />
              <span>Streak</span>
            </div>
            <p className="summary-flex-card-main-digit">{user.activeStreak}</p>
            <p className="summary-flex-card-green-text">Days Active</p>
          </div>
        </div>
        <div className="dashboard-overview-container">
          <div className="dashboard-overview-container-top-flex">
            <div className="dashboard-overview-card">
              <h2 className="dashboard-overview-title">Recent Activities</h2>
              <ul className="dashboard-overview-list">
                {user.recentActivities.map((activity) => (
                  <li key={activity.id}>{renderActivity(activity)}</li>
                ))}
              </ul>
            </div>

            <div className="weekly-activity-card">
              <div className="weekly-activity-card-title-container">
                <h2 className="dashboard-overview-title">Weekly Activity</h2>
                <p>Last 7 days</p>
              </div>

              <div className="chart">
                <div className="bars">
                  {days.map(([day, hours]) => {
                    const heightPercent = (hours / maxHours) * 100;

                    return (
                      <div
                        key={day}
                        className="bar"
                        style={{ height: `${heightPercent}%` }}
                      >
                        <span>{day.toUpperCase()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="recent-matches dashboard-overview-card">
            <h2 className="dashboard-overview-title">Recent Matches</h2>
            <ul className="dashboard-overview-list">
              {user.recentMatches.map((match) => (
                <li key={match.userId}>{renderRecentMatch(match)}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardHome;
