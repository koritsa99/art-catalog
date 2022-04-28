import { forwardRef } from 'react';

import styles from './Input.module.css';

function Input({ className, ...otherProps }, ref) {
  return (
    <input
      {...otherProps}
      ref={ref}
      className={className ? `${styles.input} ${className}` : styles.input}
    />
  );
}

export default forwardRef(Input);
