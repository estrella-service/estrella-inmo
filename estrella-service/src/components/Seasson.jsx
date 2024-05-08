import React from 'react';

const Seasson = ({ priceLow, priceMedium, priceHigh }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center p-2 mt-4 border border-gray-400 rounded-md '>
      <h2 className='text-start w-full text-2xl font-serif text-gray-800'>
        <em>Estancia y Precios:</em>
      </h2>
      <hr className='w-full border border-gray-700' />
      <p className='w-full text-start mt-4'>
        <em>Temporada:</em>
      </p>
      <ul className='w-full md:pl-6 md:pr-6 mt-2'>
        <li
          className='flex-col text-sm md:text-md font-serif  text-gray-800 w-full flex items-center
         justify-between md:flex-row mb-2 flex-wrap'>
          ALTA:-{priceHigh}/dia <em>29/Junio - 07/Septiembre</em>
        </li>
        <hr className='w-full border-1 border-gray-600' />
        <li
          className='flex-col text-sm md:text-md font-serif  text-gray-800 w-full flex items-center
         justify-between md:flex-row mb-2 flex-wrap'>
          MEDIA:-{priceMedium}/dia{' '}
          <em>Abril, Mayo, Junio, Septiembre, Octubre, Pascuas y Navidad</em>
        </li>
        <hr className='w-full border-1 border-gray-600' />
        <li
          className='flex-col text-sm md:text-md font-serif  text-gray-800 w-full flex items-center
         justify-between md:flex-row mb-2 flex-wrap gap-2'>
          BAJA:- {priceLow}/dia
          <em>Noviembre - Marzo</em>
        </li>
      </ul>
      <h2 className='text-center w-full text-2xl font-serif text-gray-800'>
        <em>La Estancia Minima es de una semana</em>
      </h2>
      <hr className='w-full border border-gray-700' />
      <p className='w-full text-center mt-4'>
        <em></em>
      </p>
    </div>
  );
};

export default Seasson;
