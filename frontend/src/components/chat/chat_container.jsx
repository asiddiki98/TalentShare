import { fetchMessages, receiveMessage } from "../../actions/message_action"
import { getUsers, parseMessages } from "../../util/message_util"

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.session.user,
        //{userId: [messages to and from current user and userId]}
        messages: parseMessages(state),
        //{userId: user with user id}
        otherUsers: getUsers(state)
    }
}

const mDTP = dispatch => {
    return {
        fetchMessages: userId => {
            return dispatch(fetchMessages(userId));
        },
        receiveMessage: message => {
            return dispatch(receiveMessage(message));
        }
    }
}