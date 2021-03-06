import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { MultiSelect } from 'Components/Controls';
import FormUtils from 'Utils/FormUtils';

const FormSearcher = ({ name, label, placeholder, ...props }) => (
  <Field
    name={name}
    props={{
      ...props,
      label,
      placeholder: FormUtils.definePlaceholderField(label, placeholder)
    }}
    component={MultiSelect}
  />
);

FormSearcher.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  singleFetch: PropTypes.string,
  dataFetch: PropTypes.func,
  valueField: PropTypes.string,
};

FormSearcher.defaultProps = {
  errorsDisplayType: 'tooltip',
  valueField: 'code',
  textField: 'name',
};

export default FormSearcher;
