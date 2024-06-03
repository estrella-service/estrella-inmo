import { Modal } from '../components/Modal';
import { useHouses } from '../context/houses-context';

import { useModal } from '../hooks/use-modal-store';

const FullImagesModal = () => {
  const { isOpen, onClose, type, modalData } = useModal();
  const isModalOpen = isOpen && type === 'images-modal';
  console.log(modalData);
  const { currentHouse } = useHouses();

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <>
        <h1 className='w-full text-center mt-4 mb-3 font-cinzel font-bold'>
          {currentHouse?.title}
        </h1>
        <div className='w-[300px] md:w-[900px] flex flex-wrap gap-1 items-center justify-center min-h-full'>
          {modalData &&
            Array.isArray(modalData) &&
            modalData.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`img-${index}`}
                className='w-[300px] aspect-video object-cover hover:scale-110 hover:aspect-auto transition-all duration-200 hover:z-30 '
              />
            ))}
        </div>
      </>
    </Modal>
  );
};

export default FullImagesModal;
