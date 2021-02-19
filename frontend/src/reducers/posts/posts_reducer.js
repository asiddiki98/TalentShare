import {
  DELETE_POST,
  RECEIVE_POSTS,
  RECEIVE_POST
} from '../../actions/post_actions';

const initialState = {};

const PostsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      const posts = {};
      action.posts.forEach(element => {posts[element._id] = element})
      return posts
    case RECEIVE_POST:
      debugger
      return Object.assign({}, state, { [action.post._id]: action.post });
    case DELETE_POST:
      let newState = Object.assign({}, state);
      delete newState[action.postId];
      return newState;      
    default:
      return state;
  }
};

export default PostsReducer;
