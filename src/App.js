import "./App.css";
import { Meals } from "./components/meals/Meals";
import { Header } from "./components/header/Header";
import { Basket } from "./components/basket/Basket";
import { useState } from "react";
import { MealSummary } from "./components/meal-summary/MealSummary";
import { CartProvider } from "./store/cart-context";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <CartProvider>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={toggleHandler} />}
    </CartProvider>
  );
}

export default App;
