import { createActions } from 'realt';

import UserSource from '../Sources/UserSource';

class AccountRegistrationActions {
  userGet() {
    return UserSource.getUser();
  }
}

export default createActions(AccountRegistrationActions);
