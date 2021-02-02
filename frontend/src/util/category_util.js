import axios from 'axios';

export const fetchArt = () => {
  return axios.get('/api/posts/category/art')
};

export const fetchDance = () => {
  return axios.get('/api/posts/category/dance')
};

export const fetchMusic = () => {
  return axios.get('/api/posts/category/art')
};

export const fetchPhotography = () => {
  return axios.get('/api/posts/category/photography')
};

export const fetchPosts = () => {
  return axios.get('/api/posts')
}