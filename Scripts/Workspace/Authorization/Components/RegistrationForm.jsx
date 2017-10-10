import React from 'react';
import { Form, Input } from 'Components/Form';
import { Button, ButtonsGroup } from 'Components/Controls';

import { FIELD_MAX_LENGTH } from '../Constants/SignInConstants';

const RegistrationForm = props => (
  <Form {...props}>
    <Input name="email" label="Email*" icon="email" maxLength={FIELD_MAX_LENGTH} />
    <Input name="displayName" label="Login" icon="face" maxLength={FIELD_MAX_LENGTH} />
    <Input name="password" label="Password*" icon="lock" maxLength={FIELD_MAX_LENGTH} />
    <ButtonsGroup>
      <Button bsSize="lg" type="submit" bsStyle="primary">Registration</Button>
    </ButtonsGroup>
  </Form>
);

export default RegistrationForm;
