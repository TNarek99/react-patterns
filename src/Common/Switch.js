import React, { Component } from "react";
import PropTypes from "prop-types";

const Switch = ({on, handleClick}) => <button onClick={handleClick}>{on ? "On" : "Off"}</button>

Switch.propTypes = {
    toggle: PropTypes.object.isRequired
};

export default Switch;
