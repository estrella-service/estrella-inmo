import axios from './axios';

export const contactMeForm = (data) => axios.post('/mail/contact-form', data);
