import React from 'react';

import './home-page.scss';

import bannerImg from '../../../content/assets/banner.png';
import Advertisement from '../../../containers/Advertisement/Advertisement';
import FrameWrapper from '../../../containers/FrameWrapper/FrameWrapper';
import CardWrapper from '../../../containers/CardWrapper/CardWrapper';
import XMas from '../../../containers/XMas/XMas';

const HomePage = () => {
  return (
    <div className="home-page">
      <Advertisement />
      <FrameWrapper />
      <div className="home-page__banner">
        <img src={bannerImg} alt="Home Banner" />
      </div>
      <XMas />
      <CardWrapper />
    </div>
  );
};

export default HomePage;
