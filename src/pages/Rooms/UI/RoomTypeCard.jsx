import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import classes from "./RoomTypeCard.module.css";

const RoomTypeCard = (props) => {
  const navigate = useNavigate();
  // console.log( props.roomTypeId )
  let rooms = useSelector( state => state.individualRoom.rooms )
  rooms = rooms.find( room => room.roomTypeId === props.roomTypeId )
  rooms = rooms.rooms;
  
  let occupancy = 0, maintenance = 0;
  rooms.forEach( room => {
    if( room.occupied){
      occupancy ++;
    }
    if (room.maintenance ){
      maintenance++;
    }
  } )
  
  return (
    <div className={classes.card} onClick={() => navigate(props.roomTypeId)}>
      <div className={classes.title}>{props.name.toUpperCase()}</div>
      <div className={classes.info}>
        <div className={classes.content}> TOTAL QUANTITY {props.quantity}</div>
        <div className={classes.content}>
          {" "}
          {props.quantity - maintenance - occupancy} AVAILABLE{" "}
        </div>
        <div className={classes.content}> {occupancy} OCCUPIED </div>
        <div className={classes.content}>
          {" "}
          {maintenance} IN REPARATION{" "}
        </div>
        <div className={classes.content}> RATE ${props.rate}</div>
      </div>
    </div>
  );
};

export default RoomTypeCard;
