import {
    RECEIVE_COMMENT_ERRORS,
} from '../../actions/comment_action';

const _nullErrors = [];

const CommentErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default CommentErrorsReducer;