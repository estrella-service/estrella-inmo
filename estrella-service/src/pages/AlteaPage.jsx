import Article from '../components/Article';
import Cabecera from '../components/Cabecera';
import { cabeceraAltea, queVerAltea } from '../data/altea';

import altea from '../assets/altea.png';
import { useEffect } from 'react';
const AlteaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=' w-full p-3 flex flex-col justify-center '>
      <header className='relative p-3'>
        {' '}
        <img
          className=' w-full h-auto rounded-md'
          src={altea}
          alt=''
        />{' '}
        <h1 className='absolute top-6 left-6 text-2xl font-bold drop-shadow-2xl shadow-gray-300 font-sans '>
          <em>Lugares Impresindibles que ver en Altea</em>
        </h1>
      </header>
      <section className='md:grid md:grid-cols-12 rounded-md p-5 mb-2 gap-3 grid-flow-row flex flex-col '>
        <Cabecera
          description={cabeceraAltea.description}
          image={cabeceraAltea.image}
        />

        {queVerAltea.map((item, i) => (
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

export default AlteaPage;
