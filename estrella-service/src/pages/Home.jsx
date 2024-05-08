import comunidadValenciana from '../assets/ComunidadValencianaLogo.png';
import Carousel from '../components/Carousel';
import PropertySearch from '../components/PropertySearch';
import { FaFacebookSquare } from 'react-icons/fa';

const Home = () => {
  return (
    <section className='  w-full p-3'>
      <div className='flex w-full items-center justify-center mt-2'>
        <Carousel />
      </div>
      <section className='grid grid-cols-12 items-center justify-center gap-4  w-full py-4 px-10 mt-2'>
        <div className='col-span-12 md:col-span-8 h-full w-full'>
          <article className='w-full flex flex-col items-start justify-center'>
            <h1 className=' font-cinzel text-gray-800 text-3xl'>
              Estrella Service - Holiday Villas & Apartments
            </h1>
            <hr className='w-full border border-gray-700' />
            <h2 className='w-full mt-6 text-2xl font text-gray-600'>
              <em>
                Si está buscando una villa o apartamento de vacaciones de
                calidad en Calpe, Moraira o Benissa en la Costa del Sol, ha
                venido al lugar correcto.
              </em>
            </h2>
            <p className='text-md font-serif mt-6 text-gray-800'>
              Somos una empresa familiar que ofrece una selección cuidadosamente
              seleccionada de villas y apartamentos vacacionales en y alrededor
              de la hermosa ciudad de Calpe en Alicante, España... Todos son
              exclusivos y la mayoría solo están disponibles en Estrella
              Service. También tendrá la seguridad de saber que tendrá su propio
              representante en su estancia vacacional.
            </p>
            <p className='text-md font-serif mt-6 text-gray-800'>
              {' '}
              Gracias por visitarnos, que tengas unas buenas vacaciones.
            </p>
          </article>
        </div>
        <div className='col-span-12 md:col-span-4 h-full w-full'>
          <PropertySearch />
          <div className='flex items-center justify-start gap-2 mt-2 w-full '>
            <FaFacebookSquare />
            <a href='https://www.facebook.com/Estrella-Service-Costa-Blanca-108404487437777'>
              {' '}
              Comparte en Facebook
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
