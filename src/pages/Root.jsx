import React from "react";
import { Outlet } from "react-router";
import classes from "./Root.module.css";
import NavBar from "../components/NavigationBar/NavBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className={classes.root_layout}>
      <NavBar />
      <div className={classes.root_outlet}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
