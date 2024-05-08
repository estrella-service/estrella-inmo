const Article = ({ className, description, image, title, link, index }) => {
  return (
    <article className=' col-span-6 border-2 border-gray-500 rounded-md p-2 '>
      <h2 className='text-2xl text-gray-500 font-bold'>
        <em>
          {index}. {title}
        </em>
      </h2>
      <img
        className={`w-[350px] h-[250px] rounded-md mr-1 float-left p-2 ${className}`}
        src={image}
        alt='Foto del Peñón de Ifach'
      />

      <p className=' text-xl  text-gray-500'>
        {description}
        <a
          className='text-sky-500 underline ml-1 block'
          href='https://www.civitatis.com/es/calpe/tour-nocturno-penon-ifach/?aid=1051'
          target='_blank'
          rel='nofollow noopener noreferrer'>
          {link}
        </a>{' '}
      </p>
    </article>
  );
};

export default Article;
