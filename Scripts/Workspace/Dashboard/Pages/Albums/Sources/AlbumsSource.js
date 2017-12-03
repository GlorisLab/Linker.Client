import AjaxService from 'Services/AjaxService';
import { ALBUM_URL } from 'Constants/UrlConstants';

export default {
  getAlbums(userId, query) {
    return AjaxService.getRequest(`${ALBUM_URL}findByUser/${userId}`, query);
  },

  createAlbum(query) {
    return AjaxService.postRequest(`${ALBUM_URL}create`, query);
  },

  editAlbum(query) {
    return AjaxService.postRequest(`${ALBUM_URL}edit/${query.id}`, query);
  },

  deleteAlbum(id) {
    console.log('TODO DO API');
    // return AjaxService.postRequest(`${ALBUM_URL}edit/${query.id}`, query);
  }
};
