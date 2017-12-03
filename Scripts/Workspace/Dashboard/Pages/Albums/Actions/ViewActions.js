import { createActions } from 'realt';

import EditFormActions from './EditFormActions';
import AlbumsSource from '../Sources/AlbumsSource';

class DashboardPagesAlbumsActionsView {
  constructor() {
    this.generate('editingAlbumSelect');
  }

  albumsGet(userId, query) {
    return AlbumsSource.getAlbums(userId, query);
  }

  albumEditFormOpen(album) {
    return dispatch => {
      dispatch(EditFormActions.formInit(album));
      dispatch(this.editingAlbumSelect(album.id));
    };
  }

  albumDelete(id) {
    return AlbumsSource.deleteAlbum(id);
  }
}

export default createActions(DashboardPagesAlbumsActionsView);
