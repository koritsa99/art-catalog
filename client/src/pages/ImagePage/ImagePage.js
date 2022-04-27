import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import styles from './ImagePage.module.css';
import * as imagesApi from '../../services/imagesApi';
import Container from '../../components/Container';

function ImagePage() {
  const { imageId } = useParams();

  const { data, isLoading, error } = useQuery('image', () =>
    imagesApi.fetchImageDetails(imageId)
  );

  return (
    <Container>
      {error && <p>{JSON.stringify(error)}</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <>
          <img src={data.fileUrl} alt={data.fileUrl} className={styles.image} />
          <h3>{data.author.nickname}</h3>
          <div>
            {data.tags.map((tag) => (
              <span key={tag.id}>{tag.title}</span>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}

export default ImagePage;
