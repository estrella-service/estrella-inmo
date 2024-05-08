import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Footer = () => {
  return (
    <div className='w-full h-[50px] bg-[#0e2235] text-white flex justify-between items-center text-sm p-3'>
      <p className='text-center'>Copyright © Estrella Service Costa Blanca </p>
      <div className='flex gap-3 items-center'>
        <Link
          to='/terms-and-conditions'
          className='text-white text-sm'>
          Terms and Conditions
        </Link>
        <Link
          to='/privacy-policy'
          className='text-white text-sm'>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
