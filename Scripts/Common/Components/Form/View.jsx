import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OverlayStatus, ValidationAlert } from 'Components/Helpers';
import { STATUS_LOADING, STATUS_DEFAULT } from 'Constants/StatusConstants';

class BaseFormContainer extends Component {
  render() {
    const { handleSubmit, onSubmit, children, errors, className } = this.props;

    return (
      <div>
        <ValidationAlert errors={errors} />
        <form onSubmit={onSubmit && handleSubmit ? handleSubmit(onSubmit) : null} className={className}>
          {children}
        </form>
      </div>
    );
  }
}

BaseFormContainer.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  handleSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  onSubmit: PropTypes.func,
};

export default BaseFormContainer;
