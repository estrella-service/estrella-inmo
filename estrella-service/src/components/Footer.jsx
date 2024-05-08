import React, { useEffect, useState } from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    const isAdminRoute = location.pathname.includes('/admin-panel');
    setIsAdminPage(isAdminRoute);
  }, [location]);

  return (
    <>
      {!isAdminPage && (
        <div className='w-full h-[50px] bg-[#0e2235] text-white flex justify-between items-center text-sm p-3 mt-auto footer z-10'>
          <p className='text-center md:text-sm text-[10px]'>
            Copyright © Estrella Service
          </p>
          <div className='flex gap-3 items-center'>
            <Link
              to='/terms-and-conditions'
              className='text-white md:text-sm text-[10px]'>
              Terms and Conditions
            </Link>
            <Link
              to='/privacy-policy'
              className='text-white md:text-sm text-[10px]'>
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
