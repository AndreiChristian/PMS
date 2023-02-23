import React from "react";
import { NavLink } from "react-router-dom";
import classes from './OverView.module.css'

const OverView = () => {
  return (
    <div className={classes.container} >
      <div className={classes.container} >ADD A NEW BOOKING</div>
      <div>VIEW EXISTING BOOKINGS </div>
      <div className={classes.links}>
        <NavLink to={"forms"}>
          ADD A NEW BOOKING
        </NavLink>
        <NavLink to={"existing"}>
          VIEW EXISTING BOOKINGS
        </NavLink>
      </div>
    </div>
  );
};

export default OverView;
