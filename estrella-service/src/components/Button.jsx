const Button = ({ children, className, icon, ...props }) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center  py-1 px-2  rounded-md text-sm w-full border border-gray-400 ${className}`}>
      {children}
      {icon && <span className='ml-2'>{icon}</span>}
    </button>
  );
};

export default Button;
