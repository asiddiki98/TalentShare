/* eslint-disable import/no-anonymous-default-export */
import {RECEIVE_CONTENT} from '../../actions/content_actions';

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CONTENT:
            return action.content;
        default:
            return state;
    }
};