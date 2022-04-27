import { useQuery } from 'react-query';

import * as imagesApi from '../../services/imagesApi';
import ImagesList from '../../components/ImagesList';
import Container from '../../components/Container';

function Home() {
  const { data, isLoading, error } = useQuery('images', imagesApi.searchImages);

  return (
    <Container>
      {data && data.length > 0 && <ImagesList images={data} />}
    </Container>
  );
}

export default Home;
