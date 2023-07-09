import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./cart-reducer";

const CarContext = React.createContext();
const initialState = {
  meals: [],
  cart: [],
  totalAmount: 0,
  cartIsShown: false,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "COUNT_TOTAL" });
  }, [state.cart]);

  const showCart = () => {
    dispatch({ type: "SHOW_CART" });
  };
  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };
  const initiation = (data) => {
    dispatch({ type: "INITIATE_DATA", payload: data });
  };
  const addToCart = (id, amount) => {
    dispatch({ type: "ADD_CART", payload: { id, amount } });
  };
  const amountAdd = (key) => {
    dispatch({ type: "ADD_AMOUNT", payload: { key } });
  };
  const amountReduce = (key2) => {
    dispatch({ type: "REDUCE_AMOUNT", payload: { key2 } });
  };

  return (
    <CarContext.Provider
      value={{
        ...state,
        showCart,
        closeCart,
        initiation,
        addToCart,
        amountAdd,
        amountReduce,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CarContext);
};
