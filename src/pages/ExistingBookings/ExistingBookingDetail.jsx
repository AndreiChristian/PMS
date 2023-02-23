import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import classes from "./ExistingBookingDetail.module.css";

const ExistingBookingDetail = () => {
  let existingBookings = useSelector((state) => state.bookingList.bookings);
  const params = useParams();
  const bookingId = params.id;
  const booking = existingBookings.find(
    (booking) => booking.bookingId === bookingId
  );
  console.log(booking);

  console.log(booking)

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h1 className={classes.header}>GUEST INFORMATION</h1>
        <div>
          <div>FIRST NAME </div>
          <div> {booking.firstName}</div>
        </div>
        <div>
          <div>LAST NAME </div>
          <div> {booking.lastName}</div>
        </div>
        <div>
          <div>EMAIL </div>
          <div> {booking.email}</div>
        </div>
        <div>
          <div>PHONE NUMBER </div>
          <div> {booking.phone}</div>
        </div>
        <div>
          <div>COUNTRY</div>
          <div>{booking.country ? booking.country : "-"}</div>
        </div>
        <div>
          <div>CITY</div>
          <div>{booking.city ? booking.city : "-"}</div>
        </div>
        <div>
          <div>STREET</div>
          <div>{booking.street ? booking.street : "-"}</div>
        </div>
        <div>
          <div>NATIONALITY</div>
          <div>{booking.nationality}</div>
        </div>
        <div>
          <div>PASSPORT NUMBER</div>
          <div>{booking.passportNumber}</div>
        </div>
        <div>
          <div>AGE</div>
          <div>{booking.age}</div>
        </div>
        <div>
          <div>GENDER</div>
          <div>{booking.gender}</div>
        </div>
        <div>
          <div>SPECIAL REQUIREMENTS</div>
          <div>
            {booking.specialRequirements ? booking.specialRequirements : "-"}
          </div>
        </div>
      </div>
      <div className={classes.booking}>
        <div className={classes.date}>
          <div>ARRIVAL DATE</div>
          <div>DEPARTURE DATE</div>
          <div>{booking.checkInDate.toString().slice(0, -13)}</div>
          <div>{booking.checkOutDate.toString().slice(0, -13)}</div>
        </div>
        <div className={classes.room} >
          <div>ROOM INFO</div>
            <div>ROOM TYPE {booking.roomTypeName}</div>
            <div>ROOM NUMBER {booking.roomNumber}</div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default ExistingBookingDetail;
