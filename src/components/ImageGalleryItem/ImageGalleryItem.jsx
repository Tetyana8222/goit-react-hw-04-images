import { GalleryItem, Thumb, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  onImageClick = () => {
    const { updateImglink, openModal, largeImageURL } = this.props;
    updateImglink(largeImageURL);
    openModal();
  };
  render() {
    const { alt, src } = this.props;
    return (
      <GalleryItem>
        <Thumb>
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            onClick={this.onImageClick}
          />
        </Thumb>
      </GalleryItem>
    );
  }
}
ImageGalleryItem.propTypes = {
  updateImglink: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
