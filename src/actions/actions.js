const booksRequested = () => {
  return {
    type: 'FETCH_BOOK_REQUEST',
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
};

const bookRemoveToCart = (bookId) => {
  return {
    type: 'BOOK_REMOVE_TO_CART',
    payload: bookId,
  };
};

const allBookRemoveToCart = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVE_TO_CART',
    payload: bookId,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks, bookAddedToCart, bookRemoveToCart, allBookRemoveToCart };
