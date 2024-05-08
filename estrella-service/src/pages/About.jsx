import PropertySearch from '../components/PropertySearch';
import { FaFacebookSquare } from 'react-icons/fa';
import ServiciosExtra from '../components/ServiciosExtra';

const About = () => {
  return (
    <div className=' h-screen grid grid-cols-12 items-center justify-center gap-4  w-full py-4 px-10 mt-2'>
      <div className='md:col-span-8 h-full col-span-12'>
        <article className='w-full flex flex-col items-start justify-center'>
          <h1 className=' font-cinzel text-gray-800 text-3xl'>
            Acerca de Estrella Service - Holiday Villas & Apartments
          </h1>
          <hr className='w-full border border-gray-700' />
          <h2 className='w-full mt-6 text-2xl font text-gray-600'>
            <em>
              Somos una empresa familiar que se dedica a los alquileres
              turisticos y todos los servicios de mantenimiento que su propiedad
              pueda necesitar.
            </em>
          </h2>
          <h2 className=' font-cinzel text-gray-800 text-2xl mt-6'>
            Las personas detrás de Estrella Service
          </h2>
          <hr className='w-full border border-gray-700' />
          <p className='text-md font-serif mt-6 text-gray-800'>
            TODO: descripcion de los trabajadores de la empresa
          </p>
          <p className='text-md font-serif mt-6 text-gray-800'>
            Nos dedicamos plenamente a ello desde 1986, contamos con casi 40
            años de experiencia en el sector.
            <br />
            <br />
            Hemos ido creciendo y adaptándonos a las necesidades de nuestros
            clientes, ofreciendo un servicio personalizado y de calidad. Sin
            embargo no hemos perdido nuestra esencia, seguimos siendo una
            empresa familiar que se preocupa por el bienestar de sus clientes.
            <br />
            <br />
            Todas nuestras villas son propiedad privada de personas exigentes
            (amigos y familiares) y están equipadas y mantenidas con un alto
            nivel de exigencia. Son en gran medida "hogares" y no sólo
            "alquileres de vacaciones". Nuestro objetivo es ofrecer propiedades
            de calidad a un precio justo con un servicio amable, servicial y
            personalizado. Solo ofrecemos villas en las que nos encantaría
            alojarnos nosotros mismos.
            <br />
            <br />
            En los últimos años hemos hablado y conocido a muchas personas
            encantadoras de todo el mundo... y esperamos conocer a muchas más en
            el futuro.
          </p>
          <p className='text-md font-serif mt-6 text-gray-800'>
            {' '}
            Nuestra empresa ESTRELLA SERVICE COSTA BLANCA S.L. está inscrita en
            el registro de la Comunidad Valenciana (EEAT-308-A). Gracias por
            visitarnos, que tengas unas buenas vacaciones.
          </p>
          <h2 className=' font-cinzel text-gray-800 text-2xl mt-6'>
            Lo que tenemos para ofrecer
          </h2>
          <hr className='w-full border border-gray-700' />
          <p className='text-md font-serif mt-6 text-gray-800'>
            Disponemos de una amplia gama de villas, casas adosadas y
            apartamentos españoles bellamente amueblados y bien equipados en
            Calpe y sus alrededores. Nos tomamos el tiempo para preparar cada
            propiedad para su visita y ayudarlo en lo que podamos para que sus
            vacaciones sean inolvidables.
          </p>

          <p className='text-md font-serif mt-6 text-gray-800'>
            Contamos con nuestro propio equipo amigable de servicios y personal
            de mantenimiento si necesita ayuda o asesoramiento durante sus
            vacaciones, nuestro representante siempre estará a solo una llamada
            de distancia.
          </p>
          <p className='text-md font-serif mt-6 text-gray-800'>
            Todos intentaremos que sus vacaciones sean lo más cómodas y
            agradables posible.
          </p>
        </article>
      </div>
      <div className='col-span-12 md:col-span-4  h-full'>
        <PropertySearch />

        <div className='mt-2 mb-2'>
          <ServiciosExtra />
        </div>
        <div className='flex items-center justify-start gap-2 mb-2 w-full '>
          <FaFacebookSquare
            className='text-blue-500'
            size={30}
          />
          <a href='https://www.facebook.com/Estrella-Service-Costa-Blanca-108404487437777'>
            {' '}
            Comparte en Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
