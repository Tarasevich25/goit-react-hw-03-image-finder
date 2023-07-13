import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  smallImgURL,
  alt,
  largeImageURL,
  onGetLargeImage,
  toggleModal,
}) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => {
        onGetLargeImage({ largeImageURL: largeImageURL });
        toggleModal();
      }}
    >
      <img src={smallImgURL} alt={alt} className={css.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallImgURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURLImgURL: PropTypes.string.isRequired,
  onGetLargeImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
