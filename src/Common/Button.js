import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = ({ on, handleClick }) => <button onClick={handleClick}>The button is {on ? "ON" : "OFF"}</button>;

Button.propTypes = {};

export default Button;
