import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}> ELECTRIC PMSimplified</div>
      <div className={classes.card}>
        <div className={classes.title}>WHAT IS OUR MISSION?</div>
        <div className={classes.content}>
          OUR MISSION IS TO RESPOND TO THE NEEDS OF HOTEL AROUND THE WORLD THAT
          FACE ALWAYS CHANGING TECHNOLOGIES AND GREAT TURNOVER IN FRONT OFFICE
          DESK.
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.title}>HOW ARE WE GOING DO TO THAT?</div>
        <div className={classes.content}>
          OUR VISION IS TO CREATE A SIMPLIFIED PROPERTY MANAGEMENT STYSTEM THAT
          HAS ALL THE FUTURES NEEDED TO HANDLE BOTH SMALL AND LARGE PROPERTIES,
          CONNECT IT WITH OTAs AND OFFER AN EXTREMLY INTUITIVE INTERFACE SO
          THERE IS NO TRAINING NEEDED!
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.title}>WHY WOULD I NEED IT?</div>
        <div className={classes.content}>
          OUR APPROACH IS TO GIVE HOTELS CONTROL OVER THEIR PMS BY OFFERING
          TOOLS FOR UPDATING INSTANTLY THE DETAILS OF THE PROPERTIES, ROOM
          TYPES, RATES AND EVERYTHING ELSE THAT CAN CHANGE IN TIME.
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.title}>IS IT READY TO HIT THE MARKET?</div>
        <div className={classes.content}>
          OUR WORK IS STILL IN PROGRESS IN ORDER TO MAKE SURE THAT ALL THE CORE
          FEATURES AS WELL AS MANY IMPROVEMENTS ARE PRESENT IN ELECTRIC.
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.title}>WHO IS BEHIND ELECTRIC?</div>
        <div className={classes.content}>
          
          ELECTRIC IS THE WORK OF TWO PEOPLE: ANDREI AND PAUL.
        </div>
      </div>
    </div>
  );
};

export default About;
