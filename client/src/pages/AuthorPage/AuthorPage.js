import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import styles from './AuthorPage.module.css';
import * as authorsApi from '../../services/authorsApi';
import ImagesList from '../../components/ImagesList';

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
          <h1 className={styles.authorName}>{authorInfo.name} works</h1>
          {images && images.items.length > 0 && (
            <ImagesList images={images.items} />
          )}
        </div>
      )}
    </div>
  );
}

export default AuthorPage;
