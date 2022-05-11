import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import styles from './ImagePage.module.css';
import * as imagesApi from '../../services/imagesApi';
import * as usersApi from '../../services/usersApi';
import { urls } from '../../config/routes';
import Container from '../../components/Container';
import Button from '../../components/Button';
import ImagesList from '../../components/ImagesList';

function ImagePage() {
  const { imageId } = useParams();

  const image = useQuery(['image', imageId], () =>
    imagesApi.fetchImageDetails(imageId)
  );
  const userUploads = useQuery(
    ['user', image],
    () => image.data && usersApi.getUploads(image.data.uploaderId)
  );

  return (
    <Container>
      {image.isError && <p>{JSON.stringify(image.error)}</p>}
      {image.isLoading && <p>Loading...</p>}
      {image.data && (
        <>
          <div>
            {image.data.imagesUrls.map((imageUrl) => (
              <a
                key={imageUrl}
                href={`${process.env.REACT_APP_API_URL}/images/${imageUrl}`}
                target="_blank"
                rel="noreferrer"
                className={styles.imageLink}
              >
                <img
                  src={`${process.env.REACT_APP_API_URL}/images/${imageUrl}`}
                  alt={image.data.author.name}
                  className={styles.image}
                />
              </a>
            ))}
          </div>
          <p className={styles.uploader}>
            Uploaded by{' '}
            <Link
              to={`${urls.users}/${image.data.uploadedBy.id}`}
              className={styles.uploaderLink}
            >
              {image.data.uploadedBy.username}
            </Link>
          </p>

          <div className={styles.tags}>
            {image.data.tags.map((tag) => (
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

          <div className={styles.author}>
            <img
              src="/avatar.jpg"
              alt="Avatar"
              width={64}
              height={64}
              className={styles.authorAvatar}
            />
            <div className={styles.authorInfo}>
              <Link
                to={`${urls.authors}/${image.data.author.id}`}
                className={styles.authorName}
              >
                {image.data.author.name}
              </Link>
            </div>
            <div className={styles.authorFollow}>
              <Button variant="secondary">Follow</Button>
            </div>
          </div>
        </>
      )}

      <section className={styles.recommended}>
        <h2 className={styles.sectionTitle}>Users also like</h2>
        {userUploads.data && <ImagesList images={userUploads.data} />}
      </section>
    </Container>
  );
}

export default ImagePage;
