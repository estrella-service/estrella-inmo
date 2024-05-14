import { createContext, useContext, useEffect, useState } from 'react';

import {
  registerRecuest,
  loginRecuest,
  verifyTokenRequest,
  getAllClientsRequest,
  logOutRequest,
  editCurrentUserRequest,
  editPasswordRequest,
  resetPasswordRequest,
  editUserByIdRequest,
} from '../api/auth';
import { useHouses } from './houses-context';

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [allClients, setAllClients] = useState([]);
  const [currentClient, setCurrentClient] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllReservations } = useHouses();

  const singIn = async (values) => {
    console.log(values, 'values');
    try {
      const response = await registerRecuest(values);
      console.log(response.data, 'response .data del singIn');
      return response;
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data]);
    }
  };
  const logIn = async (value) => {
    console.log(value, 'value');
    try {
      const response = await loginRecuest(value);

      console.log(response.data, 'response .data del logIn');
      setUser(response.data);
      setIsAuthenticated(true);
      if (response.data.isAdmin) {
        await getAllClients();
        await getAllReservations();
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  const logOut = (id) => {
    logOutRequest(id);
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const checkToken = async () => {
      setLoading(true);
      try {
        const response = await verifyTokenRequest();
        console.log(response, 'veryfyTokenRequest');
        if (!response.data) {
          setLoading(false);
          setIsAuthenticated(false);
          setUser(null);
          return;
        }

        if (response.data.isAdmin) {
          await getAllClients();
          await getAllReservations();
        }
        setUser(response.data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);

        setLoading(false);
      }
    };
    checkToken();
  }, []);

  const getAllClients = async () => {
    try {
      const response = await getAllClientsRequest();
      console.log(response.data, 'response .data del getAllClients');
      setAllClients(response.data);
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  const getCurrentClient = (id) => {
    const client = allClients.find((client) => client._id === id);
    console.log(client);
    setCurrentClient(client);
  };

  // EDIT CLIENT NEW CONTENT TO TRY BY PASS TO PRODUCCTION WEB
  const editCurrentUser = async (values) => {
    try {
      const response = await editCurrentUserRequest(values);
      console.log(response.data, 'response .data del editCurrentUser');
      await getAllClients();
      return response;
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data]);
    }
  };

  const editPassword = async (values) => {
    try {
      const response = await editPasswordRequest(values);
      console.log(response.data, 'response .data del editCurrentUser');

      return response;
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data]);
    }
  };

  const resetPassword = async (password, id) => {
    console.log(password, id, 'password, id');
    try {
      const response = await resetPasswordRequest(password, id);
      console.log(response.data, 'response .data del editCurrentUser');

      return response;
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data]);
    }
  };

  const editUserById = async (id, data) => {
    try {
      const response = await editUserByIdRequest(id, data);
      console.log(response.data, 'response .data del editCurrentUser');
      return response;
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data]);
    }
  };

  return (
    <UserContext.Provider
      value={{
        resetPassword,
        editUserById,
        singIn,
        user,
        isAuthenticated,
        errors,
        logIn,
        loading,
        logOut,
        allClients,
        getCurrentClient,
        currentClient,
        setAllClients,
        setCurrentClient,
        editCurrentUser,
        editPassword,
      }}>
      {children}
    </UserContext.Provider>
  );
};
