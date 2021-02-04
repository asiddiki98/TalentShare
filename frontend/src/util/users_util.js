import axios from 'axios';

export const fetchAllUsers = () => {
  return axios.get('/api/users/')
}

export const updateProfile = (userId) => {
  return axios.patch(`/api/users/${userId}`)
}