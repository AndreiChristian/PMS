import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingFormAction } from "../../store/Slices/booking-form-slice";
import classes from "./Calendar.module.css";

const Calendar = ({ month, year }) => {
  const dispatch = useDispatch();

  let selectedCheckInDate = useSelector(
    (state) => state.bookingForm.checkInDate
  );
  let selectedCheckOutDate = useSelector(
    (state) => state.bookingForm.checkOutDate
  );
  // we use day js to tranform the date object into a day js object
  selectedCheckInDate = dayjs()
    .set("month", selectedCheckInDate.month)
    .set("date", selectedCheckInDate.date)
    .set("year", selectedCheckInDate.year);

  selectedCheckOutDate = dayjs()
    .set("month", selectedCheckOutDate.month)
    .set("date", selectedCheckOutDate.date)
    .set("year", selectedCheckOutDate.year);

  const [dateState, setDateState] = useState(
    dayjs()
      .set("month", month - 1)
      .set("date", 1)
      .set("year", year)
  );

  // we use day js to get the first date in each month to manage the calendar

  // we want to render an array of cells based on the number of days in the month
  const daysInMonth = dateState.daysInMonth();
  const array = [];
  array.length = daysInMonth;
  array.fill("");
  let i = 0;
  const newArray = [];
  array.map((item) => {
    i++;
    newArray.push(i);
  });

  let monthString;

  switch (dateState.month()) {
    case 0:
      monthString = "JANANUARY";
      break;
    case 1:
      monthString = "FEBRUARY";
      break;
    case 2:
      monthString = "MARCH";
      break;
    case 3:
      monthString = "APRIL";
      break;
    case 4:
      monthString = "MAY";
      break;
    case 5:
      monthString = "JUNE";
      break;
    case 6:
      monthString = "JULY";
      break;
    case 7:
      monthString = "AUGUST";
      break;
    case 8:
      monthString = "SEPTEMBER";
      break;
    case 9:
      monthString = "OCTOBER";
      break;
    case 10:
      monthString = "NOVEMBER";
      break;
    case 11:
      monthString = "DECEMBER";
      break;
    default:
      monthString = "JANANUARY";
  }

  const weekdaysArray = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const dayOfTheWeek = dateState.day();

  let emptyDaysArray = [];

  dayOfTheWeek === 0
    ? (emptyDaysArray.length = 6)
    : (emptyDaysArray.length = dayOfTheWeek - 1);

  const handleDateModification = (value) => {
    if (value === "add") {
      if (dateState.month() === 11) {
        setDateState(
          dayjs()
            .set("month", 0)
            .set("date", 1)
            .set("year", dateState.year() + 1)
        );
      } else {
        setDateState(
          dayjs()
            .set("month", dateState.month() + 1)
            .set("date", 1)
            .set("year", dateState.year())
        );
      }
    }
    if (value === "subtract") {
      if (dateState.month() === 0) {
        setDateState(
          dayjs()
            .set("month", 11)
            .set("date", 1)
            .set("year", dateState.year() - 1)
        );
      } else {
        setDateState(
          dayjs()
            .set("month", dateState.month() - 1)
            .set("date", 1)
            .set("year", dateState.year())
        );
      }
    }
  };

  const dateSelectionHandler = (item) => {
    const selectedDate = {
      year: dateState.year(),
      month: dateState.month(),
      date: item,
    };
    dispatch(bookingFormAction.dateSelection({ selectedDate }));
  };
  emptyDaysArray.length !== 0 && emptyDaysArray.fill("");
  return (
    <>
      <div className={classes.table}>
        <div className={classes.header}>
          <div
            onClick={() => {
              handleDateModification("subtract");
            }}
          >
            {dayjs().isSame(dateState, "month") ? null : "<" ? "<" : null}
          </div>

          <div>
            {monthString} {dateState.year()}
          </div>
          <div
            onClick={() => {
              handleDateModification("add");
            }}
          >
            {">"}
          </div>
        </div>

        <div className={classes.subheader}>
          {" "}
          {weekdaysArray.map((day) => {
            return (
              <div className={classes.weekday} key={day}>
                {day}
              </div>
            );
          })}{" "}
        </div>
        {emptyDaysArray.map((day) => {
          return (
            <div key={Math.random()} className={classes.empty_cell}>
              x
            </div>
          );
        })}
        {newArray.map((item) => {
          if (
            dayjs().isAfter(
              dayjs()
                .set("year", dateState.year())
                .set("month", dateState.month())
                .set("date", item)
            )
          ) {
            return (
              <div key={item} className={classes.past_cell}>
                {item}
              </div>
            );
          } else {
            return (
              <div
                key={item}
                onClick={() => {
                  dateSelectionHandler(item);
                }}
                // we will use day js to chech if the selected day is either the check in date or the check out date
                // if it is we will add a class to it to style it differently
                className={
                  dayjs()
                    .set("year", dateState.year())
                    .set("month", dateState.month())
                    .set("date", item)
                    .isSame(selectedCheckInDate, "day") ||
                  dayjs()
                    .set("year", dateState.year())
                    .set("month", dateState.month())
                    .set("date", item)
                    .isSame(selectedCheckOutDate, "day")
                    ? // we will chech if the date is between the check in and check out dates
                      // if it is we will add a class to it to style it differently
                      // by comparing it to the check in date and the check out date

                      classes.selected_cell
                    : dayjs()
                        .set("year", dateState.year())
                        .set("month", dateState.month())
                        .set("date", item)
                        .isAfter(selectedCheckInDate, "day") &&
                      dayjs()
                        .set("year", dateState.year())
                        .set("month", dateState.month())
                        .set("date", item)
                        .isBefore(selectedCheckOutDate, "day")
                    ? classes.between_cell
                    : classes.cell
                }
              >
                {item}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Calendar;
