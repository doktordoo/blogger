import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostReducer,
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
});

export default rootReducer;
