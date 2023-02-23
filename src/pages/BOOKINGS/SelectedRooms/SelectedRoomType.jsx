import React from "react";
import { useSelector } from "react-redux";
import classes from "./SelectedRoomType.module.css";
import SelectedRoomTypeCard from "./SelectedRoomTypeCard";

const SelectedRoomType = () => {
  const roomTypes = useSelector((state) => state.roomType.roomTypes);

  return (
    <div className={classes.container}>
      <div className={classes.text}>SELECT THE ROOM TYPE</div>
      <div className={classes.rooms}>
        {roomTypes.map((roomType) => {
          return (
            <SelectedRoomTypeCard
              key={roomType.roomTypeId}
              roomType={roomType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectedRoomType;
