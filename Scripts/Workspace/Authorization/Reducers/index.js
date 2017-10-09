import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import signInReducer from './SignInReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  signIn: signInReducer
});

export default rootReducer;
