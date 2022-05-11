import { useQuery } from 'react-query';

import * as imagesApi from '../../services/imagesApi';
import ImagesList from '../../components/ImagesList';

function Home() {
  const images = useQuery('images', () => imagesApi.searchImages());

  return (
    <div>
      {images.data && images.data.items.length > 0 && (
        <ImagesList images={images.data.items} />
      )}
    </div>
  );
}

export default Home;
