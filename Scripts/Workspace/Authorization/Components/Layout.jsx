import React, { Component } from 'react';
import { Button } from 'Components/Controls';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SignIn from '../Containers/SignIn';
import Registration from '../Containers/Registration';


class AuthorizationLayout extends Component {
  constructor() {
    super();

    this.state = {
      isSignIn: true
    };

    this.onToggleView = () => this.setState({ isSignIn: !this.state.isSignIn });
  }

  render() {
    const { isSignIn } = this.state;

    return (
      <div className="authorization-layout">
        <div className="authorization-content-wrap">
          <img alt="sorry..." src="http://127.0.0.1:3000/sign-in.png" />
          <Button bsStyle="primary" className="toggled-view" onClick={this.onToggleView}>
            {
              isSignIn ?
                <div><i className="material-icons">person_add</i><span>Registration</span></div> :
                <div><i className="material-icons">person</i><span>Sign in</span></div>
            }
          </Button>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {isSignIn && <SignIn />}
            {!isSignIn && <Registration />}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default AuthorizationLayout;
