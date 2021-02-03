import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessages = messages => {
    
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

export const receiveMessage = message => {
    debugger
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const fetchMessages = userId => dispatch => {
    // debugger
    return MessageAPIUtil.fetchMessages(userId)
        .then(messages => dispatch(receiveMessages(messages)))
}

export const sendInitialMessage = message => dispatch => {
    // debugger
    return MessageAPIUtil.sendInitialMessage(message)
        .then(res => {
            // debugger
            return dispatch(receiveMessage(res.data))
        })
}