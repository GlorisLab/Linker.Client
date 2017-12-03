import update from 'immutability-helper';
import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/ViewActions';
import CreateFormActions from '../Actions/CreateFormActions';
import EditFormActions from '../Actions/EditFormActions';

class DashboardPagesAlbumsViewReducer {
  constructor() {
    this.bindAction(Actions.albumsGet, this.handleAlbumsGet);
    this.bindAction(Actions.editingAlbumSelect, this.handleEditingAlbumSelect);
    this.bindAction(CreateFormActions.albumCreateCallback, this.handleAlbumCreate);
    this.bindAction(EditFormActions.albumEditCallback, this.handleAlbumEdit);
  }

  get initialState() {
    return {
      data: [],
      editingAlbum: '',
      status: STATUS_DEFAULT,
      filter: {
        limit: 25,
        offset: 0
      }
    };
  }

  handleAlbumsGet(state, { status, isSuccess, response }) {
    if (!isSuccess) return _.assign({}, state, { status });

    return update(state, { $merge: { status: STATUS_DEFAULT, data: response } });
  }

  handleEditingAlbumSelect(state, editingAlbum) {
    return update(state, { $merge: { editingAlbum } });
  }

  handleAlbumCreate(state, { isSuccess, response }) {
    if (!isSuccess) return state;

    return update(state, {
      data: { $push: [response] },
    });
  }

  handleAlbumEdit(state, { isSuccess, response, query }) {
    if (!isSuccess) return state;

    const index = _.findIndex(state.data, ({ _id }) => query.id === _id);

    if (index < 0) return state;

    return update(state, {
      data: {
        [index]: {
          $merge: response
        }
      }
    });
  }
}

export default createReducer(DashboardPagesAlbumsViewReducer);
