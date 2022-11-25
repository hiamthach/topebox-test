import React from 'react';

import './header.scss';
import clsx from 'clsx';

import { TriangleDownIcon } from '@chakra-ui/icons';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
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
        </div>
        <div className="header__nav--link">
          Thiệp <TriangleDownIcon fontSize={14} />
        </div>
      </nav>

      <div className="header__btns">
        <Button type="secondary" outline={true}>
          ĐĂNG NHẬP
        </Button>
      </div>
    </header>
  );
};

export default Header;
