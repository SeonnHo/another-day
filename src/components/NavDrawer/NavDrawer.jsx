import React from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import DrawerOverlay from './DrawerOverlay/DrawerOverlay';

export default function NavDrawer({ isCloseDrawer, closeDrawer }) {
  return (
    <>
      {createPortal(
        <Backdrop closeDrawer={closeDrawer} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <DrawerOverlay isCloseDrawer={isCloseDrawer} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
