import React, { useEffect } from 'react';
import * as S from './Backdrop.style';

export default function Backdrop({ closeDrawer }) {
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
    // eslint-disable-next-line
  }, []);

  return <S.BackdropBox onClick={closeDrawer} />;
}
