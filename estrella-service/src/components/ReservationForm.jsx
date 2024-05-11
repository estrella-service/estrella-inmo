import React, { useEffect, useState } from 'react';
import { useUser } from '../context/user-context';
import { useNavigate, useParams } from 'react-router-dom';
import { useHouses } from '../context/houses-context';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import Calendar from './Calendar';
import 'react-phone-number-input/style.css';
import { getDatesBetween, getSeason } from '../utils/datehelper';
import { toast } from 'sonner';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';

const ReservationForm = () => {
  const { isAuthenticated, user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentHouse, getCurrentHouse, createNewReservation } = useHouses();
  const [checkInPrev, setCheckInPrev] = useState('');
  const [checkOutPrev, setCheckOutPrev] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getNextWeek = (date) => {
    const today = new Date(date);
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const year = nextWeek.getFullYear();
    const month = String(nextWeek.getMonth() + 1).padStart(2, '0');
    const day = String(nextWeek.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    getCurrentHouse(id);
    if (!isAuthenticated) {
      navigate('/');
      toast.error('Debes iniciar sesión para realizar una reserva');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setCheckOutPrev('');
  }, [checkInPrev]);

  const onSubmit = handleSubmit(async (data) => {
    const days = getDatesBetween(checkInPrev, checkOutPrev);
    const seasson = getSeason(checkInPrev, checkOutPrev);

    console.log(seasson);
    const guests = data.guests;
    const price = () => {
      let totalPrice = 0;
      if (data.needTowels) {
        totalPrice += 5 * guests;
      }
      if (data.needSheets) {
        totalPrice += 10 * guests;
      }
      if (data.needBabyBed) {
        totalPrice += 30;
      }
      if (seasson === 'alta') {
        totalPrice += currentHouse?.priceHigh * days.length;
      }
      if (seasson === 'media') {
        totalPrice += currentHouse?.priceMedium * days.length;
      }
      if (seasson === 'baja') {
        totalPrice += currentHouse?.priceLow * days.length;
      }

      return totalPrice;
    };

    const reservation = {
      ...data,
      checkIn: checkInPrev,
      checkOut: checkOutPrev,
      phone: phone,
      busyDays: days,
      houseId: currentHouse?._id,
      userId: user?.id,
      totalPrice: price(),
    };
    const response = await createNewReservation(reservation);
    console.log(response);
    if (!response.error) {
      reset();
      toast.success('Reserva creada con éxito, en breve contactaremos contigo');
      navigate('/');
    } else {
      toast.error('Error al crear la reserva');
    }
  });
  return (
    <>
      <div className='flex flex-wrap md:flex-nowrap items-start gap-2 w-full p-4'>
        <div className='flex items-center justify-center w-full lg:w-[70%]'>
          <form
            className=' w-[80%] flex flex-col items-start  px-10'
            onSubmit={onSubmit}>
            {' '}
            <h2 className='mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 w-full mb-2'>
              Ingresa tus datos:
            </h2>
            <p className='text-center text-xl font-bold leading-9 tracking-tight text-gray-900 w-full mb-2'>
              Solicitud de Reserva para : <em>{currentHouse?.title}</em>
            </p>
            <div className='flex flex-col w-full lg:hidden gap-2 mr-20'>
              <div className='flex md:flex-row flex-col justify-center items-center gap-2 w-full'>
                <div className='flex items-center gap-2'>
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
                    excludeDates={currentHouse?.busyDays.map((day) => day)}
                    dateFormat='yyyy-MM-dd'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <FaRegCalendarAlt />
                  <DatePicker
                    className='rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
                    placeholderText={'CheckOut '}
                    selected={checkOutPrev}
                    onChange={(date) =>
                      setCheckOutPrev(format(date, 'yyyy-MM-dd'))
                    }
                    minDate={getNextWeek(checkInPrev)}
                    excludeDates={currentHouse?.busyDays.map((day) => day)}
                    dateFormat='yyyy-MM-dd'
                  />
                </div>
              </div>
              <div className='flex flex-col w-full items-center justify-center mt-6 gap-2 mb-8 '>
                <Calendar busyDays={currentHouse?.busyDays} />
              </div>
            </div>
            <div className='flex lg:flex-row flex-col items-center gap-2 p-2 w-full'>
              <div className='w-full'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Name
                </label>
                <div className='mt-2'>
                  <input
                    {...register('name', { required: true })}
                    id='name'
                    name='name'
                    type='text'
                    value={user?.name}
                    autoComplete='name'
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.name && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div className='w-full'>
                <label
                  htmlFor='surname'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Surname
                </label>
                <div className='mt-2'>
                  <input
                    {...register('surname', { required: true })}
                    id='surname'
                    name='surname'
                    type='text'
                    value={user?.surname}
                    autoComplete='surname'
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset-none
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.surname && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div className='w-full '>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Email
                </label>
                <div className='mt-2'>
                  <input
                    {...register('email', { required: true })}
                    id='email'
                    name='email'
                    type='email'
                    value={user?.email}
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.email && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
            </div>
            <div className='flex items-center gap-2 p-2 w-full'>
              <div className='w-full '>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Direccion
                </label>
                <div className='mt-2'>
                  <input
                    {...register('address', { required: true })}
                    id='address'
                    name='address'
                    type='text'
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.address && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
            </div>
            <div className='flex items-center gap-2 p-2 w-full lg:flex-row flex-col'>
              <div className='w-full'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Pais
                </label>
                <div className='mt-2'>
                  <input
                    {...register('country', { required: true })}
                    id='country'
                    name='country'
                    type='text'
                    autoComplete='country'
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.country && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div className='w-full'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Localidad
                </label>
                <div className='mt-2'>
                  <input
                    {...register('city', { required: true })}
                    id='city'
                    name='city'
                    type='text'
                    autoComplete='city'
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset-none
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.city && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div className='w-full '>
                <label
                  htmlFor='postalCode'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Codigo Postal
                </label>
                <div className='mt-2'>
                  <input
                    {...register('postalCode', { required: true })}
                    id='postalCode'
                    name='postalCode'
                    type='text'
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.postalCode && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
            </div>
            <div className='flex items-center gap-2 p-2 w-full'>
              <div className='w-full md:w-[50%]'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Telefono
                </label>
                <div className='mt-2'>
                  <PhoneInput
                    placeholder='Enter phone number'
                    value={phone}
                    onChange={setPhone}
                    className=' w-full rounded-md 
                 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-gray-600 sm:text-sm sm:leading-6 p-2 PhoneInput:focus:ring-2 
                     PhoneInput:focus:ring-inset PhoneInput:focus:ring-gray-600 
                     PhoneInput:sm:text-sm PhoneInput:sm:leading-6 PhoneInput:p-2'
                  />
                </div>
                {errors.phone && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
            </div>
            <div className='flex items-center gap-2 p-2 w-full'>
              <div className='w-full md:w-[50%] '>
                <label
                  htmlFor='guests'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Cantidad de Viejeros
                </label>
                <div className='mt-2'>
                  <input
                    {...register('guests', {
                      required: true,
                      valueAsNumber: true,
                    })}
                    id='guests'
                    name='guests'
                    max={currentHouse?.huespedes}
                    min={1}
                    type='number'
                    required
                    className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-gray-600 sm:text-sm sm:leading-6 p-2'
                  />
                </div>
                {errors.guests && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
            </div>
            <fieldset className='w-full'>
              <legend className='sr-only'>Extras</legend>
              <div className='mt-2 flex lg:flex-row flex-col items-start gap-2 w-full '>
                <div className='flex items-center justify-center'>
                  <div className='flex h-6 items-center justify-center'>
                    <input
                      {...register('needTowels')}
                      id='needTowels'
                      aria-describedby='needTowels-description'
                      name='needTowels'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='ml-3 text-sm leading-6'>
                    <label
                      htmlFor='needTowels'
                      className='font-medium text-gray-900'>
                      Toallas
                    </label>
                    <p
                      id='needTowels-description'
                      className='text-gray-500'>
                      5€ por persona.
                    </p>
                  </div>
                </div>
                <div className=' flex items-center justify-center'>
                  <div className='flex h-6 items-center'>
                    <input
                      {...register('needSheets')}
                      id='needSheets'
                      aria-describedby='needSheets-description'
                      name='needSheets'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='ml-3 text-sm leading-6'>
                    <label
                      htmlFor='needSheets'
                      className='font-medium text-gray-900'>
                      Sabanas.
                    </label>
                    <p
                      id='needSheets-description'
                      className='text-gray-500'>
                      10€ por persona
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='flex h-6 items-center'>
                    <input
                      {...register('needBabyBed')}
                      id='needBabyBed'
                      aria-describedby='needBabyBed-description'
                      name='needBabyBed'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='ml-3 text-sm leading-6'>
                    <label
                      htmlFor='needBabyBed'
                      className='font-medium text-gray-900'>
                      Cuna
                    </label>
                    <p
                      id='needBabyBed-description'
                      className='text-gray-500'>
                      30€ semana
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className='w-full'>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='comentarios'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Comentario:
                </label>
                <textarea
                  className='block w-full rounded-md border-0 py-1.5
                 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  rows={3}
                  placeholder='Añada un comentario a su solicitud'
                  name='comentarios'
                  id='comentarios'
                  {...register('comentarios')}></textarea>
                {errors.comentarios && <span>This field is required</span>}
              </div>
            </div>
            <div>
              <button
                type='submit'
                disabled={checkOutPrev === '' || checkInPrev === ''}
                className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-gray-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 mt-2'>
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
        <div className='md:flex flex-col w-full gap-2 mr-20 lg:flex lg:w-[30%] hidden'>
          <div className='flex items-center gap-2 w-full'>
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
              excludeDates={currentHouse?.busyDays.map((day) => day)}
              dateFormat='yyyy-MM-dd'
            />
            <FaRegCalendarAlt />
            <DatePicker
              className='rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
              placeholderText={'CheckOut '}
              selected={checkOutPrev}
              onChange={(date) => setCheckOutPrev(format(date, 'yyyy-MM-dd'))}
              minDate={getNextWeek(checkInPrev)}
              excludeDates={currentHouse?.busyDays.map((day) => day)}
              dateFormat='yyyy-MM-dd'
            />
          </div>
          <div className='flex flex-col w-full items-center justify-center mt-6 gap-2 mb-8 '>
            <Calendar busyDays={currentHouse?.busyDays} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReservationForm;
