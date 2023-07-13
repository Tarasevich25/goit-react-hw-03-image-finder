import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

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
      return this.props.onClose();
    }
  };

  handleBackdropClick = event => {
       if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const {modalImage}= this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClick} >
        <div className={css.Modal}>
        <img
            src={modalImage.largeImageURL}
            alt=""
            width="800px"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  componentDidMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleBackdropClick: PropTypes.func.isRequired,
  modalImage: PropTypes.object.isRequired,
};