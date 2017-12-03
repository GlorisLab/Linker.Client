import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';

import UserActions from '../Actions/UserActions';

class SignIn extends Component {
  render() {
    const { displayName } = this.props;

    return (
      <div className="user">{displayName}</div>
    );
  }
}

SignIn.propTypes = {
  displayName: PropTypes.string,
  actions: PropTypes.object
};

export default connectToStore({ name: 'user', actions: UserActions })(SignIn);
