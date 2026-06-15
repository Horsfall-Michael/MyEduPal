import location_icon from "../../assets/images/famicons_location-outline.png";
import "./BookModal.css";
const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  console.log(book); // check if book exists

  const handleContactSeller = () => {
    console.log("Contact seller:", book.seller);

    // Navigate to chat page
    // open WhatsApp
    // show seller details
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="book-image-flex">
          <img src={book.img} alt={book.name} className="modal-book-image" />

          <div>
            <h3 className="book-title">{book.name}</h3>

            <p className="book-author">{book.author}</p>
          </div>
        </div>

        <p className="book-condition">{book.condition}</p>

        <div className="price-container">
          <div className="price-flex">
            <p className="book-price">₦{book.price}</p>
            <p className="book-discount">
              Save{" "}
              {Math.round(
                ((book.actualPrice - book.price) / book.actualPrice) * 100,
              )}
              %
            </p>
          </div>
          <p className="book-actual-price">₦{book.actualPrice}</p>
        </div>

        <div className="book-location-container">
          <p><img src={location_icon} alt="icon"/> {book.location}</p>

          <p>{book.seller}</p>
        </div>

        <p>Would you like to contact the seller?</p>

        <div className="modal-actions">
          <button className="contact-btn" onClick={handleContactSeller}>
            Contact Seller
          </button>

          <button className="cancel-btn" onClick={onClose}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
