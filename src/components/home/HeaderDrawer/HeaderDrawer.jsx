import React from 'react';

import './header-drawer.scss';

import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';

const HeaderDrawer = ({ isOpen, onClose, focusRef, children }) => {
  return (
    <div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={focusRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
