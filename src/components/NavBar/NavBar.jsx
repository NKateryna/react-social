import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : null)}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : null)}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : null)}
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : null)}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
