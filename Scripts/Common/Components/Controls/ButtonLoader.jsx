import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'Components/Controls';
import { STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR } from 'Constants/StatusConstants';

const ControlsButton = ({ className, status, ...others }) => (
  <Button
    className={classNames({
      className,
      'spinning-loader': status === STATUS_LOADING,
      'error-status': status === STATUS_ERROR
    })}
    {...others}
  />
);

ControlsButton.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string,
};

export default ControlsButton;
