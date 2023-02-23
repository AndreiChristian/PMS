// import { createSlice } from "@reduxjs/toolkit";
// import roomTypeDemoData from "../DEMO-DATA/room-type-demo-data";
// import { isOcuppiedOrMaintenanceCounter } from "../DEMO-DATA/individual-room-demo-data";
// import roomTypeSlice from "./room-type-slice";
// import store from "../index";

// // const roomState = roomTypeSlice.selector(store.getState());

// const isOcuppiedOrMaintenanceSlice = createSlice({
//   name: "isOcuppiedOrMaintenanceSlice",
//   initialState: {
//       isOcuppiedOrMaintenanceRooms: isOcuppiedOrMaintenanceCounter(roomTypeDemoData),
//     roomTypes: roomTypeDemoData,
//   },
//   reducers: {
//     // both the add and removeMaintenance reducers will recieve roomId and roomType id
//         // in order to search for the specific room
//         addMaintenance (state, action){
//             const {roomId, roomTypeId } = action.payload;
//             const roomType = state.roomTypes.find( item => item.id === roomTypeId )
//             const room = roomType.rooms.find( item => item.roomId === roomId  )
//             room.maintenance = true;

//         },
//         removeMaintenance( state, action ){
//             const {roomId, roomTypeId } = action.payload;
//             const roomType = state.roomTypes.find( item => item.id === roomTypeId )
//             const room = roomType.rooms.find( item => item.roomId === roomId  )
//             room.maintenance = false;
//         }
//   },
// });

// export default isOcuppiedOrMaintenanceSlice;
// export const isOcuppiedOrMaintenanceActions = isOcuppiedOrMaintenanceSlice.actions;
