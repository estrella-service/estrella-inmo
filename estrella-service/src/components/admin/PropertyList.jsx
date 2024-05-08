import { NavLink } from 'react-router-dom';
import { useHouses } from '../../context/houses-context';
import { MdFormatListNumbered } from 'react-icons/md';
const PropertyList = () => {
  const { houses, setCurrentHouse } = useHouses();

  return (
    <div className='flex flex-col w-full items-center '>
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        Detalle de la Propiedad
      </h1>
      <div className=' w-full flex flex-col items-start justify-center gap-2 p-2'>
        {houses &&
          houses.map((house, index) => (
            <div
              key={house._id}
              className='w-full flex md:flex-row flex-col items-center border border-gray-700 gap-2 p-2 rounded-lg'>
              <div
                className='flex flex-col w-full md:justify-normal  gap-2 text-sm
               md:text-xl font-cinzel font-bold'>
                <h1>{house.title}</h1>
                <div className='flex items-center gap-1'>
                  <p className=''>{house.owner.name}</p>
                  <p className=''>{house.owner.surname}</p>
                </div>
                <p className='text-sm font-serif md:text-xl'>
                  Cantidad de reservas: {house.reservasId.length}
                </p>
              </div>
              <NavLink
                to={`/admin-panel/houses/${house._id}`}
                className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-sm md:text-md'>
                Detalle
                <button
                  className='flex items-center justify-center '
                  onClick={() => setCurrentHouse()}>
                  <div className=' hidden md:flex'>
                    <MdFormatListNumbered size={30} />
                  </div>
                  <div className=' flex md:hidden'>
                    <MdFormatListNumbered size={20} />
                  </div>
                </button>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PropertyList;
