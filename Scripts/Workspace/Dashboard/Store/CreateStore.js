import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { optimisticUpdates } from 'Middlewares';

import rootReducer from '../Reducers';

export default function createStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    optimisticUpdates
  )(reduxCreateStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}
