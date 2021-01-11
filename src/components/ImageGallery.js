import React, { Component } from 'react';
import ImageAPI from '../services/pixabay-api'
import ImageGallaryItem from './ImageGalleryItem'
import s from './styles.module.css'
import Button from './Button'
import LoaderImage from './Loader'
import PropTypes from 'prop-types'

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle'
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.currentPage;
    const nextPage = this.state.currentPage;


    if (prevName !== nextName) {
      this.setState({images: [], currentPage: 1, status: 'pending' });  
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.serchImage (nextName, nextPage)
    }

  }

  serchImage(nextName, nextPage) {
    this.setState(console.log(nextName))
    ImageAPI
      .fetchImage(nextName, nextPage)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          status: 'resolved'
      }))})
  }
  
  onClickLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
    
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: 'smooth',
      });
    }, 1000);
  };

  render() {
    const { images, status } = this.state;
    
    if (status === 'idle') {
      return <div>Enter what you are looking for</div>;
    }
    if (status === 'pending') {
      return <LoaderImage />;
    }
        
    if (status === 'resolved') {
      return <>
        <ul className={s.ImageGallery}>
          {images &&
            images.map(image => {
              return (
                <ImageGallaryItem
                  src={image.webformatURL}
                  alt={image.tags}
                  largeImageURL={image.largeImageURL}
                  key={image.id}
                />
              );
            })}
        </ul>
        <Button onClickLoadMore={this.onClickLoadMore} />;
      </>
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired
}

