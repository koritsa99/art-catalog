import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import styles from './Profile.module.css';
import { findById, getLikes, getUploads } from '../../services/usersApi';
import Button from '../../components/Button';
import ImagesList from '../../components/ImagesList';
import { urls } from '../../config/routes';

function Profile() {
  const { userId } = useParams();

  const user = useQuery(['user', userId], () => findById(userId));
  const likes = useQuery(['likes', userId], () => getLikes(userId));
  const uploads = useQuery(['uploads', userId], () => getUploads(userId));

  return (
    <div className={styles.container}>
      {user.data && (
        <div className={styles.header}>
          <img src="/avatar.jpg" alt="" className={styles.avatar} />

          <h1 className={styles.username}>{user.data.username}</h1>
          {user.data.authorId && (
            <Button
              variant="secondary"
              component={Link}
              to={`${urls.authors}/${user.data.authorId}`}
            >
              Author page
            </Button>
          )}

          <div className={styles.stats}>
            <div className={styles.statsItem}>
              <h3 className={styles.statsTitle}>Followers</h3>
              <p className={styles.statsText}>125,000</p>
            </div>
            <div className={styles.statsItem}>
              <h3 className={styles.statsTitle}>Following</h3>
              <p className={styles.statsText}>30</p>
            </div>
          </div>
        </div>
      )}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Likes</h2>
        {likes.data && likes.data.length > 0 ? (
          <ImagesList images={likes.data} />
        ) : (
          <p className={styles.sectionText}>No likes</p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Uploads</h2>
        {uploads.data && uploads.data.length > 0 ? (
          <ImagesList images={uploads.data} />
        ) : (
          <p className={styles.sectionText}>No uploads</p>
        )}
      </section>
    </div>
  );
}

export default Profile;
