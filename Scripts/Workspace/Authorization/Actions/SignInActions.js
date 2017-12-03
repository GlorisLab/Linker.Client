import _ from 'lodash';
import { createActions } from 'realt';
import WindowService from 'Services/WindowService';
import SessionService from 'Services/SessionService';
import { STATUS_DEFAULT, DELAY } from 'Constants/StatusConstants';

import AccountSource from '../Sources/AccountSource';

class AccountSignInActions {
  constructor() {
    this.generate(
      'signInCallback'
    );
  }

  signIn(query) {
    return dispatch => {
      AccountSource.signIn(query)
        .loading(result => dispatch(this.signInCallback(result)))
        .then(result => {
          SessionService.signIn(result.response);
          dispatch(this.signInCallback(result));

          setTimeout(() => WindowService.redirect('http://localhost:3000/Dashboard.html'), DELAY);
        })
        .catch(result => {
          dispatch(this.signInCallback(result));

          setTimeout(() => dispatch(this.signInCallback({ status: STATUS_DEFAULT })), DELAY);
        });
    };
  }
}

export default createActions(AccountSignInActions);
