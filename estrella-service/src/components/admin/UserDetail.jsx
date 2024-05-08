import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user-context';

const UserDetail = () => {
  const { id } = useParams();
  const { getCurrentClient, currentClient } = useUser();
  console.log(currentClient);
  useEffect(() => {
    getCurrentClient(id);
  }, [id]);
  const handleUserAdmin = async () => {};
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-full'>
      {currentClient && (
        <>
          <div className='md:w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='bg-white shadow overflow-hidden sm:rounded-lg my-6'>
              <div className='px-4 py-5 sm:px-6'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Información del Usuario
                </h3>
                <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                  Detalles personales y de reservas.
                </p>
              </div>
              <div className='border-t border-gray-200'>
                <dl>
                  <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Nombre completo
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {currentClient.name} {currentClient.surname}
                    </dd>
                  </div>
                  <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Email</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {currentClient.email}
                    </dd>
                  </div>
                  <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Teléfono
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {currentClient.phone}
                    </dd>
                  </div>
                  <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Administrador
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center gap-8'>
                      <p> {currentClient.isAdmin ? 'Sí' : 'No'}</p>
                      <button
                        onClick={handleUserAdmin}
                        className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
                        {currentClient.isAdmin ? 'Quitar Admin' : 'Hacer Admin'}
                      </button>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
              <div className='px-4 py-5 sm:px-6'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Reservas
                </h3>
              </div>
              <div className='border-t border-gray-200'>
                {currentClient.reservasId.map((reserva, index) => (
                  <div
                    key={index}
                    className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Reserva ID
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {reserva._id}
                    </dd>
                    <dt className='text-sm font-medium text-gray-500'>
                      Check-in
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {reserva.checkIn}
                    </dd>
                    <dt className='text-sm font-medium text-gray-500'>
                      Check-out
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {reserva.checkOut}
                    </dd>
                    <dt className='text-sm font-medium text-gray-500'>
                      {reserva.pagado ? 'Total Pagado' : 'Pendiente de pago'}
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {reserva.totalPrice} €
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetail;
