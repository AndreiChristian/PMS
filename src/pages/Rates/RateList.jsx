import React from "react";
import { useSelector } from "react-redux";
import RateItem from "./RateItem";
import classes from "./RateList.module.css";

const RateList = () => {
  const roomTypes = useSelector((state) => state.roomType.roomTypes);
  {
    console.log(roomTypes);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>ROOM RATES</div>
      {/* <div className={classes.subheader}>
        <div>ROOM TYPE</div>
        <div>RATE</div>
        <div>MODIFY RATE</div>
      </div> */}
      <div className={classes.list}>
        {roomTypes.map((roomType) => {
          return (
            <RateItem
              key={roomType.roomTypeId}
              name={roomType.name}
              roomTypeId={roomType.roomTypeId}
              rate = { roomType.rate }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RateList;
