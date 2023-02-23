import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { array } from "yup";
import classes from "./Schedule.module.css";

const Schedule = () => {
  const roomsTypes = useSelector((state) => state.individualRoom.rooms);
  let roomArray = [];
  roomsTypes.map((roomType) => {
    roomType.rooms.map((room) => {
      roomArray.push(room);
    });
  });
  //   console.log(dayjs().year());

  const yearArray = [];
  useEffect(() => {
    // yearArray.length = 365;
    // yearArray.fill("x");
    // yearArray.map((item) => console.log(item));
  }, []);
  yearArray.length = 365;
  yearArray.fill("x");
  yearArray.map((item) => console.log(item));

  console.log(yearArray);

  //
  //   const array = []
  //   array.length = 10;
  //   array.fill("1")
  //   console.log(array)

  return (
    <h1>Hello</h1>
    // <div className={classes.container}>
    //   <div>
    //     {roomArray.map((room) => {
    //       return (
    //         <div key={room.roomId} className={classes.section}>
    //           <div>TYPE:</div>
    //           <div>{room.roomTypeId}</div>
    //           <div> NUMBER:</div>
    //           <div>{room.roomNumber}</div>
    //           {yearArray.map((item) => {
    //             return <div key ={Math.random()}>{item}</div>;
    //           })}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Schedule;
