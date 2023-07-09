import React, { forwardRef } from "react";
import { useCartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = forwardRef((ref) => {
  const { cart, closeCart } = useCartContext();
  const hasItems = cart.length > 0;
  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount * currentValue.price;
  }, 0);
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
});

export default Cart;
