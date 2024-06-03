import React, { useEffect, useState } from 'react';
import hero from '../assets/hero.webp';
import PropertySearchHero from '../components/PropertySearchHero';
import { useHouses } from '../context/houses-context';
import { useNavigate } from 'react-router-dom';
import HouseCard from '../components/HouseCard';
import HouseList from '../components/HouseList';
import VisitPlaces from '../components/VistitPlaces';

const Home2 = () => {
  const [filteredHouses, setFilteredHouses] = useState(null);
  const { houses, setCurrentHouse } = useHouses();

  const navigate = useNavigate();

  useEffect(() => {
    setFilteredHouses(houses);
  }, [houses]);
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full relative'>
        <img
          className='w-full h-[500px] object-cover opacity-130'
          src={hero}
          alt='Hero image of a villa in Calpe, Spain'
        />
        <div
          className='absolute top-2/4 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
        flex flex-col items-center w-[80%]'>
          <h1 className='text-white text-xl md:text-4xl font-serif font-bold z-10 text-shadow text-center'>
            Estrella Service - Holiday Villas & Apartments
          </h1>

          <PropertySearchHero
            filteredHouses={filteredHouses}
            setFilteredHouses={setFilteredHouses}
          />
        </div>
      </div>
      <div className='mb-6'>
        {filteredHouses && <HouseList houses={filteredHouses} />}
      </div>
      <div className='container mx-auto px-4 mb-4'>
        <h1 className='text-4xl font-serif'>
          ¿ Qué puedo hacer durante la estancia ?
        </h1>
        <p className='text-lg font-serif mb-2'>
          Descubre lugares inolvidables, que haran tu estancia aun mas mitica.
        </p>
        <VisitPlaces />
      </div>
    </div>
  );
};

export default Home2;
