import { Router } from 'express';
import { sendMailFromContactForm } from '../controllers/mail.controller.js';

const router = Router();

router.post('/contact-form', sendMailFromContactForm);

export default router;
