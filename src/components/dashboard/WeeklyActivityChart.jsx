import "./WeeklyActivityChart.css"

export default function WeeklyActivityChart({
  weeklyHours,
  goal,
}) {
  const weekMax = Math.max(
    ...weeklyHours.map((d) => d.total_hours),
    1
  );

  const scaleMax =
    weekMax > goal ? weekMax : goal;

  return (
    <div className="weekly-activity-card">
      <div className="weekly-activity-card-title-container">
        <h2 className="dashboard-overview-title">
          Weekly Activity
        </h2>
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
                style={{
                  height: `${heightPercent}%`,
                }}
              >
                <span>
                  {item.day_name.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}