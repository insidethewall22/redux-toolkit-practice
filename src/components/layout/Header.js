import React from "react";
import classes from "./Header.module.css";
import meals from "../../asset/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "./MealsSummary";

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals" />
      </div>
      <MealsSummary />
    </>
  );
};
export default Header;
