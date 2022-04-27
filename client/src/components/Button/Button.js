import { createElement } from 'react';

import styles from './Button.module.css';
import Spinner from '../Spinner';

function Button({
  children,
  type = 'button',
  component: Component = 'button',
  className,
  isLoading = false,
  variant = 'default',
  ...otherProps
}) {
  const baseClassName = styles[variant];
  const finalProps = {
    className: className ? `${baseClassName} ${className}` : baseClassName,
    type,
    disabled: isLoading,
    ...otherProps,
  };

  const finalChildren = (
    <>
      {children}
      {isLoading && (
        <div className={styles.loader}>
          <Spinner size={9} />
        </div>
      )}
    </>
  );

  if (typeof Component === 'string') {
    return createElement(Component, finalProps, finalChildren);
  } else {
    return <Component {...finalProps}>{finalChildren}</Component>;
  }
}

export default Button;
