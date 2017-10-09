import React from 'react';

import SignIn from '../Containers/SignIn';
import Registration from '../Containers/Registration';


const AuthorizationLayout = () => (
  <div className="authorization-layout">
    <div className="content-wrap">
      <SignIn />
      <Registration />
    </div>
  </div>
);

export default AuthorizationLayout;
