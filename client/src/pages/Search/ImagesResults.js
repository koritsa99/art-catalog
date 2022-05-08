import { useQuery } from 'react-query';
import { useState } from 'react';

import * as imagesApi from '../../services/imagesApi';
import ImagesList from '../../components/ImagesList';

function ImagesResults({ q }) {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    ['searchImages', q, page],
    () => imagesApi.searchImages(q, page),
    { keepPreviousData: true }
  );

  return (
    <div>
      {data && data.items.length > 0 && <ImagesList images={data.items} />}
    </div>
  );
}

export default ImagesResults;
