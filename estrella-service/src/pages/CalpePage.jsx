import Article from '../components/Article';
import Cabecera from '../components/Cabecera';
import { calpeInfo } from '../data/calpe';
import { cabeceraCalpe } from '../data/calpe';
import bannerPenon from '../assets/bannerPeñon.jpg';
const CalpePage = () => {
  return (
    <section className=' w-full p-3 flex flex-col justify-center '>
      <header className='relative p-3'>
        {' '}
        <img
          className=' w-full h-auto rounded-md'
          src={bannerPenon}
          alt=''
        />{' '}
        <h1 className='absolute top-6 left-6 text-2xl font-bold drop-shadow-2xl shadow-gray-300 font-sans '>
          <em>Lugares Impresindibles que ver en Calpe</em>
        </h1>
      </header>
      <section className='md:grid md:grid-cols-12 rounded-md p-5 mb-2 gap-3 grid-flow-row flex flex-col '>
        <Cabecera
          description={cabeceraCalpe.description}
          image={cabeceraCalpe.image}
        />

        {calpeInfo.map((item, i) => (
          <Article
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            index={item.index}
          />
        ))}
      </section>
    </section>
  );
};

export default CalpePage;
