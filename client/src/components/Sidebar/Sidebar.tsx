import { Link } from 'react-router-dom';

import { urls } from '../../config/routes';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to={urls.home} className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to={urls.home} className={styles.link}>
            Discover
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to={urls.home} className={styles.link}>
            Popular
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
