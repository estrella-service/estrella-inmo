import axios from './axios';

export const registerRecuest = (user) => axios.post(`/users/register`, user);

export const loginRecuest = (user) => axios.post(`/users/login`, user);

export const verifyTokenRequest = () => axios.post(`/users/verify`);

export const updateUser = (id, user) => axios.patch(`/users/${id}`, user);

export const logOutRequest = (id) => axios.post('/users/logout', id);

export const getAllClientsRequest = () => axios.get('/users');
