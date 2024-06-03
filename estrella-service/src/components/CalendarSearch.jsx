import Calendar from './Calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CalendarSearch = ({ villa }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full flex flex-col p-2'>
        <div className='flex flex-col w-full items-center justify-center mt-6 gap-2 mb-2 '>
          <Calendar busyDays={villa.busyDays} />
        </div>
        <div className='flex justify-start items-center gap-3 flex-wrap w-full'>
          <Link to={`/reservar/${villa._id}`}>
            <button
              className='w-full bg-[#0e2235] text-white px-2 rounded-md mt-1 py-2  hover:bg-gray-600 
          self-center border-1 border-gray-500 hover:border-gray-600 cursor-pointer disabled:cursor-none'>
              Solicitar Reserva
            </button>
          </Link>
        </div>{' '}
      </div>
    </>
  );
};

export default CalendarSearch;
