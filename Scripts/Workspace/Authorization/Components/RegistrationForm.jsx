import React from 'react';
import { Form, Input } from 'Components/Form';
import { Button, ButtonsGroup } from 'Components/Controls';

import { FIELD_MAX_LENGTH } from '../Constants/SignInConstants';

const RegistrationForm = props => (
  <Form {...props}>
    <Input name="email" placeholder="Email..." icon="email" maxLength={FIELD_MAX_LENGTH} />
    <Input name="displayName" placeholder="Login..." icon="face" maxLength={FIELD_MAX_LENGTH} />
    <Input name="password" placeholder="Password..." icon="lock outline" maxLength={FIELD_MAX_LENGTH} />
    <Input name="repeatPassword" placeholder="Repeat password..." icon="lock" maxLength={FIELD_MAX_LENGTH} />
    <ButtonsGroup>
      <Button bsSize="lg" type="submit" bsStyle="primary">Registration</Button>
    </ButtonsGroup>
  </Form>
);

export default RegistrationForm;
