import ImageCard from '../ImageCard';
import styles from './ImagesList.module.css';

function ImagesList({ images }) {
  return (
    <div className={styles.list}>
      {images.map((image) => (
        <ImageCard key={image.id} {...image} />
      ))}
    </div>
  );
}

export default ImagesList;
