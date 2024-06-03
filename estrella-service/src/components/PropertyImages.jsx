import { useHouses } from '../context/houses-context';
import { useModal } from '../hooks/use-modal-store';

const PropertyImages = () => {
  const { currentHouse } = useHouses();
  const { isOpen, onClose, type, onOpen } = useModal();

  const openModal = () => {
    onOpen('images-modal', currentHouse?.images);
  };

  const remainingImagesCount = currentHouse?.images.length - 4;

  return (
    <div className='w-full flex flex-col m-2 p-2 '>
      {currentHouse && (
        <div className='grid grid-cols-12 gap-2 w-full grid-rows-8 max-h-[600px]'>
          {currentHouse?.images.slice(0, 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`img-${index}`}
              className={`
        w-full h-full aspect-video
        object-cover 
        ${index === 0 && 'col-start-7 col-span-8 row-span-8 row-start-1 '} 
        ${index === 1 && 'col-start-1 col-span-6 row-span-4 row-start-1'} 
        ${index === 2 && 'col-start-1 col-span-3 row-span-4 row-start-5'} 
        ${index === 3 && 'col-start-4 col-span-3 row-span-4 row-start-5'}
      `}
            />
          ))}
        </div>
      )}
      {remainingImagesCount > 0 && (
        <button
          onClick={openModal}
          className='self-end mt-2 cursor-pointer border border-1 border-gray-700 px-2 rounded-sm text-xs md:text-sm'>
          {`Ver ${remainingImagesCount} fotos +`}
        </button>
      )}
    </div>
  );
};

export default PropertyImages;
