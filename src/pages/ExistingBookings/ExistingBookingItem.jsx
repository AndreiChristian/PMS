import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router";
import Booking from "../BOOKINGS/Booking";
import classes from "./ExistingBookingItem.module.css";

const ExistingBookingItem = ({ existingBookings, searchedName }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.container}>
        <div>ROOM TYPE</div>
        <div>ROOM NUMBER</div>
        <div>FIRST NAME</div>
        <div>LAST NAME</div>
        <div>CHECK IN DATE</div>
        <div>CHECK OUT DATE</div>
        <div>CHECKED IN</div>
      </div>
      {existingBookings.map((booking) => {
        return (
          <div
            className={classes.container}
            key={booking.bookingId}
            onClick={() => {
              navigate(booking.bookingId);
            }}
          >
            <div>{booking.roomTypeName}</div>
            <div>#{booking.roomNumber}</div>
            <div>{booking.firstName}</div>
            <div>{booking.lastName}</div>
            <div>{booking.checkInDate.toString().slice(0, -13)}</div>
            <div>{booking.checkOutDate.toString().slice(0, -13)}</div>
            <div>
              {dayjs().isSame(booking.checkInDate, "day") ||
              dayjs().isAfter(booking.checkInDate, "day")
                ? "TRUE"
                : "FALSE"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExistingBookingItem;
