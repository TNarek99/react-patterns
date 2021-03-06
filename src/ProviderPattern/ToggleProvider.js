import React, { Component } from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle";

class ToggleProvider extends Component {
  static propTypes = {};
  static contextName = "__toggle__";
  static Renderer = class extends Component {
      static childContextTypes = {
          [ToggleProvider.contextName]: PropTypes.object.isRequired
      };

      getChildContext() {
          return {
              [ToggleProvider.contextName]: this.props.toggle
          };
      }

      render() {
          return this.props.children;
      }
  };

  renderSwitch = (toggle) => {
      return <ToggleProvider.Renderer toggle={toggle} children={children} />
  };

  render() {
    const { children, ...remainingProps } = this.props;
    return <Toggle {...remainingProps} renderSwitch={this.renderSwitch} />;
  }
}

export default ToggleProvider;
