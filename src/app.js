import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRoutes from './routes/user.routes.js';
import reservationRoutes from './routes/reservation.routes.js';
import houseRoutes from './routes/house.routes.js';
import mailRoutes from './routes/mail.routes.js';
import { connectDB } from './db.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.use('/api/users', userRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/houses', houseRoutes);
app.use('/api/mail', mailRoutes);

app.get('/helpers', (req, res) => {
  return res.status(200).json({
    message: 'Backend is healthy!',
  });
});
app.use(express.static(path.resolve(`${__dirname}/../estrella-service/dist`)));

app.get('/*', (_req, res) =>
  res.sendFile(path.resolve(`${__dirname}/../estrella-service/dist/index.html`))
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
