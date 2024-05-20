import { Router } from 'express';
import {
  getAllReservations,
  createNewReservation,
  editReservation,
  editReservationDates,
  createNewReservationByAdmin,
  createGuestData,
} from '../controllers/reservation.controller.js';

const router = Router();

router.get('/all-reservations', getAllReservations);

router.post(`/new-reservation`, createNewReservation);

router.post('/new-reservation-admin', createNewReservationByAdmin);

router.post('/edit-reservation/:id', editReservation);

router.post('/edit-dates/:id', editReservationDates);

router.post('/new-guest', createGuestData);

export default router;
