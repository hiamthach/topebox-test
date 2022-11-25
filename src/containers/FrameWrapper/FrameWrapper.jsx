import React from 'react';

import './frame-wrapper.scss';

import cocoGiftImg from '../../content/assets/cocos/coco-gift.png';
import cocoFlyImg from '../../content/assets/cocos/coco-fly.png';
import frame1Img from '../../content/assets/frames/frame-1.png';
import frame2Img from '../../content/assets/frames/frame-2.png';
import frame3Img from '../../content/assets/frames/frame-3.png';

import FrameItem from '../../components/home/FrameItem/FrameItem';

const FrameWrapper = () => {
  return (
    <div className="frame-wrapper">
      <div className="frame-wrapper__head">
        <img src={cocoGiftImg} alt="Coco gift" className="frame-wrapper__head--coco" />
        <div className="frame-wrapper__head--text">
          <h1>
            lưu giữ từng khoảnh khắc,
            <br /> tạo ra những điều đặc biệt hơn cùng <span>COCO</span>
          </h1>
          <p>
            Chỉ với vài thao tác đơn giản, bạn đã có thể tạo ra một chiếc thiệp điện tử xinh xắn để tặng bạn bè hoặc người thân, hay đơn giản là chọn cho mình một khung viền ảnh cá
            nhân để chào mừng các ngày lễ lớn trong năm. Hãy cùng Topebox tham gia ngay các minigame và sự kiện siêu hot đang diễn ra tại đây.{' '}
          </p>
        </div>
        <img src={cocoFlyImg} alt="Coco fly" className="frame-wrapper__head--coco" />
      </div>

      <div className="frame-wrapper__list">
        <FrameItem image={frame1Img} />
        <FrameItem image={frame2Img} />
        <FrameItem image={frame3Img} />
      </div>
    </div>
  );
};

export default FrameWrapper;
