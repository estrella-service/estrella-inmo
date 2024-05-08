import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useHouses } from '../context/houses-context';

const CarouselItem = () => {
  const { currentHouse } = useHouses();

  return (
    <Carousel
      className='w-[70%] '
      infiniteLoop
      stopOnHover
      autoPlay
      showThumbs={false}
      showArrows
      useKeyboardArrows
      showStatus={currentHouse?.images?.length > 1 ? true : false}
      dynamicHeight>
      {currentHouse?.images.length === 1 ? (
        <div className='flex flex-col items-center justify-center '>
          <img
            className='w-full h-[400px] object-cover rounded-md'
            src={currentHouse.images[0]}
          />
        </div>
      ) : (
        currentHouse?.images.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center '>
            <img
              className='w-full h-[400px] object-cover rounded-md'
              src={item}
            />
          </div>
        ))
      )}
    </Carousel>
  );
};

export default CarouselItem;
