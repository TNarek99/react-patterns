import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Switch from "../Common/Switch";

const ToggleOn = ({ on, children }) => on ? children : null;
const ToggleOff = ({ on, children }) => on ? null : children;
const ToggleButton = ({ on, handleClick }) => <Switch on={on} handleClick={handleClick} />;

class Toggle extends Component {
  static propTypes = {};
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  state = {
      on: false
  };

  switchClickedHandler = () => this.setState(({ on }) => ({ on: !on }));

  mapChildren = () => Children.map(this.props.children, child => React.cloneElement(child, {...this.state, handleClick: this.switchClickedHandler}));

  render() {
      return this.mapChildren();
  }
}

export default Toggle;
