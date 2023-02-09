import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeCartItem } from "../redux/cartSlice";
import EmptyCart from "./EmptyCart";

const CartModal = (props) => {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.cart.cartItems);
  const cartSubTotal = useSelector((state) => state.cart.cartSubTotal);
  const handleChangeQuantity = (e, index) => {
    dispatch(changeQuantity({
      product: listItems[index],
      quantity: Number(e.target.value),
    }))
  }
  const handleRemoveItem = (index) => {
    dispatch(removeCartItem(index))
  }

  return props.trigger ? (
    <div className="modal-wrapper">
      <div className="overlay" onClick={() => props.setTrigger(false)}>
        <div className="d-flex justify-content-center align-center h-100">
        { 
          listItems.length 
          ? 
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart__header">
              <h5>Your Cart</h5>
              <button onClick={() => props.setTrigger(false)}>
                <i className="bx bx-x"></i>
              </button>
            </div>
            <div className="cart__content">
              {listItems.map((product, index) => (
                <div className="cart__item">
                  <div className="cart__item__main-content">
                    <div className="cart__item__image">
                      <Link to={`/product/${product.slug}`}>
                        <img src={product.src} alt={product.title} />
                      </Link>
                    </div>
                    <div className="cart__item__text">
                      <Link to="/">
                        <h6>{product.title}</h6>
                      </Link>
                      <p>$ {product.sOPrice} USD</p>
                      <p className="mb-8">
                        <span>color: </span>
                        {product.color}
                      </p>
                      <Link to="#" onClick={() => handleRemoveItem(index)}>Remove</Link>
                    </div>
                  </div>
                    <div className="cart__item__input">
                    <input
                      value={product.cartQuantity}
                      type="number"
                      className="input-field"
                      onChange={e => handleChangeQuantity(e, index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="cart__footer">
              <div className="cart__subtotal">
                <div className="cart__subtotal__left">Subtotal:</div>
                <div className="cart__subtotal__right">$ {cartSubTotal.toFixed(2)} USD</div>
              </div>
              <div className="cart__subtotal__btn">
                <button className="btn-primary cart-btn">
                  Continue to Checkout
                </button>
              </div>
            </div>
          </div>
          :
          <EmptyCart trigger={props.trigger} setTrigger={props.setTrigger}/>
        }
          
        </div>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
};

export default CartModal;
