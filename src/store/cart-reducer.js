import React from "react";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return { ...state, cartIsShown: true };
    case "CLOSE_CART":
      return { ...state, cartIsShown: false };
    case "INITIATE_DATA":
      return { ...state, meals: action.payload };
    case "ADD_CART":
      const { amount, id } = action.payload;
      const sameItem = state.cart.find((meal) => meal.id === id);
      const newItem = state.meals.find((meal) => meal.id === id);
      if (sameItem) {
        return {
          ...state,
          cart: state.cart.map((meal) => {
            if (meal.id === sameItem.id) {
              return { ...meal, amount: Number(meal.amount) + Number(amount) };
            } else {
              return { ...meal };
            }
          }),
        };
      }
      return { ...state, cart: [...state.cart, { ...newItem, amount }] };

    case "ADD_AMOUNT":
      const { key } = action.payload;
      return {
        ...state,
        cart: state.cart.map((meal) => {
          if (meal.id === key)
            return { ...meal, amount: Number(meal.amount) + 1 };
          else return { ...meal };
        }),
      };
    case "REDUCE_AMOUNT":
      const { key2 } = action.payload;
      const tempCart = state.cart.map((meal) => {
        if (meal.id === key2)
          return { ...meal, amount: Number(meal.amount) - 1 };
        else return { ...meal };
      });
      const tempCart2 = state.cart.filter((meal) => meal.id !== key2);
      const targetMeal = state.cart.find((meal) => meal.id === key2);
      return {
        ...state,
        cart: targetMeal.amount > 1 ? tempCart : tempCart2,
      };
    case "COUNT_TOTAL":
      const total_amount = state.cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, 0);
      return { ...state, totalAmount: total_amount };
  }
};

export default CartReducer;
