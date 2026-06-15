import { useState } from "react";
import Header from "../../components/ui/Header";
import SearchBar from "../../components/ui/Searchbar";
import { allBooks } from "../../components/data/booksData.js";
import BookModal from "../../components/textbookstore/BookModal.jsx"
import location_icon from "../../assets/images/famicons_location-outline.png";

import "./TextbookStore.css";

const TextbookStore = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  const handleSearch = (query) => {
    const result = allBooks.filter((book) =>
      book.name.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredBooks(result);
  };
  return (
    <>
      <div>
        <Header title="Textbook Store">
          <div className="header-flex">
            <SearchBar
              placeholder="Search books, authors..."
              onSearch={handleSearch}
            />
            <button className="add-book-btn">Add Book</button>
          </div>
        </Header>

        <div className="books">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card" 
            onClick={() => handleBookClick(book)}>
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
      </div>
       {isModalOpen && (
        <BookModal
          book={selectedBook}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default TextbookStore;
