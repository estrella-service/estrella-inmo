import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHouses } from '../../context/houses-context';
import { toast } from 'sonner';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { format, set } from 'date-fns';
import { getDatesBetween } from '../../utils/datehelper';
import { calculateTotalPrice } from '../../utils/pricehelper';

const ReservationDetail = () => {
  const [showDatesInput, setShowDatesInput] = useState(false);
  const [checkInPrev, setCheckInPrev] = useState('');
  const [checkOutPrev, setCheckOutPrev] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    getReservationById,
    currentReservation,
    editReservation,
    editReservationDates,
  } = useHouses();

  console.log('id', id);
  useEffect(() => {
    console.log('currentReservation', currentReservation);
    const reservation = getReservationById(id);
    console.log('reservation', reservation);
  }, []);

  const handleAcceptReservation = async () => {
    const data = {
      _id: currentReservation._id,
      accepted: true,
      canceled: false,
    };
    console.log('Accept Reservation', data);
    try {
      const response = await editReservation(data);
      console.log(response);
      if (response.status === 200) {
        toast.success('Reserva aceptada correctamente');
        navigate('/admin-panel/bookings');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al aceptar la reserva');
    }
  };
  const handleDenyReservation = async () => {
    const data = {
      _id: currentReservation._id,
      canceled: true,
      accepted: false,
    };
    console.log('Accept Reservation', data);
    try {
      const response = await editReservation(data);
      console.log(response);
      if (response.status === 200) {
        toast.success('Reserva denegada correctamente');
        navigate('/admin-panel/bookings');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al intentar denegar la reserva');
    }
  };

  const handleEditReservation = async () => {
    const days = getDatesBetween(checkInPrev, checkOutPrev);
    console.log('Days', days.length);
    const calcPriceData = {
      start: checkInPrev,
      end: checkOutPrev,
      priceHigh: currentReservation?.houseId.priceHigh,
      priceMedium: currentReservation?.houseId.priceMedium,
      priceLow: currentReservation?.houseId.priceLow,
      days: days.length,
      guests: currentReservation?.guests,
      needTowels: currentReservation?.needTowels,
      needSheets: currentReservation?.needSheets,
      needBabyBed: currentReservation?.needBabyBed,
    };
    const price = calculateTotalPrice(calcPriceData);
    const data = {
      _id: currentReservation?._id,
      checkIn: checkInPrev,
      checkOut: checkOutPrev,
      busyDays: days,
      oldBusyDays: currentReservation?.busyDays,
      totalPrice: price,
    };
    console.log('Edit Reservation', data);
    setShowDatesInput(false);
    try {
      const response = await editReservationDates(data);
      console.log(response);
      if (response.status === 200) {
        toast.success('Reserva editada correctamente');
        navigate('/admin-panel/bookings');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al editar la reserva');
    }
  };
  const handlePayReservation = async () => {
    const data = { _id: currentReservation._id, pagado: true };
    console.log('Accept Reservation', data);
    try {
      const response = await editReservation(data);
      console.log(response);
      if (response.status === 200) {
        toast.success('Pago actualizado correctamente');
        navigate('/admin-panel/bookings');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al aceptar el pago de la reserva');
    }
  };
  const getNextWeek = (date) => {
    const today = new Date(date);
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const year = nextWeek.getFullYear();
    const month = String(nextWeek.getMonth() + 1).padStart(2, '0');
    const day = String(nextWeek.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <div className='text-black flex flex-col items-center gap-2 mt-2 w-full '>
      <p className='text-lg font-serif font-bold'>Reservation Details</p>
      <p></p>
      <div className='flex items-center justify-center gap-2 md:flex-row flex-col w-full p-2 md:p-0'>
        <button
          onClick={handleAcceptReservation}
          className='bg-[#0e2235] text-white py-2 px-3 rounded-md md:w-fit w-full text-center self-end text-md'>
          Aceptar
        </button>
        <button
          onClick={handleDenyReservation}
          className='bg-[#0e2235] text-white py-2 px-3  gap-3 rounded-md md:w-fit w-full self-end text-md'>
          Rechazar
        </button>
        <button
          onClick={() => setShowDatesInput(true)}
          className='bg-[#0e2235] text-white py-2 px-3  gap-3 rounded-md md:w-fit w-full self-end text-md'>
          Editar
        </button>
        <button
          onClick={handlePayReservation}
          className='bg-[#0e2235] text-white py-2 px-3  gap-3 rounded-md md:w-fit w-full self-end text-md'>
          Pago Realizado
        </button>
      </div>
      <hr className='w-full border border-gray-700' />
      {currentReservation && (
        <div className='container mx-auto px-4'>
          <div className='flex items-center'>
            <h1 className=' text-xl font-semibold my-4'>
              Detalles de la Reserva
            </h1>
            <div
              className={clsx(
                `h-3 w-3  ml-2 rounded-full 'bg-yellow-500 `,
                currentReservation.accepted &&
                  currentReservation.canceled &&
                  'bg-red-500',
                !currentReservation.accepted &&
                  currentReservation.canceled &&
                  'bg-red-500',
                currentReservation.accepted &&
                  !currentReservation.canceled &&
                  'bg-green-500 ',
                !currentReservation.accepted &&
                  !currentReservation.canceled &&
                  'bg-yellow-500'
              )}
            />
          </div>
          <div className='bg-white shadow-md rounded-lg p-6 mb-4'>
            <h2 className='text-lg font-bold mb-3'>Información del Usuario</h2>
            <p>
              <strong>Nombre:</strong> {currentReservation?.userId.name}{' '}
              {currentReservation?.userId.surname}
            </p>
            <p>
              <strong>Email:</strong> {currentReservation?.userId.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {currentReservation?.phone}
            </p>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6 mb-4'>
            <h2 className='text-lg font-bold mb-3'>
              Información de la Propiedad
            </h2>
            <p>
              <strong>Nombre:</strong> {currentReservation?.houseId.title}
            </p>
            <p>
              <strong>Descripción:</strong>{' '}
              {currentReservation?.houseId.description}
            </p>
            <p>
              <strong>Habitaciones:</strong>{' '}
              {currentReservation?.houseId.habitaciones}
            </p>
            <p>
              <strong>Huéspedes:</strong>{' '}
              {currentReservation?.houseId.huespedes}
            </p>
            <p>
              <strong>Baños:</strong> {currentReservation?.houseId.toilet}
            </p>
            <div className='flex flex-wrap mt-2'>
              {currentReservation?.houseId.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Property Image ${index}`}
                  className='w-24 h-24 mr-2 mb-2 rounded'
                />
              ))}
            </div>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6 mb-4'>
            <h2 className='text-lg font-bold mb-3'>Detalles de la Reserva</h2>

            <>
              <p>
                <strong>Check-in:</strong> {currentReservation?.checkIn}
              </p>
              <p>
                <strong>Check-out:</strong> {currentReservation?.checkOut}
              </p>
            </>
            {showDatesInput && (
              <div className='flex mt-2 mb-2 items-center gap-2 w-full'>
                <FaRegCalendarAlt />
                <DatePicker
                  className='rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
                  placeholderText={'CheckIn '}
                  type='date'
                  selected={checkInPrev}
                  onChange={(date) => {
                    setCheckInPrev(format(date, 'yyyy-MM-dd'));
                  }}
                  minDate={new Date()}
                  excludeDates={currentReservation?.houseId.busyDays.map(
                    (day) => day
                  )}
                  dateFormat='yyyy-MM-dd'
                />
                <FaRegCalendarAlt />
                <DatePicker
                  className='rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
                  placeholderText={'CheckOut '}
                  selected={checkOutPrev}
                  onChange={(date) =>
                    setCheckOutPrev(format(date, 'yyyy-MM-dd'))
                  }
                  minDate={getNextWeek(checkInPrev)}
                  excludeDates={currentReservation?.houseId.busyDays.map(
                    (day) => day
                  )}
                  dateFormat='yyyy-MM-dd'
                />
                <button
                  onClick={handleEditReservation}
                  className='bg-[#0e2235] text-white py-1 px-3 flex items-center gap-3 rounded-md w-fit self-end text-md'>
                  Guardar
                </button>
              </div>
            )}
            <p>
              <strong>Total a pagar:</strong> €{currentReservation?.totalPrice}
            </p>
            <p>
              <strong>Comentarios:</strong> {currentReservation?.comentarios}
            </p>
            <p>
              <strong>Pagado:</strong>{' '}
              {currentReservation?.pagado ? 'Sí' : 'No'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationDetail;
