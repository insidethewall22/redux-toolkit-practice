import React, { useEffect } from "react";
import AvaliableMeals from "../../asset/AvaliableMeals.json";
import classes from "./AvailableMeals.module.css";
import MealItem from "./mealItem/MealItem";
import Card from "../UI/Card";
import { useCartContext } from "../../store/cart-context";

const MealsList = () => {
  const { initiation } = useCartContext();
  const meals = AvaliableMeals.DummyMeals;
  useEffect(() => {
    initiation(meals);
  }, []);
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => {
            return <MealItem key={meal.id} {...meal} />;
          })}
        </ul>
      </Card>
    </div>
  );
};

export default MealsList;
