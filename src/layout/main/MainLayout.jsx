import React from 'react';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';

import { Outlet } from 'react-router-dom';

import './main-layout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="main-layout__combine">
        <div className="main-layout__wrapper">
          <Header />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
