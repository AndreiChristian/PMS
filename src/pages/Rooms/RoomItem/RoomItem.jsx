import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { individualRoomActions } from "../../../store/Slices/individual-room-slice";
import classes from "./RoomItem.module.css";

// the room item renders the individual room, says the name, room type, is free/ occupied/
// maintenance and offers the possibility to add extra info

const RoomItem = ({
  roomTypeName,
  roomNumber,
  roomId,
  maintenance,
  occupied,
  roomTypeId,
  extraInfo,
}) => {
  // WE FILL OFER THE POSSIBILITY TO ADD MAINTENANCE OR REMOVE MAINTENANCE FROM THE ROOM
  // we will call the reducer for that

  const dispatch = useDispatch();
  
  const addMaintenanceHandler = () => {
    dispatch( individualRoomActions.addMaintenance( {roomTypeId,roomId} ) )
  }

  const removeMaintenanceHandler = () => {
    dispatch( individualRoomActions.removeMaintenance({roomTypeId,roomId}) )
  }

  

  return (
    <div className={classes.container}>
      <div>{roomTypeName.toUpperCase()}</div>
      <div># {roomNumber} </div>
      {/* these just state some plain information, the room type upercased and room number */}

      {/* infos such as available, occupied and maintenance are based on state so they are rendered
      dynamically */}

      {/* it returns either occupied or available */}
      {occupied === true ? (
        <div className={classes.occupied}>OCCUPIED</div>
      ) : (
        <div
          className={
            maintenance === true ? classes.disabled : classes.available
          }
        >
          AVAILABLE
        </div>
      )}
      {/* {console.log(roomTypeId, roomId)} */}
      {/* it returns either maintenance or add maintenance */}
      {maintenance ? (
        <div className={classes.maintenance}  onClick = { () => {removeMaintenanceHandler( )}} > REMOVE MAINTENANCE</div>
      ) : (
        <div
        onClick={ () => { addMaintenanceHandler () } }
          className={
            occupied === true
              ? classes.disabled
              : classes.this_is_not_a_real_class_name
          }
        >
          {" "}
          ADD MAINTENANCE
        </div>
      )}
      {/* RETURNS SOME EXTRA INFO */}
      <div>EXTRA INFO </div>
    </div>
  );
};

export default RoomItem;
