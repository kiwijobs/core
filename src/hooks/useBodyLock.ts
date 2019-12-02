import { useEffect, useRef } from 'react';

const disableBodyScroll = () => {
  const { scrollY } = window;
  const top = `-${scrollY}px`;

  document.body.style.position = 'fixed';
  document.body.style.top = top;
};

const enableBodyScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
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
