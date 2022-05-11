import { useQuery } from 'react-query';

import styles from './Home.module.css';
import * as imagesApi from '../../services/imagesApi';
import ImagesList from '../../components/ImagesList';

function Home() {
  const images = useQuery('images', () => imagesApi.searchImages());

  return (
    <div>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest works</h2>
        {images.data && images.data.items.length > 0 && (
          <ImagesList images={images.data.items} />
        )}
      </section>
    </div>
  );
}

export default Home;
