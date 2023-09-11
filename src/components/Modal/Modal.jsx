import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useMountTransition from 'hooks/useMountTransition';
import css from './Modal.module.css';


export default function Modal({ onClose, children, active }) {
  const modalRoot = document.querySelector('#modal-root');
  const isMounted = useMountTransition(active, 300)

  useEffect(() => {
    window.addEventListener('keydown', closeOnEsc);
     document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', closeOnEsc);
      document.body.style.overflow = 'unset';
    };
  });

  const closeOnEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onClickClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const animatedModal = {
    transform: `scale( ${isMounted ? '1' : '0'})` ,
    opacity: isMounted ? 1 : 0,
  };

  return createPortal(
    <div className={css.Overlay} onClick={onClickClose}>
      <div style={animatedModal} className={css.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
