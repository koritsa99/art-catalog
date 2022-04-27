import { BsPlus } from 'react-icons/bs';

import styles from './Navbar.module.css';
import Container from '../Container';
import Button from '../Button';
import IconButton from '../IconButton';

function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <p className={styles.logo}>Art Catalog</p>
          <div className={styles.controls}>
            <Button type="button">Add</Button>
            <IconButton icon={BsPlus} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
