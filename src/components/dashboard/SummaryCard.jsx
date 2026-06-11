export default function SummaryCard({
  icon,
  title,
  value,
  subtitle,
}) {
  return (
    <div className="dashboard-summary-flex-card">
      <div className="summary-card-title">
        <img src={icon} alt={title} />
        <span>{title}</span>
      </div>

      <p className="summary-flex-card-main-digit">
        {value}
      </p>

      <p className="summary-flex-card-green-text">
        {subtitle}
      </p>
    </div>
  );
}