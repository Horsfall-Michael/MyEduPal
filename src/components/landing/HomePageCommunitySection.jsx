import { Link } from "react-router-dom";
import { groups } from "../data/groupsData.js";
import left_arrow from "../../assets/images/basil_arrow-up-outline.png";
import star_image from "../../assets/images/streamline-sharp-color_star-2.png";
import peer_icon from "../../assets/images/Frame 39 (3).png";
import study_icon from "../../assets/images/Frame 39 (2).png";
import frame_35 from "../../assets/images/Frame 39 (5).png";
import people_icon from "../../assets/images/formkit_people.png";
import green_circle from "../../assets/images/Ellipse 7.png"

function CommunitySection() {
  return (
    <>
      <section className="community-section">
        <p className="mini-text community-section-mini-text">
          <img src={star_image} alt="star icon" loading="lazy" /> Communities
        </p>
        <div className="community-section-flex-container">
          <div className="community-section-left-container">
            <h2 className="sub-heading community-section-sub-heading">
              Learn Better Together
            </h2>
            <p className="communtity-sub-text">
              Join active study groups with students from different universities
              taking the same courses. Share knowledge, ask questions, and
              prepare for exams together.
            </p>

            <div className="community-features">
              <div className="community-feature">
                <img
                  src={study_icon}
                  alt="icon"
                  className="community-feature-img"
                  loading="lazy"
                />
                <div>
                  <p className="community-feature-title">Real-time Chat</p>
                  <p className="community-feature-sub-text">
                    Instant messaging with file sharing, voice notes, and
                    reactions.
                  </p>
                </div>
              </div>

              <div className="community-feature">
                <img
                  src={frame_35}
                  className="community-feature-img"
                  loading="lazy"
                />
                <div>
                  <p className="community-feature-title">Shared Resources</p>
                  <p className="community-feature-sub-text">
                    Group library for notes, past questions, and study
                    materials.
                  </p>
                </div>
              </div>

              <div className="community-feature">
                <img
                  src={peer_icon}
                  className="community-feature-img"
                  loading="lazy"
                />
                <div>
                  <p className="community-feature-title">
                    Cross-School Connections
                  </p>
                  <p className="community-feature-sub-text">
                    Connect with students from 120+ Nigerian universities.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/sign-up">
              <button className="colored-btn community-section-btn">
                Find Your Study Group
              </button>
            </Link>
          </div>

          <div className="community-section-right-container">
            {groups.map ((group) =>(
              <div key={group.id} className="group-card">
              <img
                className="group-img"
                src={group.image}
                loading="lazy"
              />
              <div>
                <p className="group-name">{group.name}</p>
                <p className="group-subject">{group.subject}</p>
                <div className="group-population-flex-box">
                  <div className="group-population">
                    <img src={people_icon} loading="lazy" />
                    <p>{group.members} members</p>
                  </div>
                  <p className="last-seen"> {group.lastSeen} Mins ago</p>
                </div>
              </div>
              <p className="group-active-tag">
                <img src={green_circle} loading="lazy" />
                {group.state}
              </p>
            </div>
            ))}

            <Link>
              <div className="view-groups-link">
                <p>View All Groups</p>
                <img src={left_arrow} loading="lazy" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommunitySection;