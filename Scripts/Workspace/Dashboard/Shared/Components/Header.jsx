import _ from 'lodash';
import React, { Component } from 'react';

import User from '../Containers/User';

class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header"><User /></div>
    );
  }
}

export default DashboardHeader;
