import {RECEIVE_MESSAGES, RECEIVE_MESSAGE} from '../../actions/message_action';


const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_MESSAGES:
            let messages = {}
            action.messages.data.forEach(message => {
                messages[message._id] = message
                
            })
            return messages
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message._id]: action.message});
        default:
            return state;
    }
}

export default messagesReducer;