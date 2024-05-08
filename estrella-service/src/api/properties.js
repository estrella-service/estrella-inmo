import axios from './axios';

export const registerNewPropierty = (newPropierty) =>
  axios.post(`/houses/new-house`, newPropierty);

export const getAllHouses = () => axios.get('/houses/all-houses');

export const deletePropertieRequest = (id) =>
  axios.delete(`/houses/delete-house/${id}`);

export const editPropertyRequest = (data) =>
  axios.post(`/houses/edit-house/${data.id}`, data);
