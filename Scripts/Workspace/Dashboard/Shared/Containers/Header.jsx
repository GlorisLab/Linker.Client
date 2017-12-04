import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowService from 'Services/WindowService';
import SessionService from 'Services/SessionService';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { DropdownButton, MenuItem } from 'Components/Controls';

import Searcher from './Searcher';

class DashboardHeader extends Component {
  constructor() {
    super()

    this.onLogout = () => {
      SessionService.signOut();

      WindowService.redirect('/');
    };
  }
  render() {
    const { displayName } = this.props;

    return (
      <div className="dashboard-header">
        <Searcher />
        <div className="user-info">
          <DropdownButton
            id="user-info-dropdown"
            title={<span title={displayName}>{displayName}</span>}
            pullRight
          >
            <MenuItem key="exit" onSelect={this.onLogout}>Выход</MenuItem>
          </DropdownButton>
        </div>
      </div>
    );
  }
}


DashboardHeader.propTypes = {
  displayName: PropTypes.string,
};

export default connectToStore({ name: 'user' })(DashboardHeader);
