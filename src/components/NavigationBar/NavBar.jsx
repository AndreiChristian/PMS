import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.logo} onClick={() => navigate("")}>
        {/* the svg for our logo, a litlle thunder */}
        <img src="/SVG/bolt.svg" className={classes.bolt} alt="Electric Logo" />
      </div>
      <div className={classes.links}>
        <NavLink
          to={"/bookings"}
          className={({ isActive }) =>
            isActive ? classes.link_active : classes.link
          }
        >
          BOOKINGS
        </NavLink>

        <NavLink
          to={"/rooms"}
          className={({ isActive }) =>
            isActive ? classes.link_active : classes.link
          }
        >
          ROOMS
        </NavLink>
        <NavLink
          to={"/rates"}
          className={({ isActive }) =>
            isActive ? classes.link_active : classes.link
          }
        >
          RATES
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
