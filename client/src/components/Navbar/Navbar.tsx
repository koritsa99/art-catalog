import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import styles from './Navbar.module.css';
import { urls } from '../../config/routes';
import { getUser } from '../../redux/auth/auth.selectors';
import { useClickOutside } from '../../hooks/useClickOutside';
import Container from '../Container';
import Button from '../Button';
import Searchbar from '../Searchbar';
import IconButton from '../IconButton';
import Drawer from '../../lib/Drawer';
import Sidebar from '../Sidebar';

function Navbar() {
  const user = useSelector(getUser);
  const [userPopupOpen, setUserPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closePopup = () => setUserPopupOpen(false);
  const togglePopup = () => setUserPopupOpen((prev) => !prev);

  useClickOutside(popupRef, closePopup);

  return (
    <header className={styles.header}>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Sidebar />
      </Drawer>

      <Container>
        <div className={styles.content}>
          <IconButton icon={FiMenu} onClick={() => setDrawerOpen(true)} />
          <Link to={urls.home} className={styles.logo}>
            <img src="/logo.png" alt="Logo" width={50} />
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
              <div ref={popupRef} className={styles.profile}>
                <button
                  type="button"
                  className={styles.userBtn}
                  onClick={togglePopup}
                >
                  <img
                    src="/avatar.jpg"
                    alt="Avatar"
                    width={50}
                    height={50}
                    className={styles.userAvatar}
                  />
                </button>
                {userPopupOpen && (
                  <div className={styles.userPopup} onClick={closePopup}>
                    <Button component={Link} to={`${urls.users}/${user.id}`}>
                      Profile
                    </Button>
                    <Button component={Link} to={`${urls.users}/${user.id}`}>
                      Settings
                    </Button>
                    <Button component={Link} to={`${urls.users}/${user.id}`}>
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
