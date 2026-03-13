import frame_35 from "../assets/images/Frame 39 (5).png";
import textbook_icon from "../assets/images/Frame 39 (4).png";
import peer_icon from "../assets/images/Frame 39 (3).png";
import study_icon from "../assets/images/Frame 39 (2).png";
import analytics_icon from "../assets/images/Frame 39 (1).png";
import share_icon from "../assets/images/Frame 39.png";
import star_image from "../assets/images/streamline-sharp-color_star-2.png";

function Features() {
  return (
    <>
      <section className="features-section">
        <p className="mini-text">
          <img src={star_image} alt="star icon" loading="lazy" />
          Features
        </p>
        <h2 className="sub-heading">Everything You Need To Excel</h2>
        <p className="section-subtext">
          From note sharing to peer collaboration, EduPal provides Nigerian
          Students with every tool they need for success.
        </p>

        <div className="feature-cards">
          <div className="feature-card">
            <img src={frame_35} alt="feature-icon" className="feature-icon" />
            <h3 className="feature-header">Notes Exchange</h3>
            <p className="feature-subtext">
              Share and access quality notes from top students in your course.
              Upload PDFs, images, or write directly.
            </p>
          </div>

          <div className="feature-card">
            <img
              src={textbook_icon}
              alt="feature-icon"
              className="feature-icon"
            />
            <h3 className="feature-header">Textbook Marketplace</h3>
            <p className="feature-subtext">
              Buy and sell used textbooks at student-friendly prices. Save up to
              70% on course materials.
            </p>
          </div>

          <div className="feature-card">
            <img src={peer_icon} alt="feature-icon" className="feature-icon" />
            <h3 className="feature-header">Peer Connections</h3>
            <p className="feature-subtext">
              Find and connect with students taking the same courses across
              different Nigerian universities
            </p>
          </div>

          <div className="feature-card">
            <img src={study_icon} alt="feature-icon" className="feature-icon" />
            <h3 className="feature-header">Study Groups</h3>
            <p className="feature-subtext">
              Create or join study groups with real-time chat, shared resources,
              and group study sessions.
            </p>
          </div>

          <div className="feature-card">
            <img
              src={analytics_icon}
              alt="feature-icon"
              className="feature-icon"
            />
            <h3 className="feature-header">Study Analytics</h3>
            <p className="feature-subtext">
              Track your study hours, note contributions, and see how you're
              progressing through the semester.
            </p>
          </div>

          <div className="feature-card">
            <img src={share_icon} alt="feature-icon" className="feature-icon" />
            <h3 className="feature-header">Cross-School Network</h3>
            <p className="feature-subtext">
              Access resources from students at UNILAG, OAU, UI, ABU, and 100+
              other Nigerian universities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Features;