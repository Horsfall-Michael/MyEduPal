import dashboard_image from "../assets/images/Frame 112.png";
import star_image from "../assets/images/streamline-sharp-color_star-2.png";

function DashboardSection (){
  return(
    <>
    <section className="dashboard-section">
        <p className="mini-text"> <img src={star_image} alt="star icon"  loading="lazy"/> Your Dashboard</p>
        <div className="dasboard-flex-box">
        <h2 className="sub-heading">Track Your Academic Journey</h2>
        <p>Monitor your progress, contributions, and stay motivated with personalized study insights.</p>
        <img src={dashboard_image} className="dashboard-img" alt="Dashboard image" loading="lazy"/>
        </div>
      </section>
    </>
  )
}

export default DashboardSection;