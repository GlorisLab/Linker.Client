import AjaxService from 'Services/AjaxService';
import { LINK_URL } from 'Constants/UrlConstants';

export default {
  getLinks(albumId) {
    return AjaxService.getRequest(`${LINK_URL}findByAlbum/${albumId}`, { limit: 10, offset: 0 });
  },

  createAlbum(query) {
    return AjaxService.postRequest(`${LINK_URL}create`, query);
  }
};
