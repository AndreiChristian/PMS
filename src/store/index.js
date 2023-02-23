import { configureStore } from "@reduxjs/toolkit";
import bookingFormSlice from "./Slices/booking-form-slice";
import bookingListSlice from "./Slices/booking-list-slice";
import individualRoomSlice from "./Slices/individual-room-slice";
import roomTypeSlice from "./Slices/room-type-slice";



const store = configureStore({
    reducer:{
        roomType: roomTypeSlice.reducer,
        individualRoom : individualRoomSlice.reducer,
        bookingForm : bookingFormSlice.reducer,
        bookingList : bookingListSlice.reducer,
    }
})

export default store;