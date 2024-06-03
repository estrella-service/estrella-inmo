import { useNavigate } from 'react-router-dom';
import { useHouses } from '../context/houses-context';

const HouseCard = ({ house }) => {
  const navigate = useNavigate();
  const { setCurrentHouse } = useHouses();
  console.log(house);
  return (
    <div className='flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg m-4 '>
      <img
        className='w-full aspect-video object-cover'
        src={house.images[0]}
        alt={house.title}
      />
      <div className='px-6 py-4 flex-grow'>
        <div className='font-bold text-xl mb-2'>{house.title}</div>
        <p className='text-gray-700 text-base'>{house.shortDescription}</p>
      </div>
      <div className='px-2 pt-1 pb-2 flex justify-end'>
        <button
          onClick={() => {
            setCurrentHouse(house);
            navigate(`/property/${house._id}`);
          }}
          className='bg-[#0e2235]  hover:bg-neutral-100 hover:text-[#0e2235]  text-white font-bold py-2 px-4 rounded text-xs'>
          Ver Propiedad
        </button>
      </div>
    </div>
  );
};

export default HouseCard;
