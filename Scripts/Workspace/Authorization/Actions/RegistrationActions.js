import _ from 'lodash';
import { createActions } from 'realt';
import WindowService from 'Services/WindowService';
import SessionService from 'Services/SessionService';
import { STATUS_DEFAULT, DELAY } from 'Constants/StatusConstants';

import AccountSource from '../Sources/AccountSource';

class AccountRegistrationActions {
  constructor() {
    this.generate(
      'registrationCallback'
    );
  }

  registration(query) {
    return dispatch => {
      AccountSource.registration(query)
        .loading(result => dispatch(this.registrationCallback(result)))
        .then(result => {
          const { token, user } = result.response;

          SessionService.registration(user, token);
          dispatch(this.registrationCallback({ ...result, message: 'Успешная авторизация' }));

          setTimeout(() => WindowService.redirect(WindowService.origin), DELAY);
        })
        .catch(result => {
          dispatch(this.registrationCallback({ ...result, message: 'Ошибка авторизации' }));

          setTimeout(() => dispatch(this.registrationCallback({ status: STATUS_DEFAULT, message: '' })), DELAY);
        });
    };
  }
}

export default createActions(AccountRegistrationActions);
