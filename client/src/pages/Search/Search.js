import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { useQuery } from 'react-query';
import { useState } from 'react';

import * as imagesApi from '../../services/imagesApi';
import * as authorsApi from '../../services/authorsApi';
import ImagesList from '../../components/ImagesList';

function Search() {
  const location = useLocation();
  const [page, setPage] = useState(1);

  const { q } = qs.parse(location.search);
  const {
    data: images,
    isLoading,
    error,
  } = useQuery(
    ['searchImages', q, page],
    () => imagesApi.searchImages(q, page),
    { keepPreviousData: true }
  );

  return (
    <div>{images && images.length > 0 && <ImagesList images={images} />}</div>
  );
}

export default Search;
