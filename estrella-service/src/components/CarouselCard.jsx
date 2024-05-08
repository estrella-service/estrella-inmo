import Button from './Button';

const CarouselCard = ({
  title,
  shortDescription,
  icon,
  btnLabel,
  ...props
}) => {
  return (
    <>
      <h1 className='text-[12px] md:text-[20px] font-serif text-gray-200'>
        {title}
      </h1>
      <hr className='w-full bg-gray-400 ' />
      <p className='text-gray-200 text-[10px] md:text-sm flex text-start'>
        {shortDescription}
      </p>

      <Button
        {...props}
        className={
          'bg-gray-200 text-[10px] md:text-sm text-gray-800 hover:bg-gray-300 hover:text-gray-800 w-fit self-end'
        }
        icon={icon}>
        Ver Propiedad
      </Button>
    </>
  );
};

export default CarouselCard;
