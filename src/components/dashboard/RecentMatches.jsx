import MatchCard from "./MatchCard";
import "./RecentMatches.css"

export default function RecentMatches({ matches }) {
  return (
    <div className="recent-matches dashboard-overview-card">
      <h2 className="dashboard-overview-title">
        Recent Matches
      </h2>

      <ul className="dashboard-overview-list">
        {matches.map((match) => (
          <li key={match.id}>
            <MatchCard match={match} />
          </li>
        ))}
      </ul>
    </div>
  );
}