import { BiSearchAlt2 } from 'react-icons/bi';

import { useEffect, useRef, useState } from 'react';
import { useHouses } from '../context/houses-context';
import { useNavigate } from 'react-router-dom';

const PropertySearch = () => {
  const arrivalRef = useRef(null);
  const { houses, setCurrentHouse } = useHouses();
  const [filteredHouses, setFilteredHouses] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredHouses(houses);
  }, [houses]);

  return (
    <div className='w-full flex flex-col items-center justify-center p-2 mt-4 border border-gray-400 rounded-md '>
      <div className='w-full mt-2'>
        <h2 className='text-lg md:text-2xl font-serif text-gray-800 flex items-center justify-center gap-4'>
          <em>Busca tu casa perfecta para tus vacaciones...</em>
          <BiSearchAlt2 size={40} />
        </h2>
        <hr className='w-full border border-gray-700' />
        <div>
          <label
            htmlFor='location'
            className='block text-xs md:text-sm  font-medium leading-6 text-gray-900'>
            Location
          </label>
          <select
            onChange={(e) => navigate(`/property/${e.target.value}`)}
            id='location'
            name='location'
            className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset bg-gray-300
             ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6 text-xs md:text-sm '>
            <option
              value=''
              disabled
              selected>
              Select your option
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
        <div className='flex flex-col items-center justify-center gap-1 mt-4'>
          <label
            htmlFor='bedrooms'
            className='block text-xs md:text-sm  font-medium  text-gray-900 w-full text-start'>
            Bedrooms Nº
          </label>
          <div className='w-full flex items-center justify-center '>
            <input
              type='number'
              id='bedrooms'
              name='bedrooms'
              defaultValue='1'
              className='text-xs md:text-sm  
              mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset bg-gray-300
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
          <div className='w-full mt-2'>
            <label
              htmlFor='arrival'
              className='block text-xs md:text-sm font-medium  text-gray-900 w-full text-start'>
              Llegada
            </label>
            <input
              type='date'
              id='arrival'
              name='arrival'
              min={new Date().toISOString().split('T')[0]}
              className='mt-2 text-xs md:text-sm
               block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset bg-gray-300
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
    </div>
  );
};

export default PropertySearch;
