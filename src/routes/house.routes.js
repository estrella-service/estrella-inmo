import { Router } from 'express';
import {
  createNewPropertie,
  getAllHouses,
  deletePropertie,
  editProperty,
} from '../controllers/house.controller.js';

const router = Router();

router.get('/all-houses', getAllHouses);

router.post('/new-house', createNewPropertie);

router.delete('/delete-house/:id', deletePropertie);

router.post('/edit-house/:id', editProperty);

export default router;
