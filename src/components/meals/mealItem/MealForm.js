import React, { useEffect, useRef, useState } from "react";
import { useCartContext } from "../../../store/cart-context";
import classes from "./MealItemForm.module.css";

const MealForm = ({ id }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  useEffect(() => {
    console.log("click");
    if (amount > 5 || amount < 1) {
      setAmountIsValid(false);
    } else {
      setAmountIsValid(true);
    }
  }, [amount]);
  const submitHandler = (event) => {
    event.preventDefault();
    if (amountIsValid) {
      addToCart(id, amount);
    } else {
      return;
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="number"
        label="Amount"
        defaultValue="1"
        min="1"
        max="5"
        onChange={(e) => {
          console.log(e);
          setAmount(e.target.value);
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
