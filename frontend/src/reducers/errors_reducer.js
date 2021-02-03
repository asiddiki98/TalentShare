import { combineReducers } from 'redux';
import SessionErrorsReducer from './session/session_errors_reducer';
import PostErrorsReducer from './posts/post_errors_reducer';
import commentErrorsReducer from './comments/comments_error_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  posts: PostErrorsReducer,
  comment: commentErrorsReducer
});