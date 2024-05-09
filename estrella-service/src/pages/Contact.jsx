import PropertySearch from '../components/PropertySearch';
import { FaFacebookSquare } from 'react-icons/fa';
import ServiciosExtra from '../components/ServiciosExtra';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { contactMeForm } from '../api/mail';
import Loader from '../components/Loader';
import { toast } from 'sonner';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const response = await contactMeForm(data);
      console.log(response);
      toast.success(response.data.message);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });
  return (
    <>
      {loading && <Loader />}
      <div className='grid grid-cols-12 items-center justify-center gap-4  w-full py-4 px-10 mt-2'>
        <div className=' col-span-12 md:col-span-8 h-full'>
          <article className='w-full flex flex-col items-start justify-center'>
            <h1 className=' font-cinzel text-gray-800 text-3xl'>
              Contacte con Estrella Service - Holiday Villas & Apartments
            </h1>
            <hr className='w-full border border-gray-700' />
            <h2 className='w-full mt-6 text-2xl font text-gray-600'>
              <em>
                Si desea ponerse en contacto con nosotros, por favor complete el
                formulario de contacto o envíenos un correo electrónico a{' '}
                <a
                  href='mailto:info@estrellaservice.com'
                  className='underline'>
                  <em className='text-2xl'> Email</em>
                </a>
              </em>
            </h2>
            <form
              onSubmit={onSubmit}
              className='w-full flex flex-col justify-center gap-2 p-4'>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Nombre:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  type='text'
                  placeholder='Jhon'
                  name='name'
                  id='name'
                  {...register('name', { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='surname'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Apellido:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  type='text'
                  placeholder='Doe'
                  name='surname'
                  id='surname'
                  {...register('surname', { required: true })}
                />
                {errors.surname && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='mts2'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Email:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  type='email'
                  placeholder='jhonDoe@example.com'
                  name='mts2'
                  id='mts2'
                  {...register('email', { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='shortDescription'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Description:
                </label>
                <textarea
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  rows={5}
                  placeholder='Dejanos aqui tu mensaje...'
                  name='description'
                  id='description'
                  {...register('description', {
                    required: true,
                  })}></textarea>
                {errors.description && <span>This field is required</span>}
              </div>
              <button
                type='submit'
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
                Enviar
              </button>
            </form>

            <p className='text-md font-serif mt-2 text-gray-800'>
              Nuestra direccion postal es: ESTRELLA SERVICE COSTA BLANCA
              <br />
              Pda. Salamanca, 5-C <br />
              CP:03710 Calpe (Alicante) <br />
              España
            </p>
            <p className='text-md font-serif mt-2 text-gray-800'>
              Si tiene una urgencia no dude en contactar al (+34) 645 254 744
            </p>

            <p className='text-md font-serif mt-2 text-gray-800'>
              {' '}
              Nuestra empresa ESTRELLA SERVICE COSTA BLANCA está inscrita en el
              registro de la Comunidad Valenciana (EEAT-308-A). Gracias por
              visitarnos, que tengas unas buenas vacaciones.
            </p>

            <p className='text-md font-serif mt-6 text-gray-800'>
              Todos intentaremos que sus vacaciones sean lo más cómodas y
              agradables posible.
            </p>
          </article>
        </div>
        <div className='col-span-12 md:col-span-4  h-full'>
          <div className='mt-2 mb-2'>
            <ServiciosExtra />
          </div>
          <div className='flex items-center justify-start gap-2 mb-2 w-full '>
            <FaFacebookSquare
              className='text-blue-500'
              size={30}
            />
            <a href='https://www.facebook.com/Estrella-Service-Costa-Blanca-108404487437777'>
              {' '}
              Comparte en Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
