import axios from 'axios';
axios.defaults.baseURL = 'https://64fcade6605a026163aeba10.mockapi.io/';

export const getCars = async (page = 1) => {
  const response = await axios.get(`/adverts?page=${page}&limit=8`);
  return response.data;
};
