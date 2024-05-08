import { NavLink } from 'react-router-dom';
import { useHouses } from '../../context/houses-context';
import { MdFormatListNumbered } from 'react-icons/md';
const PropertyList = () => {
  const { houses, setCurrentHouse } = useHouses();

  return (
    <div className='flex flex-col w-full items-center '>
      <h1 className='font-cinzel text-4xl mb-3 mt-3'>
        Detalle de la Propiedad
      </h1>
      <div className=' w-full flex flex-col items-start justify-center gap-2 p-2'>
        {houses &&
          houses.map((house, index) => (
            <div
              key={house._id}
              className='w-full flex items-center border border-gray-700 gap-2 p-2 rounded-lg'>
              <div className='flex w-full items-center gap-2   text-xl font-cinzel font-bold'>
                <p>{index}-</p>
                <h1>{house.title}</h1>-
                <p className=''>
                  {house.owner === null ? 'Pedro Picapiedra' : house.owner.name}
                </p>
                <p className=''>
                  {house.owner === null
                    ? 'Pedro Picapiedra'
                    : house.owner.surname}
                </p>
                -{' '}
                <p className=''>
                  Cantidad de reservas: {house.reservasId.length}
                </p>
              </div>
              <NavLink
                to={`/admin-panel/houses/${house._id}`}
                className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-md'>
                Detalle
                <button
                  className='flex items-center justify-center '
                  onClick={() => setCurrentHouse()}>
                  <MdFormatListNumbered size={30} />
                </button>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PropertyList;
