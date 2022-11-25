import React from 'react';

import './xmas.scss';

import cloudImg from '../../content/assets/cloud-vector.png';
import merryChristmasImg from '../../content/assets/merry-xmas.png';
import cocoXmasImg from '../../content/assets/cocos/coco-xmas.png';
import snowLayer from '../../content/assets/Snowflake-BG.png';
import frameImg1 from '../../content/assets/frames/frame-4.png';
import frameImg2 from '../../content/assets/frames/frame-5.png';
import frameImg3 from '../../content/assets/frames/frame-6.png';
import frameImg4 from '../../content/assets/frames/frame-3.png';

import Button from '../../components/shared/Button/Button';
import XMasCard from '../../components/home/XMasCard/XMasCard';

const XMas = () => {
  return (
    <div className="xmas">
      <div className="xmas__snow-layer">
        <img src={snowLayer} alt="" />
      </div>
      <div className="xmas__cloud">
        <img src={cloudImg} alt="cloud" />
      </div>
      <div className="xmas__main">
        <div className="xmas__main--col xmas__main--left">
          <img src={merryChristmasImg} alt="Merry Christmas" className="xmas__main--left-merry" />
          <p>
            Giáng sinh đến rồi, trao yêu thương đi thôi! Nhanh tay chụp những tấm ảnh ấm áp bên người thương và cùng COCO lưu lại các khoảnh khắc đẹp vào khung ảnh giáng sinh ấn
            tượng, đầy cá tính. Chia sẻ cùng bạn bè để giáng sinh này của bạn an lành và ý nghĩa hơn.
          </p>
          <Button outline={true}>Xem thêm</Button>
          <img src={cocoXmasImg} alt="Coco Xmas" className="xmas__main--left-coco" />
        </div>
        <div className="xmas__main--col xmas__main--right">
          <div className="xmas__card-list">
            <div className="xmas__card-list--col">
              <XMasCard img={frameImg1} title="Cây thông" description="Hãy để cây thông với những dây đèn lấp lánh, ngọn nến ấm áp tô điểm cho bức ảnh của bạn." />
              <XMasCard img={frameImg3} title="Bell" description="Tạo khung ảnh giáng sinh 2020 ấn tượng với những quả chuông giáng sinh màu vàng lấp lánh." />
            </div>
            <div className="xmas__card-list--col xmas__card-list--col-right">
              <XMasCard img={frameImg2} title="Snowflake" description="Những bông tuyết đang rơi, ông già Noel đang mang quà bánh đến đây!!!" />
              <XMasCard img={frameImg4} title="Santa" description="Tạo khung ảnh giáng sinh trên nền xanh và ông già Noel ngộ nghĩnh đáng yêu nhất." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XMas;
