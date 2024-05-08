import { NavLink } from 'react-router-dom';
import { useHouses } from '../../context/houses-context';
import { MdFormatListNumbered } from 'react-icons/md';
import clsx from 'clsx';
import { useState } from 'react';

const ReservationList = () => {
  const { reservations, setCurrentReservation } = useHouses();
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const handleSort = () => {
    const sorted = reservations.sort((a, b) => {
      return new Date(a.checkIn) - new Date(b.checkIn);
    });
    setFilteredReservations(sorted);
  };

  const handleFilter = () => {
    const filtered = reservations.filter((res) => !res.accepted);
    setFilteredReservations(filtered);
  };

  const handleSortByCreation = () => {
    const sorted = reservations.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setFilteredReservations(sorted);
  };
  const handleHideCanceled = () => {
    const filtered = reservations.filter((res) => !res.canceled);
    setFilteredReservations(filtered);
  };

  return (
    <>
      {reservations && (
        <div className='flex flex-col w-full items-center p-2 '>
          <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
            Detalle del Usuario
          </h1>
          <p
            onClick={() => setShowFilters(!showFilters)}
            className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit  text-md cursor-pointer'>
            {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </p>
          {showFilters && (
            <div className='flex flex-col items-center justify-center gap-2 w-full mb-2 p-2'>
              <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full mb-2'>
                <input
                  type='text'
                  placeholder='Buscar por nombre'
                  className='md:w-[50%] w-full p-2 rounded-md border border-gray-700'
                  onChange={(e) => {
                    const filtered = reservations.filter((res) =>
                      res?.houseId?.title
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    );
                    setFilteredReservations(filtered);
                  }}
                />
                <input
                  type='text'
                  placeholder='Buscar por ID'
                  className='md:w-[50%] w-full p-2 rounded-md border border-gray-700'
                  onChange={(e) => {
                    console.log(e.target.value);
                    const filtered = reservations.filter((res) =>
                      res?._id.includes(e.target.value)
                    );
                    setFilteredReservations(filtered);
                  }}
                />
              </div>
              <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full'>
                <button
                  onClick={handleSort}
                  className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
                  Ordenar por entrada
                </button>
                <button
                  onClick={handleFilter}
                  className='bg-[#0e2235] text-white py-2 px-3 
            flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
                  Pendientes Aceptar
                </button>
                <button
                  onClick={handleSortByCreation}
                  className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
                  Fecha de Creacion
                </button>
                <button
                  onClick={handleHideCanceled}
                  className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
                  Ocultar Canceladas
                </button>
                <button
                  onClick={() => setFilteredReservations([])}
                  className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
                  Quitar Filtros
                </button>
              </div>
            </div>
          )}
          <div className=' w-full flex flex-col items-start justify-center gap-2 p-2'>
            {filteredReservations.length > 0
              ? filteredReservations.map((res, index) => (
                  <div
                    key={res._id}
                    className='w-full flex md:flex-row flex-col  items-center border border-gray-700 gap-2 p-2 rounded-lg'>
                    <div className='flex md:flex-row flex-col w-full items-center gap-2 justify-between text-xl font-cinzel'>
                      <div className='flex md:flex-row flex-col items-center gap-2'>
                        <p>{index}-</p>
                        <p className=''>{res?.houseId?.title}</p>-{' '}
                        <p className=' font-serif'>
                          <em>
                            {res.checkIn}"-----"{res.checkOut}
                          </em>
                        </p>
                        -
                        <p>
                          Guests: <em>{res.guests}</em>
                        </p>
                        <div
                          className={clsx(
                            `h-3 w-3  ml-2 rounded-full 'bg-yellow-500 `,
                            res.accepted && res.canceled && 'bg-red-500',
                            !res.accepted && res.canceled && 'bg-red-500',
                            res.accepted && !res.canceled && 'bg-green-500 ',
                            !res.accepted && !res.canceled && 'bg-yellow-500'
                          )}></div>
                      </div>
                      <NavLink
                        to={`/admin-panel/bookings/${res._id}`}
                        className='bg-[#0e2235] text-white font-serif py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-md'>
                        Detalle
                        <button
                          className='flex items-center justify-center '
                          onClick={() => {
                            () => setCurrentReservation(res);
                          }}>
                          <MdFormatListNumbered size={30} />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ))
              : reservations.map((res, index) => (
                  <div
                    key={res._id}
                    className='w-full flex md:flex-row flex-col items-center border border-gray-700 gap-2 p-2 rounded-lg'>
                    <div className='flex md:flex-row flex-col w-full items-center gap-2 justify-between text-xl font-cinzel'>
                      <div className='flex md:flex-row flex-col items-start md:items-center gap-2'>
                        <p>{index}-</p>
                        <p className=''>{res?.houseId?.title}</p>-{' '}
                        <p className=' font-serif'>
                          <em>
                            {res.checkIn}"-----"{res.checkOut}
                          </em>
                        </p>
                        -
                        <p className='font-serif flex items-center gap-2'>
                          Guests: <em>{res.guests}</em>
                        </p>
                        <div
                          className={clsx(
                            `h-3 w-3  ml-2 rounded-full 'bg-yellow-500 `,
                            res.accepted && res.canceled && 'bg-red-500',
                            !res.accepted && res.canceled && 'bg-red-500',
                            res.accepted && !res.canceled && 'bg-green-500 ',
                            !res.accepted && !res.canceled && 'bg-yellow-500'
                          )}></div>
                      </div>
                      <NavLink
                        to={`/admin-panel/bookings/${res._id}`}
                        className='bg-[#0e2235] text-white font-serif py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-md'>
                        Detalle
                        <button
                          className='flex items-center justify-center '
                          onClick={() => {
                            () => setCurrentReservation(res);
                          }}>
                          <MdFormatListNumbered size={30} />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationList;
