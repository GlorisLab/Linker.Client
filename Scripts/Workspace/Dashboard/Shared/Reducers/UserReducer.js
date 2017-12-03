import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/UserActions';

class SignInReducer {
  constructor() {
    this.bindAction(Actions.userGet, this.handleUserGet);
  }

  get initialState() {
    return {
      user: {},
      status: STATUS_DEFAULT
    };
  }

  handleUserGet(state, { status, isSuccess, response }) {
    if (!isSuccess) return _.assign({}, state, { status });

    return _.assign({}, state, { status: STATUS_DEFAULT, ...response });
  }
}

export default createReducer(SignInReducer);
