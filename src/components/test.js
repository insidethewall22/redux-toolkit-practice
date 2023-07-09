import { useEffect, useRef, useState } from "react";
import CardIcon from "./cart/CartIcon";
import Cart from "./cart/Cart";
const Test = () => {
  const [lastElement, setLastElement] = useState(null);
  const observer = useRef();
  useEffect(() => console.log(observer.current, lastElement), []);
  return (
    <div>
      123
      <Cart ref={setLastElement} />
    </div>
  );
};

export default Test;
