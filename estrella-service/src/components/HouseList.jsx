import { useState, usePathname } from 'react';
import HouseCard from './HouseCard';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const HouseList = ({ houses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 8;
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(houses.length / housesPerPage);

  // Calcular las casas a mostrar en la página actual
  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);

  // Manejar la navegación de página
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className='container mx-auto px-4 '>
      <div className='m-4'>
        <h1 className='text-4xl font-serif'>Nuestras Estancias</h1>
        <p className='text-lg font-serif mb-2'>
          Estancias que te dejaran sin aliento.
        </p>
        {location.pathname !== '/all-properties' && (
          <button
            onClick={() => navigate('/all-properties')}
            className='bg-[#0e2235]  hover:bg-neutral-100 hover:text-[#0e2235]  text-white font-bold py-2 px-4 rounded text-xs'>
            Ver todas las Propiedades
          </button>
        )}
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 gap-2'>
        {currentHouses.map((house) => (
          <HouseCard
            key={house.id}
            house={house}
          />
        ))}
      </div>
      {totalPages !== 1 && (
        <div className='flex justify-end items-center mt-4'>
          <button
            className=' hover:cursor-pointer text-black font-bold py-2 px-4 rounded-full'
            onClick={handlePrevPage}
            disabled={currentPage === 1}>
            <FaArrowAltCircleLeft />
          </button>
          <span>
            {currentPage} de {totalPages}
          </span>
          <button
            className=' hover:cursor-pointer text-black font-bold py-2 px-4 rounded-full'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}>
            <FaArrowAltCircleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default HouseList;
