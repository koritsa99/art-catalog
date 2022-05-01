import { useState } from 'react';

import ImagesResults from './ImagesResults';

function Search() {
  const [searchType, setSearchType] = useState('image');

  function handleChangeSearchType(e) {
    setSearchType(e.target.value);
  }

  return (
    <div>
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
      {searchType === 'image' && <ImagesResults />}
    </div>
  );
}

export default Search;
