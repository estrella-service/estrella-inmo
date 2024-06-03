import React from 'react';
import clsx from 'clsx';
const OccupancyTable = ({ houses, year, month }) => {
  const generateMonthlyOccupancyTable = (houses, year, month) => {
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

    const numDays = daysInMonth(year, month);
    const header = ['CASA/DIA'];

    for (let day = 1; day <= numDays; day++) {
      header.push(day.toString());
    }

    const table = [header];

    houses.forEach((house) => {
      const row = new Array(numDays + 1).fill('-');
      row[0] = house.title;

      house.busyDays.forEach((dateStr) => {
        const date = new Date(dateStr);
        if (date.getFullYear() === year && date.getMonth() + 1 === month) {
          row[date.getDate()] = 'x';
        }
      });
      house.reservasId.forEach((reserva) => {
        if (!reserva.canceled) {
          const date = new Date(reserva.checkIn);

          if (date.getFullYear() === year && date.getMonth() + 1 === month) {
            row[date.getDate()] = 'E';
          }
          const checkOut = new Date(reserva.checkOut);
          if (
            checkOut.getFullYear() === year &&
            checkOut.getMonth() + 1 === month
          ) {
            row[checkOut.getDate()] = 'S';
          }
        }
      });

      table.push(row);
    });

    return table;
  };

  const renderTable = (table) => {
    return (
      <table className='table-auto border-collapse border border-gray-200 w-full'>
        <thead>
          <tr className='bg-gray-100 whitespace-nowrap'>
            {table[0].map((cell, index) => (
              <th
                key={index}
                className='border border-gray-200 px-2 py-1'>
                {cell.length === 1 ? `0${cell}` : cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.slice(1).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className='hover:bg-gray-50 whitespace-nowrap '>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={clsx(
                    'border border-gray-200 px-2 py-1 text-center',
                    cell === '-' && 'bg-green-500',
                    cell === 'x' && ' bg-red-600',
                    cell === 'E' && 'bg-yellow-500',
                    cell === 'S' && 'bg-yellow-500',
                    cell.length === 1
                      ? 'text-transparent'
                      : 'text-black font-bold'
                  )}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
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
  const downloadCSV = (table) => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    table.forEach((row) => {
      csvContent += row.join(';') + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `ocupacion${getMonthName(month - 1)}${year}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const table = generateMonthlyOccupancyTable(houses, year, month);

  return (
    <div>
      <div className='overflow-x-auto mb-4'>{renderTable(table)}</div>
      <button
        onClick={() => downloadCSV(table)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Descargar CSV
      </button>
    </div>
  );
};

export default OccupancyTable;
