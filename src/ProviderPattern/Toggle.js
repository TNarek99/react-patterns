import React, { Component } from "react";
import PropTypes from "prop-types";

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

  export default Toggle;