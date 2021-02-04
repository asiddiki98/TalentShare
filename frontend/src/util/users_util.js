import axios from 'axios';

export const fetchAllUsers = () => {
  return axios.get('/api/users/')
}

export const updateProfile = (user) => {
  return axios.patch(`/api/users/${user._id}`, user)
}