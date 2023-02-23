import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingFormAction } from "../../../store/Slices/booking-form-slice";
import classes from "./SelectedIndividualRoomList.module.css";

const SelectedIndividualRoomList = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.individualRoom.rooms);
  const roomsType = useSelector((state) => state.roomType.roomTypes);
  const roomTypeId = useSelector((state) => state.bookingForm.roomTypeId);
  const roomId = useSelector((state) => state.bookingForm.roomId);

  const searchedRoomType = roomsType.find(
    (roomType) => roomType.roomTypeId === roomTypeId
  );

  const searchedRoom = rooms.find((room) => room.roomTypeId === roomTypeId);

  // we we will write a function that dispatches the roomId to the store
  // we will pass this function to the onClick event of the div
  // we will pass the roomId as an argument to the function
  const handleRoomChoice = (room) => {
    dispatch(
      bookingFormAction.handleChange({ id: "roomId", value: room.roomId })
    );
  };


  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    searchedRoom.rooms.forEach((room) => {
      if (!room.occupied && !room.maintenance) {
        i++;
      }
    });
    setCount(i);
  }, [searchedRoom.rooms]);

  return (
    <div className={classes.container}>
      { count ===0? 
        <div className={classes.unavailable_text}>
        {" "}
        NO AVAILABLE {searchedRoomType.name.toUpperCase()} ROOMS{" "}
        </div>:

       <div className={classes.text}>
        {" "}
        AVAILABLE {searchedRoomType.name.toUpperCase()} ROOMS{" "}
      </div>}
      <div className={classes.cells}>
        {/* we will show only the rooms where occupied and maintenance are falsy */}
        {searchedRoom.rooms.map((room) => {
          if (!room.occupied && !room.maintenance) {
            return (
              <div
                onClick={() => handleRoomChoice(room)}
                key={room.roomId}
                className={
                  roomId === room.roomId ? classes.selected_cell : classes.cell
                }
              >
                <div>#{room.roomNumber}</div>
                <div>A</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SelectedIndividualRoomList;
