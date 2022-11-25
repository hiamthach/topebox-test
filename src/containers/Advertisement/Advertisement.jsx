import React from 'react';

import './advertisement.scss';

import BigImg from '../../content/assets/ads/big-img.png';
import SmallImg1 from '../../content/assets/ads/small-img-1.png';
import SmallImg2 from '../../content/assets/ads/small-img-2.png';
import SmallImg3 from '../../content/assets/ads/small-img-3.png';
import SmallImg4 from '../../content/assets/ads/small-img-4.png';

const Advertisement = () => {
  return (
    <div className="advertisement">
      <div className="advertisement__left">
        <img src={BigImg} alt="My advertisement" />
      </div>
      <ul className="advertisement__right">
        <li>
          <img src={SmallImg1} alt="small-img-1" />
        </li>
        <li>
          <img src={SmallImg2} alt="small-img-2" />
        </li>
        <li>
          <img src={SmallImg3} alt="small-img-3" />
        </li>
        <li>
          <img src={SmallImg4} alt="small-img-4" />
        </li>
      </ul>
    </div>
  );
};

export default Advertisement;
