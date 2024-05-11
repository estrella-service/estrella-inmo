import { useState, useEffect } from 'react';
import TermsAndConditionsModal from '../components/TermsAndConditions';
import PrivacyPolicyModal from '../components/AvisoLegal';
import LoginModal from '../components/LoginModal';
import ForgotPasswordModal from '../components/ForgotPassword';
import RegisterModal from '../components/RegisterModal';

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
      <RegisterModal />
      <ForgotPasswordModal />
      <LoginModal />
      <PrivacyPolicyModal />
      <TermsAndConditionsModal />
    </>
  );
};
