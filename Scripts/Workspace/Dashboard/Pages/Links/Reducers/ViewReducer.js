import update from 'immutability-helper';
import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/ViewActions';
import CreateFormActions from '../Actions/CreateFormActions';

class DashboardPagesLinksViewReducer {
  constructor() {
    this.bindAction(Actions.linksGet, this.handleLinksGet);
    this.bindAction(CreateFormActions.linkCreateCallback, this.handleLinkCreate);
  }

  get initialState() {
    return {
      data: [],
      status: STATUS_DEFAULT
    };
  }

  handleLinksGet(state, { status, isSuccess, response }) {
    if (!isSuccess) return _.assign({}, state, { status });

    return _.assign({}, state, { status: STATUS_DEFAULT, data: response });
  }

  handleLinkCreate(state, { isSuccess, response }) {
    if (!isSuccess) return state;

    return update(state, {
      data: { $push: [response] },
    });
  }
}

export default createReducer(DashboardPagesLinksViewReducer);
