import { useQuery } from 'react-query';

import * as imagesApi from '../../services/imagesApi';
import ImagesList from '../../components/ImagesList';

function Home() {
  const { data, isLoading, error } = useQuery('images', () =>
    imagesApi.searchImages()
  );

  return <div>{data && data.length > 0 && <ImagesList images={data} />}</div>;
}

export default Home;
