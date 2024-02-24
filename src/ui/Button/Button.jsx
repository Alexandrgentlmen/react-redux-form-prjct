import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        {...props}
        className={classNames(styles.Button, className)}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
