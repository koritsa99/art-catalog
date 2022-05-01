import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { useQuery } from 'react-query';
import { useState } from 'react';

import * as imagesApi from '../../services/imagesApi';
import * as authorsApi from '../../services/authorsApi';
import ImagesList from '../../components/ImagesList';

function ImagesResults() {
  const location = useLocation();
  const [page, setPage] = useState(1);

  const { q } = qs.parse(location.search);
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
