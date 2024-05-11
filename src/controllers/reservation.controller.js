import Reservation from '../models/reservation.model.js';
import User from '../models/user.model.js';
import House from '../models/house.model.js';
import bcrypt from 'bcryptjs';
import {
  sendNewPassword,
  sendReservationModification,
  sendReservationNotification,
} from '../libs/mailing.js';

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate('houseId')
      .populate('userId');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reservas', error });
  }
};

export const createNewReservation = async (req, res) => {
  console.log(req.body);
  const {
    busyDays,
    email,
    houseId,
    userId,
    checkIn,
    checkOut,
    totalPrice,
    guests,
    comentarios,
    phone,
    needTowels,
    needBabyBed,
    needSheets,
    address,
    city,
    postalCode,
    country,
  } = req.body;

  try {
    const houseForReservation = await House.findById(houseId);
    // Comprobar si esa fecha ya esta ocupada en la casa por si hay un race condition.
    const houseBusyDays = houseForReservation.busyDays;
    const hasCommonItems = (array1, array2) => {
      return array1.some((item) => array2.includes(item));
    };
    if (hasCommonItems(houseBusyDays, busyDays)) {
      return res.status(400).json({
        message: 'La casa ya está reservada en esas fechas',
        error: 'La casa ya está reservada en esas fechas',
      });
    }
    const reservation = await Reservation.create(req.body);
    console.log(reservation);
    const userUpdate = await User.findOneAndUpdate(
      { email },
      { $push: { reservasId: reservation._id }, phone },
      { new: true }
    );
    console.log(userUpdate);
    const houseUpdate = await House.findByIdAndUpdate(
      { _id: houseId },
      {
        $push: { busyDays, reservasId: reservation._id },
      },
      { new: true }
    );
    console.log(houseUpdate);
    const newReservationEmail = {
      email,
      name: userUpdate.name,
      surname: userUpdate.surname,
      houseName: houseUpdate.title,
      checkIn,
      checkOut,
      totalPrice,
      guests,
      comments: comentarios,
      phone,
      refId: reservation._id,
    };
    // SEND EMAIL TO USER OF NEW RESERVATION CREATED
    const notification = await sendReservationNotification(newReservationEmail);

    res.status(201).json({
      reservation,
      userUpdate,
      houseUpdate,
      message: 'Reserva creada con éxito, en breve contactaremos contigo',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error });
  }
};

export const editReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const reservationToEdit = await Reservation.findById({ _id: id });
    const newData = { ...reservationToEdit._doc, ...req.body };
    if (req.body.canceled) {
      const houseUpdate = await House.findByIdAndUpdate(
        { _id: newData.houseId },
        {
          $pull: {
            busyDays: { $in: newData.busyDays },
            reservasId: newData._id,
          },
        },
        { new: true }
      );
    }

    const reservation = await Reservation.findByIdAndUpdate(
      { _id: id },
      newData,
      { new: true }
    )
      .populate('houseId')
      .populate('userId');
    console.log(
      reservationToEdit,
      'reservationToEdit++++++++++++++++++++++++++'
    );
    const status =
      reservation.accepted && reservation.canceled
        ? false
        : !reservation.accepted && reservation.canceled
        ? false
        : reservation.accepted
        ? true
        : false;
    const newReservationEmail = {
      email: reservation.userId.email,
      name: reservation.userId.name,
      surname: reservation.userId.surname,
      houseName: reservation.houseId.title,
      checkIn: reservation.checkIn,
      checkOut: reservation.checkOut,
      totalPrice: reservation.totalPrice,
      guests: reservation.guests,
      comments: reservation.comentarios,
      accepted: status,
      phone: reservation.phone,
      refId: reservation._id,
    };
    console.log(
      newReservationEmail,
      'newReservationEmail***********************'
    );
    await sendReservationModification(newReservationEmail);
    res
      .status(200)
      .json({ message: 'Probando la edición de reservas', reservation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al editar la reserva', error });
  }
};

export const editReservationDates = async (req, res) => {
  const { id } = req.params;
  const { checkIn, checkOut, busyDays, oldBusyDays, totalPrice } = req.body;
  try {
    const reservationToEdit = await Reservation.findByIdAndUpdate(
      { _id: id },
      { checkIn, checkOut, busyDays, totalPrice },
      { new: true }
    );
    console.log(reservationToEdit, 'reservationToEdit');
    const houseUpdate = await House.findByIdAndUpdate(
      { _id: reservationToEdit.houseId },
      {
        $pull: {
          busyDays: oldBusyDays,
        },
      },
      { new: true }
    );
    const houseUpdate2 = await House.findByIdAndUpdate(
      { _id: reservationToEdit.houseId },
      {
        $push: {
          busyDays,
        },
      },
      { new: true }
    );

    //TODO: SEND NOTIFICATION TO USER FROM EDITED RESERVATION DATES
    res.status(200).json({ message: 'Reserva editada correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al editar la reserva', error });
  }
};

export const createNewReservationByAdmin = async (req, res) => {
  const {
    busyDays,
    email,
    name,
    surname,

    houseId,

    checkIn,
    checkOut,
    totalPrice,
    guests,
    comentarios,
    phone,
    needTowels,
    needBabyBed,
    needSheets,
    address,
    city,
    postalCode,
    country,
  } = req.body;

  try {
    const userFound = await User.findOne({ email });
    const newPassword = Math.floor(10000000 + Math.random() * 90000000);
    console.log(newPassword);
    const passwordHash = await bcrypt.hash(newPassword.toString(), 10);
    if (!userFound) {
      const newUser = {
        email,
        name,
        surname,
        phone,
        password: passwordHash,
      };
      await User.create(newUser);
    }
    const createdUser = await User.findOne({ email });
    console.log(createdUser, 'createdUser');
    const houseForReservation = await House.findById(houseId);
    // Comprobar si esa fecha ya esta ocupada en la casa por si hay un race condition.
    const houseBusyDays = houseForReservation.busyDays;
    const hasCommonItems = (array1, array2) => {
      return array1.some((item) => array2.includes(item));
    };
    if (hasCommonItems(houseBusyDays, busyDays)) {
      return res.status(400).json({
        message: 'La casa ya está reservada en esas fechas',
        error: 'La casa ya está reservada en esas fechas',
      });
    }
    const reservation = await Reservation.create({
      ...req.body,
      userId: createdUser._id,
    });
    console.log(reservation);
    const userUpdate = await User.findOneAndUpdate(
      { email },
      { $push: { reservasId: reservation._id }, phone },
      { new: true }
    );
    console.log(userUpdate);
    const houseUpdate = await House.findByIdAndUpdate(
      { _id: houseId },
      {
        $push: { busyDays, reservasId: reservation._id },
      },
      { new: true }
    );
    console.log(houseUpdate);
    const newReservationEmail = {
      email,
      name: userUpdate.name,
      surname: userUpdate.surname,
      houseName: houseUpdate.title,
      checkIn,
      checkOut,
      totalPrice,
      guests,
      comments: comentarios,
      phone,
      refId: reservation._id,
    };
    // SEND EMAIL TO USER OF NEW RESERVATION CREATED
    const notification = await sendReservationNotification(newReservationEmail);
    const notificationNewPassword = await sendNewPassword(
      email,
      newPassword.toString()
    );

    res.status(201).json({
      reservation,
      userUpdate,
      houseUpdate,
      message: 'Reserva creada con éxito, en breve contactaremos contigo',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error });
  }
};

// Comprobar si esa fecha ya esta ocupada en la casa por
