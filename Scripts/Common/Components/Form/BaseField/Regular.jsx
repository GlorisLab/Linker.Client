import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup, ControlLabel } from 'Components/Controls';

const BaseFieldRegular = ({ inline, hidden, required, validationState, label, asyncValidating, children, className, icon }) => (
  <FormGroup
    validationState={validationState}
    className={classNames(className, { inline: inline || icon, hidden, 'has-loading': asyncValidating })}
  >
    {label && <ControlLabel className={classNames({ required })}>{label}</ControlLabel>}
    {icon && <i className="material-icons">{icon}</i>}
    <div className="wrap-field">
      {children}
    </div>
  </FormGroup>
);

BaseFieldRegular.propTypes = {
  inline: PropTypes.bool,
  required: PropTypes.bool,
  hidden: PropTypes.bool,
  asyncValidating: PropTypes.bool,
  label: PropTypes.string,
  validationState: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};

export default BaseFieldRegular;
