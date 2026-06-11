import loadingSpinner from "../../assets/images/loading-spinner.gif";
import "./DashboardLoader.css"
export default function DashboardLoader() {
  return (
    <div className="dashboard-loading">
      <p>Loading dashboard...</p>
      <img
        src={loadingSpinner}
        alt="loading"
        className="loading-spinner"
      />
    </div>
  );
}