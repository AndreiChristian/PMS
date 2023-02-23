import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookingFormAction } from "../../../store/Slices/booking-form-slice";
import classes from "./BookingInputForm.module.css";

const BookingInputForm = ({ name, type, id }) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  let formClass = classes.input;
  const formClassPicker = (value, touched, formClass) => {
    if (!touched) {
      return formClass;
    } else if (value.trim(" ")) {
      formClass = classes.valid;
      return formClass;
    } else {
      formClass = classes.invalid;
      return formClass;
    }
  };

  formClass = formClassPicker(value, touched, formClass);

  const formChangeHandler = () => {
    dispatch(bookingFormAction.handleChange({ id, value }));
  };

  return (
    <div className={classes.form}>
      <label>{name}</label>
      <input
        className={formClass}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={() => {
          handleBlur();
          if (value.trim(" ")) {
            formChangeHandler();
          }
        }}
      />
    </div>
  );
};

export default BookingInputForm;
