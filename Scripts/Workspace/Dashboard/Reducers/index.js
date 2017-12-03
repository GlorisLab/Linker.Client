import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SharedReducers from '../Shared/Reducers';
import AlbumsReducers from '../Pages/Albums/Reducers';
import LinksReducers from '../Pages/Links/Reducers';

export default combineReducers({
  form: formReducer,

  ...SharedReducers,
  ...AlbumsReducers,
  ...LinksReducers
});
