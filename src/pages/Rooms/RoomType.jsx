import React from "react";
import { useSelector } from "react-redux";
import RoomTypeCard from "./UI/RoomTypeCard";
import classes from "./RoomType.module.css";

const RoomType = () => {
  const rooms = useSelector((state) => state.roomType.roomTypes);
  // const isOccupiedOrMaintenanceArray = useSelector(
  //   (state) => state.occupiedOrMaintenance.isOcuppiedOrMaintenanceRooms
  // );
  // console.log(isOccupiedOrMaintenanceArray);
  return (
    <div className={classes.container}>
      <div className={classes.title}>ROOM TYPES</div>
      <div className={classes.items}>
        {rooms.map((room) => {
          return (
            <>
              <RoomTypeCard
                roomTypeId={room.roomTypeId}
                key={room.id}
                name={room.name}
                quantity={room.quantity}
                rate={room.rate}
              />
            </>
          );
        })}{" "}
      </div>
      <div className={classes.actions}>
        <div className={classes.action}>ADD</div>
        <div className={classes.action}>REMOVE</div>
      </div>
    </div>
  );
};

export default RoomType;
