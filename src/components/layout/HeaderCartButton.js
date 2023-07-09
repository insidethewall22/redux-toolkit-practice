import React from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useCartContext } from "../../store/cart-context";

const HeaderCartButton = () => {
  const { showCart, totalAmount } = useCartContext();
  return (
    <button className={classes.button} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};
export default HeaderCartButton;
