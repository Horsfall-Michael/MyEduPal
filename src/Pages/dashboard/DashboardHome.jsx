import "./DashboardHome.css";
import DashboardLoader from "../../components/dashboard/DashboardLoader";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardSummary from "../../components/dashboard/DashboardSummary";
import RecentActivities from "../../components/dashboard/RecentActivity";
import WeeklyActivityChart from "../../components/dashboard/WeeklyActivityChart";
import RecentMatches from "../../components/dashboard/RecentMatches";
import { useDashboardData } from "../../components/dashboard/useDashboardData.js";
import { useProfile } from "../../Pages/ProfileProvider.jsx";

function DashboardHome() {
  const { profile } = useProfile();
  
  const {
    stats,
    activities,
    matches,
    weeklyHours,
    loading,
  } = useDashboardData();

  if (loading) {
    return <DashboardLoader />;
  }

  return (
    <main className="dashboard-home-container">
      <DashboardHeader profile={profile} />

      <DashboardSummary stats={stats} />

      <div className="dashboard-overview-container">
        <div className="dashboard-overview-container-top">
          <RecentActivities activities={activities} />

          <WeeklyActivityChart
            weeklyHours={weeklyHours}
            goal={stats?.daily_hours_goal || 1}
          />
        </div>

        <RecentMatches matches={matches} />
      </div>
    </main>
  );
}

export default DashboardHome;