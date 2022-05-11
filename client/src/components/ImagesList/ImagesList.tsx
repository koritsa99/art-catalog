import ImageCard from '../ImageCard';
import styles from './ImagesList.module.css';

interface IProps {
  images: any[];
}

function ImagesList({ images }: IProps) {
  return (
    <div className={styles.list}>
      {images.map((image) => (
        <ImageCard key={image.id} {...image} />
      ))}
    </div>
  );
}

export default ImagesList;
