import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'Components/Controls';
import { STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR } from 'Constants/StatusConstants';

const ControlsButton = ({ className, status, ...others }) => (
  <Button
    className={classNames({
      className,
      'btn-status-loader': status === STATUS_LOADING,
      'btn-status-error': status === STATUS_ERROR,
      'btn-status-success': status === STATUS_SUCCESS
    })}
    {...others}
  />
);

ControlsButton.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string,
};

export default ControlsButton;
