import React from "react";

const EmptyCart = (props) => {
  return (
    <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
      <div className="cart__header">
        <h5>Your Cart</h5>
        <button onClick={() => props.setTrigger(false)}>
          <i className="bx bx-x"></i>
        </button>
      </div>
      <div className="cart__content empty-cart">No items found.</div>
      <div className="cart__footer">
        <div className="cart__subtotal__btn">
          <button className="btn-primary cart-btn" onClick={() => props.setTrigger(false)}>Start shopping</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
