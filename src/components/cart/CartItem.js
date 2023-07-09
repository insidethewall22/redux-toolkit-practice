import React from "react";
import classes from "./CartItem.module.css";
import { useCartContext } from "../../store/cart-context";

const CartItem = ({ name, price, amount, id }) => {
  const { amountAdd, amountReduce } = useCartContext();
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => amountReduce(id)}> - </button>
        <button onClick={() => amountAdd(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
