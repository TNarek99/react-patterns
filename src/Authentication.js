import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

class Authentication extends Component {
  static propTypes = {
      render: PropTypes.func.isRequired
  };
  static SERVER_URL = "https://SOME_URL.com";
  static fetchParams = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      }
  };
  state = { shouldRender: false, user: null };

  componentDidMount() {
    this.checkAuthenticated().then(user => {
        this.setState({ user, shouldRender: true });
    })
  }

  checkAuthenticated = () => {
      // assume no error is shown
      // assume the user is always authenticated
      fetch(this.SERVER_URL, this.fetchParams)
        .then(response => response.json())
        .then(({ user }) => user);
  }

  render() {
    const { shouldRender } = this.state;
    const { renderProp } = this.props;
    return shouldRender ? <div>{renderProp(this.state)}</div> : null;
  }
}

class AuthUser extends Component {
  static propTypes = {};

  authRenderProp = ({ user }) => <div>Welcome {user.username}</div>

  render() {
    // using render props...
    return <div><Authentication render={this.authRenderProp} /></div>;
  }
}

const Routes = () => <Route path="/" component={AuthUser} />;

export default Routes;

