import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'query-string';

import styles from './Searchbar.module.css';
import { urls } from '../../config/routes';
import Input from '../Input';
import Button from '../Button';

function Searchbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate({
      pathname: urls.search,
      search: qs.stringify({
        q: query,
        searchType: 'image',
      }),
    });
  }

  return (
    <form className={styles.searchbar} onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="Search"
        name="search"
        className={styles.input}
        value={query}
        onChange={handleChange}
      />
      <Button type="submit" variant="secondary" className={styles.button}>
        Search
      </Button>
    </form>
  );
}

export default Searchbar;
