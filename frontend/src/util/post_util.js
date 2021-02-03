import axios from "axios";

export const fetchPost = (postId) => {
    axios.get(`/api/posts/${postId}`)
}

export const patchPost = (postId) => {
    axios.patch(`/api/posts/${postId}`)
}

export const likePost = (postId, userId) => {
    axios.post(`/api/posts/${postId}/liker/${userId}`)
}
export const unlikePost = (postId, userId) => {
    axios.delete(`/api/posts/${postId}/liker/${userId}`)
}

export const postComments = (postId) => {
    axios.get(`/api/comments/post/${postId}`)
}

export const deletePost = (postId) => {
    axios.delete(`/api/posts/${postId}`)
}

export const createPost = (post) => {
    axios.post('/api/posts/', post)
}