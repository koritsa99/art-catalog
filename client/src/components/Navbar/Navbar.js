import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

import { urls } from '../../config/routes';

import Container from '../Container';
import Button from '../Button';
import Searchbar from '../Searchbar';

function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link to={urls.home} className={styles.logo}>
            Art Catalog
          </Link>
          <div className={styles.searchbarBox}>
            <Searchbar />
          </div>
          <div className={styles.controls}>
            <Button type="button" component={Link} to={urls.createImage}>
              Create
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
