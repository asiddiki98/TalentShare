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
    
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const fetchMessages = userId => dispatch => {
    
    return MessageAPIUtil.fetchMessages(userId)
        .then(messages => dispatch(receiveMessages(messages)))
}

export const sendInitialMessage = message => dispatch => {
    
    return MessageAPIUtil.sendInitialMessage(message)
        .then(res => {
            
            return dispatch(receiveMessage(res.data))
        })
}