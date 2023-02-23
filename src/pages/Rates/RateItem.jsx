import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { roomTypeActions } from "../../store/Slices/room-type-slice";
import classes from "./RateItem.module.css";

const RateItem = ({ roomTypeId, rate, name }) => {
  const [toggleModify, setToggleModify] = useState(false);
  const [newRate, setNewRate] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const changeRateHandler = () => {
    dispatch(roomTypeActions.changeRate({ roomTypeId, newRate }));
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.name}>{name}</div>
        <div className={classes.rate}>${rate}</div>
        <div
          className={!toggleModify ? classes.modify : classes.stop}
          onClick={() => {
            setToggleModify((prev) => !prev);
          }}
        >
          {!toggleModify ? "MODIFY" : "HIDE"}
        </div>
        {toggleModify && (
          <input
            value={newRate}
            type="number"
            onChange={(event) => setNewRate(parseInt(event.target.value))}
          />
        )}
        {toggleModify && newRate && (
          <div className={classes.add} onClick={() => setShowValidation(true)}>
            ADD MODIFICATION
          </div>
        )}
      </div>
      {showValidation && newRate !== "" && (
        <div className={classes.module}>
          <div>
            YOU WILL MODIFY THE RATE OF {name.toUpperCase()} FROM ${rate} TO $
            {newRate}.
          </div>
          <div>
            THIS REPRESENTS {rate < newRate ? "AN INCREASE" : "A REDUCTION"} OF{" "}
            {Math.round(Math.abs((rate - newRate) / rate) * 100)}%!
          </div>
          <div> DO YOU WANT TO CONFIRM? </div>

          <div className={classes.buttons}>
            <div
              onClick={() => {
                changeRateHandler();
                setShowValidation(false);
                setNewRate("");
                setToggleModify("");
                setSuccess(true);
              }}
            >
              CONFIRM
            </div>
            <div
              onClick={() => {
                setShowValidation(false);
                setNewRate("");
                setToggleModify("");
              }}
            >
              DISCARD
            </div>
          </div>
        </div>
      )}
      {console.log(success)}
      {success && (
        <div className={classes.success}>
          <div>
            {" "}
            THE RATE FOR {name.toUpperCase()} HAS BEEN MODIFIED SUCCESSFULLY!
            THE NEW RATE IS ${rate}!
          </div>
          <div onClick={() => setSuccess(false)}>x</div>
        </div>
      )}
    </>
  );
};

export default RateItem;
