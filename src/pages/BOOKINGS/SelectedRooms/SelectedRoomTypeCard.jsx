import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingFormAction } from "../../../store/Slices/booking-form-slice";
import classes from "./SelectedRoomTypeCard.module.css";

const SelectedRoomTypeCard = ({ roomType }) => {
  const { name, roomTypeId, rate } = roomType;
  const rooms = useSelector((state) => state.individualRoom.rooms);
  const selectedRoomType = useSelector((state) => state.bookingForm.roomTypeId);
  const searchedRoom = rooms.find((room) => room.roomTypeId === roomTypeId);

  const dispatch = useDispatch();

  const handleRoomTypeChoice = () => {
    dispatch(
      bookingFormAction.handleChange({ id: "roomTypeId", value: roomTypeId })
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
    <div
      className={
        selectedRoomType === roomTypeId
          ? count !== 0
            ? classes.selected_container
            : classes.unavailable_container
          : classes.container
      }
      onClick={handleRoomTypeChoice}
    >
      <div className={classes.info}>{name.toUpperCase()}</div>
      <div className={classes.info}>${rate}</div>
      <div className={count !== 0 ? classes.available : classes.zero}>
        {" "}
        {count} AVAILABLE{" "}
      </div>
    </div>
  );
};

export default SelectedRoomTypeCard;
