import { BsX, BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './ImageCard.module.css';
import IconButton from '../IconButton';
import { urls } from '../../config/routes';

function ImageCard({ author, fileUrl, id }) {
  return (
    <Link className={styles.card} to={`${urls.images}/${id}`}>
      <img src={fileUrl} alt={fileUrl} className={styles.image} />
      <div className={styles.options}>
        <IconButton icon={BsPencil} />
        <IconButton icon={BsX} />
      </div>
    </Link>
  );
}

export default ImageCard;
