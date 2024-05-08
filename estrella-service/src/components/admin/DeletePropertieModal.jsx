import { Modal } from '../Modal';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHouses } from '../../context/houses-context';

const DeletePropertieModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentHouse, deletePropertie } = useHouses();
  const navigate = useNavigate();

  const handleDeletePropertie = async () => {
    console.log(currentHouse, 'currentHouse');
    setIsLoading(true);
    try {
      const response = await deletePropertie(currentHouse._id);
      if (response.status === 200) {
        navigate('/admin-panel/houses');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='p-3'>
        <h1 className='mb-3 font-serif text-md'>
          Estas Seguro de querer eliminar esta Propiedad ?
        </h1>
        <div className='w-[80%] flex items-center justify-end gap-2'>
          <button
            disabled={isLoading}
            className='bg-red-600 text-white font-serif py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-xs'
            onClick={handleDeletePropertie}>
            Confirmar
          </button>
          <button
            disabled={isLoading}
            className='bg-[#0e2235] text-white font-serif py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-xs'
            onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeletePropertieModal;
