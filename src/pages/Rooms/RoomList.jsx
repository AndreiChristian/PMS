import dayjs from "dayjs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import RoomItem from "./RoomItem/RoomItem";
import classes from "./RoomList.module.css";
import { useRoomFilter } from "./use-room-filter";

// this component will generate a single room type, so a title containing some metrics
// a filter to well, filter the rooms based on available, busy maintenance etc!
// it will also call the Room Item Component that will generate the individual rooms

const RoomList = () => {
  // we set two states that fill be used for filtering the array
  //  of rooms that we get from redux
  // we pass those values into the use-room-filter function for
  // returning a filtered array and showing only the items that the user selected
  // at the same time, the state is used for coloring
  // the filters based on whether they are active or not
  const [filter, setFilter] = useState("");
  const [formFilter, setFormFilter] = useState("");

  // we use this id because the page is generated as a route
  // the id corresponds to the roomType, not to the indiviual room
  const { id } = useParams();

  // the selector calls the state which we filter to get the room with the id we need
  // and then we distructure to get the quantity, name, rate etc
  let roomTypes = useSelector((state) => state.roomType.roomTypes);
   
  const { name, quantity, rate } = roomTypes.find(
    (item) => item.roomTypeId === id
  );

  let rooms = useSelector( state => state.individualRoom.rooms )
  rooms = rooms.find( room => room.roomTypeId === id )
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

  // we call the function to get the filtered array based on the filters our user chose

  const filteredArray = useRoomFilter(filter, formFilter, rooms);
    // console.log(filteredArray)
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div>
          {name}
          {"  "}${rate}{" "}
        </div>
        {/* metrics based on total number of rooms of this type, occupancy and maintenance */}
        <div className={classes.metrics}>
          {/*  the total quantity metric */}
          <div className={classes.metric}>
            <div className={classes.metric_title}>{quantity}</div>
            <div className={classes.metric_subtitle}> TOTAL </div>
          </div>
          {/* the available metric */}
          <div className={classes.metric}>
            <div className={classes.metric_title}>
              {Math.round(
                ((quantity - occupancy - maintenance) / quantity) * 100
              )}
              %
            </div>
            <div className={classes.metric_subtitle}> AVAILABLE</div>
          </div>
          {/* the metric for occupied */}
          <div className={classes.metric}>
            <div className={classes.metric_title}>
              {Math.round((occupancy / quantity) * 100)}%
            </div>
            <div className={classes.metric_subtitle}>OCCUPIED</div>
          </div>
          {/* the maintenance metric */}
          <div className={classes.metric}>
            <div className={classes.metric_title}>
              {Math.round((maintenance / quantity) * 100)}%
            </div>
            <div className={classes.metric_subtitle}>MAINTENANCE</div>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <div className={classes.text}>FILTER BY</div>
        <div
          className={
            filter === "available" ? classes.available_active : classes.action
          }
          onClick={() => setFilter("available")}
        >
          AVAILABLE
        </div>
        <div
          className={
            filter === "occupied" ? classes.occupied_active : classes.action
          }
          onClick={() => setFilter("occupied")}
        >
          OCCUPIED
        </div>
        <div
          className={
            filter === "maintenance"
              ? classes.maintenance_active
              : classes.action
          }
          onClick={() => setFilter("maintenance")}
        >
          MAINTENANCE
        </div>
        <div className={classes.action}>
          <form>
            <label>
              ROOM NUMBER
              <input
                type="text"
                name="number"
                value={formFilter}
                onChange={(event) => {
                  setFormFilter(event.target.value);
                  setFilter("");
                }}
              />
            </label>
          </form>
        </div>
        {filter && (
          <div
            onClick={() => {
              setFilter("");
              setFormFilter("");
            }}
            className={classes.action}
          >
            X
          </div>
        )}
      </div>

      <div className={classes.rooms}>
        {filteredArray.length === 0 ? (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            illo itaque quo libero natus tempore, culpa quisquam nihil
            accusantium rerum in voluptatum debitis tenetur ullam dignissimos
            exercitationem ex, consectetur vel!
          </div>
        ) : (
          filteredArray.map((room) => {
            //   console.log(room.roomId);
            return (
              <RoomItem
                roomTypeName={name}
                key={room.id}
                roomId={room.roomId}
                roomTypeId={room.roomTypeId}
                extraInfo={room.extraInfo}
                occupied={room.occupied}
                maintenance={room.maintenance}
                roomNumber={room.roomNumber}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RoomList;
