import { combineReducers } from "redux";
import messagesReducer from "./messages/messages_reducer";
// import usersReducer from "./users_reducer";
import postsReducer from "./posts/posts_reducer";
import commentReducer from './comments/comments_reducer'

const entitiesReducer = combineReducers({
  // users: usersReducer,
  posts: postsReducer,
  messages: messagesReducer,
  comments: commentReducer
});

export default entitiesReducer;