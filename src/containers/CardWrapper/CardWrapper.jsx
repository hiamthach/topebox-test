import React from 'react';

import './card-wrapper.scss';

import cocoImg from '../../content/assets/cocos/coco-santa.png';
import bellsImg from '../../content/assets/bells.png';
import card1Img from '../../content/assets/cards/card-1.png';
import card2Img from '../../content/assets/cards/card-2.png';
import card3Img from '../../content/assets/cards/card-3.png';

import Button from '../../components/shared/Button/Button';

const CardWrapper = () => {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper__head">
        <img src={cocoImg} alt="Coco XMas" className="card-wrapper__head--coco" />
        <div className="card-wrapper__head--text">
          <h1>
            Giáng sinh đến rồi,
            <br /> trao yêu thương đi thôi!
          </h1>
          <p>
            Bao lâu rồi bạn chưa nói lời yêu thương đến những người bên cạnh bạn? Giáng sinh này chúng ta hãy làm một tấm thiệp xinh xắn, gửi gắm những lời yêu thương, ngọt ngào,
            trao đi yêu thương nhé! ❤️ Chúc các bạn đón một mùa giáng sinh an lành, hạnh phúc.
          </p>
        </div>
        <img src={bellsImg} alt="Bell" className="card-wrapper__head--coco card-wrapper__head--bell" />
      </div>
      <ul className="card-wrapper__list">
        <li className="card-wrapper__item">
          <img src={card1Img} alt="card-1" />
          <Button>Sử dụng</Button>
        </li>
        <li className="card-wrapper__item">
          <img src={card2Img} alt="card-2" />
          <Button>Sử dụng</Button>
        </li>
        <li className="card-wrapper__item">
          <img src={card3Img} alt="card-3" />
          <Button>Sử dụng</Button>
        </li>
      </ul>
    </div>
  );
};

export default CardWrapper;
