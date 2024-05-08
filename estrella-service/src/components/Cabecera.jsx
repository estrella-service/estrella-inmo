const Cabecera = ({ description, image }) => {
  return (
    <article className=' col-span-12  border-2 border-gray-500 rounded-md p-2'>
      <img
        className='w-[350px] h-[250px] rounded-md mr-1 float-left p-2'
        src={image}
        alt='Foto del Peñón de Ifach'
      />{' '}
      <p className=' text-xl  text-gray-500'>{description}</p>
    </article>
  );
};

export default Cabecera;
