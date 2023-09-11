import axios from 'axios';
axios.defaults.baseURL = 'https://64fcade6605a026163aeba10.mockapi.io/';
//all + pages
export const getCars = async (page = 1) => {
  const res = await axios.get(`/adverts?page=${page}&limit=8`);
  return res.data;
};

//car by id

export const getCarById = async id => {
  const res = await axios.get(`/adverts?id=${id}`);
  return res.data;
};

//add to favs

//remove from favs

// get all favs
export const getFavotites = async (page = 1) => {
  const res = await axios.get(`/adverts?title=fav&page=${page}&limit=8`);
  const filtered = res.data.filter(item => item.fav === true);
  return filtered;
};
