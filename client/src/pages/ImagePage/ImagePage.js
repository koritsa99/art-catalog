import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import styles from './ImagePage.module.css';
import * as imagesApi from '../../services/imagesApi';
import { urls } from '../../config/routes';
import Container from '../../components/Container';
import Button from '../../components/Button';

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
          <div>
            {data.imagesUrls.map((imageUrl) => (
              <a
                key={imageUrl}
                href={`${process.env.REACT_APP_API_URL}/images/${imageUrl}`}
                target="_blank"
                rel="noreferrer"
                className={styles.imageLink}
              >
                <img
                  src={`${process.env.REACT_APP_API_URL}/images/${imageUrl}`}
                  alt={data.author.name}
                  className={styles.image}
                />
              </a>
            ))}
          </div>
          <Link
            to={`${urls.authors}/${data.author.id}`}
            className={styles.author}
          >
            {data.author.name}
          </Link>
          <div>
            {data.tags.map((tag) => (
              <Button
                key={tag.id}
                variant="secondary"
                component={Link}
                to={`${urls.search}?q=${tag.title}&searchType=image`}
              >
                {tag.title}
              </Button>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}

export default ImagePage;
