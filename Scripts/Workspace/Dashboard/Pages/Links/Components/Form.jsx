import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'Components/Form';
import { ButtonLoader, ButtonsGroup } from 'Components/Controls';

const DashboardPagesLinksCreateForm = ({ status, ...props }) => (
  <Form {...props}>
    <Input name="link" label="Link*" />
    <Input name="name" label="Name" />
    <ButtonsGroup>
      <ButtonLoader status={status}>create</ButtonLoader>
    </ButtonsGroup>
  </Form>
);

DashboardPagesLinksCreateForm.propTypes = {
  status: PropTypes.string
};

export default DashboardPagesLinksCreateForm;
