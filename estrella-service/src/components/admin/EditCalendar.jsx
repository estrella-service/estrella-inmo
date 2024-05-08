import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
export default function EditCalendar({ busyDays = [] }) {
  let today = startOfToday();

  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM yyyy'));
  let firstDayOfCurrentMonth = parse(currentMonth, 'MMMM yyyy', new Date());

  let newDays = eachDayOfInterval({
    start: startOfWeek(firstDayOfCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  });

  const nextMonth = () => {
    let firstDayOfNextMoth = add(firstDayOfCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMoth, 'MMMM yyyy'));
  };

  const prevMonth = () => {
    let firstDayOfPrevMoth = add(firstDayOfCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayOfPrevMoth, 'MMMM yyyy'));
  };

  const isBeaforeToday = (day) => {
    return day < today;
  };

  return (
    <div className='w-full flex flex-col items-center border rounded-lg p-3 '>
      <div className='flex items-center  w-[100%]   '>
        <h2 className='flex-auto text-sm font-semibold text-gray-900'>
          {format(firstDayOfCurrentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={prevMonth}
          type='button'
          className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
          <span className='sr-only'>Previous month</span>
          <ChevronLeftIcon
            className='h-5 w-5'
            aria-hidden='true'
          />
        </button>
        <button
          onClick={nextMonth}
          type='button'
          className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
          <span className='sr-only'>Next month</span>
          <ChevronRightIcon
            className='h-5 w-5'
            aria-hidden='true'
          />
        </button>
      </div>
      <div className='mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-900 w-[100%]'>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className='mt-2 grid grid-cols-7 text-sm w-[100%]'>
        {newDays.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              'py-2'
            )}>
            <button
              onClick={() => setSelectedDay(day)}
              type='button'
              disabled={
                isBeaforeToday(day) ||
                busyDays.includes(format(day, 'yyyy-MM-dd'))
              }
              className={classNames(
                busyDays.includes(format(day, 'yyyy-MM-dd')) &&
                  'bg-red-300 text-black',
                isBefore(day, today) && 'text-gray-200',

                isEqual(day, selectedDay) && 'text-white',
                !isEqual(day, selectedDay) && isToday(day) && 'text-indigo-600',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayOfCurrentMonth) &&
                  'text-gray-900',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayOfCurrentMonth) &&
                  'text-gray-400',

                isEqual(day, selectedDay) && isToday(day) && 'bg-indigo-600',
                isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',

                'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
              )}>
              <time dateTime={format(day, 'yyyy-MM-dd')}>
                {format(day, 'd')}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
