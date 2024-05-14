import estrellaLogo from '../assets/estrellaLogo.png';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/user-context';
import { useState } from 'react';
import clsx from 'clsx';

import { useModal } from '../hooks/use-modal-store';
import UserButton from './UserButton';

const Navbar = () => {
  //TODO: Add the name and surname of user in the navbar
  const { isAuthenticated, logOut, user } = useUser();
  const { onOpen } = useModal();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú desplegable móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav
        className='w-full md:flex items-center justify-between p-3 gap-3 bg-[#0e2235] border-b-2 border-gray-300 hidden  
      sticky top-0 right-0 z-10 '>
        <div className='flex flex-col items-center justify-center z-20'>
          <Link to='/'>
            <div className='flex items-center justify-center gap-3'>
              <img
                className='w-[70px] h-auto ml-[20px]'
                src={estrellaLogo}
                alt='LOGO'
              />
              <div>
                <p className='text-gray-200 font-bold whitespace-nowrap font-cinzel'>
                  <em>Estrella Service</em>
                </p>
                <p className='text-gray-400 text-[12px]'>
                  Holiday Villas & Apartments in Costa Blanca
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 z-20'>
          <div className='flex items-center justify-end gap-3 w-full'>
            {!isAuthenticated ? (
              <button onClick={() => onOpen('login-form')}>
                <p
                  className='text-gray-200  text-sm py-1 px-2 rounded-md 
                 hover:bg-gray-300 hover:text-gray-800 shadow-sm shadow-slate-400'>
                  SignIn
                </p>
              </button>
            ) : (
              <>
                {' '}
                <p className='text-sm text-gray-200'>
                  Bienvenido: <em> {user.name}</em>
                </p>
                <UserButton />
              </>
            )}
          </div>

          <div className='flex flex-wrap items-center justify-center gap-3 text-center '>
            <div className='relative group'>
              <button
                className='py-1 px-2 hover:rounded-md text-sm w-full text-gray-200 rounded-md 
           hover:bg-gray-300 hover:text-gray-800 shadow-sm shadow-slate-400 whitespace-nowrap  '>
                Sitios de Interes
              </button>
              <ul
                className=' group absolute top-7 left-0 hidden group-hover:block w-full rounded-md bg-white text-sm
            hover:text-gray-800 z-10'>
                <li
                  className=' hover:bg-gray-300 p-1 '
                  onClick={() => navigate('/visit-moraira')}>
                  Moraria
                </li>
                <hr />
                <li
                  onClick={() => navigate('/visit-benissa')}
                  className=' hover:bg-gray-300 p-1'>
                  Benisa
                </li>
                <hr />
                <li
                  onClick={() => navigate('/visit-calpe')}
                  className=' hover:bg-gray-300 p-1'>
                  Calpe
                </li>
                <hr />
                <li
                  onClick={() => navigate('/visit-altea')}
                  className=' hover:bg-gray-300 p-1'>
                  Altea
                </li>
              </ul>
            </div>
            <Link to='/'>
              <button
                className=' py-1 px-2  rounded-md text-sm w-full text-gray-200
           hover:bg-gray-300 hover:text-gray-800 shadow-sm shadow-slate-400'>
                Home
              </button>
            </Link>{' '}
            <Link to='/about'>
              <button
                className='py-1 px-2 rounded-lg text-sm w-full text-gray-200
           hover:bg-gray-300 hover:text-gray-900 shadow-sm shadow-slate-400'>
                AboutUs
              </button>
            </Link>{' '}
            <Link to='/contact'>
              <button
                className=' py-1 px-2 text-sm w-full text-gray-200
           rounded-lg hover:bg-gray-300 hover:text-gray-800 shadow-sm shadow-slate-400'>
                Contacto
              </button>
            </Link>{' '}
          </div>
        </div>
      </nav>
      <nav className='w-full bg-[#0e2235] border-b-2 border-gray-300 md:hidden block sticky top-0 right-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <div className='flex-shrink-0 flex items-center'>
                <Link
                  to='/'
                  className='flex items-center gap-2'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src={estrellaLogo}
                    alt='LOGO'
                  />
                  <div className=''>
                    <p className=' font-bold text-gray-200 text-sm whitespace-nowrap font-cinzel'>
                      <em>Estrella Service</em>
                    </p>
                    <p className='text-gray-500 text-[10px]'>
                      {user?.name
                        ? `Bienvenido: ${user.name}`
                        : 'Holiday Villas & Apartments in Costa Blanca'}
                    </p>
                  </div>
                </Link>
              </div>
              <div className=' sm:block sm:ml-6'>
                <div className='hidden  md:flex space-x-4'>
                  {/* Espacios adicionales aquí para links visibles siempre excepto en móvil */}
                  <Link
                    to='/'
                    className='text-gray-800 px-3 py-2 rounded-md text-sm font-medium'>
                    Home
                  </Link>
                  <Link
                    to='/about'
                    className='text-gray-800 px-3 py-2 rounded-md text-sm font-medium'>
                    AboutUs
                  </Link>
                  <Link
                    to='/contact'
                    className='text-gray-800 px-3 py-2 rounded-md text-sm font-medium'>
                    Contacto
                  </Link>
                  <button
                    onClick={toggleDropdown}
                    className='text-gray-800 px-3 py-2 rounded-md text-sm font-medium'>
                    Sitios de Interes
                  </button>
                  {isDropdownOpen && (
                    <ul className='absolute bg-white shadow-md rounded-md mt-2 py-1 w-48'>
                      <li
                        className='px-4 py-2 hover:bg-gray-100'
                        onClick={() => navigate('/visit-moraira')}>
                        Moraira
                      </li>
                      <li
                        className='px-4 py-2 hover:bg-gray-100'
                        onClick={() => navigate('/visit-benissa')}>
                        Benissa
                      </li>
                      <li
                        className='px-4 py-2 hover:bg-gray-100'
                        onClick={() => navigate('/visit-calpe')}>
                        Calpe
                      </li>
                      <li
                        className='px-4 py-2 hover:bg-gray-100'
                        onClick={() => navigate('/visit-altea')}>
                        Altea
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <button
                  onClick={toggleMenu}
                  className='inline-flex items-center justify-center p-2 rounded-md
                   focus:outline-none 
                 focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden'>
                  <span className='sr-only'>Open main menu</span>
                  {/* Icono de menú hamburguesa */}
                  <svg
                    className='block h-6 w-6 text-gray-200'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        <div className={clsx(`md:hidden`, isOpen ? 'block' : 'hidden')}>
          <div className='px-2 pt-2 pb-3 space-y-1 z-20'>
            <Link
              to='/'
              className='text-gray-200 block px-3 py-2 rounded-md text-base font-medium'
              onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to='/about'
              className='text-gray-200 block px-3 py-2 rounded-md text-base font-medium'
              onClick={toggleMenu}>
              AboutUs
            </Link>
            <Link
              to='/contact'
              className='text-gray-200 block px-3 py-2 rounded-md text-base font-medium'
              onClick={toggleMenu}>
              Contacto
            </Link>
            <button
              onClick={toggleDropdown}
              className='text-gray-200 px-3 py-2 rounded-md text-base font-base font-medium'>
              Sitios de Interes
            </button>
            {isDropdownOpen && (
              <ul className='absolute bg-[#0e2235] shadow-md rounded-md mt-2 py-1 w-48'>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/visit-moraira');
                  }}>
                  Moraira
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/visit-benissa');
                  }}>
                  Benissa
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/visit-calpe');
                  }}>
                  Calpe
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/visit-altea');
                  }}>
                  Altea
                </li>
              </ul>
            )}

            {!isAuthenticated && (
              <>
                <button
                  onClick={() => {
                    toggleMenu();
                    onOpen('login-form');
                  }}
                  className='text-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium'>
                  SingIn
                </button>
              </>
            )}

            {isAuthenticated && (
              <>
                <Link
                  to='/profile-panel'
                  className='text-gray-200 block px-3 py-2 rounded-md text-base
                  font-medium'
                  onClick={() => setIsOpen(!isOpen)}>
                  {' '}
                  User Panel
                </Link>
                {user.isAdmin && (
                  <Link
                    to='/admin-panel'
                    onClick={toggleMenu}
                    className='text-gray-200 block px-3 py-2 rounded-md text-base font-medium'>
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    logOut();
                    toggleMenu();
                    navigate('/');
                  }}
                  className='text-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium'>
                  LogOut
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
