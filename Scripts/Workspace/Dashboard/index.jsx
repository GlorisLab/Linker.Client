import AppService from 'Services/AppService';

import reducers from './Reducers';


new AppService({
  container: <div>asf</div>,
  reducers,
  DOMNode: document.getElementById('root')
}).init();
