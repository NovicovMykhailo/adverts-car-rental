import axios from 'axios';
import { readFromLS, writeToLS } from './localStoreApi';
import smartFilter from './smartFilter';
axios.defaults.baseURL =
  'https://64fcade6605a026163aeba10.mockapi.io/adverts';
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
//add / remove to favs
export const adToFavs = async (id, status) => {
  const res = await axios.put(`/${id}`, { favs: status });
  return res.data;
};

// get all favs
export const getFavotites = async (page = 1) => {
  const res = await axios.get(`?favs=true&page=${page}&limit=8`);
  return res.data;
};
//search engine
export const search = async (obj, page, shouldUpdateCache) => {
  if(shouldUpdateCache){
    const defaultRes = await axios.get(`/`);
    writeToLS('cars', defaultRes.data);
  }
  if (!readFromLS('cars')) {
    const defaultRes = await axios.get(`/`);
    writeToLS('cars', defaultRes.data);
  } else {
    const data = readFromLS('cars');
    const result = await smartFilter(data, obj);
    return result.slice(0, page*8);
  }
};
