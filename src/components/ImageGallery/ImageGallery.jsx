import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
function ImageGallery({ images, openModal, updateImglink }) {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            openModal={openModal}
            updateImglink={updateImglink}
          />
        );
      })}
    </GalleryList>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
