import React from 'react';
import './book-list-item.css';
const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="book image" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">$ {price}</div>
        <button onClick={onAddedToCart} className="btn btn-info btn_pay">
          Купить книгу
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
