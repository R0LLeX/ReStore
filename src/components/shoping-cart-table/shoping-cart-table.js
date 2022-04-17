import React from 'react';
import './shoping-cart-table.css';
import { connect } from 'react-redux';
import {
  bookRemoveToCart,
  allBookRemoveToCart,
  bookAddedToCart,
} from '../../actions/actions';

const ShopingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={item.id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>$ {total}</td>
        <td>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning"
          >
            <i className="bi bi-dash-circle" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success"
          >
            <i className="bi bi-cart-plus" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger"
          >
            <i className="bi bi-cart-dash" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shoping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: $ {total}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemoveToCart,
  onDelete: allBookRemoveToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCartTable);
