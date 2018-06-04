import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserAction from '../../actions/user';
import '../../../assets/styles/components/Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onLogin } = this.props;
    const { userName, password } = this.state;
    onLogin(userName, password);
  }

  render() {
    const { userName, password } = this.state;
    return (

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4 loginForm">
            <div className="account-wall">
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={userName}
                  onChange={this.handleUserNameChange}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={this.handlePasswordChange}
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(UserAction.onLoginUser(username, password))
});

export default connect(null, mapDispatchToProps)(Login);
