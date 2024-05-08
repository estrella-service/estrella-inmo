import { NavLink } from 'react-router-dom';
import { useHouses } from '../../context/houses-context';
import { LiaEdit } from 'react-icons/lia';
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
import { LiaTrashAltSolid } from 'react-icons/lia';
import { GiToaster } from 'react-icons/gi';
import ToolTip from '../ToolTip';
import { GiBathtub } from 'react-icons/gi';
import { GiResize } from 'react-icons/gi';
import { FaWalking } from 'react-icons/fa';
import { RiParkingBoxLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeletePropertieModal from './DeletePropertieModal';
import Calendar from '../Calendar';

const HouseDetails = () => {
  const { currentHouse, getCurrentHouse } = useHouses();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getCurrentHouse(id);
  }, [id]);

  return (
    <div className='flex flex-col w-full items-center '>
      {isModalOpen && (
        <DeletePropertieModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        Lista de las Propiedades
      </h1>
      <div className=' w-full flex flex-col items-start justify-center gap-2 p-2'>
        {currentHouse && (
          <div
            key={currentHouse._id}
            className='w-full flex flex-col border border-gray-700 gap-2 p-2 rounded-lg'>
            <div className='flex md:flex-row flex-col w-full items-center justify-between gap-2  text-xl font-cinzel font-bold'>
              <div className='flex   flex-col items-center justify-center'>
                <h1 className='text-sm font-serif md:text-xl'>
                  {currentHouse.title}
                </h1>
                <div className='flex items-center'>
                  <p className='text-sm font-serif md:text-xl'>
                    {currentHouse.owner.name}
                  </p>
                  <p className='text-sm font-serif md:text-xl'>
                    {currentHouse.owner.surname}
                  </p>
                </div>

                <p className='text-sm font-serif md:text-xl'>
                  Cantidad de reservas: {currentHouse.reservasId.length}
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <NavLink to={`/admin-panel/property/${currentHouse._id}`}>
                  <button className='bg-[#0e2235] text-white font-serif py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-xs'>
                    Editar <LiaEdit size={20} />
                  </button>
                </NavLink>
                <button
                  className='bg-[#0e2235] text-white font-serif py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-xs'
                  onClick={() => setIsModalOpen(true)}>
                  Borrar <LiaTrashAltSolid size={20} />
                </button>
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-start gap-2'>
              {currentHouse.images.map((image, index) => (
                <img
                  className='w-28 h-28'
                  src={image}
                  alt={`image ${index}`}
                />
              ))}
            </div>

            <div className='flex flex-col w-[60%] items-center justify-center mt-6 gap-2 mb-8 self-center'>
              <Calendar busyDays={currentHouse.busyDays} />
            </div>

            <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />
            <p className='text-xl font-cinzel font-bold'>Descripcion corta:</p>
            <p className='flex items-center gap-2 md:text-xl text-md font-serif'>
              {currentHouse?.shortDescription}
            </p>
            <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />
            <p className='text-xl font-cinzel font-bold'>Descripcion:</p>
            <p className='flex items-center gap-2 md:text-xl text-md font-serif'>
              {currentHouse.description}
            </p>
            <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />
            <p className='text-xl font-cinzel font-bold'>Caracteristicas</p>
            <div className='w-full flex flex-wrap justify-start items-center '>
              <p className='flex items-center gap-2 text-xl p-8'>
                <GiResize size={30} />
                {currentHouse.mts2} mts2
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <GiBathtub size={30} /> {currentHouse.toilet} baños
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <LiaDoorOpenSolid size={30} /> {currentHouse.habitaciones}{' '}
                Habitaciones
              </p>
              {currentHouse.cocina && (
                <p className='flex items-center gap-2 text-xl p-8'>
                  <TbToolsKitchen2 size={30} /> Cocina
                </p>
              )}
              <p className='flex items-center gap-2 text-xl p-8'>
                <GoPeople size={30} />
                {currentHouse.huespedes} húespedes
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <FaWalking size={30} />
                {currentHouse.disPlaya} a la playa
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <FaWalking size={30} />
                {currentHouse.disCentro} al centro
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <FaWalking size={30} />
                al Supermercado mas cercano {currentHouse.disSuper}
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <LuTrees size={30} />

                {currentHouse.jardin
                  ? 'Disponde de Jardin '
                  : 'No dispone de Jardin '}
              </p>
              {currentHouse.terraza && (
                <p className='flex items-center gap-2 text-xl p-8'>
                  Disponde de Terraza
                </p>
              )}
              <p className='flex items-center gap-2 text-xl p-8'>
                <MdOutlinePool size={30} />
                {currentHouse.picina
                  ? 'Disponde de Picina '
                  : 'No dispone de Picina '}
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <GrSatellite size={30} />

                {currentHouse.tvSatelite
                  ? 'Disponde de TV Satelite '
                  : 'No dispone de TV Satelite '}
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                <RiParkingBoxLine size={30} />
                {currentHouse.parking
                  ? 'Dispone de Parking '
                  : 'No dispone de Parking '}
              </p>
              <p className='flex items-center gap-2 text-xl p-8'>
                {' '}
                <MdOutlinePets size={30} />
                {currentHouse.mascotas
                  ? 'Acepta mascotas'
                  : 'No acepta mascotas'}
              </p>
            </div>
            <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />

            <div className='flex flex-col flex-wrap items-start justify-center gap-2'>
              <p className='text-xl font-serif'>Equipamiento </p>
              <div className='flex flex-wrap items-center  justify-around w-full'>
                {currentHouse.plancha && (
                  <div className='px-8'>
                    <ToolTip
                      className='text-sm'
                      label='Plancha'>
                      <MdOutlineIron size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.lavadora && (
                  <div className='px-8'>
                    <ToolTip
                      className='text-sm'
                      label='Lavadora'>
                      <TbWashMachine size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.acc && (
                  <div className='px-8'>
                    <ToolTip label='Aire Acondicionado'>
                      <LuAirVent size={30} />
                    </ToolTip>
                  </div>
                )}

                {currentHouse.frigorifico && (
                  <div className='px-8'>
                    <ToolTip label='Frigorifico'>
                      <TbFridge size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.wifi && (
                  <div className='px-8'>
                    <ToolTip label='Wifi'>
                      {' '}
                      <FaWifi size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.bbq && (
                  <div className='px-8'>
                    <ToolTip label='Barbacoa'>
                      <MdOutlineOutdoorGrill size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.cafetera && (
                  <div className='px-8'>
                    <ToolTip label='Cafetera'>
                      <MdOutlineCoffeeMaker size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.horno && (
                  <div className='px-8'>
                    <ToolTip label='Horno'>
                      <PiOvenLight size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.microondas && (
                  <div className='px-8'>
                    <ToolTip label='Microondas'>
                      <MdOutlineMicrowave size={30} />
                    </ToolTip>
                  </div>
                )}
                {currentHouse.tostadora && (
                  <div className='px-8'>
                    <ToolTip label='Tostadora'>
                      <GiToaster size={30} />
                    </ToolTip>
                  </div>
                )}
              </div>
            </div>
            <hr className='w-full border-1 border-gray-600 mt-2 mb-2' />

            <div className='flex flex-col flex-wrap items-start justify-center'>
              <p className='font-serif text-xl'>Precio por temporada</p>
              <div className='flex items-center justify-between gap-4 text-xl w-full px-3'>
                <p>BAJA: {currentHouse?.priceLow}€</p>
                <p>MEDIA: {currentHouse?.priceMedium}€</p>
                <p>ALTA: {currentHouse?.priceHigh}€</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseDetails;
