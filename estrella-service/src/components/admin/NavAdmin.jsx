import Logo from '../../assets/estrellaLogo.png';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/user-context';

const NavAdmin = () => {
  const { user } = useUser();
  return (
    <div className='md:block hidden w-full h-fit bg-[#0e2235] text-white'>
      <div className='flex justify-between items-center py-2 px-8'>
        <div className='flex items-center justify-center h-full'>
          <img
            src={Logo}
            alt='Logo'
            className='mr-5 w-8 h-8'
          />
          <span className='ml-2 font-cinzel'>Estrella Service</span>
        </div>
        <div className='flex items-center'>
          {user && <p className='pr-12 font-serif'>Bienvenido: {user.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
