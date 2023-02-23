import { createSlice } from "@reduxjs/toolkit";
import { roomArray } from "./room-type-slice";

const individualRoomSlice = createSlice({
  name: "Room Type Slice",
  initialState: {
    rooms: roomArray,
  },
  reducers: {
    addMaintenance(state, action) {
        const { roomTypeId, roomId } = action.payload;
        let roomsObject = state.rooms.find((item) => item.roomTypeId === roomTypeId);
        let individualRoomArray = roomsObject.rooms;
        const individualRoom = individualRoomArray.find(
            (item) => item.roomId === roomId
        );
        individualRoom.maintenance = true;
    },
    removeMaintenance(state, action) {
        const { roomTypeId, roomId } = action.payload;
        let roomsObject = state.rooms.find((item) => item.roomTypeId === roomTypeId);
        let individualRoomArray = roomsObject.rooms;
        const individualRoom = individualRoomArray.find(
            (item) => item.roomId === roomId
        );
        individualRoom.maintenance = false;
    },
  },
});

export default individualRoomSlice;
export const individualRoomActions = individualRoomSlice.actions;
