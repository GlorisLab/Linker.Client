import React from 'react';
import PropTypes from 'prop-types';

const DashboardPagesLink = ({ description, title }) => (
  <div className="link">
    <div className="header">{title}</div>
    <div className="description">{description}</div>
  </div>
);

DashboardPagesLink.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default DashboardPagesLink;
