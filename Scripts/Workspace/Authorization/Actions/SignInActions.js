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
          const { token, user } = result.response;

          SessionService.signIn(user, token);
          dispatch(this.signInCallback({ ...result, message: 'Успешная авторизация' }));

          setTimeout(() => WindowService.redirect(WindowService.origin), DELAY);
        })
        .catch(result => {
          dispatch(this.signInCallback({ ...result, message: 'Ошибка авторизации' }));

          setTimeout(() => dispatch(this.signInCallback({ status: STATUS_DEFAULT, message: '' })), DELAY);
        });
    };
  }
}

export default createActions(AccountSignInActions);
