import axios from 'axios';

export const fetchComment = (commentId) => {
   return axios.get(`/api/comments/${commentId}`)
}

export const likeComment = (commentId, userId) => {
   return axios.post(`/api/comments/${commentId}/liker/${userId}`)
}
export const unlikeComment = (commentId, userId) => {
   return axios.delete(`/api/comments/${commentId}/liker/${userId}`)
}

export const postComment = (comment) => {
   return axios.post("/api/comments/", comment)
}

export const deleteComment = (commentId) => {
   return axios.delete(`/api/comments/${commentId}`)
}

