import axios from "axios";

export const fetchPost = (postId) => {
   return axios.get(`/api/posts/${postId}`)
}

export const patchPost = (postId) => {
   return axios.patch(`/api/posts/${postId}`)
}

export const likePost = (postId, userId) => {
   return axios.post(`/api/posts/${postId}/liker/${userId}`)
}
export const unlikePost = (postId, userId) => {
   return axios.delete(`/api/posts/${postId}/liker/${userId}`)
}


export const deletePost = (postId) => {
   return axios.delete(`/api/posts/${postId}`)
}

export const createPost = (post) => {
   return axios.post('/api/posts/', post)
}