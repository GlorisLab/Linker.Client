import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/CreateFormActions';

class DashboardPagesAlbumsCreateFormReducer {
  constructor() {
    this.bindAction(Actions.albumCreateCallback, this.handleAlbumCreate);
  }

  get initialState() {
    return {
      status: STATUS_DEFAULT
    };
  }

  handleAlbumCreate(state, { status }) {
    return _.assign({}, state, { status });
  }
}

export default createReducer(DashboardPagesAlbumsCreateFormReducer);
