import { ReactNode, useEffect, useRef } from 'react';
import { disableInteractiveElements } from '../../utiils/dom';
import clsx from 'clsx';

type ModalProps = {
  children: ReactNode;
  onClickOutside: () => void;
  isOpened?: boolean;
}

function Modal({ children, onClickOutside, isOpened }: ModalProps) {
  const ref = useRef(null);

  const onEcsKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      onClickOutside();
    }
  };


  useEffect(() => {
    if (!ref.current || !isOpened) {
      return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = 'calc(17px - (100vw - 100%)';
    document.addEventListener('keydown', onEcsKeyDown);

    const cancel = disableInteractiveElements(ref.current);

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.paddingRight = '';
      document.removeEventListener('keydown', onEcsKeyDown);

      cancel();
    };
  });


  return (
    <div
      ref={ref}
      className={clsx('modal', isOpened && 'is-active')}
    >
      <div
        onClick={onClickOutside}
        className="modal__wrapper"
      >
        <div className="modal__overlay"></div>
        <div
          onClick={(evt) => evt.stopPropagation()}
          className="modal__content"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
