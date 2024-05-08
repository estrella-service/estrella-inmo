import axios from './axios';

export const createNewReservationRequest = (newReservation) =>
  axios.post(`/reservations/new-reservation`, newReservation);

export const getAllReservationsRequest = () =>
  axios.get('/reservations/all-reservations');

export const editReservationRequest = (reservation) =>
  axios.post(`/reservations/edit-reservation/${reservation._id}`, reservation);

export const editReservationDatesRequest = (reservation) =>
  axios.post(`/reservations/edit-dates/${reservation._id}`, reservation);
