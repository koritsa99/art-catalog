import React, { forwardRef } from 'react';

import styles from './Input.module.css';

export default forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>(({ className, ...otherProps }, ref) => {
  return (
    <input
      {...otherProps}
      ref={ref}
      className={className ? `${styles.input} ${className}` : styles.input}
    />
  );
});
