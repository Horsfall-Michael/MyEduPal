import social_icons from "../../assets/images/Frame 127.png";

function Footer () {
  return(
  <>
    <footer>
      <div className="footer-top">
        <div className="footer-logo-section">
          <h2>MyEduPal</h2>
          <p>
            Empowering Nigerian students to learn together, share resources, and
            achieve academic excellence.
          </p>
          <img src={social_icons} alt="social media icons" />
        </div>

        <div className="footer-lists">
          <div>
            <h2 className="footer-list-header">Product</h2>
            <ul className="footer-list">
              <li>Notes Exchange</li>
              <li>Marketplace</li>
              <li>Study Groups</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-list-header">Universities</h2>
            <ul className="footer-list">
              <li>UNILAG</li>
              <li>University of Ibadan</li>
              <li>OAU</li>
              <li>All Universities</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-list-header">Support</h2>
            <ul className="footer-list">
              <li>Help Center</li>
              <li>Community Guidlines</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> &copy; 2026 EduPAl </p>
        <p> Privacy Policy </p>
        <p> Terms of Service</p>
      </div>
    </footer>
  </>
  )
}
export default Footer;