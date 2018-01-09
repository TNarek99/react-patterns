import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "../Common/Switch";

class Toggle extends Component {
  static propTypes = {};
  state = {
      on: false
  };

  handleClick = () => this.setState(({on}) => ({ on: !on }));

  render() {
      return this.props.renderSwitch({
          on: this.state.on,
          handleClick: this.handleClick
      });
  }
}

class ToggleWrapper extends Component {
    renderSwitch = ({on, handleClick}) => {
        return <div>
            The button is {on ? "On" : "Off"}
            <Switch on={on} handleClick={handleClick} />
        </div>;
    };
    
    render() {
        return <Toggle renderSwitch={this.renderSwitch} />
    }
}

class AnotherToggleWrapper extends Component {
    renderSwitch = ({ on, handleClick }) => {
        return <div>The button is {on ? "ON!!" : "OFF!!"}</div>
    };

    render() {
        return <Toggle renderSwitch={this.renderSwitch} />
    }
}

export default ToggleWrapper;