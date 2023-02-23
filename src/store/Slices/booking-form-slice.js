// this form is used to book a room
//  all the state here is used to book a room


// this function is used to sort the dates
// the dates are sorted in order to get the check in date and the check out date
// the check in date is the first date and the check out date is the second date
// the dates are sorted by year, month and day
// if the dates are the same the function returns the same dates
// if the dates are not the same the function returns the dates in order
const sortDates = (dates) => {
  if (dates[0].year < dates[1].year) {
    return dates;
  } else if (dates[0].year === dates[1].year) {
    if (dates[0].month < dates[1].month) {
      return dates;
    } else if (dates[0].month === dates[1].month) {
      if (dates[0].day < dates[1].day) {
        return dates;
      } else if (dates[0].day === dates[1].day) {
        return dates;
      } else {
        return [dates[1], dates[0]];
      }
    } else {
      return [dates[1], dates[0]];
    }
  } else {
    return [dates[1], dates[0]];
  }
};

import { createSlice } from "@reduxjs/toolkit";

const bookingFormSlice = createSlice({
  name: "Booking Form",
  initialState: {
    bookingId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    street: "",
    streeNumber: "",
    nationality: "",
    passportNumber: "",
    age: "",
    gender: "",
    specialRequirements: "",
    payement: "",
    roomTypeId: "",
    roomId: "",
    checkInDate: "",
    // counter used to get two input
    counter: 0,
    arrayOfDates: ["", ""],
    checkOutDate: "",
    numberOfGuests: "",
    numberOfRooms: "",
    channel: "",
    totalPrice: "",
    extraNotes: "",
  },
  reducers: {
    handleChange(state, action) {
      const { id, value } = action.payload;
      state[id] = value;
      // console.log( `i am the reducer and i am telling you that for ${id} the value is ${ state.id }` )
    },
    dateSelection(state, action) {
      const {selectedDate} = action.payload;
      state.arrayOfDates.push(selectedDate);
      state.arrayOfDates.shift();
      
      const sortedDates = sortDates(state.arrayOfDates);
      state.checkInDate = sortedDates[0];
      state.checkOutDate = sortedDates[1];
    },
    // roomTypeSelection(state,action){
      
    // }
  },
});

export const bookingFormAction = bookingFormSlice.actions;
export default bookingFormSlice;
