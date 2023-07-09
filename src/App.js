import Header from "./components/layout/Header";
import MealsList from "./components/meals/MealsList";
import Cart from "./components/cart/Cart";
import { useCartContext } from "./store/cart-context";
import Test from "./components/test";

function App() {
  const { cartIsShown } = useCartContext();
  return (
    <div>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <MealsList />
        <Test />
      </main>
    </div>
  );
}

export default App;
