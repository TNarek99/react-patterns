import React, { Component } from "react";
import PropTypes from "prop-types";
// using Getter Props and Render Props
// the whole logic written below has a conventional manner
const API_AUTH_URI = "/isAuth";
const STATUS_OK = '200';
const fetchConfig = { method: 'POST' };
const isAuthenticatedRequest = () => fetch(API_AUTH_URI, fetchConfig);

class UserDisplay extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    };
    static userFields = ['username', 'email'];
    
    render() {
        const { username, password } = this.props;
        return <div> Username: { username } Email: { email } </div>;
    }
}

class Auth extends Component {
  static propTypes = {};
  defaultState = { shouldMount: false, user: null };
  state = this.defaultState;

  componentDidMount() {
      isAuthenticatedRequest()
        .then(response => response.json())
        .then(data => ({ data, status: response.status }))
        .then(result => {
            const newState = this.defaultState;
            if (result.status === STATUS_OK) {
                newState.shouldMount = true;
                newState.user = result.data.user;
            }
            return newState;
        })
        .then(newState => this.setState(newState))
  }

  getterProps = ({ userFields }) => {
      const result = {};
      const { user } = this.state;
      userFields.forEach((field) => {
          result[field] = user[field];
      });
      return result;
  };

  render() {
    const { render } = this.props;
    const { shouldMount } = this.state;
    if (!shouldMount) return null;
    return render(this.getterProps);
  }
}

class App extends Component {

    renderToggle = ({ getterProps }) => {
        return <UserDisplay {...getterProps({ userFields: UserDisplay.userFields })} />
    };

    render() {
        return <Auth render={this.renderToggle} />;
    }
}