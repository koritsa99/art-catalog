import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Drawer.module.css';

interface IProps {
  open?: boolean;
  onClose?: () => void;
}

function Drawer({
  children,
  open = false,
  onClose,
}: React.PropsWithChildren<IProps>) {
  return (
    <CSSTransition
      in={open}
      unmountOnExit
      timeout={150}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      onClick={onClose}
    >
      <div className={styles.container}>
        <div className={styles.dimmer}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </CSSTransition>
  );
}

export default Drawer;
