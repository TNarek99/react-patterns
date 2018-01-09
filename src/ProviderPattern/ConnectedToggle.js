import React, { Component } from "react";
import PropTypes from "prop-types";
import ToggleProvider from "./ToggleProvider";

const ConnectedToggle = ({ render }, context) => {
    return render(context[ToggleProvider.contextName]);
};

ConnectedToggle.contextTypes = {
    [ToggleProvider.contextName]: PropTypes.object.isRequired
};

export default ConnectedToggle;
