import {connect} from 'react-redux'
import { openedMessage } from '../../actions/filter_action'
import { fetchMessages, receiveMessage } from "../../actions/message_action"
import { getUsers, parseMessages } from "../../util/message_util"
import Chat from "./chat"

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.session.user,
        //{userId: [messages to and from current user and userId]}
        messages: parseMessages(state),
        //{userId: user with user id}
        otherUsers: getUsers(state),
        openMessagingWith: state.ui.filters.messaging,
        
    }
}

const mDTP = dispatch => {
    return {
        fetchMessages: userId => {
            return dispatch(fetchMessages(userId));
        },
        receiveMessage: message => {
            return dispatch(receiveMessage(message));
        },
        openedMessage: () => {
            return dispatch(openedMessage());
        }
    }
}

export default connect(mSTP,mDTP)(Chat)