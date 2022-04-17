import React from 'react';
import BookList from '../book-list/book-list';
import ShopingCartTable from '../shoping-cart-table/shoping-cart-table';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShopingCartTable />
    </div>
  );
};

export default HomePage;
