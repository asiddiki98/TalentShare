import * as UsersUtil from '../util/users_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchAllUsers = () => dispatch => {
  UsersUtil.fetchAllUsers().then((res) => (
    dispatch(receiveAllUsers(res.data))
  ), err => (
    dispatch(receiveUserErrors(err.response.data))
  ))
}