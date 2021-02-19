import axios from "axios";

export const fetchPost = (postId) => {
   return axios.get(`/api/posts/${postId}`)
}

export const patchPost = (post) => {
   return axios.patch(`/api/posts/${post._id}`, post)
}

export const likePost = (postId, userId) => {
   return axios.post(`/api/posts/${postId}/liker/${userId}`)
}
export const unlikePost = (postId, userId) => {
   return axios.delete(`/api/posts/${postId}/liker/${userId}`)
}

export const createComment = (comment) => {
   return axios.post("/api/comments/", comment)
}

export const deletePost = (postId) => {
   return axios.delete(`/api/posts/${postId}`)
}

export const createPost = (post) => {
   return axios.post('/api/posts/', post)
}