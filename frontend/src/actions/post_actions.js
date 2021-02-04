import * as CategoryAPIUtil from '../util/category_util';
import * as PostAPIUtil from '../util/post_util'

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const DELETE_POST = 'DELETE_POST'


// REGULAR ACTION CREATORS 

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  }
}

export const receiveErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const removePost = (postId) => {
  return{
    type: DELETE_POST,
    postId
  }
}

// THUNK ACTION CREATORS FOR FETCHING POSTS FROM CATEGORY

export const fetchPosts = () => dispatch => {
  return (
    CategoryAPIUtil.fetchPosts().then(
      res => (dispatch(receivePosts(res.data))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchArt = () => dispatch => {
  return (
    CategoryAPIUtil.fetchArt().then(
      res => (dispatch(receivePosts(res.data.posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchDance = () => dispatch => {
  return (
    CategoryAPIUtil.fetchDance().then(
      res => (dispatch(receivePosts(res.data.posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchMusic = () => dispatch => {
  return (
    CategoryAPIUtil.fetchMusic().then(
      res => (dispatch(receivePosts(res.data.posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchPhotography = () => dispatch => {
  return (
    CategoryAPIUtil.fetchPhotography().then(
      res => (dispatch(receivePosts(res.data.posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchUserPosts = userId => dispatch => {
  return (
    CategoryAPIUtil.fetchUserPosts(userId).then(
      res => (dispatch(receivePosts(res.data.posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

// THUNK ACTION CREATORS FOR SINGLE POSTS 

export const fetchPost = postId => dispatch => {
  return (
    PostAPIUtil.fetchPost(postId).then(
      res => (dispatch(receivePost(res.data))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};
export const patchPost = postId => dispatch => {
  return (
    PostAPIUtil.patchPost(postId).then(
      res => (dispatch(receivePost(res.data))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const likePost = (postId, userId) => dispatch => {
  return (
    PostAPIUtil.likePost(postId, userId).then(
      res => (dispatch(receivePost(res.data))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const unlikePost = (postId, userId) => dispatch => {
  return (
    PostAPIUtil.unlikePost(postId, userId).then(
      res => (dispatch(receivePost(res.data))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const deletePost = postId => dispatch => {
  return (
    PostAPIUtil.deletePost(postId).then(
      res => (dispatch(removePost(res.postId))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
}

export const createPost = post => dispatch => {
  return (
    PostAPIUtil.createPost(post).then(
      res => (dispatch(receivePost(res.data))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
}