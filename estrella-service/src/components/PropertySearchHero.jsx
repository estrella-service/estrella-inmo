import { useNavigate } from 'react-router-dom';
import { useHouses } from '../context/houses-context';

const PropertySearchHero = ({ filteredHouses, setFilteredHouses }) => {
  const { houses } = useHouses();
  const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col items-center justify-center p-2 mt-4 border border-gray-400 rounded-md bg-white '>
      <div className='w-full p-2 flex flex-col md:flex-row items-center gap-2 justify-center '>
        <div className='w-full  '>
          <select
            onChange={(e) => {
              console.log(e.target.value);
              navigate(`/property/${e.target.value}`);
            }}
            id='location'
            name='location'
            className='mt-2 block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset 
             ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6 text-xs md:text-sm '>
            <option
              value=''
              disabled
              selected>
              ◉ Selecciona tu Villa
            </option>
            {filteredHouses &&
              filteredHouses.map((villa) => (
                <option
                  ref={villa}
                  key={villa._id}
                  value={villa._id}>
                  {villa.title}
                </option>
              ))}
          </select>
        </div>

        <div className='w-full  '>
          <input
            type='number'
            id='bedrooms'
            name='bedrooms'
            defaultValue='1'
            placeholder='Habitaciones'
            className='text-xs md:text-sm  
              mt-2 block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset 
             ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6'
            onChange={(e) =>
              setFilteredHouses(
                houses.filter(
                  (villa) => villa.habitaciones.toString() >= e.target.value
                )
              )
            }
          />
        </div>
        <div className='w-full '>
          <input
            type='date'
            id='arrival'
            name='arrival'
            min={new Date().toISOString().split('T')[0]}
            className='mt-2 text-xs md:text-sm
               block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset 
             ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6'
            onChange={(e) => {
              console.log(e.target.value);
              setFilteredHouses(
                houses.filter(
                  (house) => !house.busyDays.includes(e.target.value)
                )
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertySearchHero;
