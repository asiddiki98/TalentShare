import * as CommentAPIUtil from '../util/comment_util' 

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS"

// REGULAR ACTION CREATORS 

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}



// THUNK ACTION CREATORS

export const fetchComment = (commentId) => dispatch => {
    return (
        CommentAPIUtil.fetchComment(commentId).then(
            res => (dispatch(receiveComment(res.data))),
            err => (dispatch(receiveErrors(err.response.data)))
        )
    )
}
export const likeComment = (commentId, userId) => dispatch => {
    return (
        CommentAPIUtil.likeComment(commentId, userId).then(
            res => (dispatch(receiveComment(res.data))),
            err => (dispatch(receiveErrors(err.response.data)))
        )
    )
}
export const unlikeComment = (commentId, userId) => dispatch => {
    return (
        CommentAPIUtil.unlikeComment(commentId, userId).then(
            res => (dispatch(receiveComment(res.data))),
            err => (dispatch(receiveErrors(err.response.data)))
        )
    )
}
export const postComment = (comment) => dispatch => {
    return (
        CommentAPIUtil.postComment(comment).then(
            res => (dispatch(receiveComment(res.data))),
            err => (dispatch(receiveErrors(err.response.data)))
        )
    )
}
export const deleteComment = (commentId) => dispatch => {
    return (
        CommentAPIUtil.deleteComment(commentId).then(
            res => (dispatch(removeComment(res.commentId))),
            err => (dispatch(receiveErrors(err.response.data)))
        )
    )
}