import { useState, useEffect } from 'react';
import TermsAndConditionsModal from '../components/TermsAndConditions';
import PrivacyPolicyModal from '../components/AvisoLegal';
import LoginModal from '../components/LoginModal';
import ForgotPasswordModal from '../components/ForgotPassword';
import RegisterModal from '../components/RegisterModal';
import FormularioViajeros from '../components/ClientTripDetail';
import FullImagesModal from '../components/FullImagesModal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <FormularioViajeros />
      <RegisterModal />
      <ForgotPasswordModal />
      <LoginModal />
      <PrivacyPolicyModal />
      <TermsAndConditionsModal />
      <FullImagesModal />
    </>
  );
};
