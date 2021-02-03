import { combineReducers } from "redux";
import postsReducer from "./posts/posts_reducer";
import commentReducer from './comments/comments_reducer'
import usersReducer from './users/users_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentReducer
});

export default entitiesReducer;