import { useEffect, useState } from 'react';
import comunidadValenciana from '../assets/ComunidadValencianaLogo.png';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    const isAdminRoute = location.pathname.includes('/admin-panel');
    setIsAdminPage(isAdminRoute);
  }, [location]);

  return (
    <>
      {!isAdminPage && (
        <>
          <div className='max-h-[60px] overflow-hidden flex justify-center items-center m-auto mt-2  gap-4 '>
            <a
              className='hidden md:block'
              href='https://www.comunitatvalenciana.com/es/publicaciones/plano-comunitat-valenciana'
              rel='noreferrer noopener'
              target='_blank'>
              <img
                className='h-[80%] w-[80%] rounded-md'
                src={comunidadValenciana}
                alt='mapa de la comunidad valenciana'
              />
            </a>
            <img
              className='bg-transparent w-[70%] h-[60%] '
              src='https://www.tiempo.com/wimages/foto408f22aa86be87a66ecff92d5def5d67.png'></img>
          </div>{' '}
          <div className='w-full border-b-2 border-gray-300 mt-2' />
        </>
      )}
    </>
  );
};

export default Details;
