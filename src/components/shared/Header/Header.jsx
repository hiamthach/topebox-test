import React, { useRef } from 'react';

import './header.scss';
import clsx from 'clsx';

import { TriangleDownIcon, HamburgerIcon } from '@chakra-ui/icons';

import { useDisclosure, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import HeaderDrawer from '../../home/HeaderDrawer/HeaderDrawer';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const barRef = useRef();

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <nav className="header__nav">
          <Link className={clsx('header__nav--link', pathname === '/' && 'active')} to="/">
            Trang chủ
          </Link>
          <div className="header__nav--link">
            Khung hình <TriangleDownIcon fontSize={14} />
            <div className="header__nav--link-sub">
              <span>Halloween</span>
              <span>20/11</span>
              <span>Christmas</span>
            </div>
          </div>
          <div className="header__nav--link">
            Thiệp <TriangleDownIcon fontSize={14} />
          </div>
        </nav>
        <div className="header__bar" onClick={onOpen}>
          <HamburgerIcon fontSize={24} />
        </div>

        <div className="header__btns">
          <Button type="secondary" outline={true}>
            ĐĂNG NHẬP
          </Button>
        </div>
      </header>
      <HeaderDrawer focusRef={barRef} onClose={onClose} isOpen={isOpen}>
        <div className="header__drawer">
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Link className={clsx('header__drawer--link', pathname === '/' && 'active')} to="/">
                  Trang chủ
                </Link>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <div className="header__drawer--link-title">
                  Khung hình <AccordionIcon fontSize={14} />
                </div>
              </AccordionButton>
              <AccordionPanel>
                <div className="header__drawer--link-sub">
                  <span>Halloween</span>
                  <span>20/11</span>
                  <span>Christmas</span>
                </div>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <div className="header__drawer--link">Thiệp</div>
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </div>
      </HeaderDrawer>
    </>
  );
};

export default Header;
