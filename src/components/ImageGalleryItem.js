import React, { Component } from 'react';
import s from './styles.module.css'
import Modal from './Modal'
import PropTypes from 'prop-types'


export default class ImageGallaryItem extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { src, alt, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={s.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageURL} alt={alt} />
        )}
      </li>
  );
  }
}

ImageGallaryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
}


