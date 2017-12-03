import { createActions } from 'realt';

import LinksSource from '../Sources/LinksSource';

class DashboardPagesLinksActionsView {
  linksGet(query) {
    return LinksSource.getLinks(query);
  }
}

export default createActions(DashboardPagesLinksActionsView);
