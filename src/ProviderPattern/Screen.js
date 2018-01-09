import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "./Switch";
import Toggle from "./Toggle";
import ToggleProvider from "./ToggleProvider";
import ConnectedToggle from "./ConnectedToggle";

const FirstText = () => <ConnectedToggle render={({on}) => <div>{ on ? "Hurray" : "Nurray" }</div>} />;

const SecondText = () => <ConnectedToggle render={({on}) => <div>{ on ? "Turn me off" : "Turn me on" }</div>} />;

class Screen extends Component {

  render() {
      return <ToggleProvider>
        <Switch />
        <FirstText />
        <SecondText />
      </ToggleProvider>;
  }
}

export default Screen;