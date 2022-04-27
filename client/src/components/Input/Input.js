import { forwardRef } from 'react';

import styles from './Input.module.css';

function Input(props, ref) {
  return <input {...props} ref={ref} className={styles.input} />;
}

export default forwardRef(Input);
