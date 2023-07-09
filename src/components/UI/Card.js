import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  console.log(props); // 自带children property
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
