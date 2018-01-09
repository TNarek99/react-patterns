import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "../Common/Switch";
import Button from "../Common/Button";

const Compose = (...fns) => (...args) => { fns.forEach(fn => fn && fn(...args)) };

class Toggle extends Component {
  static propTypes = {};
  state = {
      on: false
  };

  handleClick = () => this.setState(({on}) => ({on: !on}));

  getTogglerProps = ({handleClick, ...props} = {}) => {
      return {on: this.state.on, handleClick: Compose(handleClick, this.handleClick), ...props};
  };

  render() {
    const {on} = this.state;
    return this.props.renderSwitch({ getTogglerProps: this.getTogglerProps });
  }
}

class ToggleWrapper extends Component {
    renderSwitch = ({ getTogglerProps }) => (
        <React.Fragment>
            <Switch {...getTogglerProps()} />
            <Button {...getTogglerProps({
                handleClick: () => alert("hi"),
                id: 'hi'
            })} />
        </React.Fragment>
    );

    render() {
        return <Toggle renderSwitch={this.renderSwitch} />
    }
}

export default ToggleWrapper;
