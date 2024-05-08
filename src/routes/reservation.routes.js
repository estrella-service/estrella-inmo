import { Router } from 'express';
import {
  getAllReservations,
  createNewReservation,
  editReservation,
  editReservationDates,
} from '../controllers/reservation.controller.js';

const router = Router();

router.get('/all-reservations', getAllReservations);

router.post(`/new-reservation`, createNewReservation);

router.post('/edit-reservation/:id', editReservation);

router.post('/edit-dates/:id', editReservationDates);

export default router;
