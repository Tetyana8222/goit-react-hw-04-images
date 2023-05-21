import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GalleryItem, Thumb, Image } from './ImageGalleryItem.styled';

import Modal from 'components/Modal/Modal';

export function ImageGalleryItem({ src, alt, largeImageURL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = event => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <GalleryItem>
      <Thumb>
        <Image src={src} alt={alt} loading="lazy" onClick={handleToggleModal} />
      </Thumb>
      {isModalOpen && (
        <Modal img={largeImageURL} tags={alt} onClose={handleToggleModal} />
      )}
    </GalleryItem>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
