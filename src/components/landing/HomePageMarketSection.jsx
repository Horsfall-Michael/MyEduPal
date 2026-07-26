import { Link } from "react-router-dom";
import {books} from "../data/booksData.js";
import location_icon from "../../assets/images/famicons_location-outline.png";
import star_image from "../../assets/images/streamline-sharp-color_star-2.png";
function MarketPlaceSection() {
  return (
    <>
      <section className="market-section">
        <p className="mini-text">
          <img src={star_image} alt="star icon" loading="lazy" />
          Market Place
        </p>

        <div className="market-place-top-section">
          <div>
            <h2 className="sub-heading">Affordable Textbooks</h2>
            <p className="section-subtext">
              Save up to 70% on course materials. Buy from verified students
              across Nigeria.
            </p>
          </div>
          <Link to="/">
            <button className="clear-btn browse-all-books-btn">
              {" "}
              Browse All Books
            </button>
          </Link>
        </div>

        <div className="available-books">
          {books.map((book) => (
            <div key={book.id} className="landing-book-card">
              <img
                src={book.img}
                alt={book.name}
                className="book-image"
                loading="lazy"
              />
              <p className="book-condition">{book.condition}</p>
              <h3 className="book-name">{book.name}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-price">
                ₦{book.price}
                <span className="book-actual-price">₦{book.actualPrice}</span>
              </p>
              <div className="horizontal-rule"></div>
              <p className="book-location">
                <img src={location_icon} alt="icon" loading="lazy" />
                {book.location}
                <span className="book-seller">{book.seller}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="market-place-cta">
          <h3>Have textbooks to sell?</h3>
          <p>
            List your books in minutes and reach thousands of students across
            Nigeria.
          </p>
          <Link>
            <button className="start-selling-btn">Start Selling</button>
          </Link>
        </div>
      </section>
    </>
  );
}
export default MarketPlaceSection;