import axios from 'axios';

export const fetchComment = (commentId) => {
    axios.get(`/api/comments/${commentId}`)
}

export const likeComment = (commentId, userId) => {
    axios.post(`/api/comments/${commentId}/liker/${userId}`)
}
export const unlikeComment = (commentId, userId) => {
    axios.delete(`/api/comments/${commentId}/liker/${userId}`)
}

export const postComment = (comment) => {
    axios.post("/api/comments/", comment)
}

export const deleteComment = (commentId) => {
    axios.delete(`/api/comments/${commentId}`)
}

