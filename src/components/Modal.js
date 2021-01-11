import  React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './styles.module.css'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const {src, alt} = this.props
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
  <div className={s.Modal}>
    <img src={src} alt={alt} width='800' />
  </div>
</div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}