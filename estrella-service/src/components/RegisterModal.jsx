import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from '../context/user-context';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Modal } from '../components/Modal';
import { useModal } from '../hooks/use-modal-store';

const RegisterModal = () => {
  const [isEye, setIsEye] = useState(false);
  const { isOpen, onClose, type, onOpen } = useModal();
  const isModalOpen = isOpen && type === 'register-form';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { errors: formsErrors, isAuthenticated, singIn } = useUser();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data, 'data');
    const response = await singIn(data);
    if (response.status === 200) {
      onClose();
      reset();
      onOpen('login-form');
    }
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        {formsErrors &&
          formsErrors?.map((error, i) => (
            <div
              className='bg-red-500 p-2 rounded-md text-white w-200 m-2'
              key={i}>
              {error}
            </div>
          ))}
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Register your account
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Nombre
              </label>
              <div className='mt-2'>
                <input
                  {...register('name', { required: true })}
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2  '
                />
              </div>
              {errors.name && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Apellido
              </label>
              <div className='mt-2'>
                <input
                  {...register('surname', { required: true })}
                  id='surname'
                  name='surname'
                  type='text'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.surname && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>

            <div>
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
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.email && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Contraseña
              </label>
              <div className='mt-2 relative '>
                <input
                  {...register('password', { required: true })}
                  id='password'
                  name='password'
                  type={isEye ? 'text' : 'password'}
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
                <span
                  className=' absolute right-5 top-2.5 cursor-pointer'
                  onClick={() => setIsEye(!isEye)}>
                  {' '}
                  {!isEye ? (
                    <IoEyeOffOutline size={18} />
                  ) : (
                    <IoEyeOutline size={18} />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Register
              </button>
              <div className='flex mt-2 text-center text-black gap-2 md:text-md text-sm'>
                <p>If you are Registered go to </p>
                <button
                  onClick={() => onOpen('login-form')}
                  className='text-indigo-600 border-indigo-600 border-opacity-100 md:text-md text-sm'>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
