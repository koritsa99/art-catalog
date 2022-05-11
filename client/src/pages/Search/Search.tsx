import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';

import ImagesResults from './ImagesResults';
import React from 'react';

function Search() {
  const navigate = useNavigate();
  const location = useLocation();

  const { searchType, q } = qs.parse(location.search);
  function handleChangeSearchType(e: React.ChangeEvent<HTMLInputElement>) {
    navigate({
      pathname: location.pathname,
      search: qs.stringify({
        q,
        searchType: e.target.value,
      }),
    });
  }

  return (
    <div>
      <h2>Search results for "{q}"</h2>

      <div>
        <div>
          <label htmlFor="searchTypeImage">Image</label>
          <input
            type="radio"
            id="searchTypeImage"
            name="searchType"
            value="image"
            checked={searchType === 'image'}
            onChange={handleChangeSearchType}
          />
        </div>
        <div>
          <label htmlFor="searchTypeAuthor">Author</label>
          <input
            type="radio"
            id="searchTypeAuthor"
            name="searchType"
            value="author"
            checked={searchType === 'author'}
            onChange={handleChangeSearchType}
          />
        </div>
      </div>
      {searchType === 'image' && q && <ImagesResults q={q.toString()} />}
    </div>
  );
}

export default Search;
