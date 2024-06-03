import { Link } from 'react-router-dom';
import { cabeceraAltea } from '../data/altea';
import { cabeceraBenissa } from '../data/benissa';
import { cabeceraCalpe } from '../data/calpe';
import { FaArrowAltCircleRight } from 'react-icons/fa';

import { cabeceraMoraira } from '../data/moraira';

const VisitPlaces = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
      <div className='relative col-span-1 md:col-span-8 rounded-lg overflow-hidden bg-black bg-opacity-65'>
        <img
          src={cabeceraCalpe.image}
          alt='Imagen 1'
          className=' w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-45  p-4'>
          <h2 className='text-white text-lg md:text-4xl font-serif mb-1'>
            {cabeceraCalpe.title}
          </h2>
          <p className='text-white text-xs md:text-[16px]  line-clamp-4 md:line-clamp-none w-[80%] leading-5 ml-4'>
            {cabeceraCalpe.description}
          </p>
          <Link
            to='/visit-calpe'
            className=' text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 border border-1 border-white 
            w-fit mt-2 ml-4 text-xs'>
            Descubrir Zona <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
      <div className='relative md:col-span-4 rounded-lg overflow-hidden'>
        <img
          src={cabeceraAltea.image}
          alt='Imagen 1'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-45  p-4'>
          <h2 className='text-white text-lg md:text-4xl font-serif mb-1'>
            {cabeceraAltea.title}
          </h2>
          <p className='text-white text-xs md:text-[16px]  line-clamp-4 md:line-clamp-6 w-[80%] leading-5 ml-4'>
            {cabeceraAltea.description}
          </p>
          <Link
            to='/visit-altea'
            className=' text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 border border-1 border-white 
            w-fit mt-2 ml-4 text-xs'>
            Descubrir Zona <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
      <div className='relative md:col-span-4 rounded-lg overflow-hidden'>
        <img
          src={cabeceraBenissa.image}
          alt='Imagen 1'
          className=' w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-45  p-4'>
          <h2 className='text-white text-lg md:text-4xl font-serif mb-1'>
            {cabeceraBenissa.title}
          </h2>
          <p className='text-white text-xs md:text-[16px]  line-clamp-4 md:line-clamp-6 w-[80%] leading-5 ml-4'>
            {cabeceraBenissa.description}
          </p>
          <Link
            to='/visit-benissa'
            className=' text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 border border-1 border-white 
            w-fit mt-2 ml-4 text-xs'>
            Descubrir Zona <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
      <div className='relative md:col-span-8 rounded-lg overflow-hidden'>
        <img
          src={cabeceraMoraira.image}
          alt='Imagen 1'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-45  p-4'>
          <h2 className='text-white text-lg md:text-4xl font-serif mb-1'>
            {cabeceraMoraira.title}
          </h2>
          <p className='text-white text-xs md:text-[16px]  line-clamp-4 md:line-clamp-none w-[80%] leading-5 ml-4'>
            {cabeceraMoraira.description}
          </p>
          <Link
            to='/visit-moraira'
            className=' text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 border border-1 border-white 
            w-fit mt-2 ml-4 text-xs'>
            Descubrir Zona <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VisitPlaces;
