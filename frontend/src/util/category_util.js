import axios from 'axios';

export const fetchArt = () => {
  return axios.get('/api/posts/art')
};

export const fetchDance = () => {
  return axios.get('/api/posts/dance')
};

export const fetchMusic = () => {
  return axios.get('/api/posts/art')
};

export const fetchPhotography = () => {
  return axios.get('/api/posts/photography')
};

export const fetchPosts = () => {
  return axios.get('/api/posts')
}