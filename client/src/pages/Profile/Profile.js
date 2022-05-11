import styles from './Profile.module.css';
import Button from '../../components/Button';
import ImagesList from '../../components/ImagesList';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/avatar.jpg" alt="" className={styles.avatar} />

        <h1 className={styles.username}>John Doe</h1>
        <Button variant="secondary">Author</Button>

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

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Likes</h2>
        <ImagesList images={[]} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Uploads</h2>
        <ImagesList images={[]} />
      </section>
    </div>
  );
}

export default Profile;
