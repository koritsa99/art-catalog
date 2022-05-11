import { useQuery } from 'react-query';
import { useState } from 'react';

import * as imagesApi from '../../services/imagesApi';
import ImagesList from '../../components/ImagesList';

interface IProps {
  q: string;
}

function ImagesResults({ q }: IProps) {
  const [page] = useState(1);

  const images = useQuery(
    ['searchImages', q, page],
    () => imagesApi.searchImages(q, page),
    { keepPreviousData: true }
  );

  return (
    <div>
      {images.data && images.data.items.length > 0 && (
        <ImagesList images={images.data.items} />
      )}
    </div>
  );
}

export default ImagesResults;
