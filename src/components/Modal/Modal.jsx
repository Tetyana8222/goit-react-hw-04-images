import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContainer, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose({ showModal: true });
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  handleClose = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
  };
  render() {
    const { img, tags } = this.props;

    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <Img src={img} alt={tags} />
        </ModalContainer>
      </ModalOverlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
