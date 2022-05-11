import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { HiOutlinePencil } from 'react-icons/hi';

import styles from './AuthorPage.module.css';
import * as authorsApi from '../../services/authorsApi';
import ImagesList from '../../components/ImagesList';
import Button from '../../components/Button';

function AuthorPage() {
  const { authorId } = useParams();
  const { data: authorInfo } = useQuery(['author', authorId], () =>
    authorsApi.findByid(authorId)
  );
  const { data: images } = useQuery(['images', authorId], () =>
    authorsApi.getAuthorImages(authorId)
  );

  return (
    <div>
      {authorInfo && (
        <div>
          <div className={styles.header}>
            <h1 className={styles.authorName}>{authorInfo.name} works</h1>
            <Button>
              <HiOutlinePencil style={{ marginRight: '8px' }} />
              Edit
            </Button>
          </div>
          {images && images.items.length > 0 && (
            <ImagesList images={images.items} />
          )}
        </div>
      )}
    </div>
  );
}

export default AuthorPage;
