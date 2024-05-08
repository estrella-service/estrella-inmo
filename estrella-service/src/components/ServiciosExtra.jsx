const ServiciosExtra = () => {
  return (
    <>
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
            ALTA: <em>29/Junio - 07/Septiembre</em>
          </li>
          <hr className='w-full border-1 border-gray-600' />
          <li
            className='flex-col text-sm md:text-md font-serif  text-gray-800 w-full flex items-center
         justify-between md:flex-row mb-2 flex-wrap'>
            MEDIA:{' '}
            <em>Abril, Mayo, Junio, Septiembre, Octubre, Pascuas y Navidad</em>
          </li>
          <hr className='w-full border-1 border-gray-600' />
          <li
            className='flex-col text-sm md:text-md font-serif  text-gray-800 w-full flex items-center
         justify-between md:flex-row mb-2 flex-wrap'>
            BAJA: <em>Noviembre - Marzo</em>
          </li>
        </ul>
        <h2 className='text-center w-full text-2xl font-serif text-gray-800'>
          <em>La Estancia Minima es de una semana</em>
        </h2>
        <hr className='w-full border border-gray-700' />
        <p className='w-full text-center mt-4'>
          <em>
            Posibilidad de estancias inferiores a una semana en algunos casos
            con suplemento entre 40€ y 100€.
          </em>
        </p>
      </div>

      <div className='w-full flex flex-col items-center justify-center p-2 mt-4 border border-gray-400 rounded-md '>
        <h2 className='text-start w-full text-2xl font-serif text-gray-800'>
          <em>Servicios Extra</em>
        </h2>
        <hr className='w-full border border-gray-700' />
        <p className='w-full text-start mt-4'>
          <em>Suplementos:</em>
        </p>

        <ul className='w-full md:pl-6 md:pr-6 mt-2'>
          <li
            className='flex-col text-sm md:text-md font-serif  text-gray-800 w-full flex items-center
         justify-between md:flex-row mb-2 flex-wrap'>
            Cama Plegable: <em>30€ / semana(si hay disponibilidad)</em>
          </li>

          <hr className='w-full border-1 border-gray-600' />

          <li className='text-sm md:text-md font-serif  text-gray-800 w-full flex items-center justify-between mb-2 mt-2 flex-wrap'>
            Cuna: <em>30€ / semana(si hay disponibilidad)</em>
          </li>
          <hr className='w-full border-1 border-gray-600' />
          <li className='text-sm md:text-md font-serif  text-gray-800 w-full flex items-center justify-between mb-2 mt-2 flex-wrap'>
            Sábanas: <em>10€ / persona </em>
          </li>
          <hr className='w-full border-1 border-gray-600' />
          <li className='text-sm md:text-md font-serif  text-gray-800 w-full flex items-center justify-between mb-2 mt-2 flex-wrap'>
            Toallas: <em>5€ / persona</em>
          </li>
          <hr className='w-full border-1 border-gray-600' />
          <li className='text-sm md:text-md font-serif  text-gray-800 w-full flex items-center justify-between mb-2 mt-2 flex-wrap'>
            Mascota: <em>5€ / semana (si esta permitido)</em>
          </li>
          <hr className='w-full border-1 border-gray-600' />
          <li className='text-sm md:text-md font-serif  text-gray-800 w-full flex items-center justify-between mb-2 mt-2 flex-wrap'>
            Electricidad: <em>0.40€ / kWh </em>
          </li>
        </ul>
        <p className='w-full text-start mt-4'>
          <em>Gastos Reposicion:</em>
        </p>

        <ul className='w-full md:pl-6 md:pr-6 mt-2'>
          <li
            className='flex-col text-sm md:text-md font-serif  text-gray-800 w-full flex items-center
         justify-between md:flex-row mb-2 flex-wrap'>
            Butano Cocina: <em>aprx. 25€ / botella</em>
          </li>
          <hr className='w-full border-1 border-gray-600' />
          <li className='text-sm md:text-md font-serif  text-gray-800 w-full flex items-center justify-between mb-2 mt-2 flex-wrap'>
            Butano Calefaccion: <em>79€ / botella</em>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ServiciosExtra;
