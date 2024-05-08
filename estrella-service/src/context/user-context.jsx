import { createContext, useContext, useEffect, useState } from 'react';

import {
  registerRecuest,
  loginRecuest,
  verifyTokenRequest,
  getAllClientsRequest,
  logOutRequest,
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
        setUser(response.data);
        if (response.data.isAdmin) {
          await getAllClients();
          await getAllReservations();
        }
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
        setErrors([error.response.data.message]);
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
  return (
    <UserContext.Provider
      value={{
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
      }}>
      {children}
    </UserContext.Provider>
  );
};
