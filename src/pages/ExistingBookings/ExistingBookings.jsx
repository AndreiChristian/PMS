import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExistingBookingItem from "./ExistingBookingItem";
import classes from "./ExistingBookings.module.css";

const ExistingBookings = () => {
  let existingBookings = useSelector((state) => state.bookingList.bookings);
  const [searchedName, setSearchedName] = useState("");

  existingBookings = existingBookings.filter(
    (booking) =>
      booking.firstName.toUpperCase().includes(searchedName.toUpperCase()) ||
      booking.lastName.toUpperCase().includes(searchedName.trim().toUpperCase())
  );

  return (
    <div className={classes.container}>
      <div className={classes.filter}>
        <div>SEARCH BY </div>
        <input
          type="text"
          placeholder="GUEST NAME"
          value={searchedName}
          onChange={(event) => {
            setSearchedName(event.target.value);
          }}
        />
      </div>
      <ExistingBookingItem
        existingBookings={existingBookings}
        searchedName={searchedName}
      />
    </div>
  );
};

export default ExistingBookings;
