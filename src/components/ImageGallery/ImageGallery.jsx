import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
function ImageGallery({ images, openModal, updateImglink }) {
  // console.log('картинки з галереї', images);
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        // console.log(webformatURL);
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
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  updateImglink: PropTypes.func.isRequired,
};
