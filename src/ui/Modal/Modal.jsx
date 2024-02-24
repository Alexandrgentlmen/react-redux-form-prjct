import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from './../Portal/index';
import styles from './Modal.module.scss';


export function Modal({ children, isOpen, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.hideOverflow);
      return;
    }
    document.body.classList.remove(styles.hideOverflow);
  }, [isOpen]);

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        nodeRef={ref}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <div className={styles.Modal} onClick={onClose} ref={ref}>
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
}
