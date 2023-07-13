import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onGetLargeImage, toggleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={images.id}
          smallImgURL={webformatURL}
          alt={tags}
          onGetLargeImage={onGetLargeImage}
          largeImageURL={largeImageURL}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.object.isRequired,
  onGetLargeImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};