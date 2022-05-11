import React from 'react';

import styles from './Button.module.css';
import Spinner from '../Spinner';

interface IProps<T extends React.ElementType> {
  component?: T;
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: 'default' | 'secondary';
}

type ButtonProps<T extends React.ElementType> = IProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof IProps<T>>;

const Button = <T extends React.ElementType = 'button'>({
  children,
  type,
  component,
  className,
  isLoading = false,
  variant = 'default',
  ...otherProps
}: ButtonProps<T>) => {
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
          <Spinner size="9px" />
        </div>
      )}
    </>
  );

  const Component = component || 'button';

  return <Component {...finalProps}>{finalChildren}</Component>;
};

export default Button;
