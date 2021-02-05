import * as UsersUtil from '../util/users_util';
import {receiveCurrentUser} from './session_actions';

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

export const updateProfile = user => dispatch => {
  return UsersUtil.updateProfile(user).then(
      res =>{ 
        // debugger
        return (dispatch(receiveCurrentUser(res.data)));
      },
      err =>{
        // debugger
        return (dispatch(receiveUserErrors(err.response.data))) }
    )
    
};