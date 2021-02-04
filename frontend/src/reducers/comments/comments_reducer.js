import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from '../../actions/comment_action'

let initialState = {}


const commentReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            const comments = {};
            action.comments.forEach(element => { comments[element._id] = element })
            return comments;
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment._id]: action.comment });
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
};

export default commentReducer;