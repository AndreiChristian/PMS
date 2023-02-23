import React from "react";
import BookingForm from "./BookingForm";
import classes from "./Booking.module.css";
import { Outlet } from "react-router";

const Booking = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>BOOKINGS</div>
      {/* <BookingForm /> */}
      <Outlet />
    </div>
  );
};

export default Booking;
