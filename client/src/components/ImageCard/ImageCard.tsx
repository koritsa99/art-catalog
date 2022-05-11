import { BsX, BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './ImageCard.module.css';
import IconButton from '../IconButton';
import { urls } from '../../config/routes';

interface IProps {
  author: any;
  imagesUrls: string[];
  id: number;
  controls: boolean;
}

function ImageCard({ author, imagesUrls, id, controls = false }: IProps) {
  return (
    <div className={styles.card}>
      <Link to={`${urls.images}/${id}`} className={styles.link}>
        <img
          src={`${process.env.REACT_APP_API_URL}/images/${imagesUrls[0]}`}
          alt={author.name}
          className={styles.image}
        />
      </Link>
      {controls && (
        <div className={styles.options}>
          <IconButton icon={BsPencil} />
          <IconButton icon={BsX} />
        </div>
      )}
    </div>
  );
}

export default ImageCard;
