import React, { Component } from "react";
import PropTypes from "prop-types";
import ToggleProvider from "./ToggleProvider";
import ConnectedToggle from "./ConnectedToggle";

const Switch = () => <ConnectedToggle render={({on, handleClick}) => <button onClick={handleClick}>{on ? "On" : "Off"}</button>} />

export default Switch;
