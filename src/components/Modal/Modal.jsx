import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContainer, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, tags, img }) {
  /* eslint-disable */
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  /* eslint-enable */
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    //  в useEffect знімаємо случаха через повернення колбека з колбека
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer>
        <Img src={img} alt={tags} />
      </ModalContainer>
    </ModalOverlay>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
