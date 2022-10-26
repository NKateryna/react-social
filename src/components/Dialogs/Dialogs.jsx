import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <div className={`${classes.dialog} ${classes.active}`}>
          <NavLink to="/dialogs/1">Enchantress</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2">Pudge</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3">Tiny</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4">Treant Protector</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.mesage}>Where you going?</div>
        <div className={classes.mesage}>Wait up!</div>
        <div className={classes.mesage}>Don't run off!</div>
        <div className={classes.mesage}>Gotcha!</div>
        <div className={classes.mesage}>You okay?</div>
      </div>
    </div>
  );
};

export default Dialogs;
