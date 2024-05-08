import { createTransport } from 'nodemailer';
import 'dotenv/config';

const transporter = createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.BREVO_API_KEY,
  },
});

export async function sendMailFromContact(body) {
  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form from Estrella Service',
    html: createEmail(body),
  });
}

const createEmail = (body) => {
  return `
   <!DOCTYPE html>
  <html lang="es">
    <style>
    html {
      background-color: #ffffff;
    }
  
    body {
      max-width: 600px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: auto;
      background-color: rgb(229, 255, 246);
      padding: 40px;
      border-radius: 4px;
      margin-top: 10px;
    }
  
    h1 {
      color: #17415f;
      margin-bottom: 20px;
    }
  
    p {
      margin-bottom: 15px;
      color: #17415f;
    }
  
    a {
      color: #17415f;
      text-decoration: none;
      font-style: italic;
      font-weight: bold;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    strong {
      color: #17415f;
    }
  
    .firma {
      font-weight: bold;
      color: #ff8c00;
    }
    </style>
     <body>
    <h1>From: ${body.name}, ${body.surname}</h1>
    <p>Email: ${body.email}</p>
    <p>${body.description}</p>
    <div>
   
    </body>
  </html>
  `;
};

export async function sendReservationNotification(body) {
  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: body.email,
    cc: process.env.EMAIL_USER,

    subject: 'Estrella Service - Reservation Request',
    html: createReservationEmail(body),
  });
}

const createReservationEmail = (body) => {
  return `
     <!DOCTYPE html>
  <html lang="es">
    <style>
    html {
      background-color: ;
    }
  
    body {
      max-width: 600px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: auto;
      background-color: #eeeeee;
      padding: 40px;
      border-radius: 4px;
      margin-top: 10px;
    }
  
    h1 {
      color: #17415f;
      margin-bottom: 10px;
      font-size: 28px;
    }
  
    p {
      margin-bottom: 15px;
      color: #17415f;
    }
  
    a {
      color: #17415f;
      text-decoration: none;
      font-style: italic;
      font-weight: bold;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    strong {
      color: #17415f;
    }
  
    .firma {
      font-weight: bold;
      color: #cb3234;
    }
    </style>
     <body>
    <h1>Dear ${body.surname},${body.name}</h1>
    <p>We have received your reservation request for the property ${body.houseName}.</p>
    <p>Check-in: ${body.checkIn}</p>
    <p>Check-out: ${body.checkOut}</p>
    <p>Guests: ${body.guests}</p>
    <p>Total price: ${body.totalPrice}€</p>
    <p>Phone: ${body.phone}</p>
    <p>Comments: ${body.comments}</p>
    <p>Your reference for this reservation is: ${body.refId}</p>
    <p>Our team will review your request and get back to you as soon as possible.</p>
    <p>Thank you for choosing Estrella Service.</p>
    <p>Best regards,</p>
    <p class="firma">The Estrella Service Team</p>
    
    </body>
  </html>
  `;
};

export async function sendReservationModification(body) {
  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: body.email,
    cc: process.env.EMAIL_USER,

    subject: 'Estrella Service - Reservation Request',
    html: createModificationEmail(body),
  });
}

const createModificationEmail = (body) => {
  const text = body.accepted
    ? 'Your reservation has been accepted. Our team will send to you a form for guest details.'
    : 'Your reservation has been canceled, please contact us for more information.';

  return `
     <!DOCTYPE html>
  <html lang="es">
    <style>
    html {
      background-color: ;
    }
  
    body {
      max-width: 600px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: auto;
      background-color: #eeeeee;
      padding: 40px;
      border-radius: 4px;
      margin-top: 10px;
    }
  
    h1 {
      color: #17415f;
      margin-bottom: 10px;
      font-size: 28px;
    }
  
    p {
      margin-bottom: 15px;
      color: #17415f;
    }
  
    a {
      color: #17415f;
      text-decoration: none;
      font-style: italic;
      font-weight: bold;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    strong {
      color: #17415f;
    }
  
    .firma {
      font-weight: bold;
      color: #cb3234;
    }
    </style>
     <body>
    <h1>Dear ${body.surname},${body.name}</h1>
    <p>We have Managed your reservation request for the property ${body.houseName}.</p>
    <p>Check-in: ${body.checkIn}</p>
    <p>Check-out: ${body.checkOut}</p>
    <p>Guests: ${body.guests}</p>
    <p>Total price: ${body.totalPrice}€</p>
    <p>Phone: ${body.phone}</p>
    <p>Comments: ${body.comments}</p>
    <p>Your reference for this reservation is: ${body.refId}</p>
    <p>${text}</p>
    <p>Thank you for choosing Estrella Service.</p>
    <p>Best regards,</p>
    <p class="firma">The Estrella Service Team</p>
    
    </body>
  </html>
  `;
};
