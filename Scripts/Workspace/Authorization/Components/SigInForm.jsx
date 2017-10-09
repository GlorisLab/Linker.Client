import React from 'react';
import { Form, Input } from 'Components/Form';
import { Button, ButtonsGroup } from 'Components/Controls';

import { FIELD_MAX_LENGTH } from '../Constants/SignInConstants';

const SignInForm = props => (
  <Form {...props}>
    <Input name="email" placeholder="Email..." icon="email" maxLength={FIELD_MAX_LENGTH} />
    <Input name="password" placeholder="Password..." icon="lock" maxLength={FIELD_MAX_LENGTH} />
    <ButtonsGroup>
      <Button bsSize="lg" type="submit" bsStyle="primary">sign in</Button>
    </ButtonsGroup>
  </Form>
);

export default SignInForm;
