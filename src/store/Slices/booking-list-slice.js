import { createSlice } from "@reduxjs/toolkit";
import { bookingArray } from "./room-type-slice";

const bookingListSlice = createSlice({
    name: "Booking List Slice",
    initialState: {
        bookings: bookingArray,
    },
    reducers: {
    }
});

export const bookingListActions = bookingListSlice.actions;
export default bookingListSlice;
