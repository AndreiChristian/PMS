import React from "react";
import { useSelector } from "react-redux";
import classes from "./SelectedDates.module.css";

const SelectedDates = () => {
  const checkInDate = useSelector((state) => state.bookingForm.checkInDate);
  const checkOutDate = useSelector((state) => state.bookingForm.checkOutDate);

  // a function that takes the month and returns a string
  const monthToString = (month) => {
    let monthString;
    switch (month) {
        case 1:
            monthString = "JANANUARY";
            break;
        case 2:
            monthString = "FEBRUARY";
            break;
        case 3:
            monthString = "MARCH";
            break;
        case 4:
            monthString = "APRIL";
            break;
        case 5:
            monthString = "MAY";
            break;
        case 6:
            monthString = "JUNE";
            break;
        case 7:
            monthString = "JULY";
            break;
        case 8:
            monthString = "AUGUST";
            break;
        case 9:
            monthString = "SEPTEMBER";
            break;
        case 10:
            monthString = "OCTOBER";
            break;
        case 11:
            monthString = "NOVEMBER";
            break;
        case 12:
            monthString = "DECEMBER";
            break;
        default:
            monthString = "JANANUARY";
    }
    return monthString;
    };
    

  const checkInMonth = monthToString(checkInDate.month + 1);
  const checkOutMonth = monthToString(checkOutDate.month + 1);

  return (
    <div className={classes.container}>
      <div className={classes.text}>SELECTED DATES</div>
      <div className={classes.dates}>
        <div className={classes.date}>CHECK IN DATE</div>
        <div className={classes.date}>CHECK OUT DATE</div>
        <div className={classes.date}>
          {checkInDate
            ? ` ${checkInDate.date} ${checkInMonth} ${checkInDate.year}`
            : " "}
        </div>
        <div className={classes.date}>
          {checkOutDate
            ? ` ${checkOutDate.date} ${checkOutMonth} ${checkOutDate.year}`
            : " "}
        </div>
      </div>
    </div>
  );
};

export default SelectedDates;
