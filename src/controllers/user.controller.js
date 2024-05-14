import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateTokenAccess } from '../libs/jsonwebtoken.js';
import jwt from 'jsonwebtoken';
import { sendNewPassword } from '../libs/mailing.js';

export const registerNewUser = async (req, res) => {
  const { name, surname, email, password } = req.body;
  console.log(req.body, 'req.body from register');

  try {
    console.log('entro al try');
    const userFound = await User.findOne({ email });
    console.log(userFound, 'userFound');
    if (userFound) return res.status(400).json(['Email already exists']);
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      surname,
      email,
      password: passwordHash,
    });
    console.log(newUser, 'newUser');

    const userSaved = await newUser.save();
    console.log(userSaved, 'userSaved');

    res.json({
      id: userSaved._id,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      message: 'User registered successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Register user error',
      error,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email })
      .populate({
        path: 'reservasId',
        populate: {
          path: 'houseId',
        },
      })
      .populate('propertysId');
    if (!userFound)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Contraseña incorrecta' });

    const token = await generateTokenAccess({
      id: userFound._id,
    });

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    res.json({
      id: userFound._id,
      name: userFound.name,
      surname: userFound.surname,
      email: userFound.email,
      isAdmin: userFound.isAdmin,
      reservasId: userFound.reservasId,
      createdAt: userFound.createdAt,
      propertysId: userFound.propertysId,

      message: 'Usuario registrado correctamente',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al registrar el usuario',
      error,
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Usuario deslogueado correctamente' });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'Unauthoriced' });

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: 'Unauthoriced' });

    const userFound = await User.findById(user.id)
      .populate({
        path: 'reservasId',
        populate: {
          path: 'houseId',
        },
      })
      .populate('propertysId');
    if (!userFound)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    return res.json({
      id: userFound._id,
      email: userFound.email,
      name: userFound.name,
      surname: userFound.surname,
      isAdmin: userFound.isAdmin,
      reservasId: userFound.reservasId,
      propertysId: userFound.propertysId,
    });
  });
};
export const logInWithToken = async (req, res) => {
  const { id } = req.user;
  console.log(req.user, '<--- req.user');
  try {
    const userFound = await User.findById(id)
      .populate({
        path: 'reservasId',
        populate: {
          path: 'houseId',
        },
      })
      .populate('propertysId');
    if (!userFound) {
      return res.status(400).send('User not found');
    }
    res.status(200).json({
      id: userFound._id,

      email: userFound.email,

      name: userFound.name,
      surname: userFound.surname,
      isAdmin: userFound.isAdmin,
      reservasId: userFound.reservasId,
      propertysId: userFound.propertysId,
    });
  } catch (error) {
    console.error(error, '[LOG IN WITH TOKEN ERROR]');
    res.status(400).send('token invalido');
  }
};

export const getAllClients = async (req, res) => {
  try {
    const allClients = await User.find()
      .populate('reservasId')
      .populate('propertysId');

    res.json(allClients);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};
export const editCurrentUser = async (req, res) => {
  const { id } = req.params;

  const { isAdmin } = req.body;
  console.log(req.body, 'req.body from editCurrentUser');
  console.log(isAdmin, 'isAdmin++++++++++++++++++++++');

  try {
    const userFound = await User.findByIdAndUpdate(
      { _id: id },
      { isAdmin: isAdmin },
      {
        new: true,
      }
    );
    console.log(userFound, 'userFound');
    if (!userFound) return res.status(400).json(['User not found']);
    res.status(200).json(userFound);
  } catch (error) {
    res.status(500).json({ message: 'Error al editar el usuario', error });
  }
};

export const editPasswordByEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json(['User not found']);
    const newPassword = Math.floor(10000000 + Math.random() * 90000000);
    console.log(newPassword);
    const passwordHash = await bcrypt.hash(newPassword.toString(), 10);

    const userUpdated = await User.findByIdAndUpdate(
      { _id: userFound._id },
      { password: passwordHash },
      {
        new: true,
      }
    );
    console.log(userUpdated, 'userUpdated');
    await sendNewPassword(userUpdated.email, newPassword.toString());

    res.status(200).json({
      message: 'Password updated successfully',
    });
  } catch (error) {
    console.log(error, 'error');
    res.status(500).json({ message: 'Error updating password', error });
  }
};

export const resetPassworById = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  console.log(id, 'id');
  console.log(password, 'password');

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const userFound = await User.findByIdAndUpdate(
      { _id: id },
      { password: passwordHash },
      { new: true }
    );
    console.log(userFound, 'userFound');
    if (!userFound) return res.status(400).json(['User not found']);

    res.status(200).json({
      message: 'Password updated successfully',
    });
  } catch (error) {
    console.log(error, 'error');
    res.status(500).json({ message: 'Error updating password', error });
  }
};

export const editUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const userFound = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    console.log(userFound, 'userFound');
    if (!userFound) return res.status(400).json(['User not found']);

    res.status(200).json({
      message: 'Usuario actualizado correctamente',
    });
  } catch (error) {
    console.log(error, 'error');
    res.status(500).json({ message: 'Error actualizando usuario', error });
  }
};
