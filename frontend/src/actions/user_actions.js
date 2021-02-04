import * as UsersUtil from '../util/users_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchAllUsers = () => dispatch => {
  return UsersUtil.fetchAllUsers().then((res) => (
    dispatch(receiveAllUsers(res.data))
  ), err => (
    dispatch(receiveUserErrors(err.response.data))
  ))
}

export const updateProfile = userId => dispatch => {
  return (
    UsersUtil.updateProfile(userId).then(
      res => (dispatch(receiveUser(res.data.user))),
      err => (dispatch(receiveUserErrors(err.response.data)))
    )
  )
};