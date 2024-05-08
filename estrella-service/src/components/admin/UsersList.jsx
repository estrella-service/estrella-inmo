import { useState } from 'react';
import { useUser } from '../../context/user-context';
import { MdFormatListNumbered } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const UserList = () => {
  const { allClients, setCurrentClient } = useUser();
  const [filteredClients, setFilteredClients] = useState([]);
  return (
    <div className='flex flex-col w-full items-center '>
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        Detalle del Usuario
      </h1>
      <div className='items-center flex justify-center w-full p-2 '>
        <input
          type='text'
          placeholder='Buscar por nombre'
          className='md:w-[50%] w-full focus:ring-gray-500  rounded-md border border-gray-700'
          onChange={(e) => {
            const filtered = allClients.filter((res) =>
              res?.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredClients(filtered);
          }}
        />
      </div>
      <div className=' w-full flex flex-col items-start justify-center gap-2 p-2'>
        {filteredClients.length > 0
          ? filteredClients.map((client) => (
              <div
                key={client._id}
                className='w-full flex md:flex-row flex-col items-center border border-gray-700 gap-2 p-2 rounded-lg'>
                <div
                  className='flex flex-col w-full md:justify-normal  gap-2 text-sm
               md:text-xl font-cinzel font-bold'>
                  <div className='flex items-center gap-1'>
                    <h1 className=''>{client.name}</h1>
                    <p className=''>{client.surname}</p>{' '}
                  </div>
                  <p className='text-sm font-serif md:text-xl'>
                    <em>{client.email}</em>
                  </p>
                  <p className=''>
                    Cantidad de reservas: {client.reservasId.length}
                  </p>
                </div>
                <NavLink
                  to={`/admin-panel/guests/${client._id}`}
                  className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-sm md:text-md'>
                  Detalle
                  <button
                    className='flex items-center justify-center '
                    onClick={() => {
                      () => setCurrentClient(client);
                    }}>
                    <div className=' hidden md:flex'>
                      <MdFormatListNumbered size={30} />
                    </div>
                    <div className=' flex md:hidden'>
                      <MdFormatListNumbered size={20} />
                    </div>
                  </button>
                </NavLink>
              </div>
            ))
          : allClients.map((client) => (
              <div
                key={client._id}
                className='w-full flex md:flex-row flex-col items-center border border-gray-700 gap-2 p-2 rounded-lg'>
                <div
                  className='flex flex-col w-full md:justify-normal gap-2 text-sm
               md:text-xl font-cinzel font-bold'>
                  <div className='flex items-center gap-1'>
                    <h1 className=''>{client.name}</h1>
                    <p className=''>{client.surname}</p>{' '}
                  </div>
                  <p className='text-sm font-serif md:text-xl'>
                    <em>{client.email}</em>
                  </p>
                  <p className=''>
                    Cantidad de reservas: {client.reservasId.length}
                  </p>
                </div>
                <NavLink
                  to={`/admin-panel/guests/${client._id}`}
                  className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-sm md:text-md'>
                  Detalle
                  <button
                    className='flex items-center justify-center '
                    onClick={() => {
                      () => setCurrentClient(client);
                    }}>
                    <div className=' hidden md:flex'>
                      <MdFormatListNumbered size={30} />
                    </div>
                    <div className=' flex md:hidden'>
                      <MdFormatListNumbered size={20} />
                    </div>
                  </button>
                </NavLink>
              </div>
            ))}
      </div>
    </div>
  );
};

export default UserList;
