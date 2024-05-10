import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import CarouselCard from './CarouselCard';

import { useNavigate } from 'react-router-dom';
import { useHouses } from '../context/houses-context';

const CarouselComponent = () => {
  const { houses, getCurrentHouse } = useHouses();
  console.log(houses, 'houses');
  const navigate = useNavigate();
  return (
    <Carousel
      className='md:w-[70%] w-full'
      infiniteLoop
      stopOnHover
      autoPlay
      showThumbs={false}
      showArrows
      useKeyboardArrows
      showStatus={false}
      dynamicHeight>
      {houses.map((item) => (
        <div
          key={item._id}
          className='flex flex-col items-center justify-center '>
          <img
            className='w-full h-[400px] object-cover rounded-md'
            src={item.images[0]}
            id={item._id}
          />
          <div
            className='flex flex-col 
          justify-center items-start absolute top-2 left-10 gap-2  p-2 bg-black/45 rounded-md  md:max-w-[30%] w-[70%]'>
            <CarouselCard
              {...item}
              onClick={() => {
                console.log(item);
                getCurrentHouse(item);
                navigate(`/property/${item._id}`);
              }}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
