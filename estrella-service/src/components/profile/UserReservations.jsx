import React, { useEffect } from 'react';
import { useUser } from '../../context/user-context';
import clsx from 'clsx';
import { useModal } from '../../hooks/use-modal-store';
import Loader from '../Loader';

const UserReservations = () => {
  const { user, isAuthenticated, loading } = useUser();
  const { onOpen } = useModal();
  console.log(user, isAuthenticated);
  useEffect(() => {}, [user, isAuthenticated]);
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-full'>
      <>
        {loading ? (
          <Loader />
        ) : (
          user && (
            <div className='md:w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg my-6'>
                <div className='px-4 py-5 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Información de las Reservas {user?.name} {user?.surname}
                  </h3>
                  <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                    Detalles personales.
                  </p>
                </div>
                <div className='border-t border-gray-200'>
                  {user?.reservasId.length === 0 ? (
                    <div className='flex items-center justify-center h-96'>
                      <h2 className='text-2xl'>No tienes reservas</h2>
                    </div>
                  ) : (
                    user?.reservasId.map((reserva) => (
                      <dl>
                        <hr className='w-full border border-gray-700 ' />
                        <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-2'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Imagen de la Casa
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            <img
                              className='h-18 w-18 '
                              src={reserva.houseId.images[0]}
                              alt=''
                            />
                          </dd>
                        </div>
                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Nombre Casa
                          </dt>
                          <div className='flex items-center gap-4'>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                              {reserva.houseId.title}
                            </dd>
                          </div>
                        </div>
                        <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Check-In
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            {reserva.checkIn}
                          </dd>
                        </div>
                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Check-Out
                          </dt>
                          <div className='flex items-center gap-4'>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                              {reserva.checkOut}
                            </dd>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'></dd>
                          </div>
                        </div>

                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Comentarios
                          </dt>
                          <div className='flex items-center gap-4'>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                              {reserva.comentarios
                                ? reserva.comentarios
                                : 'Sin comentarios'}
                            </dd>
                          </div>
                        </div>
                        {reserva.accepted && (
                          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                            <dt className='text-sm font-medium text-gray-500'>
                              Datos Viajeros
                            </dt>
                            <div className='flex items-center gap-4'>
                              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                <div className='flex items-center gap-3'>
                                  {Array.from({ length: reserva.guests }).map(
                                    (_, i) => (
                                      <button
                                        onClick={() =>
                                          onOpen('viajeros-form', reserva)
                                        }
                                        key={i}
                                        disabled={
                                          reserva.viajeros?.length === i + 1
                                        }
                                        className={clsx(
                                          'px-4 py-2 bg-[#0e2235] text-white text-xs whitespace-nowrap rounded',
                                          reserva.viajeros?.length >= i + 1 &&
                                            'bg-green-500 cursor-not-allowed, text-bg-[#0e2235]'
                                        )}>
                                        Viajero{' '}
                                        {reserva.viajeros?.length >= i + 1
                                          ? '✓'
                                          : i + 1}
                                      </button>
                                    )
                                  )}
                                </div>
                              </dd>
                            </div>
                          </div>
                        )}
                      </dl>
                    ))
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </>
    </div>
  );
};

export default UserReservations;
