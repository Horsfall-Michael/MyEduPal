import { Link } from "react-router-dom";
import star_image from "../../assets/images/streamline-sharp-color_star-2.png";
import frame_31 from "../../assets/images/Frame 31.png";
import frame_32 from "../../assets/images/Frame 32.png";
import frame_33 from "../../assets/images/Frame 33.png";
import frame_34 from "../../assets/images/Frame 34.png";
import right_arrow from "../../assets/images/basil_arrow-up-outline (1).png";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <p className="mini-text">
          <img src={star_image} />
          Built for Nigerian students
        </p>
        <h1 className="hero-main-text">
          Your Academic <br />
          <span className="hero-text-highlight">Success Partner</span>
        </h1>
        <p className="hero-section-subtext">
          Exchange notes, buy affordable textbooks, form study groups, and
          connect
          <br /> with students across Nigerian universities. All in one place.
        </p>
        <div className="hero-cta-section">
          <Link to="/sign-up">
            <button className="start-learning-btn colored-btn hero-cta">
              Start Learning Together <img src={right_arrow} />
            </button>
          </Link>

          <Link to="/">
            <button className="explore-resources-btn clear-btn hero-cta">
              Explore Resources
            </button>
          </Link>
        </div>
        <div className="hero-images">
          <img src={frame_31} className="hero-image higher-pair" alt="image" />
          <img src={frame_32} className="hero-image" alt="image" />
          <img src={frame_33} className="hero-image higher-pair" alt="image" />
          <img src={frame_34} className="hero-image" alt="image" />
        </div>
      </section>
    </>
  );
}
export default HeroSection;