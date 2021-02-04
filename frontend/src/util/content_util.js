import axios from 'axios';

export const sendFile = (file) => {
   return axios.post('/content/', file)
}