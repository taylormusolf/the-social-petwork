import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './index';
import SignupForm from '../Signup/index';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [whichModal, setWhichModal] = useState('login');

  const modal = () => {
    switch (whichModal) {
      case 'login':
        return <LoginForm 
        onClose={() => setShowModal(false)} 
        switchModal = {() => setWhichModal('signup')} 
        />
      case 'signup':
        return <SignupForm 
        onClose={() => setShowModal(false)}
        switchModal = {() => setWhichModal('login')} 
        />
      
    }
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <LoginForm onClose={() => setShowModal(false)}/> */}
          {modal()}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;