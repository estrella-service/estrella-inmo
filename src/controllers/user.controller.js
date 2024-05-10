import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateTokenAccess } from '../libs/jsonwebtoken.js';
import jwt from 'jsonwebtoken';

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
    const userFound = await User.findOne({ email });
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

    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    return res.json({
      id: userFound._id,
      email: userFound.email,
      name: userFound.name,
      surname: userFound.surname,
      isAdmin: userFound.isAdmin,
      reservasId: userFound.reservasId,
    });
  });
};
export const logInWithToken = async (req, res) => {
  const { id } = req.user;
  console.log(req.user, '<--- req.user');
  try {
    const userFound = await User.findById(id);
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
