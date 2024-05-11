import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { useModal } from '../hooks/use-modal-store';

const Footer = () => {
  const location = useLocation();
  const [isAdminPage, setIsAdminPage] = useState(false);
  const { onOpen } = useModal();

  useEffect(() => {
    const isAdminRoute = location.pathname.includes('/admin-panel');
    setIsAdminPage(isAdminRoute);
  }, [location]);

  return (
    <>
      {!isAdminPage && (
        <div className='footer w-full h-[50px] bg-[#0e2235] text-white flex justify-between items-center text-sm p-3  mt-auto footer z-10'>
          <p className='text-center md:text-sm text-[10px]'>
            Copyright © Estrella Service
          </p>
          <div className='flex gap-3 items-center'>
            <p
              onClick={() => onOpen('terms-and-conditions')}
              className='text-white md:text-sm text-[10px]'>
              Terms and Conditions
            </p>
            <p
              onClick={() => onOpen('aviso-legal')}
              className='text-white md:text-sm text-[10px]'>
              Privacy Policy
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
