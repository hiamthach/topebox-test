import React from 'react';

import './frame-item.scss';

import Button from '../../shared/Button/Button';

const FrameItem = ({ image }) => {
  return (
    <div className="frame-item">
      <img src={image} alt="Frame Item" className="frame-item__img" />
      <div className="frame-item__content">
        <h5>Christmas</h5>
        <p>Cùng nhau tạo khung ảnh giáng sinh 2022 ấn tượng với những quả chuông giáng sinh màu vàng lấp lánh. </p>
        <div className="frame-item__content--btns">
          <Button>Sử dụng</Button>
          <Button outline={true}>Xem thêm</Button>
        </div>
      </div>
    </div>
  );
};

export default FrameItem;
