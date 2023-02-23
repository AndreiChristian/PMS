import React from "react";
import BookingInputForm from "../BookingInputForm/BookingInputForm";
import classes from './PersonalInfo.module.css'

const PersonalInfo = () => {
  return (
    <div className={classes.container} >
      <div>GUEST INFORMATION</div>
      <div>
        <BookingInputForm name="FIRST NAME" type="text" id={"firstName"} />
        <BookingInputForm name="LAST NAME" type="text" id={"lastName"} />
        <BookingInputForm name="EMAIL" type="text" id={"email"} />
        <BookingInputForm name="PHONE" type="text" id={"phone"} />
        <BookingInputForm name="COUNTRY" type="text" id={"country"} />
        <BookingInputForm name="CITY" type="text" id={"city"} />
        <BookingInputForm name="STREET" type="text" id={"street"} />
        <BookingInputForm name="NUMBER" type="text" id={"streetNumber"} />
        <BookingInputForm
          name="PASSPORT NUMBER"
          type="text"
          id={"passportNumber"}
        />
        <BookingInputForm name="AGE" type="text" id={"age"} />
        <BookingInputForm name="GENDER" type="text" id={"gender"} />
        <BookingInputForm
          name="SPECIAL REQUIREMENTS"
          type="text"
          id={"specialRequirements"}
        />
      </div>
    </div>
  );
};
export default PersonalInfo;
