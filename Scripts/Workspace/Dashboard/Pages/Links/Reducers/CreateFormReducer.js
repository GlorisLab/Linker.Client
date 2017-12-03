import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/CreateFormActions';

class DashboardPagesLinksCreateFormReducer {
  constructor() {
    this.bindAction(Actions.linkCreateCallback, this.handleLinkCreate);
  }

  get initialState() {
    return {
      status: STATUS_DEFAULT
    };
  }

  handleLinkCreate(state, { status }) {
    return _.assign({}, state, { status });
  }
}

export default createReducer(DashboardPagesLinksCreateFormReducer);
