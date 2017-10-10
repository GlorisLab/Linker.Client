import React from 'react';
import { Form, Input } from 'Components/Form';
import { ButtonLoader, ButtonsGroup } from 'Components/Controls';

import { FIELD_MAX_LENGTH } from '../Constants/SignInConstants';

const SignInForm = ({ status, ...props }) => (
  <Form {...props}>
    <Input name="email" label="Email" icon="email" maxLength={FIELD_MAX_LENGTH} />
    <Input name="password" label="Password" icon="lock" maxLength={FIELD_MAX_LENGTH} />
    <ButtonsGroup>
      <ButtonLoader status={status} bsSize="lg" type="submit" bsStyle="primary"><span>sign in</span></ButtonLoader>
    </ButtonsGroup>
  </Form>
);

export default SignInForm;
