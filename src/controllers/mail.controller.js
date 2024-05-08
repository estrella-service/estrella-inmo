import { sendMailFromContact } from '../libs/mailing.js';

export const sendMailFromContactForm = async (req, res) => {
  console.log('req.body', req.body);
  const { name, surname, email, description } = req.body;
  try {
    const newMail = await sendMailFromContact(req.body);
    return res.status(200).json({
      message: `Thank you ${name} ${surname} for contacting us! We will get back to you as soon as posible.`,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error sending email' });
  }
};
