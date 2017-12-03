import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connectToStore, compose, connectToForm } from 'Decorators/ConnectDecorators';
import { Button } from 'Components/Controls';

import CreateFormActions from '../Actions/CreateFormActions';
import Form from '../Components/Form';

class DashboardPagesLinkCreateForm extends Component {
  constructor(props) {
    super();

    const {
      reset,
      actions: { linkCreate }
    } = props;

    this.state = {
      isOpen: false
    };

    this.openToggle = () => { reset(); this.setState({ isOpen: !this.state.isOpen }); };
    this.onLinkCreate = link => linkCreate({ ...link, userId: this.props.userId }, this.openToggle);
  }

  render() {
    return (
      <div className="wrap-create-link">
        <ReactCSSTransitionGroup
          transitionName="createlink"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.isOpen &&
            <div className="link create-link">
              <Form onSubmit={this.onLinkCreate} {...this.props} />
            </div>}
          {!this.state.isOpen &&
            <div className="link new-link">
              <Button onClick={this.openToggle}><i className="material-icons">add</i></Button>
            </div>}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

DashboardPagesLinkCreateForm.propTypes = {
  actions: PropTypes.object,
  userId: PropTypes.string,
  reset: PropTypes.func
};

export default compose(
  connectToStore({ name: 'linkCreate', actions: CreateFormActions }),
  connectToForm({ name: 'linkCreateForm' })
)(DashboardPagesLinkCreateForm);
