import { BsX, BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './ImageCard.module.css';
import IconButton from '../IconButton';
import { urls } from '../../config/routes';

function ImageCard({ author, imagesUrls, id }) {
  return (
    <div className={styles.card}>
      <Link to={`${urls.images}/${id}`} className={styles.link}>
        <img
          src={`http://localhost:5000/images/${imagesUrls[0]}`}
          alt={author.name}
          className={styles.image}
        />
      </Link>
      <div className={styles.options}>
        <IconButton icon={BsPencil} />
        <IconButton icon={BsX} />
      </div>
    </div>
  );
}

export default ImageCard;
