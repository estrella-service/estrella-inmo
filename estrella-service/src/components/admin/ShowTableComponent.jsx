import React, { useState } from 'react';
import { useHouses } from '../../context/houses-context';
import OccupancyTable from './OcupanccyTable';

const ShowTableComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { houses } = useHouses();
  const handleMonth = (action) => {
    if (action === 'add') {
      if (month === 12) {
        setMonth(1);
      } else {
        setMonth(month + 1);
      }
    } else {
      if (month === 1) {
        setMonth(12);
      } else {
        setMonth(month - 1);
      }
    }
  };

  const getMonthName = (monthIndex) => {
    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return monthNames[monthIndex];
  };
  return (
    <>
      {houses && (
        <div className='flex flex-col items-center gap-4 mt-6'>
          <div className='w-full flex flex-col items-start gap2'>
            <div className='flex flex-col items-center justify-between gap-2 '>
              <div className='w-full'>
                <h1 className='text-2xl font-bold mb-4'>
                  Control de Horarios de Casas
                </h1>
                <p className='mb-4'>
                  Horarios de ocupación de las casas para el mes de{' '}
                  {getMonthName(month + 1)} del año {year}
                </p>
              </div>
              <div className='flex items-center gap-2 w-full'>
                <p className='text-lg font-bold'>Year:</p>
                <p className='text-lg font-bold'>{year}</p>
                <button
                  onClick={() => setYear(year - 1)}
                  className='w-6 h-6 rounded-md text-center font-bold bg-[#0e2235] text-white'>
                  -
                </button>
                <button
                  onClick={() => setYear(year + 1)}
                  className='w-6 h-6 rounded-md text-center font-bold bg-[#0e2235] text-white'>
                  +
                </button>
              </div>
              <div className='flex items-center gap-2 w-full'>
                <div className='flex items-center gap-2'>
                  <p className='text-lg font-bold'>Month:</p>
                  <p className='text-lg font-bold'>{month + 1}</p>
                  <button
                    onClick={() => handleMonth('substract')}
                    className='w-6 h-6 rounded-md text-center font-bold bg-[#0e2235] text-white'>
                    -
                  </button>
                  <button
                    onClick={() => handleMonth('add')}
                    className='w-6 h-6 rounded-md text-center font-bold bg-[#0e2235] text-white'>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-fit'>
            <OccupancyTable
              houses={houses}
              year={year}
              month={month}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShowTableComponent;
