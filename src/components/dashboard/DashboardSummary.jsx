import SummaryCard from "./SummaryCard";

import noteIcon from "../../assets/images/solar_notes-outline.svg";
import peopleIcon from "../../assets/images/people-icon.svg";
import clockIcon from "../../assets/images/mdi_clock-outline.svg";
import streakIcon from "../../assets/images/solar_fire-broken.svg";

import "./DashboardSummary.css"

export default function DashboardSummary({ stats }) {
  return (
    <div className="dashboard-summary">
      <SummaryCard
        icon={noteIcon}
        title="Notes Saved"
        value={stats?.total_notes_saved}
        subtitle={`Plus ${stats?.notes_saved_this_week ?? 0} this week`}
      />

      <SummaryCard
        icon={peopleIcon}
        title="Study Group"
        value={stats?.groups_joined ?? 0}
        subtitle="Active Member"
      />

      <SummaryCard
        icon={clockIcon}
        title="Study Hours"
        value={stats?.total_hours_done ?? 0}
        subtitle={`Plus ${stats?.weekly_hours ?? 0}hrs this week`}
      />

      <SummaryCard
        icon={streakIcon}
        title="Streak"
        value={stats?.streak ?? 0}
        subtitle="Days Active"
      />
    </div>
  );
}