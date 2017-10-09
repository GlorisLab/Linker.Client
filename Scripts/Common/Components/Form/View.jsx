import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OverlayStatus, ValidationAlert } from 'Components/Helpers';
import { STATUS_LOADING, STATUS_DEFAULT } from 'Constants/StatusConstants';

class BaseFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastEditing: null,
      lastEditingStatus: STATUS_LOADING
    };

    const { handleSubmit, onSubmit } = props;

    this.onSubmit = () => {
      const submitCallback =
        (this.props.status && this.props.status !== STATUS_DEFAULT) || !onSubmit || !handleSubmit ? () => ({}) : onSubmit;

      return handleSubmit(submitCallback);
    };
  }

  render() {
    const { status, message, children, errors, className } = this.props;

    return (
      <OverlayStatus status={status} message={message}>
        <ValidationAlert errors={errors} />
        <form onSubmit={this.onSubmit()} className={className}>
          {children}
        </form>
      </OverlayStatus>
    );
  }
}

BaseFormContainer.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
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
