import dayjs from "dayjs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Calendar from "../../components/calendar/Calendar";
import classes from "./BookingForm.module.css";
import PersonalInfo from "./PersonalInfoSection/PersonalInfo";
import SelectedDates from "./SelectedDates/SelectedDates";
import SelectedIndividualRoomList from "./SelectedRooms/SelectedIndividualRoomList";
import SelectedRoomType from "./SelectedRooms/SelectedRoomType";

const BookingForm = () => {
  const roomTypeId = useSelector((state) => state.bookingForm.roomTypeId);
  {
    console.log(roomTypeId, "i am the selector");
  }
  return (
    <div className={classes.container}>
      PLEASE FILL IN THE FORM WTH The APPROPRIATE DATA
      <PersonalInfo />
      <div className={classes.text}>SELECT THE DATES FOR THE BOOKING</div>
      <div className={classes.calendar}>
        <Calendar year={dayjs().year()} month={dayjs().month()+1} />
        <Calendar year={dayjs().year()} month={dayjs().month() + 2} />
      </div>
      {console.log(dayjs().month())}
      <SelectedDates />
      <SelectedRoomType />
      {roomTypeId && <SelectedIndividualRoomList />}
    </div>
  );
};

export default BookingForm;
