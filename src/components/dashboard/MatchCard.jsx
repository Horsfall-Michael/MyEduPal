import vectorIcon from "../../assets/images/Vector.svg";

export default function MatchCard({ match }) {
  return (
    <div className="dashboard-list-style">
      <img
        src={match.image}
        alt={match.name}
        className="match-image"
      />

      <div>
        <p className="match-name">{match.name}</p>

        <p className="match-details">
          {match.school}
          <span className="match-course">
            {match.course}
          </span>
        </p>
      </div>

      <img
        src={vectorIcon}
        alt="icon"
        className="vector-icon"
      />
    </div>
  );
}