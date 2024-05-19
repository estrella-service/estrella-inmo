import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useHouses } from '../context/houses-context';
import CarouselItem from '../components/CarouselItem';
import CalendarSearch from '../components/CalendarSearch';

import { MdOutlineIron } from 'react-icons/md';
import { TbWashMachine } from 'react-icons/tb';
import { LuAirVent } from 'react-icons/lu';
import { MdOutlinePets } from 'react-icons/md';
import { TbFridge } from 'react-icons/tb';
import { FaWifi } from 'react-icons/fa';
import { MdOutlineOutdoorGrill } from 'react-icons/md';
import { LiaDoorOpenSolid } from 'react-icons/lia';
import { MdOutlinePool } from 'react-icons/md';
import { GrSatellite } from 'react-icons/gr';
import { LuTrees } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { MdOutlineCoffeeMaker } from 'react-icons/md';
import { PiOvenLight } from 'react-icons/pi';
import { MdOutlineMicrowave } from 'react-icons/md';
import { GiToaster } from 'react-icons/gi';
import ToolTip from '../components/ToolTip';
import { GiBathtub } from 'react-icons/gi';
import { GiResize } from 'react-icons/gi';
import { FaWalking } from 'react-icons/fa';
import { RiParkingBoxLine } from 'react-icons/ri';
import Seasson from '../components/Seasson';
import { PiPicnicTable } from 'react-icons/pi';

const PropertyPage = () => {
  const { currentHouse, getCurrentHouse } = useHouses();

  console.log(currentHouse);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getCurrentHouse(id);
  }, [id, currentHouse, getCurrentHouse]);

  return (
    <>
      {currentHouse && (
        <div className='w-full h-full flex flex-col  items-center justify-center p-8 flex-wrap'>
          <div
            key={currentHouse?.id}
            className='w-full flex flex-col  items-center justify-center'>
            <div className='w-full'>
              <h1 className=' font-cinzel text-xl md:text-2xl font-semibold text-center mb-2'>
                {currentHouse?.title}
              </h1>

              <div className='w-full flex justify-center items-center mb-6 md:mb-10'>
                <CarouselItem image={currentHouse?.image} />
              </div>
              <p className='text-lg font-cinzel w-full text-center'>
                {currentHouse?.shortDescription}
              </p>
            </div>
          </div>
          {/* This is the CalendarSearch component that was imported at the top of the file */}
          <div className='md:flex justify-between w-full md:flex-nowrap flex-wrap'>
            <div className='mr-1 md:w-[70%] w-full'>
              <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />
              <p className='text-lg md:text-xl font-cinzel font-bold '>
                Descripcion:
              </p>
              <p className='flex items-center gap-2 text-xl font-serif'>
                {currentHouse?.description}
              </p>
              <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />
              <p className='text-lg md:text-xl font-cinzel font-bold'>
                Caracteristicas
              </p>
              <div className='w-full flex flex-col items-start md:grid md:grid-cols-2 lg:grid-cols-3  md:items-center '>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <GiResize size={30} />
                  {currentHouse.mts2} mts2
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <GiBathtub size={30} /> {currentHouse.toilet} baños
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <LiaDoorOpenSolid size={30} /> {currentHouse.habitaciones}{' '}
                  Habitaciones
                </p>
                {currentHouse.cocina && (
                  <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                    <TbToolsKitchen2 size={30} /> Cocina
                  </p>
                )}
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <GoPeople size={30} />
                  {currentHouse.huespedes} húespedes
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <FaWalking size={30} />
                  {currentHouse.disPlaya} a la playa
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <FaWalking size={30} />
                  {currentHouse.disCentro} al centro
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <FaWalking size={30} />
                  al Supermercado mas cercano {currentHouse.disSuper}
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <LuTrees size={30} />

                  {currentHouse.jardin
                    ? 'Dispone de Jardin '
                    : 'No dispone de Jardin '}
                </p>
                {currentHouse.terraza && (
                  <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                    <PiPicnicTable size={30} />
                    Dispone de Terraza
                  </p>
                )}
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <MdOutlinePool size={30} />
                  {currentHouse.picina
                    ? 'Dispone de Picina '
                    : 'No dispone de Picina '}
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <GrSatellite size={30} />

                  {currentHouse.tvSatelite
                    ? 'Dispone de TV Satelite '
                    : 'No dispone de TV Satelite '}
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  <RiParkingBoxLine size={30} />
                  {currentHouse.parking
                    ? 'Dispone de Parking '
                    : 'No dispone de Parking '}
                </p>
                <p className='flex items-center gap-2 text-sm md:text-xl p-2 md:p-8'>
                  {' '}
                  <MdOutlinePets size={30} />
                  {currentHouse.mascotas
                    ? 'Acepta mascotas'
                    : 'No acepta mascotas'}
                </p>
              </div>
              <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />

              <div className='flex flex-col flex-wrap items-start justify-center gap-2'>
                <p className='text-lg md:text-xl font-serif'>Equipamiento </p>
                <div className='flex flex-wrap items-center gap-2 justify-around'>
                  {currentHouse.plancha && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Plancha'>
                        <MdOutlineIron size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.lavadora && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Lavadora'>
                        <TbWashMachine size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.acc && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Aire Acondicionado'>
                        <LuAirVent size={30} />
                      </ToolTip>
                    </div>
                  )}

                  {currentHouse.frigorifico && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Frigorifico'>
                        <TbFridge size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.wifi && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Wifi'>
                        {' '}
                        <FaWifi size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.bbq && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Barbacoa'>
                        <MdOutlineOutdoorGrill size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.cafetera && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Cafetera'>
                        <MdOutlineCoffeeMaker size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.horno && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Horno'>
                        <PiOvenLight size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.microondas && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Microondas'>
                        <MdOutlineMicrowave size={30} />
                      </ToolTip>
                    </div>
                  )}
                  {currentHouse.tostadora && (
                    <div className='md:p-8 p-1'>
                      <ToolTip label='Tostadora'>
                        <GiToaster size={30} />
                      </ToolTip>
                    </div>
                  )}
                </div>
              </div>
              <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />

              <div className='flex flex-col flex-wrap  justify-center w-full'>
                <p className='font-serif md:text-xl text-lg'>
                  Precio por temporada
                </p>
                <div className='flex items-center justify-center gap-4 text-xl w-full'>
                  <Seasson
                    priceLow={currentHouse?.priceLow}
                    priceMedium={currentHouse?.priceMedium}
                    priceHigh={currentHouse?.priceHigh}
                  />
                </div>
              </div>
            </div>{' '}
            <div className='md:w-[30%] w-full'>
              <CalendarSearch villa={currentHouse} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyPage;
