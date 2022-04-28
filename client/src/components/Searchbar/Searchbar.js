import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Searchbar.module.css';
import { urls } from '../../config/routes';
import Input from '../Input';
import Button from '../Button';

function Searchbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(urls.search + `?q=${query}`);
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
