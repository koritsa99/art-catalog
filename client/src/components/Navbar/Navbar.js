import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Navbar.module.css';
import { urls } from '../../config/routes';
import { getUser } from '../../redux/auth/auth.selectors';
import Container from '../Container';
import Button from '../Button';
import Searchbar from '../Searchbar';

function Navbar() {
  const user = useSelector(getUser);

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
            {!user && (
              <Button component={Link} to={urls.login}>
                Login
              </Button>
            )}
            {!user && (
              <Button component={Link} to={urls.register}>
                Register
              </Button>
            )}

            {user && (
              <Button component={Link} to={urls.createImage}>
                Create
              </Button>
            )}
            {user && (
              <Button component={Link} to={urls.authors}>
                Profile
              </Button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
