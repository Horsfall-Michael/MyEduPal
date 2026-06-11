import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase-client.js";
import { ActivityItem } from "../../components/dashboard/RenderActivity.jsx";
import loadingSpinner from "../../assets/images/loading-spinner.gif";
import noteIcon from "../../assets/images/solar_notes-outline.svg";
import peopleIcon from "../../assets/images/people-icon.svg";
import clockIcon from "../../assets/images/mdi_clock-outline.svg";
import streakIcon from "../../assets/images/solar_fire-broken.svg";
import vectorIcon from "../../assets/images/Vector.svg";
import {
  DUMMY_ACTIVITIES,
  DUMMY_MATCHES,
  DUMMY_PROFILE,
  DUMMY_STATS,
  DUMMY_WEEKLY_HOURS,
} from "../../components/UserData.js";
import "./DashboardHome.css";

function DashboardHome() {
  const [profile, setProfile] = useState(null);
  const [activities, setActivities] = useState([]);
  const [matches, setMatches] = useState([]);
  const [stats, setStats] = useState(null);
  const [weeklyHours, setWeeklyHours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setProfile(DUMMY_PROFILE);
          setStats(DUMMY_STATS);
          setActivities(DUMMY_ACTIVITIES);
          setMatches(DUMMY_MATCHES);
          setWeeklyHours(DUMMY_WEEKLY_HOURS);
          return;
        }
        

        const userId = user.id;

        const [profileRes, statsRes, activitiesRes, matchesRes, weeklyRes] =
          await Promise.all([
            supabase.from("profiles").select("*").eq("id", userId).single(),

            supabase.from("stats").select("*").eq("user_id", userId).single(),

            supabase
              .from("activities")
              .select("*")
              .eq("user_id", userId)
              .limit(4)
              .order("created_at", { ascending: false }),

            supabase.from("matches").select("*").eq("user_id", userId),

            supabase.rpc("get_weekly_study_hours", {
              p_user_id: userId,
            }),
          ]);

        setProfile(profileRes.data || DUMMY_PROFILE);

        setStats(
          statsRes.data && Object.keys(statsRes.data).length
            ? statsRes.data
            : DUMMY_STATS,
        );

        setActivities(
          activitiesRes.data?.length ? activitiesRes.data : DUMMY_ACTIVITIES,
        );

        setMatches(matchesRes.data?.length ? matchesRes.data : DUMMY_MATCHES);

        setWeeklyHours(
          weeklyRes.data?.length ? weeklyRes.data : DUMMY_WEEKLY_HOURS,
        );
      } catch (err) {
        console.error("Dashboard Error:", err);

        setProfile(DUMMY_PROFILE);
        setStats(DUMMY_STATS);
        setActivities(DUMMY_ACTIVITIES);
        setMatches(DUMMY_MATCHES);
        setWeeklyHours(DUMMY_WEEKLY_HOURS);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    console.log("Dashboard mounted");
  }, []);

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

  const weekMax = Math.max(...weeklyHours.map((d) => d.total_hours), 1);
  const goal = stats?.daily_hours_goal || 1;

  const isOverflow = weekMax > goal;
  const scaleMax = isOverflow ? weekMax : goal;
  
  console.log("weeklyHours", weeklyHours);

  if (loading)
    return (
      <div className="dashboard-loading">
        <p>Loading dashboard...</p>
        <img src={loadingSpinner} alt="loading" className="loading-spinner" />
      </div>
    );


  return (
    <>
      <main className="dashboard-home-container">
        <div className="dashboard-home-container-intro">
          <div>
            <h1 className="dashboard-heading">
              Welcome, {profile?.username || profile?.name}
            </h1>
          </div>
          <div className="dashboard-level-container">
            <p className="dashboard-level">
              {profile?.level}lv-<span>{profile?.department}</span>
            </p>
            <p className="dashboard-school">
              {" "}
              {profile?.school_abbreviation || profile?.university}
            </p>
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
              {stats?.total_notes_saved}
            </p>
            <p className="summary-flex-card-green-text">
              Plus {stats?.notes_saved_this_week ?? 0} this week
            </p>
          </div>

          <div className="dashboard-summary-flex-card">
            <div className="summary-card-title">
              <img src={peopleIcon} alt="icon" />
              <span>Study Group</span>
            </div>
            <p className="summary-flex-card-main-digit">
              {stats?.groups_joined ?? 0}
            </p>
            <p className="summary-flex-card-green-text">Active Member</p>
          </div>

          <div className="dashboard-summary-flex-card">
            <div className="summary-card-title">
              <img src={clockIcon} alt="icon" />
              <span>Study Hours</span>
            </div>
            <p className="summary-flex-card-main-digit">
              {stats?.total_hours_done ?? 0}
            </p>
            <p className="summary-flex-card-green-text">
              Plus {stats?.weekly_hours ?? 0}hrs this week
            </p>
          </div>

          <div className="dashboard-summary-flex-card">
            <div className="summary-card-title">
              <img src={streakIcon} alt="icon" />
              <span>Streak</span>
            </div>
            <p className="summary-flex-card-main-digit">{stats?.streak ?? 0}</p>
            <p className="summary-flex-card-green-text">Days Active</p>
          </div>
        </div>
        <div className="dashboard-overview-container">
          <div className="dashboard-overview-container-top-flex">
            <div className="dashboard-overview-card">
              <h2 className="dashboard-overview-title">Recent Activities</h2>
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

            <div className="weekly-activity-card">
              <div className="weekly-activity-card-title-container">
                <h2 className="dashboard-overview-title">Weekly Activity</h2>
                <p>Last 7 days</p>
              </div>

              <div className="chart">
                <div className="bars">
                  {weeklyHours.map((item) => {
                    const heightPercent = scaleMax
                      ? (item.total_hours / scaleMax) * 100
                      : 0;

                    return (
                      <div
                        key={item.iso_day}
                        className="bar"
                        style={{ height: `${heightPercent}%` }}
                      >
                        <span>{item.day_name.toUpperCase()}</span>
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
              {matches.map((match) => (
                <li key={match.id}>{renderRecentMatch(match)}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardHome;
