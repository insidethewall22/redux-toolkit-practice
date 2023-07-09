import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useCartContext } from "../../store/cart-context";
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  const { closeCart } = useCartContext();
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={closeCart}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={classes.modal}>{props.children}</div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
