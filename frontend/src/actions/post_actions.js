import * as CategoryAPIUtil from '../util/category_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const receivePost = payload => {
  return {
    type: RECEIVE_POST,
    post: payload.post
  }
}

export const receiveErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const fetchPosts = () => dispatch => {
  return (
    CategoryAPIUtil.fetchPosts().then(
      posts => (dispatch(receivePosts(posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchArt = () => dispatch => {
  return (
    CategoryAPIUtil.fetchArt().then(
      posts => (dispatch(receivePosts(posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchDance = () => dispatch => {
  return (
    CategoryAPIUtil.fetchDance().then(
      posts => (dispatch(receivePosts(posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchMusic = () => dispatch => {
  return (
    CategoryAPIUtil.fetchMusic().then(
      posts => (dispatch(receivePosts(posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};

export const fetchPhotography = () => dispatch => {
  return (
    CategoryAPIUtil.fetchPhotography().then(
      posts => (dispatch(receivePosts(posts))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
};