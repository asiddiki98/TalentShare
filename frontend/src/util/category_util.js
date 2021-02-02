import axios from 'axios';

export const fetchArt = () => {
  return axios.get('/api/posts/category/Art')
};

export const fetchDance = () => {
  return axios.get('/api/posts/category/Dance')
};

export const fetchMusic = () => {
  return axios.get('/api/posts/category/Music')
};

export const fetchPhotography = () => {
  return axios.get('/api/posts/category/Photography')
};

export const fetchPosts = () => {
  return axios.get('/api/posts')
}