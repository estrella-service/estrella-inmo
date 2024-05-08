import { useForm } from 'react-hook-form';
import { uploadImage } from '../../utils/uploadImages';
import { useState } from 'react';
import { useUser } from '../../context/user-context';
import { useHouses } from '../../context/houses-context';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

const DashBoradMain = () => {
  const [images, setImages] = useState([]);
  const [prevImage, setPrevImage] = useState([]);
  const [owner, setOwner] = useState('');
  const [loading, setLoading] = useState(false);
  const { allClients } = useUser();
  const { createNewPropertie } = useHouses();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const imagesURL = await uploadImage(images);

    data.images = imagesURL;
    data.owner = owner;

    try {
      const response = await createNewPropertie(data);
      if (response.status === 200) {
        setLoading(false);
        navigate('/admin-panel/houses');
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      {loading && <Loader />}
      <div className='w-full flex flex-col justify-center p-3'>
        <h1 className='font-cinzel text-xl w-full textcenter'>
          Crea una Nueva Propiedad para Alquilar
        </h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 '>
          <form onSubmit={onSubmit}>
            <div>
              <label
                htmlFor='location'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Owner
              </label>
              <select
                onChange={(e) => {
                  console.log(e.target.value);
                  setOwner(e.target.value);
                }}
                id='owner'
                name='owner'
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'>
                <option
                  value=''
                  defaultValue={'Select your option'}
                  disabled
                  selected>
                  Select your option
                </option>
                {allClients &&
                  allClients.map((client) => (
                    <option
                      key={client._id}
                      value={client._id}>
                      {client.name} {client.surname} {client._id}
                    </option>
                  ))}
              </select>
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='title'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Title:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                name='title'
                id='title'
                {...register('title', { required: true })}
              />
              {errors.title && <span>This field is required</span>}
            </div>
            <div className='flex items-center justify-between w-full gap-3'>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='habitaciones'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Rooms:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  name='habitaciones'
                  type='number'
                  id='habitaciones'
                  {...register('habitaciones', {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.habitaciones && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='huéspedes'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Guests:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  name='huespedes'
                  type='number'
                  id='huespedes'
                  {...register('huespedes', {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.huéspedes && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='toilet'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Bathrooms:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  name='toilet'
                  type='number'
                  id='toilet'
                  {...register('toilet', {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.baños && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='mts2'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Area (m²):
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  type='text'
                  placeholder='100'
                  name='mts2'
                  id='mts2'
                  {...register('mts2')}
                />
              </div>
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='shortDescription'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Short Description:
              </label>
              <textarea
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                rows={2}
                placeholder='No mas de 10 Palabras'
                name='shortDescription'
                id='shortDescription'
                {...register('shortDescription', {
                  required: true,
                })}></textarea>
              {errors.shortDescription && <span>This field is required</span>}
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Description:
              </label>
              <textarea
                className='block w-full rounded-md border-0 py-1.5
           text-gray-900 shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Explayate lo que quieras '
                rows={4}
                name='description'
                id='description'
                {...register('description', { required: true })}></textarea>
              {errors.descripción && <span>This field is required</span>}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 mb-2  '>
              <div className=' font-serif font-bold flex gap-1 items-center justify-between w-full'>
                <label htmlFor='picina'>Picina:</label>
                <input
                  name='picina'
                  type='checkbox'
                  id='picina'
                  {...register('picina')}
                />
              </div>
              <div className=' font-serif font-bold flex gap-1 items-center    justify-between w-full'>
                <label htmlFor='acc'>ACC :</label>
                <input
                  name='acc'
                  type='checkbox'
                  id='acc'
                  {...register('acc')}
                />
              </div>
              <div className=' font-serif font-bold flex gap-1 items-center justify-between w-full'>
                <label htmlFor='plancha'>Plancha:</label>
                <input
                  name='plancha'
                  type='checkbox'
                  id='plancha'
                  {...register('plancha')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='mascotas'>Mascotas:</label>
                <input
                  name='mascotas'
                  type='checkbox'
                  id='mascotas'
                  {...register('mascotas')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='lavadora'>Lavadora:</label>
                <input
                  name='lavadora'
                  type='checkbox'
                  id='lavadora'
                  {...register('lavadora')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='jardin'>Jardin:</label>
                <input
                  name='jardin'
                  type='checkbox'
                  id='jardin'
                  {...register('jardin')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='terraza'>Terraza:</label>
                <input
                  name='terraza'
                  type='checkbox'
                  id='terraza'
                  {...register('terraza')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='wifi'>WIFI:</label>
                <input
                  name='wifi'
                  type='checkbox'
                  id='wifi'
                  {...register('wifi')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='bbq'>BBQ:</label>
                <input
                  name='bbq'
                  type='checkbox'
                  id='bbq'
                  {...register('bbq')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='cocina'>Cocina:</label>
                <input
                  name='cocina'
                  type='checkbox'
                  id='cocina'
                  {...register('cocina')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='frigorifico'>Frigorifico:</label>
                <input
                  name='frigorifico'
                  type='checkbox'
                  id='frigorifico'
                  {...register('frigorifico')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='lavavajillas'>Lavavajillas:</label>
                <input
                  name='lavavajillas'
                  type='checkbox'
                  id='lavavajillas'
                  {...register('lavavajillas')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='microondas'>Microondas:</label>
                <input
                  name='microondas'
                  type='checkbox'
                  id='microondas'
                  {...register('microondas')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='horno'>Horno:</label>
                <input
                  name='horno'
                  type='checkbox'
                  id='horno'
                  {...register('horno')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='cafetera'>Cafetera:</label>
                <input
                  name='cafetera'
                  type='checkbox'
                  id='cafetera'
                  {...register('cafetera')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='tostadora'>Tostadora:</label>
                <input
                  name='tostadora'
                  type='checkbox'
                  id='tostadora'
                  {...register('tostadora')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='hervidor'>Hervidor:</label>
                <input
                  name='hervidor'
                  type='checkbox'
                  id='hervidor'
                  {...register('hervidor')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='tvSatelite'>TVSatelite:</label>
                <input
                  name='tvSatelite'
                  type='checkbox'
                  id='tvSatelite'
                  {...register('tvSatelite')}
                />
              </div>
              <div className='justify-between w-full font-serif font-bold flex gap-1 items-center'>
                <label htmlFor='parking'>Parking</label>
                <input
                  name='tvSateparkinglite'
                  type='checkbox'
                  id='parking'
                  {...register('parking')}
                />
              </div>
            </div>
            <div className='flex items-center justify-between w-full gap-3'>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='disPlaya'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Distancia a la playa:
                </label>
                <input
                  name='disPlaya'
                  type='text'
                  id='disPlaya'
                  placeholder='100 metros o 2 KM'
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  {...register('disPlaya', { required: true })}
                />
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='disCentro'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Distancia al centro:
                </label>
                <input
                  name='disCentro'
                  type='text'
                  id='disCentro'
                  placeholder='100 metros o 2 KM'
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  {...register('disCentro', { required: true })}
                />
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='disSuper'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Distancia al Super:
                </label>
                <input
                  name='disSuper'
                  type='text'
                  id='disSuper'
                  placeholder='100 metros o 2 KM'
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  {...register('disSuper', { required: true })}
                />
              </div>
            </div>
            <div className='flex items-center justify-between w-full gap-3'>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='priceLow'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Low Season Price:
                </label>
                <input
                  type='number'
                  id='priceLow'
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  {...register('priceLow', {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.priceLow && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='priceMedium'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Medium Season Price:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  type='number'
                  id='priceMedium'
                  {...register('priceMedium', {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.priceMedium && <span>This field is required</span>}
              </div>
              <div className='flex flex-col items-start justify-center mb-1'>
                <label
                  htmlFor='priceHigh'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  High Season Price:
                </label>
                <input
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  type='number'
                  id='priceHigh'
                  {...register('priceHigh', {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.priceHigh && <span>This field is required</span>}
              </div>
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='image'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Imagenes:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                type='file'
                name='image'
                accept='image/*'
                multiple={true}
                onChange={(e) => {
                  setImages(e.target.files);
                  for (let i = 0; i < e.target.files.length; i++) {
                    const url = URL.createObjectURL(e.target.files[i]);
                    setPrevImage((prev) => [...prev, url]);
                  }
                }}
              />
            </div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-gray-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 mt-4'>
              Crear casa
            </button>
          </form>
          {prevImage.length > 0 && (
            <div className='grid grid-cols-2 ml-8 mr-8 gap-2 mt-3'>
              {prevImage.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt='preview'
                  className='w-38  object-cover rounded-md'
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoradMain;
