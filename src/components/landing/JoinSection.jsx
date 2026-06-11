import { Link } from "react-router-dom";
import right_arrow from "../../assets/images/basil_arrow-up-outline (1).png"; 
import star_image from "../../assets/images/streamline-sharp-color_star-2.png";
function JoinSection (){
  return(
    <>
      <section className="join-section">
        <p className="mini-text"><img src={star_image} alt="star icon"/>Join 15,000+ Students</p>
        <div className="join-section-content">
        <h2 className="sub-heading">Ready To Transform Your Academic Journey </h2>
        <p className="join-section-sub-text">Join EduPal today and connect with students across Nigeria. Share resources, save money on textbooks, and achieve your academic goals together.</p>
        <div className="join-section-cta">
          <Link to="/"><button className="colored-btn">Get Started For Free <img src={right_arrow} className="right-arrow" /></button></Link>
          
          <Link to="/"><button className="clear-btn">Learn More</button></Link>
        </div>
        <p>No payment required &bull; Free for basic features</p>
        </div>
      </section>
    </>
  )
}

export default JoinSection;