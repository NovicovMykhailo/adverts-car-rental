import axios from 'axios';
axios.defaults.baseURL = 'https://64fcade6605a026163aeba10.mockapi.io/adverts';
//all + pages
export const getCars = async (page = 1) => {
  const res = await axios.get(`?page=${page}&limit=8`);
  return res.data;
};

//car by id
export const getCarById = async id => {
  const res = await axios.get(`/${id}`);
  return res.data;
};
//add to favs
export const adToFavs = async (id, status) => {
  const res = await axios.put(`/${id}`, {"favs": status});
  return res.data;
};

//remove from favs

// get all favs
export const getFavotites = async (page = 1) => {
  const res = await axios.get(`?favs=true&page=${page}&limit=8`);
  return res.data;
};
