import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src="/SVG/bolt.svg" alt="ELECTRIC LOGO" className={classes.bolt} />
        <div className={classes.title}>ELECTRIQ</div>
        {/* <div className={classes.subtitle}>
          <div className={classes.pms}>PMS</div>
          <div className={classes.simplified}>implified</div>
        </div> */}
        <div className={classes.content}>HOW CAN WE HELP YOU TODAY?</div>
      </div>
      <div className={classes.main}>
        <Link to={"bookings"} className={classes.card}>
          <div className={classes.title}>RESERVATIONS</div>
          <div className={classes.content}>ADD RESERVATIONS</div>
        </Link>

        <Link to={"rooms"} className={classes.card}>
          <div className={classes.title}> ROOMS </div>
          <div className={classes.content}>
            UPDATE THE PROPERTY STRUCTURE AND ROOM DETAILS
          </div>
        </Link>
        <Link to={"rates"} className={classes.card}>
          <div className={classes.title}> RATES </div>
          <div className={classes.content}>
            UPDATE RATES AND MANAGE PROMOTIONS AND DISCOUNTS
          </div>
        </Link>
        <Link
          to={"about"}
          className={classes.card}
          onClick={() => navigate("about")}
        >
          <div className={classes.title}> ABOUT </div>
          <div className={classes.content}>
            {" "}
            DISCOVER MORE ABOUT ELECTRIC INCLUDING VERSION
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
