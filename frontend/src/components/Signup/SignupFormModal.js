import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './index';

function SignupFormModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;