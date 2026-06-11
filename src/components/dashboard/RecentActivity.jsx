import { ActivityItem } from "./RenderActivity";
import "./RecentActivity.css"

export default function RecentActivities({ activities }) {
  return (
    <div className="dashboard-overview-card">
      <h2 className="dashboard-overview-title">
        Recent Activities
      </h2>

      <ul className="dashboard-overview-list">
        {activities.length ? (
          activities.map((activity) => (
            <li key={activity.id}>
              <ActivityItem activity={activity} />
            </li>
          ))
        ) : (
          <li>No recent activities.</li>
        )}
      </ul>
    </div>
  );
}