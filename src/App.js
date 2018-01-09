import React, { Component } from "react";
import Screen from "./ProviderPattern/Screen";
import PropTypes from "prop-types";

class Mouse extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };
  state = {x: 0, y: 0};

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    return <div onMouseMove={this.handleMouseMove}>{this.props.render(this.state)}</div>
  }
}

class App extends Component {
  static propTypes = {};

  mouseRenderProp = ({ x, y }) => <div>X coord: {x} <br /> Y coord: {y}</div>
  
  render() {
    return <Screen />;
  }
}

export default App;
