import "./DashboardHeader.css"

export default function DashboardHeader({ profile }) {
  return (
    <>
      <div className="dashboard-home-container-intro">
        <div>
          <h1 className="dashboard-heading">
            Welcome, {profile?.username || profile?.name}
          </h1>
        </div>

        <div className="dashboard-level-container">
          <p className="dashboard-level">
            {profile?.level}lv-
            <span>{profile?.department}</span>
          </p>

          <p className="dashboard-school">
            {profile?.school_abbreviation ||
              profile?.university}
          </p>
        </div>
      </div>

      <p className="dasboard-heading-subtext">
        Here's a quick overview of your dashboard activities and
        updates.
      </p>
    </>
  );
}