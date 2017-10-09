import _ from 'lodash';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const ValidationAlert = ({ errors, className }) => {
  if (_.isEmpty(errors)) return <span />;

  const unwrapErrors = _.isString(errors) ? [errors] : errors;

  return (
    <div className={classNames('alert-validation-errors', className)}>
      {unwrapErrors.map((value, key) => <p key={key}>{value}</p>)}
    </div>
  );
};

ValidationAlert.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.string
};

export default ValidationAlert;
