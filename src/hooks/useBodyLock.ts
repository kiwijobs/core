import { useEffect, useRef } from 'react';

// prevent from enabling body scroll i.e. modal in modal
// enable only when all components with body lock are unmounted
let count = 0;

const disableBodyScroll = () => {
  const { scrollY } = window;
  const top = `-${scrollY}px`;

  document.querySelector('html')?.setAttribute('data-scroll-lock', '1');
  document.body.style.top = top;
  count++;
};

const enableBodyScroll = () => {
  count--;
  if (count > 0) {
    return;
  }
  const scrollY = document.body.style.top;
  document.querySelector('html')?.removeAttribute('data-scroll-lock');
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

export const useBodyLock = () => {
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;

    if (!current) {
      return;
    }

    disableBodyScroll();

    return () => enableBodyScroll();
  }, [ref]);

  return [ref];
};
