import House from '../models/house.model.js';
import User from '../models/user.model.js';
export const getAllHouses = async (req, res) => {
  try {
    const houses = await House.find().populate('owner').populate('reservasId');
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las casas', error });
  }
};

export const createNewPropertie = async (req, res) => {
  try {
    const newHouse = await House.create(req.body);

    const userOwnerUpdate = await User.findByIdAndUpdate(
      { _id: req.body.owner },
      { $push: { propertysId: newHouse._id } },
      { new: true }
    );
    res
      .status(200)
      .json({ newHouse, userOwnerUpdate, message: 'Casa creada con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al crear la casa', error });
  }
};

export const createDbHouses = async (req, res) => {
  try {
    const houses = await House.insertMany(req.body);
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear las casas', error });
  }
};

export const deletePropertie = async (req, res) => {
  const { id } = req.params;
  try {
    const house = await House.findByIdAndDelete(id);

    const userOwnerUpdate = await User.findByIdAndUpdate(
      { _id: house.owner },
      { $pull: { propertysId: house._id } },
      { new: true }
    );

    res
      .status(200)
      .json({ house, userOwnerUpdate, message: 'Casa eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la casa', error });
  }
};

export const editProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const house = await House.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    console.log(house, 'house');
    res.status(200).json({ house, message: 'Casa editada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al editar la casa', error });
  }
};
