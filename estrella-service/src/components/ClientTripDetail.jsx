// FormularioViajeros.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from '../hooks/use-modal-store';
import { Modal } from '../components/Modal';
import { toast } from 'sonner';
import { useHouses } from '../context/houses-context';
import { useUser } from '../context/user-context';

const FormularioViajeros = () => {
  const { isOpen, onClose, type, onOpen, modalData } = useModal();
  const isModalOpen = isOpen && type === 'viajeros-form';
  const { createGuestData } = useHouses();
  const { getCurrentUser } = useUser();

  console.log(modalData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    data._id = modalData._id;

    console.log(data);
    try {
      const response = await createGuestData(data);
      if (response.status === 200) {
        toast.success('Datos enviados correctamente');
        await getCurrentUser();
        reset();
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al enviar los datos');
    }
  });

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <div className='max-w-2xl mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-4'>
          Hoja de Registro de Viajeros
        </h2>
        <form
          onSubmit={onSubmit}
          className='space-y-4'>
          <h3 className='text-xl font-semibold'>Datos del Viajero</h3>

          <div>
            <label className='block'>Nombre:</label>
            <input
              className='w-full p-2 border'
              {...register('nombre', { required: true })}
            />
            {errors.nombre && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </div>
          <div>
            <label className='block'>Apellido Completo:</label>
            <input
              className='w-full p-2 border'
              {...register('primerApellido', { required: true })}
            />
            {errors.primerApellido && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </div>
          <div>
            <label className='block'>País de nacionalidad:</label>
            <input
              className='w-full p-2 border'
              {...register('paisNacionalidad', { required: true })}
            />
            {errors.paisNacionalidad && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <label className='block'>Tipo de documento:</label>
              <select
                className='w-full p-2 border'
                {...register('tipoDocumento', { required: true })}>
                <option value='DNI'>DNI</option>
                <option value='Pasaporte'>Pasaporte</option>
                <option value='NIE'>NIE</option>
              </select>
              {errors.tipoDocumento && (
                <span className='text-red-500'>Este campo es obligatorio</span>
              )}
            </div>
            <div>
              <label className='block'>Núm. de documento de identidad:</label>
              <input
                className='w-full p-2 border'
                {...register('numeroDocumento', { required: true })}
              />
              {errors.numeroDocumento && (
                <span className='text-red-500'>Este campo es obligatorio</span>
              )}
            </div>
          </div>
          <div>
            <label className='block'>Fecha expedición del documento:</label>
            <input
              type='date'
              className='w-full p-2 border'
              {...register('fechaExpedicion', { required: true })}
            />
            {errors.fechaExpedicion && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </div>

          <div>
            <label className='block'>Sexo:</label>
            <select
              className='w-full p-2 border'
              {...register('sexo', { required: true })}>
              <option value='Femenino'>Femenino</option>
              <option value='Masculino'>Masculino</option>
            </select>
            {errors.sexo && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </div>
          <div>
            <label className='block'>Fecha de nacimiento:</label>
            <input
              type='date'
              className='w-full p-2 border'
              {...register('fechaNacimiento', { required: true })}
            />
            {errors.fechaNacimiento && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </div>

          <div>
            <label className='block'>Fecha de entrada:</label>
            <input
              type='date'
              className='w-full p-2 border'
              value={modalData?.checkIn}
              {...register('fechaEntrada', { required: true })}
            />
            {errors.fechaEntrada && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded'>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FormularioViajeros;
