import { createContext, useContext, useEffect, useState } from 'react';

import {
  getAllHouses,
  registerNewPropierty,
  deletePropertieRequest,
  editPropertyRequest,
} from '../api/properties';
import {
  createGuestDataRequest,
  createNewReservationRequest,
  createReservationByAdminRequest,
  editReservationDatesRequest,
  editReservationRequest,
  getAllReservationsRequest,
} from '../api/reservation';

import { verifyTokenRequest } from '../api/auth';

export const HousesContext = createContext();

export const useHouses = () => {
  const context = useContext(HousesContext);
  if (context === undefined) {
    throw new Error('useHouses must be used within a HousesProvider');
  }
  return context;
};

export const HousesProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [currentHouse, setCurrentHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [currentReservation, setCurrentReservation] = useState(null);

  const fetchAllHouses = async () => {
    setLoading(true);
    try {
      const response = await getAllHouses();
      console.log(response.data, 'response del fetchAllHouses');
      setHouses(response.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrors([error]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllHouses();
  }, []);

  const getCurrentHouse = (id) => {
    const house = houses.find((house) => house._id === id);
    console.log(house);
    setCurrentHouse(house);
  };
  const getCurrentHouseById = async (id) => {
    const house = await houses.find((house) => house._id === id);
    console.log(house);
    setCurrentHouse(house);
    return { message: 'success' };
  };

  const createNewPropertie = async (data) => {
    data.busyDays = [];
    data.reservasId = [];
    console.log(data, 'data');
    try {
      const response = await registerNewPropierty(data);
      console.log(response, 'response  del Create New Propertie');
      await fetchAllHouses();
      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };

  const deletePropertie = async (id) => {
    try {
      const response = await deletePropertieRequest(id);
      console.log(response, 'response del deletePropertie');
      await fetchAllHouses();
      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };

  const createNewReservation = async (data) => {
    try {
      const response = await createNewReservationRequest(data);
      console.log(response, 'response  del Create New Propertie');
      await fetchAllHouses();
      await getAllReservations();
      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };

  const editProperty = async (data) => {
    try {
      const response = await editPropertyRequest(data);
      console.log(response, 'response  del Create New Propertie');
      await fetchAllHouses();
      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };

  const getAllReservations = async () => {
    try {
      const response = await getAllReservationsRequest();
      console.log(response.data, 'response .data del getAllReservations');
      setReservations(response.data);
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };

  const getReservationById = (id) => {
    const reservation = reservations.find(
      (reservation) => reservation._id === id
    );
    console.log(reservation);
    setCurrentReservation(reservation);
    return reservation;
  };
  const editReservation = async (data) => {
    try {
      const response = await editReservationRequest(data);
      console.log(response, 'response  del Create New Propertie');
      await fetchAllHouses();
      await getAllReservations();
      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };
  const editReservationDates = async (data) => {
    try {
      const response = await editReservationDatesRequest(data);
      console.log(response, 'response  del Create New Propertie');
      await fetchAllHouses();
      await getAllReservations();
      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };
  const createNewReservationAdmin = async (data) => {
    try {
      const response = await createReservationByAdminRequest(data);
      console.log(response, 'response  del Create New Propertie');
      await fetchAllHouses();
      await getAllReservations();
      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };
  const createGuestData = async (data) => {
    try {
      const response = await createGuestDataRequest(data);
      console.log(response, 'response  del Create New Propertie');
      await verifyTokenRequest();

      return response;
    } catch (error) {
      console.log(error);
      setErrors([error]);
    }
  };

  return (
    <HousesContext.Provider
      value={{
        createNewReservationAdmin,
        houses,
        editReservation,
        setHouses,
        currentHouse,
        setCurrentHouse,
        getCurrentHouse,
        createNewPropertie,
        getCurrentHouseById,
        deletePropertie,
        createNewReservation,
        editProperty,
        getAllReservations,
        reservations,
        setReservations,
        currentReservation,
        setCurrentReservation,
        loading,
        getReservationById,
        editReservationDates,
        createGuestData,
      }}>
      {children}
    </HousesContext.Provider>
  );
};
