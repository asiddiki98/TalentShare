import {
  RECEIVE_ALL_USERS,
} from '../../actions/user_actions';

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      const users = {};
      action.users.forEach(element => { users[element._id] = element })
      return users
    default:
      return state;
  }
}